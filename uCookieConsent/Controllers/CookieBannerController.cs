using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core.Composing;
using Umbraco.Web.Mvc;

namespace Fluid.Plugins.uCookieConsent.Controllers
{
    public class CookieBannerController : SurfaceController
    {
        public CookieInfo cookieInfo = new CookieInfo();

        public CookieBannerController()
        {
            using (var scope = Current.ScopeProvider.CreateScope())
            {
                cookieInfo = scope.Database.Fetch<CookieInfo>(string.Format("select *from CookieDisclaime")).FirstOrDefault();
                scope.Complete();
            }
        }
        // GET: DisplayBanner
        public ActionResult Body()
        {
            return PartialView("cookies/_cookiesBody", cookieInfo);
        }

        public ActionResult Header()
        {
            return PartialView("cookies/_cookiesHeader", cookieInfo);
        }
        public ActionResult Footer()
        {
            return PartialView("cookies/_cookiesFooter", cookieInfo);
        }

        // GET: DisplayBanner/Details/5
        public ActionResult Details()
        {

            return View();

            //   return PartialView("_TopNews", db.TopNews.ToList());

        }
    }
}
