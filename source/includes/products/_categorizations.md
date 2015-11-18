## Categorizations
Best Buy provides multiple ways to group products based on your needs.

The department, class and subclass attributes provide categorization structure or groupings of products. These attributes are returned as separate attributes but are related. The department attribute provides the more general categorization while the class and subclass attributes narrow the focus to be more specific. The class and subclass attributes are less volatile than category attributes and are the recommended attributes for grouping products.

Attribute | Description | Type
--------- | ----------- | ----
**class** | Class name | string
**classId** | Class identifiers | integer
**department** | Department name | string
**departmentId** | Department identifiers | integer
**subclass** | Subclass name | string
**subclassId** | Subclass identifier | integer

The categoryPath attributes provide a hierarchal view of a product returned as a collection. The collections start with the most general categorization, while subsequent categories narrow to be more specific. The number of categories returned can be 3+ layers deep. The products within the categories also tend to be slightly more volatile than department, class and subclass groupings.

Attribute | Description | Type
--------- | ----------- | ----
**categoryPath.id** | Category identifiers | string
**categoryPath.name** | Category names | string

The list attributes are used for specific events like Valentine's Day. These lists are curated by,  Best Buy merchant teams for customer visibility for a specific event or purpose.

Attribute | Description | Type
--------- | ----------- | ----
**lists.endDate** | End date shown in list | string
**lists.listId** | Name shown in list | string
**lists.startDate** | Start date shown in list | string