# 丁智 · Zhi Ding

这是为 GitHub Pages 编写的双语静态学术主页。浏览器打开 `index.html` 即可预览。双语页面、头像和 SmartTask 全文均可离线使用。DOI、其他两篇论文的 PDF 和开源仓库链接需要联网。

## 更新内容

- `index.html` 为默认英文页，`zh.html` 为简体中文页。两页都包含可直接编辑的 HTML 正文。
- 两页使用相同的栏目、论文和成果 ID。新增条目时，请在两页使用相同 ID，方便切换语言后回到对应位置。
- `style.css` 控制字体、布局和移动端样式，`navigation.js` 根据阅读位置更新导航和语言切换链接。
- `assets/zhi-ding.jpg` 是头像源照片，样式表中的 `.portrait` 控制头肩裁剪。`papers/smarttask.pdf` 是作者提供的论文全文。
- `.nojekyll` 用于按原样发布静态文件。

## 发布到 GitHub Pages

准备发布时，可将本目录内的文件放到 `aspxcor/aspxcor.github.io` 仓库的发布分支根目录。在仓库的 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**，再选对应分支和 **/ (root)**。个人主页的默认地址为 `https://aspxcor.github.io/`。[GitHub Pages 发布设置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 资料来源

- 教育背景、荣誉、联系方式及代表论文选目取自 [GitHub 公开个人简介](https://github.com/aspxcor/aspxcor)。
- 论文原题、作者顺序、发表信息和研究结果依据 [5GSaver](https://doi.org/10.1109/TMC.2024.3377696)、[UQ-vRAN](https://doi.org/10.1109/INFOCOM52122.2024.10621408) 和 [SmartTask](https://doi.org/10.1007/978-981-96-2186-6_6)。中文题名为阅读译名。SmartTask 的会议年份为 2024，论文集出版年份为 2025。
- 开源项目说明来自 [明代历史知识图谱](https://github.com/aspxcor/Ming-Dynasty-Knowledge-Graph)、[SIM 工具仓库](https://github.com/aspxcor/Code-Repetition-Check-sim) 和 [人员应急疏散路径优化](https://github.com/aspxcor/Optimization-Plan-for-Emergency-Evacuation-of-Personnel-Based-on-Optimization-Algorithm)。
