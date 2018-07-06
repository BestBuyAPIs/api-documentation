## California Proposition 65

California Proposition 65 (CA Prop 65) is a California regulation requiring businesses with 10 or more employees to provide a “clear and reasonable warning” before knowingly and intentionally exposing individuals in California to a chemical listed by the state as known to cause cancer or reproductive toxicity. The CA Prop 65 regulation provides safe harbor warnings that meet the “clear and reasonable warning” requirement. As of August 30, 2018, these safe harbor warnings require either a short-form warning or a chemical-specific warning for any product containing a listed chemical. Websites and mobile applications that sell products must provide the same warning that is displayed on the product and/or product packaging.

In order to comply with CA Prop 65, the warning is required for all products offered for purchase. The warning may be implemented by displaying the CA Prop 65 warning at a point prior to purchase of an affected product to (a) all customers, or (b) only to customers who enter a California ship-to address.

Best Buy's Products API provides the following fields for this purpose:

### Attribute List

Attribute | Description | Type
--------- | ----------- | ----
**proposition65WarningMessage** | A custom warning message which can be up to 360 characters. It can be null/empty depending on the product. | string
**proposition65WarningType** | Values of 01 to 05 indicating the type of warning required for this product. This field will ALWAYS contain a value. <br/><strong>01</strong> - None (There is no warning message required for this product)<br/><strong>02</strong> - Cancer<br/><strong>03</strong> - Reproductive Harm<br/><strong>04</strong> - Cancer and Reproductive Harm<br/><strong>05</strong> - Unknown (We currently do not have information about warnings on this product) | string

For more information on this regulation including the list of chemicals, please go to [https://oehha.ca.gov/proposition-65](https://oehha.ca.gov/proposition-65).