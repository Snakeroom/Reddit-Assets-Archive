// https://www.redditstatic.com/desktop2x/ProfileModeration.dd3805793c52c4ccedc5.js
// Retrieved at 3/16/2020, 6:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileModeration"], {
		"./src/reddit/components/Settings/shared/Heading.m.less": function(e, t, a) {
			e.exports = {
				Heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				HeadingSubtext: "_3yr8kdlxh51P-SJDaWVzJD",
				headingSubtext: "_3yr8kdlxh51P-SJDaWVzJD"
			}
		},
		"./src/reddit/components/Settings/shared/Heading.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/components/Settings/shared/Heading.m.less"),
				o = a.n(r);
			t.b = n.a.h2("Heading", o.a);
			const s = n.a.p("HeadingSubtext", o.a)
		},
		"./src/reddit/components/Settings/shared/Layout.m.less": function(e, t, a) {
			e.exports = {
				Container: "_1OrNGmpfcSuSebbZM5vYq4",
				container: "_1OrNGmpfcSuSebbZM5vYq4",
				Content: "_3FVpvZ7OLbS_68QzaxplxT",
				content: "_3FVpvZ7OLbS_68QzaxplxT",
				Sidebar: "_6hkUCjcaRoPRm1710RzSl",
				sidebar: "_6hkUCjcaRoPRm1710RzSl",
				defaultLayout: "jrocDu3YgcEScGB_zdT4I",
				"m-collectionLayout": "_1LF62vb6GTug21RCMM47iK",
				mCollectionLayout: "_1LF62vb6GTug21RCMM47iK"
			}
		},
		"./src/reddit/components/Settings/shared/Layout.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./src/reddit/components/Settings/shared/Layout.m.less"),
				s = a.n(o),
				i = a("./src/lib/lessComponent.tsx");
			const l = i.a.div("Container", s.a),
				c = i.a.div("Content", s.a),
				d = i.a.div("Sidebar", s.a);
			t.a = e => r.a.createElement(l, {
				className: e.className
			}, r.a.createElement(c, null, e.children), r.a.createElement(d, null, e.sidebar))
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, a) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "a", (function() {
				return x
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n, r = a("./node_modules/lodash/throttle.js"),
				o = a.n(r),
				s = a("./node_modules/react/index.js"),
				i = a.n(s),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/constants/index.ts"),
				d = a("./src/lib/lessComponent.tsx"),
				m = a("./src/reddit/constants/componentSizes.ts"),
				u = a("./src/reddit/constants/zIndex.ts"),
				p = a("./src/reddit/controls/InternalLink/index.tsx"),
				h = a("./src/reddit/icons/svgs/Settings/index.tsx"),
				f = a("./src/reddit/components/TabNav/index.m.less"),
				g = a.n(f),
				b = function(e, t) {
					var a = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
					}
					return a
				};
			! function(e) {
				e.GEAR = "gear"
			}(n || (n = {}));
			const E = d.a.wrapped(h.a, "Gear", g.a),
				y = d.a.h3("Title", g.a),
				v = d.a.div("TabNavContainer", g.a),
				w = d.a.div("Tabs", g.a),
				x = d.a.wrapped(e => {
					var {
						active: t,
						enabled: a
					} = e, n = b(e, ["active", "enabled"]);
					return i.a.createElement(p.a, {
						"aria-selected": t,
						className: Object(l.a)(n.className, {
							[g.a.mIsActive]: t,
							[g.a.mIsEnabled]: !1 !== a
						}),
						role: "tab",
						to: n.to
					}, n.children)
				}, "Tab", g.a),
				_ = e => {
					switch (e) {
						case n.GEAR:
							return i.a.createElement(E, null);
						default:
							return null
					}
				},
				S = () => window.pageYOffset || window.scrollY,
				k = 75,
				C = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: m.f,
					willChange: "transform",
					zIndex: u.f
				};
			class O extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = o()(() => {
						this.state.sticky || this.forceUnsticky ? S() < k && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : S() >= k && this.setState({
							sticky: !0
						})
					}, c.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					return i.a.createElement(v, {
						className: this.props.className
					}, i.a.createElement(y, {
						className: Object(l.a)({
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, _(this.props.icon), this.props.title), i.a.createElement(w, {
						className: Object(l.a)({
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? C : void 0
					}, this.props.children))
				}
			}
			t.c = O
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, a) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return c
			})), a.d(t, "a", (function() {
				return d
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				s = a("./src/reddit/controls/Button/index.tsx"),
				i = a("./src/reddit/pages/ErrorPages/index.m.less"),
				l = a.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(s.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(s.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileModSettings/Navigation.m.less": function(e, t, a) {
			e.exports = {
				listItem: "BvT1z-ywH7tI443Z5ORMe",
				sectionWrapper: "_1Ivld4cbXCFAZRcstB6jkn"
			}
		},
		"./src/reddit/pages/ProfileModSettings/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			a("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/components/Settings/shared/Layout.tsx"),
				l = a("./src/reddit/components/TabNav/index.tsx"),
				c = a("./src/reddit/i18n/utils.ts"),
				d = a("./src/reddit/pages/ErrorPages/index.tsx"),
				m = a("./src/reddit/selectors/profile.ts"),
				u = a("./src/reddit/selectors/user.ts"),
				p = a("./src/config.ts"),
				h = a("./src/lib/lessComponent.tsx"),
				f = a("./src/reddit/components/Settings/shared/Heading.tsx"),
				g = a("./src/reddit/components/Settings/shared/Widgets.tsx"),
				b = a("./src/reddit/controls/Typography/index.tsx"),
				E = a("./src/reddit/i18n/components.tsx"),
				y = a("./src/reddit/pages/ProfileModSettings/Navigation.m.less"),
				v = a.n(y);
			const w = h.a.li("listItem", v.a),
				x = h.a.wrapped(g.i, "sectionWrapper", v.a);
			class _ extends r.a.PureComponent {
				render() {
					const {
						profileName: e
					} = this.props, t = "user/".concat(e);
					return r.a.createElement("div", null, r.a.createElement(f.b, null, r.a.createElement(E.c, null, "Profile moderation")), r.a.createElement(k, null, r.a.createElement(b.f, null, r.a.createElement(E.c, null, "Posting directly to your profile is optional. If you choose not to post to your profile, you will not have a need for moderation tools.")), r.a.createElement(b.f, null, r.a.createElement(E.c, null, "If you do choose to post to your profile, then it's important to get familiar with your"), r.a.createElement(g.m, {
						href: "https://www.reddithelp.com/en/categories/using-reddit/profiles/profile-moderation-tools"
					}, r.a.createElement(E.c, null, " moderation tools")), r.a.createElement(E.c, null, " and the "), r.a.createElement(g.m, {
						href: "https://www.reddit.com/help/healthycommunities/"
					}, r.a.createElement(E.c, null, "mod guidelines ")), r.a.createElement(E.c, null, "to ensure that personal information, spam, and other disallowed content isn't showing up and remaining in the comments of your profile. Below, you'll find a basic guide for the tools provided to you:"))), r.a.createElement(S, {
						title: Object(c.c)("Traffic"),
						url: "".concat(p.a.redditUrl, "/").concat(t, "/about/traffic/")
					}, r.a.createElement(E.c, null, "View traffic statistics and graphs for your profile.")), r.a.createElement(S, {
						title: Object(c.c)("Moderators"),
						url: "".concat(p.a.redditUrl, "/").concat(t, "/about/moderators/")
					}, r.a.createElement(E.c, null, "If your profile's comments are busy and you need some help with moderation, you might want to add on some users as mods to assist you. You can do this here. Choose users that you trust to represent you via their statements and mod actions, and be mindful of what permissions your grant them.")), r.a.createElement(S, {
						title: Object(c.c)("Moderation log"),
						url: "".concat(p.a.redditUrl, "/").concat(t, "/about/log/")
					}, r.a.createElement(E.c, null, "The moderation log lists all mod actions taken by any mod on your profile. If you are the only moderator of your profile the only actions will be from you or Automoderator."), r.a.createElement("ul", null, r.a.createElement(w, null, r.a.createElement(E.c, null, "If you add multiple moderators, the mod log can be helpful in seeing who has taken a particular action like banning a user or removing a comment.")), r.a.createElement(w, null, r.a.createElement(E.c, null, "The moderation log will also list actions taken by Automoderator if it is set up to make actions on your profile.")))), r.a.createElement(S, {
						title: Object(c.c)("Automoderator"),
						url: "".concat(p.a.redditUrl, "/").concat(t, "/wiki/edit/config/automoderator/")
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, null, "Automoderator is our friendly robot that can be used to help you moderate your community. Automod is a versatile tool that can be set up to remove or flag content posted on your page so you can review it."), r.a.createElement("ul", null, r.a.createElement(w, null, r.a.createElement(E.c, null, "If you have questions about setting up rules,", " "), r.a.createElement(g.m, {
						href: "".concat(p.a.redditUrl, "/r/automoderator")
					}, "r/Automoderator"), r.a.createElement(E.c, null, " ", "is a valuable resource for help and advice. You can see the", " "), r.a.createElement(g.m, {
						href: "".concat(p.a.redditUrl, "/wiki/automoderator/full-documentation")
					}, r.a.createElement(E.c, null, "full documentation of how it works here")))))), r.a.createElement(S, {
						title: Object(c.c)("Moderation queue"),
						url: "".concat(p.a.redditUrl, "/").concat(t, "/about/modqueue/")
					}, r.a.createElement(E.c, null, "Content that users report can be found here so you can approve or remove it.")), r.a.createElement(S, {
						title: Object(c.c)("Ban users"),
						url: "".concat(p.a.redditUrl, "/").concat(t, "/about/banned")
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, null, "This tool allows you to ban users from participating in your page and should be used sparingly. If users are violating site-wide rules or harassing you, please contact the admins at"), r.a.createElement(g.m, {
						href: "mailto:contact@reddit.com"
					}, r.a.createElement(E.c, null, " contact@reddit.com")), r.a.createElement(E.c, null, " or "), r.a.createElement(g.m, {
						href: "https://www.reddit.com/message/compose?to=%2Fr%2Freddit.com"
					}, r.a.createElement(E.c, null, "r/reddit.com modmail")), r.a.createElement(E.c, null, "."), r.a.createElement("ul", null, r.a.createElement(w, null, r.a.createElement(E.c, null, "Bans can be permanent or timed. For minor infractions a warning or a short ban is often enough.")), r.a.createElement(w, null, r.a.createElement(E.c, null, "It is important to use bans only in situations where it is warranted. Educating users or ignoring someone’s bad behavior can often be more effective than banning them."))))), r.a.createElement(S, {
						title: Object(c.c)("Flairs"),
						url: "".concat(p.a.redditUrl, "/").concat(t, "/about/flair/")
					}, r.a.createElement(E.c, null, "Flair is text that displays next to someone’s username. Users in sports communities use flair to display their favorite team."), r.a.createElement("ul", null, r.a.createElement(w, null, r.a.createElement(E.c, null, "“Flair” is like a label you can apply to a post or a specific user. For example, you could flair someone who works with you so other users are aware of who they are.")))), r.a.createElement(S, {
						title: Object(c.c)("Spam"),
						url: "".concat(p.a.redditUrl, "/").concat(t, "/about/spam/")
					}, r.a.createElement(E.c, null, "All removed content can be seen here. This includes content caught by the site wide spam filter and content removed by a moderator."), r.a.createElement("ul", null, r.a.createElement(w, null, r.a.createElement(E.c, null, "You can approve content that was removed accidentally.")))), r.a.createElement(k, null, r.a.createElement(E.c, null, "Have more questions? "), r.a.createElement(g.m, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, r.a.createElement(E.c, null, "Submit a request"))))
				}
			}

			function S(e) {
				let {
					title: t,
					url: a,
					children: n
				} = e;
				return r.a.createElement(g.f, {
					link: a,
					label: t,
					subtext: n
				})
			}

			function k(e) {
				let {
					children: t
				} = e;
				return r.a.createElement(x, null, r.a.createElement(g.l, null, t))
			}
			var C = _;
			const O = Object(s.c)({
					isModerator: (e, t) => Object(m.f)(e, t.match.params),
					isOwnProfile: (e, t) => Object(u.J)(e, t.match.params.profileName),
					isPending: e => e.profileModSettingsPage.api.pending,
					hasSubreddit: (e, t) => Object(u.db)(e, {
						userName: t.match.params.profileName
					})
				}),
				N = Object(o.b)(O);
			class j extends r.a.Component {
				render() {
					const {
						isModerator: e,
						isOwnProfile: t,
						isPending: a,
						hasSubreddit: n,
						match: o
					} = this.props;
					if (a) return null;
					const {
						profileName: s
					} = o.params;
					return e || t ? n ? r.a.createElement(r.a.Fragment, null, r.a.createElement(l.c, {
						constrainWidth: !0,
						title: "/user/".concat(s, " Settings"),
						icon: l.b.GEAR
					}), r.a.createElement(i.a, null, r.a.createElement(C, {
						profileName: s
					}))) : r.a.createElement(d.b, {
						message: Object(c.c)("The requested page is not supported")
					}) : r.a.createElement(d.a, null)
				}
			}
			t.default = N(j)
		}
	}
]);
//# sourceMappingURL=ProfileModeration.dd3805793c52c4ccedc5.js.map