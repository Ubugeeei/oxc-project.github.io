import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.725e5b03.js";const E=JSON.parse('{"title":"Performance","description":"","frontmatter":{"title":"Performance","outline":"deep"},"headers":[],"relativePath":"ja/docs/contribute/performance.md","filePath":"ja/docs/contribute/performance.md","lastUpdated":1701091887000}'),o={name:"ja/docs/contribute/performance.md"},l=n(`<h1 id="performance-tuning" tabindex="-1">Performance Tuning <a class="header-anchor" href="#performance-tuning" aria-label="Permalink to &quot;Performance Tuning&quot;">​</a></h1><h2 id="compile-time" tabindex="-1">Compile Time <a class="header-anchor" href="#compile-time" aria-label="Permalink to &quot;Compile Time&quot;">​</a></h2><p>While Rust has gained a reputation for its comparatively slower compilation speed, we have dedicated significant effort to fine-tune the Rust compilation speed. Our aim is to minimize any impact on your development workflow, ensuring that developing your own Oxc based tools remains a smooth and efficient experience.</p><p>This is demonstrated by our <a href="https://github.com/oxc-project/oxc/actions/workflows/ci.yml?query=branch%3Amain" target="_blank" rel="noreferrer">CI runs</a>, where warm runs complete in 5 minutes.</p><h2 id="profile" tabindex="-1">Profile <a class="header-anchor" href="#profile" aria-label="Permalink to &quot;Profile&quot;">​</a></h2><h3 id="mac-xcode-instruments" tabindex="-1">Mac Xcode Instruments <a class="header-anchor" href="#mac-xcode-instruments" aria-label="Permalink to &quot;Mac Xcode Instruments&quot;">​</a></h3><p>Mac Xcode instruments can be used to produce a CPU profile.</p><p>To install Xcode Instruments, install the Command Line Tools:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">xcode-select</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">xcode-select</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--install</span></span></code></pre></div><p>For normal Rust builds, <a href="https://github.com/cmyr/cargo-instruments" target="_blank" rel="noreferrer"><code>cargo instruments</code></a> can be used as the glue for profiling and creating the trace file.</p><p>First, change the profile for showing debug symbols.</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">profile</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">release</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">debug = </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># debug info with line tables only</span></span>
<span class="line"><span style="color:#E1E4E8;">strip = </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># do not strip symbols</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">profile</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">release</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">debug = </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># debug info with line tables only</span></span>
<span class="line"><span style="color:#24292E;">strip = </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># do not strip symbols</span></span></code></pre></div><p>Then build the project</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--release</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxc_cli</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--bin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--release</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxc_cli</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--bin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint</span></span></code></pre></div><p>The binary is located at <code>./target/release/oxlint</code> once the project is built.</p><p>Under the hood, <code>cargo instruments</code> invokes the <code>xcrun</code> command, equivalent to</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">xcrun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xctrace</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">record</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Time Profile&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--output</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--launch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/path/to/oxc/target/release/oxlint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--quiet</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">xcrun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xctrace</span><span style="color:#24292E;"> </span><span style="color:#032F62;">record</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Time Profile&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--output</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--launch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/path/to/oxc/target/release/oxlint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--quiet</span></span></code></pre></div><p>Running the command above produces the following output</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Starting recording with the Time Profiler template. Launching process: oxlint.</span></span>
<span class="line"><span style="color:#e1e4e8;">Ctrl-C to stop the recording</span></span>
<span class="line"><span style="color:#e1e4e8;">Target app exited, ending recording...</span></span>
<span class="line"><span style="color:#e1e4e8;">Recording completed. Saving output file...</span></span>
<span class="line"><span style="color:#e1e4e8;">Output file saved as: Launch_oxlint_2023-09-03_4.41.45 PM_EB179B85.trace</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Starting recording with the Time Profiler template. Launching process: oxlint.</span></span>
<span class="line"><span style="color:#24292e;">Ctrl-C to stop the recording</span></span>
<span class="line"><span style="color:#24292e;">Target app exited, ending recording...</span></span>
<span class="line"><span style="color:#24292e;">Recording completed. Saving output file...</span></span>
<span class="line"><span style="color:#24292e;">Output file saved as: Launch_oxlint_2023-09-03_4.41.45 PM_EB179B85.trace</span></span></code></pre></div><p>Open the trace file <code>open Launch_oxlint_2023-09-03_4.41.45\\ PM_EB179B85.trace</code>.</p><p>To see a top down trace:</p><ol><li>On the top panel, click CPUs</li><li>On the left input box, click <code>x</code> then select <code>Time Profiler</code></li><li>At the bottom panel, click &quot;Call Tree&quot;, turn on &quot;Invert Call Tree&quot; and turn off separate by thread.</li></ol>`,22),p=[l];function t(c,r,i,d,y,u){return e(),a("div",null,p)}const m=s(o,[["render",t]]);export{E as __pageData,m as default};
