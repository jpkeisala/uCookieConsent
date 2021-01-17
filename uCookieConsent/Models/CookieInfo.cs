
using NPoco;
using System;
using Umbraco.Core.Persistence.DatabaseAnnotations;

namespace Fluid.Plugins.uCookieConsent
{
    [TableName("CookieDisclaime")]
    [PrimaryKey("Id", AutoIncrement = true)]
    public class CookieInfo
    {
        [Column("Id")]
        [PrimaryKeyColumn(AutoIncrement = true)]
        public int Id { get; set; }
        
        [Column("EnableCookieBar")] 
        public bool EnableCookieBar { get; set; }

        [Column("BannerText")]
        public string BannerText { get; set; }

        [Column("AcceptButtonLabel")]
        public string AcceptButtonLabel { get; set; }

        [Column("RejectButton")]
        public bool RejectButton { get; set; }

        [Column("RejectButtonLabel")]
        public string RejectButtonLabel { get; set; }

        [Column("SettingButton")]
        public bool SettingButton { get; set; }

        [Column("SettingButtonLabel")]
        public string SettingButtonLabel { get; set; }

        [Column("CloseButton")]
        public bool CloseButton { get; set; }

        [Column("CookieBannerPosition")]
        public string CookieBannerPosition { get; set; }

        [Column("ColorTheme")]
        public string ColorTheme { get; set; }

        [Column("SettingTitle")]
        public string SettingTitle { get; set; }
       
        [Column("EnableAllLabel")]
        public string EnableAllLabel { get; set; }

        [Column("SaveSettingLabel")]
        public string SaveSettingLabel { get; set; }

        [Column("FloatingButtonEnable")]
        public bool FloatingButtonEnable { get; set; }

        [Column("ButtonHoverLabel")]
        public string ButtonHoverLabel { get; set; }

        [Column("ButtonCustomPosition")]
        public string ButtonCustomPosition { get; set; }

        [Column("VisiblityOnMobile")]
        public bool VisiblityOnMobile { get; set; }

        [Column("ButtonBackgroundColor")]
        public string ButtonBackgroundColor { get; set; }

        [Column("ButtonHoverBackgroundColor")]
        public string ButtonHoverBackgroundColor { get; set; }

        [Column("ButtonFontColor")]
        public string ButtonFontColor { get; set; }

        [Column("PrivacyOverViewTabTitle")]
        public string poTabTitle { get; set; }

        [Column("PrivacyOverViewTabContent")]
        public string poTabContent { get; set; }

        [Column("Choosefunctionality")]
        public string Choosefunctionality { get; set; }

        [Column("StrictlyNeccessaryTabTitle")]
        public string snTabTitle { get; set; }

        [Column("StrictlyNeccessaryTabContent")]
        public string snTabContent { get; set; }

        [Column("TabWarningMessage")]
        public string TabWarningMessage { get; set; }

        [Column("StrictlyRequiredMessage")]
        public string StrictlyNeccessaryRequiredMessage { get; set; }

        [Column("ThrdPartyTurn")]
        public bool ThrdPartyTurn { get; set; }

        [Column("ThrdPartyStatus")]
        public bool ThrdPartyStatus { get; set; }

        [Column("ThrdPartyTabTitle")]
        public string ThrdPartyTabTitle { get; set; }

        [Column("ThrdPartyTabContent")]
        public string ThrdPartyTabContent { get; set; }

        [Column("ThrdPartyHeaderSection")]
        public string ThrdPartyHeaderSection { get; set; }

        [Column("ThrdPartyBodySection")]
        public string ThrdPartyBodySection { get; set; }

        [Column("ThrdPartyFooterSection")]
        public string ThrdPartyFooterSection { get; set; }

        [Column("AdditionalTurn")]
        public bool AdditionalTurn { get; set; }

        [Column("AdditionalStatus")]
        public bool AdditionalStatus { get; set; }

        [Column("AdditionalTabTitle")]
        public string AdditionalTabTitle { get; set; }

        [Column("AdditionalTabContent")]
        public string AdditionalTabContent { get; set; }

        [Column("AdditionalHeaderSection")]
        public string AdditionalHeaderSection { get; set; }

        [Column("AdditionalBodySection")]
        public string AdditionalBodySection { get; set; }

        [Column("AdditionalFooterSection")]
        public string AdditionalFooterSection { get; set; }

        [Column("PolicyTurn")]
        public bool PolicyTurn { get; set; }
        [Column("PolicyTabTitle")]
        public string PolicyTabTitle { get; set; }
        [Column("PolicyTabContent")]
        public string PolicyTabContent { get; set; }

        [Column("CreatedOn")]
        public DateTime CreatedOn { get; set; }
        [Column("UpdatedOn")]
        public DateTime UpdatedOn { get; set; }
    }
}
