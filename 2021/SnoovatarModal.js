// https://www.redditstatic.com/desktop2x/SnoovatarModal.4384a60aeed72855dc36.js
// Retrieved at 10/12/2021, 7:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = a("./node_modules/react/index.js"),
				o = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				n = a("./node_modules/react-router/esm/react-router.js"),
				c = a("./src/config.ts"),
				d = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				l = a("./src/reddit/hooks/useTracking.ts"),
				u = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				m = a.n(u);
			t.a = Object(n.i)(({
				className: e,
				match: t,
				location: a,
				share: n,
				source: u
			}) => {
				const v = new URLSearchParams(a.search);
				v.append("platform", "desktop"), Object.entries(t.params).forEach(([e, t]) => v.append(e, t)), n && Object.entries(n).forEach(([e, t]) => v.set(e, t)), u && v.set("source", u);
				const f = Object(l.a)();
				Object(r.useEffect)(() => {
					f(i.p)
				}, [f]);
				const j = Object(s.e)(e => e.user.session),
					p = Object(r.useRef)(null),
					O = Object(r.useCallback)(e => {
						j && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${j.accessToken}`
							},
							expiration: new Date(j.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [j]);
				return Object(r.useEffect)(() => {
					var e;
					return O(null === (e = null == p ? void 0 : p.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [p, O]), Object(r.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && O(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [O]), o.a.createElement("div", {
					className: Object(d.a)(m.a.iframeContainer, e)
				}, o.a.createElement("iframe", {
					ref: p,
					src: `${c.a.snoovatarUrl}/static/client/?${v.toString()}`
				}))
			})
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				iframeContainer: "hrzwqhyhwMHUQUeis25Ny",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/components/SnoovatarModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/react/index.js"),
				o = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/reddit/actions/snoovatarModal.ts"),
				c = a("./src/reddit/selectors/activeModal.ts"),
				d = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				u = a.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(i.a)(e => o.a.createElement(d.a, m({
				className: u.a.snoovatarModalIframeContainer
			}, e)));
			t.default = () => {
				const e = Object(s.d)(),
					t = Object(s.e)(e => Object(c.a)(e));
				return o.a.createElement(v, m({}, t, {
					className: u.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(n.a)())
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.4384a60aeed72855dc36.js.map