angular.module("umbraco").controller("overview.controller", function ($http) {
    var vm = this;

    vm.Model = {
        Id:0,
        EnableCookieBar: true,
        BannerText: "",
        AcceptButtonLabel: "Accept",
        RejectButton: true,
        RejectButtonLabel: "Reject",
        SettingButton: true,
        SettingButtonLabel: "Setting",
        CloseButton: false,
        CookieBannerPosition: "Bottom",
        ColorTheme: "",
        SettingTitle: "",
        EnableAllLabel: "",
        SaveSettingLabel: "",
        FloatingButtonEnable: true,
        ButtonHoverLabel: "Change cookie settings",
        ButtonCustomPosition: "buttom:20px;left:20px;",
        VisiblityOnMobile: true,
        ButtonBackgroundColor: "",
        ButtonHoverBackgroundColor: "",
        ButtonFontColor: "#ffffff",
        poTabTitle: "",
        poTabContent: "",
        Choosefunctionality: "",
        snTabTitle: "Strictly  Neccessary Cookies",
        snTabContent: "Strictly  Neccessary Cookies",
        TabWarningMessage: "",
        StrictlyNeccessaryRequiredMessage: "",
        ThrdPartyTurn: true,
        ThrdPartyStatus: false,
        ThrdPartyTabTitle: "3rd Party Cookies",
        ThrdPartyTabContent: "",
        ThrdPartyHeaderSection: "",
        ThrdPartyBodySection: "",
        ThrdPartyFooterSection: "",
        AdditionalTurn: true,
        AdditionalStatus: false,
        AdditionalTabTitle: "Additional Cookies",
        AdditionalTabContent: "",
        AdditionalHeaderSection: "",
        AdditionalBodySection: "",
        AdditionalFooterSection: "",
        PolicyTurn: true,
        PolicyTabTitle: "Privacy Policy",
        PolicyTabContent: "",
    };

    vm.setDefault = function () {
        $http({
            url: "/umbraco/api/CookieData/get/1",
            method: "GET"
        }).then(function (response) {
            if (response.data.Id > 0)
                vm.Model = response.data;
          //  vm.data = response.data;
        });
    };   
    vm.Save = function (e) {
        vm.Model.BannerText = tinymce.editors['BannerText'].getContent();
        vm.Model.poTabContent = tinymce.editors['poTabContent'].getContent();
        vm.Model.snTabContent = tinymce.editors['snTabContent'].getContent();
        vm.Model.TabWarningMessage = tinymce.editors['TabWarningMessage'].getContent();
        vm.Model.StrictlyNeccessaryRequiredMessage = tinymce.editors['StrictlyNeccessaryRequiredMessage'].getContent();        
        vm.Model.ThrdPartyTabContent = tinymce.editors['ThrdPartyTabContent'].getContent();
        //vm.Model.ThrdPartyHeaderSection = tinymce.editors['ThrdPartyHeaderSection'].getContent();
        //vm.Model.ThrdPartyBodySection = tinymce.editors['ThrdPartyBodySection'].getContent();
        //vm.Model.ThrdPartyFooterSection = tinymce.editors['ThrdPartyFooterSection'].getContent();
        vm.Model.AdditionalTabContent = tinymce.editors['AdditionalTabContent'].getContent();
        vm.Model.PolicyTabContent = tinymce.editors['PolicyTabContent'].getContent();
        

        $http.post("/umbraco/api/CookieData/Post", vm.Model).then(function (response) {
            if (response.status) {
                $("#message").html('Setting Save Successfully');
            }
        }, function (response) {

        });        
    }

    vm.setDefault();

     tinymce.init({
         selector: '.textarea',
         plugins: 'code textcolor',
         toolbar: 'code | undo redo | bold italic underline strikethrough | fontsizeselect formatselect | forecolor backcolor casechange permanentpen formatpainter removeformat |alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
         content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
         paste_enable_default_filters: false,
         width: "90%",
         height: "200px",
    });
});