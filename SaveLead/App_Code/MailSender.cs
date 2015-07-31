using System;
using System.Collections.Generic;
using System.Web;
using System.Configuration;
using System.Text;
using System.Net.Mail;
using System.Net;

/// <summary>
/// Summary description for MailSender
/// </summary>
public class MailSender
{
    string fromEmailId = string.Empty;
    string mailServer = string.Empty;
    string[] toEmailsList = new string[50];
    public MailSender()
    {
        fromEmailId = ConfigurationManager.AppSettings["FromEmailId"].ToString();
        mailServer = ConfigurationManager.AppSettings["MailRelayServer"].ToString();
    }

    public void SendErrorMail(string errMessage)
    {
        string fromMailAddress = string.Empty;

        string toEmailIds = ConfigurationManager.AppSettings["ToEmailId_error"].ToString();
        MailMessage objMail = new MailMessage();

        objMail.IsBodyHtml = true;
        objMail.BodyEncoding = Encoding.UTF8;

        objMail.From = new MailAddress(fromMailAddress);
        objMail.Subject = ConfigurationManager.AppSettings["EmailSubject_error"].ToString();
        objMail.Body = errMessage;

        if (toEmailIds.Contains(";"))
        {
            toEmailsList = toEmailIds.Split(';');
            foreach (string emailId in toEmailsList)
            {
                objMail.To.Add(new MailAddress(emailId));
            }
        }
        else
            objMail.To.Add(new MailAddress(toEmailIds));

        SmtpClient client = new SmtpClient(mailServer);
        client.Credentials = CredentialCache.DefaultNetworkCredentials;

        if (ConfigurationManager.AppSettings["sendmail"].ToString().ToLower().Equals("true"))
            client.Send(objMail);
        else
        {
            client.PickupDirectoryLocation = ConfigurationManager.AppSettings["EmailDump"].Trim();
            client.DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory;
            client.Send(objMail);
        }

    }
}