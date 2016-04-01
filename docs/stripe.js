<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Stripe.js</title>
    <link rel="stylesheet" type="text/css" href="../assets/site-e2d44e0334cb99f0b81b5a86ba15fc05.css" media="screen" />
    <script type="text/javascript">
        var _sf_startpt=(new Date()).getTime()
        var APIValues = {};
    </script>
    <script src="../assets/config-aead70c07cdca45cec67e4141bf18edc.js"></script>
    
<script type="application/json" id="analytics_config">{&quot;mixpanel&quot;:{&quot;identifier&quot;:&quot;eb71b6171a4f7ed97de9b7a0395b7ca5&quot;},&quot;ga&quot;:{},&quot;trackpage&quot;:true}</script>

<script src="https://js.stripe.com/internal/v2/analytics.min.js"></script>
<script src="../assets/analytics-0ea5a2b2ad899260c73440d84f5ab7bc.js"></script>

    <link rel="shortcut icon" href="../favicon.ico">

    <!--[if lt IE 9]>
    <script src="/assets/html5shiv-17761200a17ebcb716dda86cca6d2472.js"></script>
    <![endif]-->
    <script type="text/javascript" src="https://use.typekit.net/gbh7uto.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    
    <meta name="csrf-token" content="K4LbxdYgNOGf44TBoas9sNVq_Lfq_Af3hQHB-7OGvzCjqN4Gz0NxUWzz3hH_0YE77dcGX_uX089MG1aXMosbqg==" />
</head>
<body id="documentation">

  <div id="header">
    <h1><a href="../country?country=CH&amp;redirect=%252F">Stripe</a></h1>
    <div class="navigation">
    <div class="signin"><a id='signin' href="https://dashboard.stripe.com/login"><span>Sign In</span></a></div>

  <ul class="global">
    <li><a href="../docs.1" class="selected">Documentation</a></li>
    <li><a href="https://support.stripe.com">Help &amp; Support</a></li>
  </ul>
</div>

  </div><!-- #header -->

  <section id="doc">


  <nav>

    <h1 class="references">Development</h1>
    <ul>      <li class="unselected"><a href="../docs.1">Getting Started</a></li>
      <li class="unselected sub"><a href="https://stripe.com/docs/checkout/tutorial">Embedded Form</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fcustom-form">Custom Forms</a></li>
      <li class="unselected sub"><a href="mobile/index.html">Mobile Apps</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fcharges">Charging Cards</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Ftesting">Testing</a></li>
      <li class="unselected"><a href="../security">Security</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Ffraud">Fraud Protection</a></li>
      <li class="unselected"><a href="webhooks/index.html">Webhooks</a></li>
      <li class="unselected"><a href="guides/ach">ACH Guide</a></li>
      <li class="unselected"><a href="guides/bitcoin">Bitcoin Guide</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Falipay">Alipay Guide</a></li>
      <li class="unselected"><a href="guides/file-upload">File Upload Guide</a></li>
</ul>

    <h1 class="getting-started">Account</h1>
    <ul>      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fdashboard">Your Account</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Ftransfers">Getting Paid</a></li>
      <li class="unselected"><a href="disputes/index.html">Disputes</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fdisputes%252Fevidence">Submitting Evidence</a></li>
      <li class="unselected sub"><a href="../help/dispute-types">Dispute Types</a></li>
      <li class="unselected sub"><a href="../help/disputes">Disputes FAQ</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fintegrations">Integrations</a></li>
</ul>

    <h1 class="faq">References</h1>
    <ul>      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fexamples">Examples</a></li>
      <li class="selected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js">Stripe.js</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fcheckout">Checkout</a></li>
      <li class="unselected"><a href="libraries/index.html">API Libraries</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fupgrades">API Upgrades</a></li>

      <li class="unselected">
        <a href="api/index.html" class="external" target="_blank">Full API Reference</a>
      </li>
    </ul>

    <h1 class="subscriptions">Subscriptions</h1>
    <ul>      <li class="unselected"><a href="subscriptions.1">Getting Started</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fsubscriptions%252Fguide">Detailed Guide</a></li>
</ul>

    <h1 class="orders">Relay</h1>
    <ul>      <li class="unselected"><a href="relay/index.html">Overview</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Frelay%252Fapps-guide">Apps Guide</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Frelay%252Fapps-error-guide">Error Handling Guide</a></li>
