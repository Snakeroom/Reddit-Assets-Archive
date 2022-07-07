// https://www.redditstatic.com/desktop2x/SocialLinkEditor.659d9be609551d9fa57b.js
// Retrieved at 7/7/2022, 11:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SocialLinkEditor"], {
		"./src/reddit/components/SocialLinks/SocialLinkEditor.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/constants/icons.ts"),
				c = n("./src/reddit/actions/socialLinks/index.ts"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/socialLinks.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				x = n("./src/reddit/components/SocialLinks/constants.ts"),
				b = n("./src/reddit/components/SocialLinks/helpers.ts"),
				C = n("./src/reddit/components/SocialLinks/SocialLinkButton.tsx"),
				S = n("./src/reddit/components/SocialLinks/AddSocialLinkModal.m.less"),
				k = n.n(S);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					closeModal: t,
					currentSocialLinkOption: n,
					existingSocialLink: S,
					onClickBackButton: y,
					socialLinkPosition: _,
					username: O
				} = e;
				const [E, L] = Object(a.useState)(), [v, j] = Object(a.useState)(), [g, A] = Object(a.useState)();
				Object(a.useEffect)(() => {
					if (S) {
						let e = S.handle;
						e && n.placeholderDisplayText === x.i && (e = "@" + e), L(e || void 0), j(S.title), A(S.outboundUrl)
					}
				}, [n.placeholderDisplayText, S]);
				const [B, N] = Object(a.useState)(""), R = Object(r.d)(), w = Object(p.a)(), U = Object(a.useCallback)(async e => {
					const a = Object(b.e)(E),
						s = n.placeholderUrl ? v : a,
						r = n.placeholderUrl ? g : void 0;
					w(Object(u.d)({
						socialLinkType: e,
						outboundUrl: r,
						name: s,
						position: _,
						isNew: !S
					}));
					try {
						const e = {
							socialLinkOption: n,
							rawHandle: a,
							rawTitle: v,
							url: g
						};
						S ? await R(Object(c.d)(S.id, O, e)) : await R(Object(c.a)(O, e)), t()
					} catch (l) {
						N(l.message)
					}
				}, [t, R, S, n, w, _, O, E, v, g]), T = Object(a.useCallback)((e, t, n) => {
					B && N("");
					let a = e.currentTarget.value;
					!n || (null == n ? void 0 : n.startsWith(a)) || a.startsWith(n) || (a = n + a), t(a)
				}, [B]);
				return s.a.createElement(i.e, null, s.a.createElement(i.i, null, s.a.createElement(h.a, null, s.a.createElement("button", {
					onClick: y
				}, s.a.createElement(m.a, {
					name: l.a.back,
					className: k.a.modalIconButton
				})), s.a.createElement("div", {
					className: k.a.modalTitle
				}, f._("Add Social Link", null, {
					hk: "NBrvK"
				})), s.a.createElement(o.t, {
					onClick: () => U(n.socialLinkType),
					disabled: n.placeholderUrl ? !v || !g : !E
				}, f._("Save", null, {
					hk: "7wJsb"
				})))), s.a.createElement(i.l, {
					className: k.a.modalMain
				}, s.a.createElement(C.a, {
					socialLinkType: n.socialLinkType
				}, n.name), s.a.createElement(d.c, {
					className: k.a.input,
					placeholder: n.placeholderDisplayText,
					onChange: e => T(e, n.placeholderUrl ? j : L, n.placeholderDisplayText === x.i ? "@" : void 0),
					value: (n.placeholderUrl ? v : E) || ""
				}), n.placeholderUrl && s.a.createElement(d.c, {
					className: k.a.input,
					placeholder: n.placeholderUrl,
					onChange: e => T(e, A, "https://"),
					value: g || ""
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
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "g", (function() {
				return k
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				l = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				o = n.n(d);
			const u = a.a.wrapped(s.a, "ModalInput", o.a),
				p = a.a.input("Input", o.a),
				m = a.a.wrapped(i.a, "RadioOn", o.a),
				h = a.a.wrapped(c.a, "RadioOff", o.a),
				x = a.a.wrapped(r.a, "Checkbox", o.a),
				b = a.a.wrapped(l.a, "CheckboxSelected", o.a),
				C = a.a.textarea("Textarea", o.a),
				S = a.a.label("StyledLabel", o.a),
				k = a.a.input("StyledFileInput", o.a)
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
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				i = n.n(c);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(l.a)(i.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: i.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: i.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: i.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SocialLinkEditor.659d9be609551d9fa57b.js.map