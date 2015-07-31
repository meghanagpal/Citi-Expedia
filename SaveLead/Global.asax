<%@ Application Language="C#" %>
<script RunAt="server">

    void Application_Start(object sender, EventArgs e)
    {
        // Code that runs on application startup

    }

    void Application_End(object sender, EventArgs e)
    {
        //  Code that runs on application shutdown

    }

    void Application_Error(object sender, EventArgs e)
    {
        // Code that runs when an unhandled error occurs

        HttpContext ctx = HttpContext.Current;
        //get the inner most exception
        Exception exception = ctx.Server.GetLastError();

        if (exception != null)
        {
            while (exception.InnerException != null)
            {
                exception = exception.InnerException;
            }
        }

        try
        {
            MailSender objMailSender = new MailSender();
            objMailSender.SendErrorMail(exception.ToString());
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    void Session_Start(object sender, EventArgs e)
    {
        // Code that runs when a new session is started

    }

    void Session_End(object sender, EventArgs e)
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }
       
</script>
