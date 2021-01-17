using Umbraco.Core;
using Umbraco.Core.Composing;
using Umbraco.Core.Scoping;
using Umbraco.Core.Services;
using Umbraco.Core.Migrations;
using Umbraco.Core.Migrations.Upgrade;
using Umbraco.Core.Logging;

namespace Fluid.Plugins.uCookieConsent
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    public class CreateTableComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Components().Append<CreateTableComponent>();
        }
    }

    public class CreateTableComponent : IComponent
    {
        private readonly IScopeProvider scopeProvider;
        private readonly IMigrationBuilder migrationBuilder;
        private readonly IKeyValueService keyValueService;
        private readonly ILogger logger;

        public CreateTableComponent(IScopeProvider scopeProvider, IMigrationBuilder migrationBuilder, IKeyValueService keyValueService, ILogger logger)
        {
            this.scopeProvider = scopeProvider;
            this.migrationBuilder = migrationBuilder;
            this.keyValueService = keyValueService;
            this.logger = logger;
        }

        public void Initialize()
        {
            // perform any upgrades (as needed)
            var upgrader = new Upgrader(new TableMigrationPlan());
            upgrader.Execute(scopeProvider, migrationBuilder, keyValueService, logger);

        }
        public void Terminate()
        {

        }

    }
    public class TableMigrationPlan : MigrationPlan
    {
        public TableMigrationPlan() : base("CookiesPlugin")
        {
            From(string.Empty).To<MigrationCreateTables>("first-migration");
        }
    }
    public class MigrationCreateTables : MigrationBase
    {
        public MigrationCreateTables(IMigrationContext context)
            : base(context)
        { 
        }

        public override void Migrate()
        {
            if (!TableExists("CookieDisclaime"))
                Create.Table<CookieInfo>().Do();
        }
    }
}
