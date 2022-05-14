require("./main.css");
var $gXNCa$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $gXNCa$styledcomponents = require("styled-components");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $c3e57ae7e5dd4d0a$exports = {};

$parcel$export($c3e57ae7e5dd4d0a$exports, "Button", () => $35561c68d7bed295$export$353f5b6fc5456de1);
$parcel$export($c3e57ae7e5dd4d0a$exports, "ImageGallery", () => $60ccc0809904a519$export$55a2b0f315878a81);



const $35561c68d7bed295$export$353f5b6fc5456de1 = ({ primary: primary = false , size: size = "medium" , backgroundColor: backgroundColor , label: label , ...props })=>{
    const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
    return /*#__PURE__*/ $gXNCa$reactjsxruntime.jsx("button", {
        type: "button",
        className: [
            "storybook-button",
            `storybook-button--${size}`,
            mode
        ].join(" "),
        style: {
            backgroundColor: backgroundColor
        },
        ...props,
        children: label
    });
};




const $60ccc0809904a519$var$GalleryContainer = ($parcel$interopDefault($gXNCa$styledcomponents)).div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const $60ccc0809904a519$export$55a2b0f315878a81 = ({ images: images , numberOfColumns: numberOfColumns  })=>{
    const columnsClass = `w-${numberOfColumns}/12`;
    return /*#__PURE__*/ $gXNCa$reactjsxruntime.jsx($60ccc0809904a519$var$GalleryContainer, {
        className: "flex flex-wrap items-center",
        children: /*#__PURE__*/ $gXNCa$reactjsxruntime.jsx("div", {
            className: columnsClass,
            children: images.map((image)=>image && image.src && /*#__PURE__*/ $gXNCa$reactjsxruntime.jsx("img", {
                    src: image.src,
                    alt: image.alt || "Gallery Image"
                })
            )
        })
    });
};




$parcel$exportWildcard(module.exports, $c3e57ae7e5dd4d0a$exports);


//# sourceMappingURL=main.js.map
