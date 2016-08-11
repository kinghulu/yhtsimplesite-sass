# yhtsimplesite-sass
使用gulp构建的简单网站只有实时刷新功能的模版 sass

对于简单的网站或者说是传统网站来说，我们交付给phper或java的代码都应该是未压缩版的。那么好多gulp的插件我们是用不到的，这里我们只用browser-sync来实现自动刷新的功能，来快速搭建我们的开发环境。
如何安装gulp这里就不介绍了。

<br>
<h2>基于Sass版</h2>
<h3>github地址</h3>
[gt href='https://github.com/kinghulu/yhtsimplesite-sass.git']https://github.com/kinghulu/yhtsimplesite-sass.git[/gt]
这个脚手架是用node-sass来编译sass文件的，so,得先安装node-sass模块。如果使用npm安装不成功，可以试试淘宝的cnpm。这里就不过多介绍如何安装了。
安装完node-sass
&nbsp;&nbsp;<strong>1、 在项目目录clone上面的地址</strong>
<pre class="prettyprint linenums" >
 git clone https://github.com/kinghulu/yhtsimplesite-sass.git
</pre>

&nbsp;&nbsp;<strong>2、 npm安装依赖模块</strong>
进入刚才clone的目录执行
<pre class="prettyprint linenums" >
npm install
</pre>

&nbsp;&nbsp;<strong>3、 OK，运行</strong>
npm install 安装完成，然后执行
<pre class="prettyprint linenums" >
gulp serve
</pre>
然后就可以愉快的开发了。
123木头人，只要简单三步就可以实现前端实时刷新的网站环境搭建了。
当然如果你觉得功能不够用，自己扩展吧。
