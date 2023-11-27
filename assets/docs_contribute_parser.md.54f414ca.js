import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.725e5b03.js";const f=JSON.parse('{"title":"Parser","description":"","frontmatter":{"title":"Parser","outline":"deep"},"headers":[],"relativePath":"docs/contribute/parser.md","filePath":"docs/contribute/parser.md","lastUpdated":1701091887000}'),s={name:"docs/contribute/parser.md"},o=r('<h1 id="parser" tabindex="-1">Parser <a class="header-anchor" href="#parser" aria-label="Permalink to &quot;Parser&quot;">​</a></h1><p>We aim to be the fastest Rust-based ready-for-production parser.</p><h2 id="conformance-tests" tabindex="-1">Conformance Tests <a class="header-anchor" href="#conformance-tests" aria-label="Permalink to &quot;Conformance Tests&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">just</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">c</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">just</span><span style="color:#24292E;"> </span><span style="color:#032F62;">c</span></span></code></pre></div><p>Aliased to <code>just coverage</code>, runs the following conformance test suites by using the conformance runner found in <a href="https://github.com/oxc-project/oxc/tree/main/tasks/coverage" target="_blank" rel="noreferrer">tasks/coverage</a>.</p><h3 id="test262" tabindex="-1">Test262 <a class="header-anchor" href="#test262" aria-label="Permalink to &quot;Test262&quot;">​</a></h3><p>JavaScript has the <a href="https://github.com/tc39/test262" target="_blank" rel="noreferrer">ECMAScript Test Suite</a> called Test262. The goal of Test262 is to provide test material that covers every observable behavior specified in the specification. Parser conformance uses the <a href="https://github.com/tc39/test262/blob/main/INTERPRETING.md#negative" target="_blank" rel="noreferrer">parse phase tests</a>.</p><h3 id="babel" tabindex="-1">Babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;Babel&quot;">​</a></h3><p>When new language features are added to JavaScript, it is required to have them implemented by Babel, this means Babel has another set of <a href="https://github.com/babel/babel/tree/main/packages/babel-parser/test" target="_blank" rel="noreferrer">parser tests</a>.</p><h3 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h3><p>The TypeScript conformance tests can be found <a href="https://github.com/microsoft/TypeScript/tree/main/tests/cases/conformance" target="_blank" rel="noreferrer">here</a>.</p><h2 id="test-runner" tabindex="-1">Test Runner <a class="header-anchor" href="#test-runner" aria-label="Permalink to &quot;Test Runner&quot;">​</a></h2><p>Rome has implemented a test runner for the above test suites, they can be found .</p>',13),n=[o];function c(i,l,p,h,d,b){return a(),t("div",null,n)}const m=e(s,[["render",c]]);export{f as __pageData,m as default};
