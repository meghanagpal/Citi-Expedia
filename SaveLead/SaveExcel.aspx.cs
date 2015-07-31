using System;
using System.Data;
using System.Configuration;
using System.Collections.Generic;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Text;
using System.IO;




public partial class SaveExcel : System.Web.UI.Page
{
    public string redirectURL = string.Empty;
    string sftpfolder = ConfigurationManager.AppSettings["SFTPFolder"].ToString();
    protected void Page_Load(object sender, EventArgs e)
    {
        string val = Request.QueryString["val"] == null ? string.Empty : Convert.ToString(Request.QueryString["val"]);
        string orderId = SaveLead();
        if (val == "3")
        {   //Flow Ajax call: Capture ShortLEad  IN DB  
            string returnShortLeadValue = orderId;
            Response.Clear();
            Response.ContentType = "text/xml";
            Response.Write(returnShortLeadValue);
            Response.End();
        }
        else
        {

            if (string.IsNullOrEmpty(Request.Form["redirectURL"]))
                redirectURL = "Error.htm";
            else
            {
                redirectURL = Request.Form["redirectURL"] + "?id=" + orderId;
            }

            HtmlMeta meta = new HtmlMeta();
            meta.HttpEquiv = "refresh";
            meta.Content = "0.005;url=" + redirectURL;

            this.Header.Controls.Add(meta);

        }
    }


    private string  SaveLead()
    {
        string date = DateTime.Now.ToString("yyyyMMdd");
        string filename = sftpfolder + "\\" + date + "_ioc_cardlite" + ".txt";
        if (Request.Form["form_id"] == "frmrejsuviocrlp")
        {
            filename = sftpfolder + "\\" + date + "_ioc_cardlite_reject" + ".txt";
        }
        else if ((Request.Form["form_id"] == "frmsho2suviocrlp") || (Request.Form["form_id"] == "frmshosuviocrlp") || (Request.Form["form_id"] =="frmsuviocrlpshortlead"))
        {
            filename = sftpfolder + "\\" + date + "_ioc_cardlite_shortlead" + ".txt";
        }
        FileStream fileStream;

        int id = 1;
        DateTime currentDatetime = DateTime.Now;
        string orderIdDate = currentDatetime.ToString("ddMMyyyy_HHmmss");
        StringBuilder sb = new StringBuilder();

        if (!System.IO.File.Exists(filename))
        {
            fileStream = new FileStream(filename, FileMode.Create);
            fileStream.Flush();
            fileStream.Dispose();
            fileStream.Close();
        }
        else
        {
            if (System.IO.File.Exists(filename))
            {
                fileStream = new FileStream(filename, FileMode.Open, FileAccess.Read);
                string strFileText = fileStream.ToString();
                if (fileStream.Length > 0)
                {
                    StreamReader sr = new StreamReader(filename);
                    string strLine;
                    string lastSap = string.Empty;
                    strLine = sr.ReadLine();

                    while (strLine != null)
                    {
                        //Read the next line
                        strLine = sr.ReadLine();
                        if (strLine != null)
                        {
                            if (strLine.Contains("SAP"))
                            {
                                lastSap = strLine.Substring(strLine.IndexOf("SAP"));
                                int lenght = (strLine.IndexOf("|")) - (strLine.IndexOf("SAP")) - 3;
                                id = Convert.ToInt16(lastSap.Substring(3, lenght)) + 1;
                            }
                        }
                    }
                    sr.Dispose();
                    sr.Close();
                }
                fileStream.Flush();
                fileStream.Dispose();
                fileStream.Close();
            }
        }
        string orderId = orderIdDate + "_" + "SAP" + id;
        sb.Append(orderId + "||TrandDt||" + date);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Channel||MEDIA");
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||externalOfferCode||" + Request.Form["externalOfferCode"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Reference from short leads||" + Request.Form["orderID"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Title||" + Request.Form["Title"]);
        sb.Append(Environment.NewLine);



        sb.Append(orderId + "||FirstName||" + Request.Form["FirstName"] );
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||MiddleName||" + Request.Form["MiddleName"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||LastName||" + Request.Form["LastName"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||DOB||" + Request.Form["dob_dd"] + "-" + Request.Form["dob_mm"] + "-" + Request.Form["dob_yy"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Pan Card Number||" + Request.Form["Pan Card Number"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Residential_Address||" + Request.Form["Residence Door"] + ", " + Request.Form["Residence Street Name"] + ", " + Request.Form["Residence Area"] + ", " + Request.Form["Residence Landmark"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Residence City||" + Request.Form["Residence City"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Residence Pincode||" + Request.Form["Residence Pincode"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||resi_std_no||" + Request.Form["resi_std_no"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Residence Phone Number||" + Request.Form["Residence Phone Number"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Mobile||" + Request.Form["Mobile"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Email_Id||" + Request.Form["Email_Id"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||OFF_NAME||" + Request.Form["OFF_NAME"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Office STD Code||" + Request.Form["Office STD Code"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Office_Address||" + Request.Form["Office Door"] + ", " + Request.Form["Office Street Name"] + ", " + Request.Form["Office Area"] + ", " + Request.Form["Office Landmark"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Office Phone Number||" + Request.Form["Office Phone Number"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Office City Name||" + Request.Form["Office City Name"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Office Pincode||" + Request.Form["Office Pincode"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||mailing_add||" + Request.Form["mailing_add"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||PROFESSION||" + Request.Form["PROFESSION"]);
        sb.Append(Environment.NewLine);
        if (Request.Form["Designation"] !="Others")
        {
            string desig = Request.Form["Designation"];
            desig = desig.Replace("Others", "");
            desig = desig.Replace(",", "");
            sb.Append(orderId + "||Designation||" + desig);

        }
        else
        {	string desig = Request.Form["OtherDesignation"];
			desig = desig.Replace("Others", "");
            desig = desig.Replace(",", "");
            sb.Append(orderId + "||Designation||" + desig);
        }
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Annual_Income||" + Request.Form["Annual_Income"]);
        sb.Append(Environment.NewLine);


        sb.Append(orderId + "||dnd||" + Request.Form["dnd"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Nationality||" + Request.Form["Nationality"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Authorization||yes");
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||SOE||" + Request.Form["SOE"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||tnc||yes");
        sb.Append(Environment.NewLine);

        sb.Append(orderId + "||form_id||" + Request.Form["form_id"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Card_Name||" + Request.Form["Card_Name"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Agency_Code||" + Request.Form["Agency_Code"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Product_Code||" + Request.Form["Product_Code"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Section||" + Request.Form["Section"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Site||" + Request.Form["Site"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Source_Id||" + Request.Form["Source_Id"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Campaign_Code||" + Request.Form["Campaign_Code"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Category||" + Request.Form["Category"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Country_Id||" + Request.Form["Country_Id"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||Creative||" + Request.Form["Creative"]);
        sb.Append(Environment.NewLine);

        sb.Append(orderId + "||director||" + Request.Form["director"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||directorName||" + Request.Form["directorName"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||otherBank||" + Request.Form["otherBank"]);
        sb.Append(Environment.NewLine);
        sb.Append(orderId + "||relationship||" + Request.Form["relationship"]);
        sb.Append(Environment.NewLine);

        StreamWriter writer = new StreamWriter(filename, true);
        writer.Write(sb.ToString());
        writer.Close();
        writer.Dispose();
        return orderId;
    }

}