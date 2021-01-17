using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Umbraco.Core.Composing;
using Umbraco.Web.WebApi;

namespace Fluid.Plugins.uCookieConsent
{
    public class CookieDataController : UmbracoApiController
    {
        // GET: api/Default
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Default/5
        public CookieInfo Get(int id)
        {
            var data = new CookieInfo();
            using (var scope = Current.ScopeProvider.CreateScope())
            {
                data= scope.Database.Fetch<CookieInfo>(string.Format("select *from CookieDisclaime")).FirstOrDefault();               
                scope.Complete();
            }
            return data==null? new CookieInfo() { EnableCookieBar = true } :data;
        }

        // POST: api/Default
        public CookieInfo Post(CookieInfo cookieInfo)
        {
            try
            {
                using (var scope = Current.ScopeProvider.CreateScope())
                {
                    if (cookieInfo != null)
                    {
                        if (cookieInfo.Id > 0)
                        {
                            cookieInfo.UpdatedOn = DateTime.Now;
                            scope.Database.Update(cookieInfo);
                            scope.Complete();
                        }
                        else
                        {
                            cookieInfo.CreatedOn = DateTime.Now;
                            cookieInfo.UpdatedOn = DateTime.Now;
                            scope.Database.Save(cookieInfo);
                        }
                    }

                    scope.Complete();
                }
            }catch(Exception e)
             {

            }

            return cookieInfo;
        }
        // PUT: api/Default/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Default/5
        public void Delete(int id)
        {
        }
    }

}
