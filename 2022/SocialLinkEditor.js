// https://www.redditstatic.com/desktop2x/SocialLinkEditor.5e7527d00aa42e942922.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SocialLinkEditor"], {
		"./src/reddit/components/SocialLinks/SocialLinkEditor.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/constants/icons.ts"),
				i = n("./src/reddit/actions/socialLinks/index.ts"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/socialLinks.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				x = n("./src/reddit/components/SocialLinks/constants.ts"),
				C = n("./src/reddit/components/SocialLinks/helpers.ts"),
				b = n("./src/reddit/components/SocialLinks/SocialLinkButton.tsx"),
				f = n("./src/reddit/components/SocialLinks/AddSocialLinkModal.m.less"),
				k = n.n(f);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					closeModal: t,
					currentSocialLinkOption: n,
					existingSocialLink: f,
					onClickBackButton: L,
					socialLinkPosition: y,
					username: v
				} = e;
				const [O, _] = Object(a.useState)(), [g, E] = Object(a.useState)(), [w, j] = Object(a.useState)();
				Object(a.useEffect)(() => {
					if (f) {
						let e = f.handle;
						e && n.placeholderDisplayText === x.i && (e = "@" + e), _(e || void 0), E(f.title), j(f.outboundUrl)
					}
				}, [n.placeholderDisplayText, f]);
				const [B, A] = Object(a.useState)(""), N = Object(r.d)(), R = Object(p.a)(), U = Object(a.useCallback)(async e => {
					const a = Object(C.e)(O),
						s = n.placeholderUrl ? g : a,
						r = n.placeholderUrl ? w : void 0;
					R(Object(u.d)({
						socialLinkType: e,
						outboundUrl: r,
						name: s,
						position: y,
						isNew: !f
					}));
					try {
						const e = {
							socialLinkOption: n,
							rawHandle: a,
							rawTitle: g,
							url: w
						};
						f ? await N(Object(i.d)(f.id, v, e)) : await N(Object(i.a)(v, e)), t()
					} catch (c) {
						A(c.message)
					}
				}, [t, N, f, n, R, y, v, O, g, w]), M = Object(a.useCallback)((e, t, n) => {
					B && A("");
					let a = e.currentTarget.value;
					!n || (null == n ? void 0 : n.startsWith(a)) || a.startsWith(n) || (a = n + a), t(a)
				}, [B]);
				return s.a.createElement(l.e, null, s.a.createElement(l.i, null, s.a.createElement(m.a, null, s.a.createElement("button", {
					onClick: L
				}, s.a.createElement(h.a, {
					name: c.a.back,
					className: k.a.modalIconButton
				})), s.a.createElement("div", {
					className: k.a.modalTitle
				}, S._("Add Social Link", null, {
					hk: "NBrvK"
				})), s.a.createElement(o.t, {
					onClick: () => U(n.socialLinkType),
					disabled: n.placeholderUrl ? !g || !w : !O
				}, S._("Save", null, {
					hk: "7wJsb"
				})))), s.a.createElement(l.l, {
					className: k.a.modalMain
				}, s.a.createElement(b.a, {
					socialLinkType: n.socialLinkType
				}, n.name), s.a.createElement(d.c, {
					className: k.a.input,
					placeholder: n.placeholderDisplayText,
					onChange: e => M(e, n.placeholderUrl ? E : _, n.placeholderDisplayText === x.i ? "@" : void 0),
					value: (n.placeholderUrl ? g : O) || ""
				}), n.placeholderUrl && s.a.createElement(d.c, {
					className: k.a.input,
					placeholder: n.placeholderUrl,
					onChange: e => M(e, j, "https://"),
					value: w || ""
				}), s.a.createElement("div", {
					className: k.a.errorMessage
				}, B)))
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return k
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				o = n.n(d);
			const u = a.a.wrapped(s.a, "ModalInput", o.a),
				p = a.a.input("Input", o.a),
				h = a.a.wrapped(l.a, "RadioOn", o.a),
				m = a.a.wrapped(i.a, "RadioOff", o.a),
				x = a.a.wrapped(r.a, "Checkbox", o.a),
				C = a.a.wrapped(c.a, "CheckboxSelected", o.a),
				b = a.a.textarea("Textarea", o.a),
				f = a.a.label("StyledLabel", o.a),
				k = a.a.input("StyledFileInput", o.a)
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return s.a.createElement("svg", l({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(i.a.checkbox, t)
				}, n), s.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				l = n.n(i);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(c.a)(l.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: l.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SocialLinkEditor.5e7527d00aa42e942922.js.map