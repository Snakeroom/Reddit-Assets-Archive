// https://www.redditstatic.com/desktop2x/reddit-components-QrCodeModal.51640459f61aca0567f8.js
// Retrieved at 12/8/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-QrCodeModal"], {
		"./src/reddit/components/QrCodeModal/index.m.less": function(e, t, a) {
			e.exports = {
				overlay: "_30CZBN7xH6jdIcj-mPHwAF",
				modal: "_38vqddgGD2QPUrQBasbWom"
			}
		},
		"./src/reddit/components/QrCodeModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				l = a("./src/higherOrderComponents/asModal/index.tsx"),
				o = a("./src/reddit/icons/svgs/svgIcons.tsx"),
				c = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = a("./node_modules/react-redux/es/index.js"),
				m = a("./src/reddit/actions/modal.ts"),
				i = a("./src/reddit/constants/modals.ts"),
				p = a("./src/reddit/components/QrCodeModal/index.m.less"),
				x = a.n(p);
			const u = Object(l.a)(() => {
				const e = Object(d.d)();
				return r.a.createElement("div", {
					className: "w-[539px] p-[32px]"
				}, r.a.createElement("section", {
					className: "flex justify-between items-center text-[32px] min-w-[500px]"
				}, r.a.createElement("h3", {
					className: "m-0 font-bold"
				}, n.fbt._("Get the Reddit app", null, {
					hk: "1z64wS"
				})), r.a.createElement("div", null, r.a.createElement("button", {
					type: "button",
					className: "button-medium px-[length:var(--rem8)] button flex items-center justify-center"
				}, r.a.createElement("span", {
					className: "flex items-center justify-center"
				}, r.a.createElement("span", {
					className: "flex text-20"
				}, r.a.createElement(c.b, {
					className: "mt-[2px]",
					onClick: () => {
						e(Object(m.g)(i.a.QR_CODE_MODAL))
					}
				})))))), r.a.createElement("section", {
					className: "text-center text-16"
				}, r.a.createElement("div", {
					className: "text-center font-bold p-md py-[32px] my-0 mx-auto max-w-[12rem]"
				}, r.a.createElement("span", null, n.fbt._("Scan this QR code to download the app now", null, {
					hk: "4A5Gp8"
				}))), r.a.createElement(o.g, {
					className: "border-solid border-2 border-white",
					width: "200",
					height: "200"
				}), r.a.createElement("div", {
					className: "text-center p-md"
				}, n.fbt._("Or check it out in the app stores", null, {
					hk: "2bdCAz"
				})), r.a.createElement("div", {
					className: "flex justify-center gap-x-md"
				}, r.a.createElement("a", {
					href: "https://play.google.com/store/apps/details?id=com.reddit.frontpage",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.a.createElement(o.e, null)), r.a.createElement("a", {
					href: "https://apps.apple.com/US/app/id1064216828",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.a.createElement(o.a, null)))))
			});
			t.default = () => {
				const e = Object(d.d)();
				return r.a.createElement(u, {
					className: x.a.modal,
					shouldBlurBackground: !1,
					onOverlayClick: () => {
						e(Object(m.g)(i.a.QR_CODE_MODAL))
					},
					overlayClassName: x.a.overlay,
					withOverlay: !0
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-QrCodeModal.51640459f61aca0567f8.js.map