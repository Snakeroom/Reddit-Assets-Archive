// https://www.redditstatic.com/desktop2x/GovernanceVotingBanner.712301dc98e7499a7f65.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceVotingBanner"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/reddit/components/Governance/VotingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				bannerTitle: "_2RlUIqHbJhtqBPVOWc9EIl",
				button: "v2IDimagf9R1V7C7SahRI",
				container: "_1hs-SYfOXsOvtGLvgYSGq",
				content: "t61e4NmTLweNDu9wA2hM6",
				controls: "_-9zD1vVqEYmUMZcelQho0",
				flexRow: "_1Q5pm9fTTP3El8OlDEZLem",
				cta: "_1aUSA6nx3p-1LER33aE5sM",
				description: "_2JKRsNNJ0TUIpOpUjXAkpL",
				glowInner: "xB16-1ZjXRo4UiBMlYtPy",
				glowAnimationInner: "_3STmIEeB0QCC1Re7XiJe-_",
				glowOuter: "_1kAC_-k9cYMPGSTdijNoI2",
				glowAnimationOuter: "_3XZ0cG3H3WJKDt_a_msBqN",
				govIcon: "_1U_LKqjH8Y6XwWtdOJK2Ma",
				inner: "mRG6WomZbOvrz4BzzTv_A",
				postTitle: "-fXFhjjEdrS0uDz5V8nQG",
				redditIconContainer: "_1cp4bjnJiK5Xlg8tlgnJHc",
				redditIcon: "_3Etrkn9wjZNA84PFTPQ1H1"
			}
		},
		"./src/reddit/components/Governance/VotingBanner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-motion/lib/react-motion.js"),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/localStorageAvailable/index.ts"),
				m = n("./src/reddit/contexts/ApiContext.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/lib/classNames/index.ts")),
				b = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/Button/index.m.less"),
				O = n.n(v);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const f = e => {
					var {
						className: t
					} = e, n = j(e, ["className"]);
					return r.a.createElement(b.q, h({
						kind: b.a.InternalLink,
						className: Object(p.a)(t, O.a.InvertedPrimaryRouterLink)
					}, n))
				},
				g = e => {
					var {
						className: t
					} = e, n = j(e, ["className"]);
					return r.a.createElement(b.q, h({
						kind: b.a.Button,
						className: Object(p.a)(t, O.a.InvertedTertiaryButton)
					}, n))
				};
			var x = n("./src/reddit/endpoints/governance/poll.ts"),
				E = n("./src/reddit/featureFlags/component.tsx"),
				_ = n("./src/reddit/helpers/overlay/index.ts"),
				y = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				w = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				N = n("./src/reddit/selectors/gov.ts"),
				I = n("./src/reddit/components/Governance/VotingBanner/index.m.less"),
				S = n.n(I);
			const C = 100,
				P = [{
					key: "banner",
					style: {
						bottom: Object(o.spring)(0)
					}
				}];
			class B extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						postTitle: "",
						postUrl: "",
						showBanner: !1
					}, this.dismissBanner = () => {
						this.setState({
							showBanner: !1
						})
					}, this.saveDismissState = () => {
						Object(d.a)() && this.props.subreddit && localStorage.setItem(k(this.props.subreddit.id), (new Date).toISOString())
					}, this.willEnter = () => ({
						bottom: -C
					}), this.willLeave = () => ({
						bottom: Object(o.spring)(-C)
					})
				}
				async componentDidMount() {
					if (L(this.props.subreddit) || !Object(d.a)()) return;
					const e = function(e) {
						if (e && e.pinnedPolls) {
							const t = Object.keys(e.pinnedPolls)[0];
							if (t) return e.pinnedPolls.content[t].postId
						}
					}(this.props.assets);
					if (e) {
						const t = await Object(x.a)(this.props.apiContext(), e);
						t.ok && this.setState({
							postTitle: t.body.title,
							postUrl: t.body.url,
							showBanner: !0
						})
					}
				}
				render() {
					if (L(this.props.subreddit) || !this.props.subreddit) return null;
					const {
						subreddit: e
					} = this.props;
					return r.a.createElement(o.TransitionMotion, {
						defaultStyles: [],
						didLeave: this.saveDismissState,
						styles: this.state.showBanner ? P : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave
					}, t => r.a.createElement(a.Fragment, null, t.map(t => r.a.createElement("div", {
						className: S.a.container,
						key: t.key,
						style: t.style
					}, r.a.createElement("div", {
						className: S.a.inner
					}, r.a.createElement("div", {
						className: S.a.content
					}, r.a.createElement("div", {
						className: S.a.redditIconContainer
					}, r.a.createElement(w.a, {
						className: S.a.redditIcon
					}), r.a.createElement("div", {
						className: S.a.glowInner
					}), r.a.createElement("div", {
						className: S.a.glowOuter
					})), r.a.createElement("div", {
						className: S.a.description
					}, r.a.createElement("div", {
						className: S.a.cta
					}, s.fbt._("{subredditName} Governance Vote is Open:", [s.fbt._param("subredditName", e.displayText)], {
						hk: "3mIPYS"
					})), r.a.createElement("div", {
						className: S.a.postTitle
					}, this.state.postTitle))), r.a.createElement("div", {
						className: S.a.controls
					}, r.a.createElement(g, {
						className: S.a.button,
						onClick: this.dismissBanner
					}, s.fbt._("later", null, {
						hk: "3jW79t"
					})), r.a.createElement(f, {
						className: S.a.button,
						to: Object(_.b)(this.state.postUrl),
						onClick: this.dismissBanner
					}, r.a.createElement(y.a, {
						className: S.a.govIcon
					}), s.fbt._("vote", null, {
						hk: "3WuKai"
					}))))))))
				}
			}

			function k(e) {
				return "governance-banner-".concat(e)
			}

			function L(e) {
				if (!e) return !0;
				if (!Object(d.a)()) return !0;
				const t = k(e.id),
					n = localStorage.getItem(t);
				if (!n) return !1;
				const s = new Date(n).getTime();
				return Date.now() - l.x < s
			}
			const D = Object(i.c)({
					assets: (e, t) => {
						const n = Object(u.q)(e, t);
						if (n) return Object(N.l)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					subreddit: u.q
				}),
				T = Object(c.b)(D, e => ({
					onOpenPoll: e => {}
				})),
				A = Object(u.t)();
			t.default = Object(E.a)("spGovPolls", A(Object(m.b)(T(B))))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/lodash/get.js"),
				a = n.n(s),
				r = n("./src/config.ts"),
				o = n("./src/graphql/operations/PollVote.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				d = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function m(e, t, n, s) {
				return Object(d.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
				})
			}
			const u = (e, t, n) => Object(c.a)(e, Object.assign(Object.assign({}, o), {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function p(e, t) {
				return Object(d.a)(Object(i.a)(e, [l.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						title: a()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: a()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};

			function l(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, r = i(e, ["featureEnabled"]);
					return s ? a.a.createElement(t, r) : void 0 !== n ? a.a.createElement(n, r) : null
				})
			}
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), a.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), a.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), a.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), a.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceVotingBanner.712301dc98e7499a7f65.js.map