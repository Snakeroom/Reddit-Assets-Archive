// https://www.redditstatic.com/desktop2x/AddSocialLinkModal.6a616973cd6f94eb7b25.js
// Retrieved at 5/18/2022, 11:10:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AddSocialLinkModal"], {
		"./src/reddit/components/SocialLinks/AddSocialLinkModal.m.less": function(e, t, n) {
			e.exports = {
				modalIconButton: "_1Ars0sGomEhw60_u0ZTnDn",
				modalTitle: "_3ZAHCZjxNbLh3PU6XklbOV",
				modalMain: "_2IXaPaFCjZx5_-OmjWMuoj",
				errorMessage: "_2EwCP2FnC96Lxk6F_xv9J2",
				input: "_1XIQMQXbnzXGy8QOKp8ay9"
			}
		},
		"./src/reddit/components/SocialLinks/AddSocialLinkModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/constants/icons.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/helpers/trackers/socialLinks.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				L = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				b = n("./src/reddit/components/SocialLinks/constants.ts"),
				p = n("./src/reddit/components/SocialLinks/helpers.ts"),
				S = n("./src/reddit/components/SocialLinks/SocialLinkButton.tsx"),
				_ = n("./src/reddit/components/SocialLinks/AddSocialLinkModal.m.less"),
				O = n.n(_);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = Object(s.a)({
				resolved: {},
				chunkName: () => "SocialLinkEditor",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SocialLinkEditor").then(n.bind(null, "./src/reddit/components/SocialLinks/SocialLinkEditor.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SocialLinks/SocialLinkEditor.tsx"
				}
			}), h = Object(p.a)(), E = e => {
				let {
					socialLink: t,
					socialLinkPosition: n,
					username: s
				} = e;
				const a = Object(c.d)(),
					_ = Object(k.a)(),
					[E, A] = Object(o.useState)();
				Object(o.useEffect)(() => {
					if (t) {
						const e = Object(p.d)(t.type),
							n = Object(p.c)(e, t.type);
						A(n)
					}
				}, [t]);
				const y = Object(o.useCallback)(() => {
						A(void 0), t && a(Object(d.g)(b.a))
					}, [a, t, A]),
					C = Object(o.useCallback)(() => {
						a(Object(d.g)(b.a))
					}, [a]),
					v = Object(o.useCallback)(e => {
						A(e), _(Object(m.e)(e.socialLinkType))
					}, [_]);
				return E ? i.a.createElement(x, {
					closeModal: C,
					currentSocialLinkOption: E,
					existingSocialLink: t,
					onClickBackButton: y,
					socialLinkPosition: n,
					username: s
				}) : i.a.createElement(r.e, null, i.a.createElement(r.i, null, i.a.createElement(L.a, {
					widthRight: 16
				}, i.a.createElement("div", {
					className: O.a.modalTitle
				}, j._("Add Social Link", null, {
					hk: "NBrvK"
				})), i.a.createElement("button", {
					onClick: C
				}, i.a.createElement(u.a, {
					name: l.a.close,
					className: O.a.modalIconButton
				})))), i.a.createElement(r.l, {
					className: O.a.modalMain
				}, h.map(e => i.a.createElement(S.a, {
					className: O.a.socialLinkButton,
					key: e.name,
					onClick: () => v(e),
					socialLinkType: e.socialLinkType
				}, e.name))))
			};
			t.default = Object(a.a)(E)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AddSocialLinkModal.6a616973cd6f94eb7b25.js.map