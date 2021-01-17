using System.Net.Http.Formatting;
using Umbraco.Web.Models.Trees;
using Umbraco.Web.Mvc;
using Umbraco.Web.Trees;

namespace Fluid.Plugins.uCookieConsent
{
    [Tree("settings", "cookiesAlias", IsSingleNodeTree =false, TreeTitle = "Cookies Setting", TreeGroup = "settingsGroup", SortOrder = 100,TreeUse = TreeUse.Main)]
    [PluginController("CookieDisclaime")]
    public class CookiesTreeController : TreeController
    {

        protected new TreeNode GetRootNode(FormDataCollection queryStrings)
        {
            var root = base.GetRootNode(queryStrings);

            ////optionally setting a routepath would allow you to load in a custom UI instead of the usual behaviour for a tree
            //root.RoutePath = string.Format("{0}/{1}/{2}", "Settings", "cookiesAlias", "overview");
            //// set the icon
            //root.Icon = "icon-hearts";
            //// set to false for a custom tree with a single node.
            //root.HasChildren = false;
            //url for menu
            //root.MenuUrl = string.Format("{0}/{1}/{2}", "Settings", "cookiesAlias", "overview");


            return root;
        }

        //public void Initialize()
        //{
        //    TreeControllerBase.RootNodeRendering += TreeControllerBase_RootNodeRendering;
        //}

        //// the event listener method:
        //void TreeControllerBase_RootNodeRendering(TreeControllerBase sender, TreeNodeRenderingEventArgs e)
        //{
        //    // normally you will want to target a specific tree, this can be done by checking the
        //    // tree alias of by checking the tree type (casting 'sender')
        //    if (sender.TreeAlias == "content")
        //    {
        //        e.Node.Name = "My new title";
        //    }
        //}
        //public void Terminate()
        //{
        //    // unsubscribe on shutdown
        //    TreeControllerBase.RootNodeRendering -= TreeControllerBase_RootNodeRendering;
        //}
        protected override TreeNodeCollection GetTreeNodes(string id, FormDataCollection queryStrings)
        {
            return TreeNodeCollection.Empty;
        }

        protected override MenuItemCollection GetMenuForNode(string id, FormDataCollection queryStrings)
        {
            return MenuItemCollection.Empty;
        }

        protected override TreeNode CreateRootNode(FormDataCollection queryStrings)
        {
            Services.ContentService.EmptyRecycleBin();

            var root = base.CreateRootNode(queryStrings);
            //optionally setting a routepath would allow you to load in a custom UI instead of the usual behaviour for a tree
            root.RoutePath = string.Format("{0}/{1}/{2}", "settings", "cookiesAlias", "overview");
            // set the icon
            root.Icon = "icon-hearts";
            // set to false for a custom tree with a single node.
            root.HasChildren = false;
            //root.MenuUrl = string.Format("{0}/{1}/{2}", "Settings", "cookiesAlias", "overview");
            
            return root;
        }

    }
}