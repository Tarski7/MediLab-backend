export default {
    getTemplateBody(testResult, user) {
        const templateBody = `
            <div class="container">
            <div class="row">
                <div class="col-xs-6 text-right">
                </div>
                <div class="col-xs-6 text-right">
                    <h1>TEST RESULT</h1>
                    <h1>
                        <small>${testResult.name}</small>
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-5">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>From:
                                <a>${user.name}</a>
                            </h4>
                        </div>
                        <div class="panel-body">
                            <p>
                                ${user.email}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-5 col-xs-offset-2 text-right">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>To :
                                <a>${testResult.patient.firstName} ${testResult.patient.lastName}</a>
                            </h4>
                        </div>
                        <div class="panel-body">
                            <p>
                                ${testResult.patient.email}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                </div>
                <div class="center">
                    <h1>
                        <small>${testResult.description}</small>
                    </h1>
                </div>
            </div>
            </div>
            `;

        return templateBody;
    },

    getTestResultTemplate(templateBody) {
        const html = `
            <html>
            <head>
                <title> Test result </title>
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    @import url(http://fonts.googleapis.com/css?family=Bree+Serif);
                    body, h1, h2, h3, h4, h5, h6{
                    font-family: 'Bree Serif', serif;
                    }
                </style> 
            </head>
            <body>
                ${templateBody}
            </body>
            </html>
            `;

        return html;
    }
}