</ul>

    <h1 class="connect">Connect</h1>
    <ul>      <li class="unselected"><a href="connect/index.html">Overview</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fconnecting-to-accounts">Connecting to Accounts</a></li>
      <li class="unselected sub"><a href="connect/oauth">Standalone Accounts</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fauthentication">Authentication</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Freference">OAuth Reference</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fpayments-fees">Payments and Fees</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fspecial-case-transfers">Special-case Transfers</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fmanaged-accounts">Managed Accounts</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fupdating-accounts">Updating Accounts</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fidentity-verification">Identity Verification</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Frequired-verification-information">Verification Fields</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Ftesting-verification">Testing Verification</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fbank-transfers">Bank Transfers</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fmigrating">Migrating Recipients</a></li>
      <li class="unselected sub"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fbest-practices">Best Practices</a></li>
      <li class="unselected"><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Ftesting">Testing</a></li>
</ul>

    <h1 class="more">About Stripe</h1>
    <ul>      <li class="unselected"><a href="../help/contact">Contact</a></li>
      <li class="unselected"><a href="../pt">Global Users</a></li>
      <li class="unselected last"><a href="../country?country=CH&amp;redirect=%252Fgallery">Gallery</a></li>
</ul>

  </nav>

    <section id="content">
      <section id="details">

  <header>
    <h1>Stripe.js</h1>
    <p>
        Stripe.js makes it easy to collect credit card (and other similarly sensitive) details without having the information touch your server.
        If you need help after reading this, check out our answers to <a href="https://support.stripe.com/search?q=stripe.js">common questions</a> or chat live with other developers in <a href="irc://irc.freenode.net/stripe">#stripe</a> on freenode.

    </p>
  </header>

  <article>

<p>Stripe.js is Stripe's foundational library for securely sending sensitive information to Stripe directly from the customer's browser through an iframe. Stripe.js can be used for:</p>

<ul><li><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js#collecting-card-details">Collecting card details</a></li>
<li><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js#collecting-bank-account-details">Collecting bank account details</a></li>
<li><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js#collecting-pii-data">Collecting personally identifiable information</a></li>
<li><a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js#collecting-bitcoin-payments">Collecting Bitcoin payments</a></li></ul>

