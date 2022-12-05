// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.1c159968cd33959ae8f2.js
// Retrieved at 12/5/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-AdHocMultiredditSidebar"], {
		"./src/reddit/actions/multireddit/constants.ts": function(e, n, t) {
			"use strict";
			t.d(n, "q", (function() {
				return r
			})), t.d(n, "r", (function() {
				return s
			})), t.d(n, "s", (function() {
				return c
			})), t.d(n, "t", (function() {
				return d
			})), t.d(n, "u", (function() {
				return o
			})), t.d(n, "e", (function() {
				return i
			})), t.d(n, "f", (function() {
				return u
			})), t.d(n, "g", (function() {
				return E
			})), t.d(n, "i", (function() {
				return D
			})), t.d(n, "j", (function() {
				return _
			})), t.d(n, "h", (function() {
				return I
			})), t.d(n, "l", (function() {
				return a
			})), t.d(n, "m", (function() {
				return T
			})), t.d(n, "k", (function() {
				return U
			})), t.d(n, "n", (function() {
				return l
			})), t.d(n, "o", (function() {
				return R
			})), t.d(n, "p", (function() {
				return S
			})), t.d(n, "a", (function() {
				return L
			})), t.d(n, "b", (function() {
				return M
			})), t.d(n, "c", (function() {
				return f
			})), t.d(n, "A", (function() {
				return m
			})), t.d(n, "B", (function() {
				return N
			})), t.d(n, "z", (function() {
				return A
			})), t.d(n, "y", (function() {
				return O
			})), t.d(n, "v", (function() {
				return x
			})), t.d(n, "w", (function() {
				return C
			})), t.d(n, "x", (function() {
				return b
			})), t.d(n, "d", (function() {
				return p
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				s = "MULTIREDDIT__MORE_POSTS_LOADED",
				c = "MULTIREDDIT__MORE_POSTS_PENDING",
				d = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				i = "MULTIREDDIT__CREATE_FAILURE",
				u = "MULTIREDDIT__CREATE_PENDING",
				E = "MULTIREDDIT__CREATE_SUCCESS",
				D = "MULTIREDDIT__DELETE_PENDING",
				_ = "MULTIREDDIT__DELETE_SUCCESS",
				I = "MULTIREDDIT__DELETE_FAILURE",
				a = "MULTIREDDIT__DUPLICATE_PENDING",
				T = "MULTIREDDIT__DUPLICATE_SUCCESS",
				U = "MULTIREDDIT__DUPLICATE_FAILURE",
				l = "MULTIREDDIT__EDIT_FAILURE",
				R = "MULTIREDDIT__EDIT_PENDING",
				S = "MULTIREDDIT__EDIT_SUCCESS",
				L = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				M = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				f = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				m = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				N = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				A = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				O = 10,
				x = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				C = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				b = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var p;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(p || (p = {}))
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, n, t) {
			"use strict";
			t.d(n, "c", (function() {
				return r
			})), t.d(n, "b", (function() {
				return s
			})), t.d(n, "a", (function() {
				return c
			}));
			const r = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				s = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				c = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var r = t("./node_modules/react/index.js"),
				s = t.n(r),
				c = t("./node_modules/react-redux/es/index.js"),
				d = t("./node_modules/reselect/es/index.js"),
				o = t("./src/reddit/components/MultiredditSidebar/index.tsx"),
				i = t("./src/reddit/contexts/PageLayer/index.tsx"),
				u = t("./src/reddit/selectors/multireddit.ts");
			const E = Object(i.v)(),
				D = Object(d.c)({
					multireddit: u.a,
					subredditCategory: i.n
				}),
				_ = Object(c.b)(D);
			n.default = E(_(e => s.a.createElement(o.a, e)))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, n, t) {
			"use strict";
			var r = t("./src/lib/classNames/index.ts"),
				s = t("./node_modules/react/index.js"),
				c = t.n(s),
				d = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				i = t("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = t("./src/reddit/selectors/user.ts"),
				E = t("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				D = t("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				_ = t("./src/reddit/components/UserIcon/UserIcon.tsx"),
				I = t("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = t.n(I);

			function T() {
				return (T = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = Object(o.c)({
					currentUser: u.m,
					isNightMode: u.fb,
					isPresenceUserPrefEnabled: u.X,
					shouldHideNSFW: u.H
				}),
				l = Object(d.b)(U);
			n.a = l(e => {
				const {
					currentUser: n,
					shouldShowPresenceIndicator: t,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: d,
					...o
				} = e, u = Object(i.a)(null == n ? void 0 : n.accountIcon);
				return c.a.createElement("div", {
					className: Object(r.a)(a.a.currentUserIconWrapper, d)
				}, u ? c.a.createElement(D.a, {
					headshot: n.accountIcon,
					className: e.className
				}) : c.a.createElement(_.b, T({}, o, {
					iconUrl: n ? n.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!n && n.isNSFW
				})), t && c.a.createElement(E.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/endpoints/subreddit/recommendations.ts": function(e, n, t) {
			"use strict";
			var r = t("./src/lib/makeGqlRequest/index.ts"),
				s = t("./src/redditGQL/operations/SubredditRecommendations.json");
			n.a = (e, n) => Object(r.a)(e, {
				...s,
				variables: n
			})
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/react/index.js"),
				s = t.n(r);
			n.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, n, t) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, n, t) {
			"use strict";
			var r = t("./src/lib/lessComponent.tsx"),
				s = t("./src/reddit/layout/row/Inline/index.m.less"),
				c = t.n(s);
			n.a = r.a.div("inlineRow", c.a)
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"abcab38cb71c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.1c159968cd33959ae8f2.js.map