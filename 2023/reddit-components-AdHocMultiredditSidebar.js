// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.164e8a8a39284cbbfd01.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-AdHocMultiredditSidebar"], {
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var r = t("./node_modules/react/index.js"),
				n = t.n(r),
				c = t("./node_modules/react-redux/es/index.js"),
				d = t("./node_modules/reselect/es/index.js"),
				o = t("./src/reddit/components/MultiredditSidebar/index.tsx"),
				i = t("./src/reddit/contexts/PageLayer/index.tsx"),
				a = t("./src/reddit/selectors/multireddit.ts");
			const l = Object(i.v)(),
				u = Object(d.c)({
					multireddit: a.a,
					subredditCategory: i.n
				}),
				m = Object(c.b)(u);
			s.default = l(m(e => n.a.createElement(o.a, e)))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, s, t) {
			"use strict";
			var r = t("./src/lib/classNames/index.ts"),
				n = t("./node_modules/react/index.js"),
				c = t.n(n),
				d = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				i = t("./src/reddit/helpers/userSnoovatar/index.ts"),
				a = t("./src/reddit/selectors/user.ts"),
				l = t("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = t("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = t("./src/reddit/components/UserIcon/UserIcon.tsx"),
				x = t("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = t.n(x);

			function b() {
				return (b = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(o.c)({
					currentUser: a.m,
					isNightMode: a.fb,
					isPresenceUserPrefEnabled: a.X,
					shouldHideNSFW: a.H
				}),
				_ = Object(d.b)(v);
			s.a = _(e => {
				const {
					currentUser: s,
					shouldShowPresenceIndicator: t,
					isPresenceUserPrefEnabled: n,
					wrapperClassName: d,
					...o
				} = e, a = Object(i.a)(null == s ? void 0 : s.accountIcon);
				return c.a.createElement("div", {
					className: Object(r.a)(p.a.currentUserIconWrapper, d)
				}, a ? c.a.createElement(u.a, {
					headshot: s.accountIcon,
					className: e.className
				}) : c.a.createElement(m.b, b({}, o, {
					iconUrl: s ? s.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!s && s.isNSFW
				})), t && c.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, s, t) {
			"use strict";
			var r = t("./node_modules/react/index.js"),
				n = t.n(r);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, s, t) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, s, t) {
			"use strict";
			var r = t("./src/lib/lessComponent.tsx"),
				n = t("./src/reddit/layout/row/Inline/index.m.less"),
				c = t.n(n);
			s.a = r.a.div("inlineRow", c.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.164e8a8a39284cbbfd01.js.map