<p>Stripe.js also has built-in validators to check the format of credit card, CVC, bank account, and routing numbers, as well as a card's type and expiration.</p>

    <h1 id="including-stripejs">Including Stripe.js</h1>

    <section class="code-example">
      <div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">&lt;script type=&quot;text/javascript&quot; src=&quot;https://js.stripe.com/v2/&quot;&gt;&lt;/script&gt;</span></code></pre>
      </div>
    </section>

    <p>Add this script tag to your page to get started with Stripe.js.</p>

    <h1 id="setting-publishable-key">Setting your publishable key</h1>

    <p>
      You must set your publishable key with <code>setPublishableKey</code> before using Stripe.js to identify your website when communicating with Stripe.

      Remember to replace the test key with your live key in production. You can get all your keys from your
      <a href="https://dashboard.stripe.com/account/apikeys">account page</a>. This <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fcustom-form">tutorial</a> explains this flow in more detail.
    </p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.setPublishableKey(&#39;pk_test_6pRNASCoBOKtIshFeQd4XMUh&#39;);</span></code></pre>
</div></section>


    <h1 id="collecting-card-details">Collecting card details</h1>

    <h2 id="card-createToken">card.createToken</h2>

    <p><code>createToken</code> converts sensitive card data to a single-use token which you can safely pass to your server to charge the user. The <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fcustom-form">tutorial</a> explains this flow in more detail.</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.card.createToken({
  number: $(&#39;.card-number&#39;).val(),
  cvc: $(&#39;.card-cvc&#39;).val(),
  exp_month: $(&#39;.card-expiry-month&#39;).val(),
  exp_year: $(&#39;.card-expiry-year&#39;).val()
}, stripeResponseHandler);</span></code></pre>
</div>
</section>

<aside class="content note">
  <h1>Library agnostic</h1>
  <p>In this example, we're using jQuery's <code><a href="http://api.jquery.com/val/">val()</a></code> to retrieve values entered in the credit card form. Using jQuery isn't necessary &ndash; you can also use standard DOM methods to retrieve card data from your payment form.</p>
</aside>

<p>The first argument to <code>createToken</code> is a JavaScript object containing credit card data entered by the user. It should contain the following required fields:</p>

<ul class="params">
    <li><code class="paramname">number</code>: card number as a string without any separators, e.g. <code>'4242424242424242'</code>.</li>
    <li><code class="paramname">exp_month</code>: two digit number representing the card's expiration month, e.g. <code>12</code>.</li>
    <li><code class="paramname">exp_year</code>: two or four digit number representing the card's expiration year, e.g. <code>2017</code>.</li>
</ul>

<p>(The expiration date can <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js#passing-exp-dates">also be passed as a single string</a>.)</p>

  <p>The following fields are optional but recommended to help prevent fraud:</p>

  <ul class="params">
      <li><code class="paramname">cvc</code>: card security code as a string, e.g. <code>'123'</code>.</li>
  </ul>

<p>The following fields are entirely optional &mdash; they cannot result in a token creation failing:</p>

<ul class="params">
  <li><code class="paramname">name</code>: cardholder name.</li>
  <li><code class="paramname">address_line1</code>: billing address line 1.</li>
  <li><code class="paramname">address_line2</code>: billing address line 2.</li>
  <li><code class="paramname">address_city</code>: billing address city.</li>
  <li><code class="paramname">address_state</code>: billing address state.</li>
  <li><code class="paramname">address_zip</code>: billing zip as a string, e.g. <code>'94301'</code>.</li>
  <li><code class="paramname">address_country</code>: billing address country.</li>
</ul>

<p>
  You may also pass a <code>&lt;form /&gt;</code> element as the first argument to <code>createToken</code>.
  The relevant information will be pulled from inputs marked up with the <code>data-stripe</code> attribute,
  which should be set to one of the values specified above.
</p>

<p>
  The second argument <code>stripeResponseHandler</code> is a callback you provide to handle the response from Stripe. It should do the following:
</p>

<ul class="sublist">
    <li>If the card information entered by the user returned an error, display it on the page.</li>
    <li>If no errors were returned (i.e. a single-use token was created successfully), add the returned token to the payment form and submit the form to your server.</li>
</ul>

<p>Here's a sample implementation of <code>stripeResponseHandler</code> from the <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fcustom-form">tutorial</a>:</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">function stripeResponseHandler(status, response) {
  var $form = $(&#39;#payment-form&#39;);

  if (response.error) {
    // Show the errors on the form
    $form.find(&#39;.payment-errors&#39;).text(response.error.message);
    $form.find(&#39;button&#39;).prop(&#39;disabled&#39;, false);
  } else {
    // response contains id and card, which contains additional card details
    var token = response.id;
    // Insert the token into the form so it gets submitted to the server
    $form.append($(&#39;&lt;input type=&quot;hidden&quot; name=&quot;stripeToken&quot; /&gt;&#39;).val(token));
    // and submit
    $form.get(0).submit();
  }
}</span></code></pre>
</div>
</section>

<p><code>status</code> is one of the status codes described in the <a href="api/index.html#errors">API docs</a>.</p>
<p><code>response</code> is of the following form:</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">{
  id: &quot;tok_u5dg20Gra&quot;, // String of token identifier
  card: { // Dictionary of the card used to create the token
    name: null,
    address_line1: &quot;12 Main Street&quot;,
    address_line2: &quot;Apt 42&quot;,
    address_city: &quot;Palo Alto&quot;,
    address_state: &quot;CA&quot;,
    address_zip: &quot;94301&quot;,
    address_country: &quot;US&quot;,
    country: &quot;US&quot;,
    exp_month: 2,
    exp_year: 2017,
    last4: &quot;4242&quot;,
    object: &quot;card&quot;,
    brand: &quot;Visa&quot;,
    funding: &quot;credit&quot;
  },
  created: 1459289344, // Integer of date token was created
  livemode: true, // Boolean of whether this token was created with a live or test API key
  type: &quot;card&quot;,
  object: &quot;token&quot;, // String identifier of the type of object, always &quot;token&quot;
  used: false // Boolean of whether this token has been used
}</span></code></pre>
</div>
</section>

<p>If the request to Stripe fails, <code>response</code> will instead be of following form:</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">{
  error: {
    type: &quot;card_error&quot;, // String identifier of the type of error
    code: &quot;invalid_expiry_year&quot;, // Optional string identifier of specific error
    message: &quot;Your card&#39;s expiration year is invalid.&quot;, // String description of the error
    param: &quot;exp_year&quot; // Optional string identifier of the offending parameter
  }
}</span></code></pre>
</div>
</section>

    <p><code>createToken</code> is an asynchronous call &ndash; it returns immediately and invokes <code>stripeResponseHandler</code> when it receives a response from Stripe's servers.</p>


    <h2 id="card-validation-helpers">Client-side validation helpers</h2>

    <h3 id="card-validateCardNumber">card.validateCardNumber</h3>

    <p>
        Checks that the number is formatted correctly and passes the
        <a href="http://en.wikipedia.org/wiki/Luhn_algorithm">Luhn check</a>.
    </p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">// These will all return true, indicating a potentially valid card
// number. (Letters, spaces, and other punctuation are ignored.)

Stripe.card.validateCardNumber(&#39;4242424242424242&#39;)
Stripe.card.validateCardNumber(&#39;4242-42424242-4242&#39;)
Stripe.card.validateCardNumber(&#39;4242 4242 4242 4242&#39;)

// These invalid card numbers will all return false.

Stripe.card.validateCardNumber(&#39;4242-1111-1111-1111&#39;)
// (Doesn&#39;t pass the Luhn check.)
Stripe.card.validateCardNumber(&#39;12345678&#39;)
Stripe.card.validateCardNumber(&#39;mistake&#39;)</span></code></pre>
</div>
</section>


    <h3 id="card-validateExpiry">card.validateExpiry</h3>

    <p>
        Checks whether or not the expiration date represents an actual month
        in the future.
    </p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.card.validateExpiry(&#39;02&#39;, &#39;15&#39;)      // false
Stripe.card.validateExpiry(&#39;02&#39;, &#39;10&#39;)      // false
Stripe.card.validateExpiry(&#39;02&#39;, &#39;2020&#39;)    // true
Stripe.card.validateExpiry(2, 2020)         // true</span></code></pre>
</div>
</section>

    <h3 id="card-validateCVC">card.validateCVC</h3>

    <p>
        Checks whether or not the supplied number could be a valid verification code.
    </p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.card.validateCVC(&#39;123&#39;)              // true
Stripe.card.validateCVC(&#39;&#39;)                 // false</span></code></pre>
</div>
</section>

    <h3 id="card-cardType">card.cardType</h3>

    <p>
        Returns the type of the card as a string. The possible types are
        "Visa", "MasterCard", "American Express", "Discover",
  "Diners Club", and "JCB". If a card isn't recognized,
  the return value is "Unknown".
    </p>


<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.card.cardType(&#39;4242-4242-4242-4242&#39;) // &quot;Visa&quot;
Stripe.card.cardType(&#39;378282246310005&#39;)     // &quot;American Express&quot;
Stripe.card.cardType(&#39;1234&#39;)                // &quot;Unknown&quot;</span></code></pre>
</div>
</section>

    <h2 id="passing-exp-dates">Passing expiration dates</h2>

    <p>Stripe.js allows you to flexibly pass expiration dates as either separate <code>exp_month</code> and <code>exp_year</code> values or as a single <code>exp</code> string. As a single string, the expiration can be a two- or four-digit year, and a one- or two-digit month, in either order, so long as the two are separated by a hyphen, slash, or space.</p>

    <p>You can use the single expiration date in both validation methods and tokenization requests:</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.card.validateExpiry(&#39;09 2020&#39;)  // true
Stripe.card.validateExpiry(&#39;2020/09&#39;)  // true
Stripe.card.validateExpiry(&#39;20/09&#39;)    // true
Stripe.card.validateExpiry(&#39;20-09&#39;)    // true
Stripe.card.createToken({
  number: $(&#39;.card-number&#39;).val(),
  cvc: $(&#39;.card-cvc&#39;).val(),
  exp: $(&#39;.card-expiry&#39;).val() // Assumes you&#39;ve added this element to your form
}, stripeResponseHandler);</span></code></pre>
</div>
</section>

<h1 id="collecting-bank-account-details">Collecting bank account details</h1>

    <p>
      You can use these methods to validate and collect bank account details for when you want to <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fsending-transfers">send transfers to third-party bank accounts</a>, or <a href="guides/ach"> make ACH payments</a>.
    </p>

    <h2 id="bank-account-createToken">bankAccount.createToken</h2>

    <p><code>createToken</code> converts sensitive bank account data to a single-use token which you can safely pass to your server to send money to the user.

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.bankAccount.createToken({
  country: $(&#39;.country&#39;).val(),
  currency: $(&#39;.currency&#39;).val(),
  routing_number: $(&#39;.routing-number&#39;).val(),
  account_number: $(&#39;.account-number&#39;).val(),
  account_holder_name: $(&#39;.name&#39;).val(),
  account_holder_type: $(&#39;.account_holder_type&#39;).val()
}, stripeResponseHandler);</span></code></pre>
</div>
</section>

<p>Analogous to the <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js#card-createToken">card</a> <code>createToken</code> method, the first argument to <code>createToken</code> is a JavaScript object containing bank account data entered by the user. It should contain the following fields:</p>

<ul class="params">
    <li><code class="paramname">country</code>: two character country code e.g. <code>'US'</code>.</li>
    <li><code class="paramname">currency</code>: three character currency code e.g. <code>'USD'</code>.</li>
    <li><code class="paramname">routing_number</code>: number representing the bank routing number, e.g. <code>111000025</code>. Optional if the currency is EUR, as the account number will be an IBAN.</li>
    <li><code class="paramname">account_number</code>: number representing the bank account number, e.g. <code>000123456789</code>.</li>
    <li><code class="paramname">account_holder_name</code>: name of the person or business that owns the bank account, e.g. <code>Jane Austen</code>.</li>
    <li><code class="paramname">account_holder_type</code>: the type of entity that holds the account. Can be <code>individual</code> or <code>company</code>.</li>
</ul>

<p>
  When creating a bank account that will be attached to a customer, the <code>account_holder_name</code> and <code>account_holder_type</code> fields are mandatory. Otherwise, they are optional.
<p>
  You may also pass a <code>&lt;form /&gt;</code> element as the first argument to <code>createToken</code>.
  The relevant information will be pulled from inputs marked up with the <code>data-stripe</code> attribute,
  which should be set to one of the values specified above.
</p>

<p>
  The second argument <code>stripeResponseHandler</code> is a callback you provide to handle the response from Stripe. It should do the following:
</p>

<ul class="sublist">
    <li>If the bank account information entered by the user returned an error, display it on the page.</li>
    <li>If no errors were returned (i.e. a single-use token was created successfully), add the returned token to the form and submit the form to your server.</li>
</ul>

<p>Here's a sample implementation of <code>stripeResponseHandler</code>:</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">function stripeResponseHandler(status, response) {
  var $form = $(&#39;#payment-form&#39;);

  if (response.error) {
    // Show the errors on the form
    $form.find(&#39;.bank-errors&#39;).text(response.error.message);
    $form.find(&#39;button&#39;).prop(&#39;disabled&#39;, false);
  } else {
    // response contains id and bank_account, which contains additional bank account details
    var token = response.id;
    // Insert the token into the form so it gets submitted to the server
    $form.append($(&#39;&lt;input type=&quot;hidden&quot; name=&quot;stripeToken&quot; /&gt;&#39;).val(token));
    // and submit
    $form.get(0).submit();
  }
}</span></code></pre>
</div>
</section>

<p><code>status</code> is one of the status codes described in the <a href="api/index.html#errors">API docs</a>.</p>
<p><code>response</code> is of the following form:</p>


<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">{
  id: &quot;tok_u5dg20Gra&quot;, // String of token identifier
  bank_account: { // Dictionary of the bank account used to create the token
    country: &quot;US&quot;,
    bank_name: &quot;BANK OF AMERICA, N.A&quot;,
    last4: &quot;6789&quot;,
    validated: false,
    object: &quot;bank_account&quot;,
  },
  created: 1459289344, // Integer of date token was created
  livemode: true, // Boolean of whether this token was created with a live or test API key
  type: &quot;bank_account&quot;,
  object: &quot;token&quot;, // String identifier of the type of object, always &quot;token&quot;
  used: false // Boolean of whether this token has been used
}</span></code></pre>
</div>
</section>


<p>If the request to Stripe fails, <code>response</code> will instead be of following form:</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">{
  error: {
    type: &quot;invalid_request_error&quot;, // String identifier of the type of error
    message: &quot;Invalid routing number&quot;, // String description of the error
    param: &quot;bank_account&quot; // Optional string identifier of the offending parameter.
  }
}</span></code></pre>
</div>
</section>

    <h2 id="bank-account-validation-helpers">Client-side validation helpers</h2>

    <h3 id="bank-account-validateRoutingNumber">bankAccount.validateRoutingNumber</h3>

    <p>
        Checks that the number is formatted correctly for the given country and passes any
        appropriate checksums (e.g. <a href="http://en.wikipedia.org/wiki/Routing_transit_number#Check_digit">for US routing numbers</a>).
    </p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">// This will return true, indicating a potentially valid bank
// routing number.

Stripe.bankAccount.validateRoutingNumber(&#39;111000025&#39;, &#39;US&#39;) // US routing number.
Stripe.bankAccount.validateRoutingNumber(&#39;11111-111&#39;, &#39;CA&#39;) // Canadian routing number.

// These invalid bank routing numbers will all return false.

Stripe.bankAccount.validateRoutingNumber(&#39;990000000&#39;, &#39;US&#39;)
// (Doesn&#39;t pass the checksum check.)
Stripe.bankAccount.validateRoutingNumber(&#39;12345&#39;, &#39;US&#39;)
Stripe.bankAccount.validateRoutingNumber(&#39;mistake&#39;, &#39;CA&#39;)</span></code></pre>
</div>
</section>


    <h3 id="bank-account-validateAcountNumber">bankAccount.validateAccountNumber</h3>

    <p>
        Checks that the number is formatted correctly for the given country and enforces any
        length restrictions.
    </p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">// This will return true, indicating a potentially valid bank
// account number.

Stripe.bankAccount.validateAccountNumber(&#39;000123456789&#39;, &#39;US&#39;)

// This invalid bank account number will return false.

Stripe.bankAccount.validateAccountNumber(&#39;mistake&#39;, &#39;US&#39;)</span></code></pre>
</div>
</section>

<h1 id="collecting-pii-data">Collecting personally identifiable information (PII)</h1>

  <p>
    You can use these methods to collect PII data for <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fconnect%252Fidentity-verification">managed account identity verification</a>.
  </p>

    <h2 id="pii-data-createToken">piiData.createToken</h2>

    <p><code>createToken</code> converts sensitive PII data to a single-use token which you can safely pass to your server to verify a managed account.

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.piiData.createToken({
  personal_id_number: $(&#39;.personal_id_number&#39;).val()
}, stripeResponseHandler);</span></code></pre>
</div>
</section>

<p>Analogous to the <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js#card-createToken">card</a> <code>createToken</code> method, the first argument to <code>createToken</code> is a JavaScript object containing the PII data entered by the user. It should contain the following fields:</p>

<ul class="params">
    <li><code class="paramname">personal_id_number</code>: number representing a personal ID number, e.g. <code>000000000</code>.</li>
</ul>

<p>
  The second argument <code>stripeResponseHandler</code> is a callback you provide to handle the response from Stripe. It should do the following:
</p>

<ul class="sublist">
    <li>If the PII information entered by the user returned an error, display it on the page.</li>
    <li>If no errors were returned (i.e. a single-use token was created successfully), add the returned token to the form and submit the form to your server.</li>
</ul>

<p>Here's a sample implementation of <code>stripeResponseHandler</code>:</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">function stripeResponseHandler(status, response) {
  var $form = $(&#39;#payment-form&#39;);

  if (response.error) {
    // Show the errors on the form
    $form.find(&#39;.bank-errors&#39;).text(response.error.message);
    $form.find(&#39;button&#39;).prop(&#39;disabled&#39;, false);
  } else {
    // response contains id
    var token = response.id;
    // Insert the token into the form so it gets submitted to the server
    $form.append($(&#39;&lt;input type=&quot;hidden&quot; name=&quot;stripeToken&quot; /&gt;&#39;).val(token));
    // and submit
    $form.get(0).submit();
  }
}</span></code></pre>
</div>
</section>

<p><code>status</code> is one of the status codes described in the <a href="api/index.html#errors">API docs</a>.</p>
<p><code>response</code> is of the following form:</p>


<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">{
  id: &quot;tok_u5dg20Gra&quot;, // String of token identifier
  created: 1459289344, // Integer of date token was created
  livemode: true, // Boolean of whether this token was created with a live or test API key
  type: &quot;pii&quot;,
  object: &quot;token&quot;, // String identifier of the type of object, always &quot;token&quot;
  used: false // Boolean of whether this token has been used
}</span></code></pre>
</div>
</section>


<p>If the request to Stripe fails, <code>response</code> will instead be of following form:</p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">{
  error: {
    type: &quot;invalid_request_error&quot;, // String identifier of the type of error
    message: &quot;Invalid PII&quot;, // String description of the error
    param: &quot;pii&quot; // Optional string identifier of the offending parameter.
  }
}</span></code></pre>
</div>
</section>



<h1 id="collecting-bitcoin-payments">Collecting Bitcoin payments</h1>

  <p>
    When accepting Bitcoin payments client-side, you'll need to:
  </p>

    <ul>
      <li>Create a BitcoinReceiver object via <code>bitcoinReceiver.createReceiver</code> with the customer's email address and the amount and currency you'd like to charge.</li>
      <li>Display the relevant information (converted bitcoin, or BTC, amount and Bitcoin address to send payments to) on your checkout page.</li>
      <li>Since Bitcoin payments are asynchronous, poll the receiver and post to your server once the receiver has been paid by the customer.</li>
    </ul>

  <p>
    For more detailed instructuctions (and code examples) on how to integrate Bitcoin with Stripe.js, see the <a href="guides/bitcoin#using-stripejs">guide</a>.
  </p>

  <h2 id="bitcoinreceiver-createreceiver">bitcoinReceiver.createReceiver</h2>

  <p>
  Creates a <a href="api/index.html#bitcoin_receivers">BitcoinReceiver</a> object. Given an amount and currency, returns a receiver object containing the converted bitcoin amount (in Satoshi units) and Bitcoin address the payment should be sent to.
  </p>

<section class="code-example">
<div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.bitcoinReceiver.createReceiver({
    amount: 1000,
    currency: &#39;usd&#39;,
    description: &#39;some_description&#39;,
    email: &#39;payinguser@example.com&#39;
}, stripeResponseHandler);</span></code></pre>
</div>
</section>

  <h2 id="bitcoinreceiver-pollreceiver">bitcoinReceiver.pollReceiver</h2>

  <p>
  A helper method that will poll the BitcoinReceiver and call the specified callback method when the receiver has been "filled" (when the customer has pushed the required amount of bitcoin to the linked address) or when the poll returns an error from Stripe.
  </p>

<section class="code-example">
 <div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.bitcoinReceiver.pollReceiver(&quot;btcrcv_3hwhfVWdCKxqi9&quot;, filledReceiverHandler);</span></code></pre>
 </div>
</section>

  <h2 id="bitcoinreceiver-cancelreceiverpoll">bitcoinReceiver.cancelReceiverPoll</h2>

  <p>
    BitcoinReceivers expire after 10 minutes (Stripe will still process a transaction if bitcoin are pushed to it, but the conversion rate will no longer be guaranteed). You should detect in your browser logic whether 10 minutes have elapsed, and if so create a new receiver and clean up the previous receiver poll.
  </p>

<section class="code-example">
 <div class="terminal-wrap">
<pre><code><span class="highlight_js javascript">Stripe.bitcoinReceiver.cancelReceiverPoll(&quot;btcrcv_3hwhfVWdCKxqi9&quot;);</span></code></pre>
 </div>
</section>

  </article>

</section>


<script src="https://js.stripe.com/v2/"></script>



      <footer class="clearfix">
  <section class="questions">
    <h1>Questions?</h1>
    <p>We're always happy to help with code or other questions you might have! Check out our answers to <a href="https://support.stripe.com">common questions</a> or chat live with other developers in <a href="irc://irc.freenode.net/stripe">#stripe</a> on freenode.</p>

  </section>
</footer>
    </section>

  </section><!-- #documentation -->

  <div id="footer">
    <div class="country-dropdown-view">
        <a class="select">
            <span>
                <img src="../img/flags/us.png" width="23" height="17" data-hires="true" />
                <strong>United States</strong>
            </span>
        </a>

        <div class="popover">
            <div class="arrow"></div>
            <h4>Select your Country</h4>
            <ul>
                    <li>
                        <a href="../country?country=AU&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/au.png" width="23" height="17" data-hires="true" />
                            <span>Australia</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=CA&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/ca.png" width="23" height="17" data-hires="true" />
                            <span>Canada</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=DK&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/dk.png" width="23" height="17" data-hires="true" />
                            <span>Denmark</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=FI&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/fi.png" width="23" height="17" data-hires="true" />
                            <span>Finland</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=GB&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/gb.png" width="23" height="17" data-hires="true" />
                            <span>United Kingdom</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=IE&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/ie.png" width="23" height="17" data-hires="true" />
                            <span>Ireland</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=NO&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/no.png" width="23" height="17" data-hires="true" />
                            <span>Norway</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=SE&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/se.png" width="23" height="17" data-hires="true" />
                            <span>Sweden</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=US&amp;redirect=%252Fdocs%252Fstripe.js" class="selected">
                            <img src="../img/flags/us.png" width="23" height="17" data-hires="true" />
                            <span>United States</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=AT&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/at.png" width="23" height="17" data-hires="true" />
                            <span>Austria</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=BE&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/be.png" width="23" height="17" data-hires="true" />
                            <span>Belgium</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=BR&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/br.png" width="23" height="17" data-hires="true" />
                            <span>Brazil</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=FR&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/fr.png" width="23" height="17" data-hires="true" />
                            <span>France</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=DE&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/de.png" width="23" height="17" data-hires="true" />
                            <span>Germany</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=IT&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/it.png" width="23" height="17" data-hires="true" />
                            <span>Italy</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=JP&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/jp.png" width="23" height="17" data-hires="true" />
                            <span>Japan</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=LU&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/lu.png" width="23" height="17" data-hires="true" />
                            <span>Luxembourg</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=MX&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/mx.png" width="23" height="17" data-hires="true" />
                            <span>Mexico</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=NL&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/nl.png" width="23" height="17" data-hires="true" />
                            <span>Netherlands</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=PT&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/pt.png" width="23" height="17" data-hires="true" />
                            <span>Portugal</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=SG&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/sg.png" width="23" height="17" data-hires="true" />
                            <span>Singapore</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=ES&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/es.png" width="23" height="17" data-hires="true" />
                            <span>Spain</span>
                        </a>
                    </li>
                    <li>
                        <a href="../country?country=CH&amp;redirect=%252Fdocs%252Fstripe.js" >
                            <img src="../img/flags/ch.png" width="23" height="17" data-hires="true" />
                            <span>Switzerland</span>
                        </a>
                    </li>
          </ul>
        </div>
    </div>


    <p><a href="../country?country=CH&amp;redirect=%252F">&copy; Stripe</a></p>

    <ul>
        <li><a href="https://status.stripe.com"><span>System Status</span></a></li>
        <li><a href="../country?country=CH&amp;redirect=%252Fabout">About</a></li>
        <li><a href="../blog/page/1"><span>Blog</span></a></li>
        <li><a href="../jobs/index.html"><span>Jobs</span></a></li>
        <li><a href="http://twitter.com/stripe">Twitter</a></li>
    </ul>
    <ul class="lesser">
        <li><a href="../terms">Terms of Service</a></li>
        <li><a href="../privacy">Privacy Policy</a></li>
    </ul>
</div>
<div class="country-dropdown-overlay"></div>

    <script src="../assets/jquery-47d53801b9f61ca8a21dcc2571aeb3ec.js"></script>
    <script src="../assets/shared-3abadcaa3af6e785a085062e45894014.js"></script>


  

  <script src="../assets/documentation-4ba5fcc79adb6fc04e36d4af597eb53b.js"></script>
  <script src="../assets/highlight.pack-2286570da0bb1b3179fb57ccf73939c5.js"></script>
<script src="../assets/highlighter-e9cf653413c50b1b2558992fba0cb323.js"></script>

  <script type="text/javascript">
    Analytics.viewed("docs");
  </script>
</body>
</html>
