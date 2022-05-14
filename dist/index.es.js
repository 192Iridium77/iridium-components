import "./main.css";
import {jsx as $5OpyM$jsx} from "react/jsx-runtime";
import "react";
import $5OpyM$styledcomponents from "styled-components";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $7f25b1b2e74b20aa$exports = {};

$parcel$export($7f25b1b2e74b20aa$exports, "Button", () => $19d443a843229f97$export$353f5b6fc5456de1);
$parcel$export($7f25b1b2e74b20aa$exports, "ImageGallery", () => $b7b100fb1bd2a47e$export$55a2b0f315878a81);



const $19d443a843229f97$export$353f5b6fc5456de1 = ({ primary: primary = false , size: size = "medium" , backgroundColor: backgroundColor , label: label , ...props })=>{
    const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
    return /*#__PURE__*/ $5OpyM$jsx("button", {
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




const $b7b100fb1bd2a47e$var$GalleryContainer = $5OpyM$styledcomponents.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const $b7b100fb1bd2a47e$export$55a2b0f315878a81 = ({ images: images , numberOfColumns: numberOfColumns  })=>{
    const columnsClass = `w-${numberOfColumns}/12`;
    return /*#__PURE__*/ $5OpyM$jsx($b7b100fb1bd2a47e$var$GalleryContainer, {
        className: "flex flex-wrap items-center",
        children: /*#__PURE__*/ $5OpyM$jsx("div", {
            className: columnsClass,
            children: images.map((image)=>image && image.src && /*#__PURE__*/ $5OpyM$jsx("img", {
                    src: image.src,
                    alt: image.alt || "Gallery Image"
                })
            )
        })
    });
};






export {$19d443a843229f97$export$353f5b6fc5456de1 as Button, $b7b100fb1bd2a47e$export$55a2b0f315878a81 as ImageGallery};
//# sourceMappingURL=index.es.js.map
