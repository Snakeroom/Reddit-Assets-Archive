// https://www.redditstatic.com/desktop2x/GovernanceVotingBanner.eb699e9f72509db37e05.js
// Retrieved at 1/18/2020, 12:30:29 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceVotingBanner"], {
		"./src/reddit/components/Governance/VotingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				bannerTitle: "_2RlUIqHbJhtqBPVOWc9EIl",
				button: "v2IDimagf9R1V7C7SahRI",
				container: "_1hs-SYfOXsOvtGLvgYSGq",
				flexRow: "_1Q5pm9fTTP3El8OlDEZLem",
				controls: "_-9zD1vVqEYmUMZcelQho0",
				content: "t61e4NmTLweNDu9wA2hM6",
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-motion/lib/react-motion.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/app/strings/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/localStorageAvailable/index.ts"),
				m = n("./src/reddit/contexts/ApiContext.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/Button/index.m.less"),
				g = n.n(v);
			const x = p.a.wrapped(b.m, "InvertedPrimaryRouterLink", g.a),
				O = p.a.wrapped(b.l, "InvertedTertiaryButton", g.a);
			var j = n("./src/reddit/endpoints/governance/poll.ts"),
				E = n("./src/reddit/featureFlags/component.tsx"),
				h = n("./src/reddit/helpers/overlay/index.ts"),
				_ = n("./src/reddit/i18n/components.tsx"),
				f = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				w = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				y = n("./src/reddit/selectors/gov.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/Governance/VotingBanner/index.m.less"),
				S = n.n(N);
			const B = 100,
				D = [{
					key: "banner",
					style: {
						bottom: Object(a.spring)(0)
					}
				}];
			class L extends r.a.Component {
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
						Object(d.a)() && this.props.subreddit && localStorage.setItem(T(this.props.subreddit.id), (new Date).toISOString())
					}, this.willEnter = () => ({
						bottom: -B
					}), this.willLeave = () => ({
						bottom: Object(a.spring)(-B)
					})
				}
				async componentDidMount() {
					if (A(this.props.subreddit) || !Object(d.a)()) return;
					const e = function(e) {
						if (e && e.pinnedPolls) {
							const t = Object.keys(e.pinnedPolls)[0];
							if (t) return e.pinnedPolls.content[t].postId
						}
					}(this.props.assets);
					if (e) {
						const t = await Object(j.a)(this.props.apiContext(), e);
						t.ok && this.setState({
							postTitle: t.body.title,
							postUrl: t.body.url,
							showBanner: !0
						})
					}
				}
				render() {
					if (A(this.props.subreddit) || !this.props.subreddit) return null;
					const {
						subreddit: e,
						language: t
					} = this.props;
					return r.a.createElement(a.TransitionMotion, {
						defaultStyles: [],
						didLeave: this.saveDismissState,
						styles: this.state.showBanner ? D : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave
					}, n => r.a.createElement(s.Fragment, null, n.map(n => r.a.createElement("div", {
						className: S.a.container,
						key: n.key,
						style: n.style
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
					}, Object(c.a)(t, "gov.voteCta", {
						subredditName: e.displayText
					})), r.a.createElement("div", {
						className: S.a.postTitle
					}, this.state.postTitle))), r.a.createElement("div", {
						className: S.a.controls
					}, r.a.createElement(O, {
						className: S.a.button,
						onClick: this.dismissBanner
					}, r.a.createElement(_.c, null, "later")), r.a.createElement(x, {
						className: S.a.button,
						to: Object(h.b)(this.state.postUrl),
						onClick: this.dismissBanner
					}, r.a.createElement(f.a, {
						className: S.a.govIcon
					}), r.a.createElement(_.c, null, "vote"))))))))
				}
			}

			function T(e) {
				return "governance-banner-".concat(e)
			}

			function A(e) {
				if (!e) return !0;
				if (!Object(d.a)()) return !0;
				const t = T(e.id),
					n = localStorage.getItem(t);
				if (!n) return !1;
				const s = new Date(n).getTime();
				return Date.now() - l.w < s
			}
			const P = Object(i.c)({
					assets: (e, t) => {
						const n = Object(u.q)(e, t);
						if (n) return Object(y.k)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					language: I.S,
					subreddit: u.q
				}),
				C = Object(o.b)(P, e => ({
					onOpenPoll: e => {}
				})),
				k = Object(u.t)();
			t.default = Object(E.a)("spGovPolls", k(Object(m.b)(C(L))))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};

			function l(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(s)(e => {
					const {
						featureEnabled: s,
						dispatch: a
					} = e, o = c(e, ["featureEnabled", "dispatch"]);
					return s ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
				})
			}
		}
	}
]);
//# sourceMappingURL=GovernanceVotingBanner.eb699e9f72509db37e05.js.map