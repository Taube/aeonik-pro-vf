The Font:
https://cotypefoundry.com/our-fonts/aeonik-pro/

Introduction:
https://web.dev/variable-fonts/
https://xotv.me/channels/22-important/vod_videos/1641-important-focus-slash-slash-variable-fonts-part-one
https://xotv.me/channels/22-important/vod_videos/1641-important-focus-slash-slash-variable-fonts-part-two

Excellent in depth article on creating subsets and optimizing the font:
https://markoskon.com/creating-font-subsets/

Font Conversion:
https://github.com/fonttools/fonttools
https://fonttools.readthedocs.io/en/latest/subset/
https://xotv.me/channels/22-important/vod_videos/1641-important-focus-slash-slash-variable-fonts-part-two
Why not any of hundreds of online tools?
Just about all sensible tools strip the open type information giving support to variable fonts.
The only proper way of doing it is using locally downloaded and compiled tools.

What the following command actually does:
Convert TTF to woff2, selecting subset suitable for western languages WITHOUT stripping crucial variant-data, finally compressing into Woff2.

pyftsubset AeonikPro-Roman-VF.ttf --output-file="AeonikPro-Roman-VF.woff2" --flavor=woff2 --layout-features="kern,liga" --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"

pyftsubset AeonikPro-Italic-VF.ttf --output-file="AeonikPro-Italic-VF.woff2" --flavor=woff2 --layout-features="kern,liga" --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"

Useful tools:
The variable features of a font can be easily anaylysed using this tool.
https://fontdrop.info/

(Recent versions of Firefox Devtools contain a Font analyzer tab that is very helpful.)

Further optimizing:
Base64 Encode the font by uploading it here.
https://hellogreg.github.io/woff2base/
