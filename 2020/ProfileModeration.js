// https://www.redditstatic.com/desktop2x/ProfileModeration.4e9d3d73984d33702aed.js
// Retrieved at 4/7/2020, 2:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileModeration"], {
		"./src/reddit/components/Settings/shared/Heading.m.less": function(e, t, n) {
			e.exports = {
				Heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				"m-responsive": "_1zFj2WkkmV422Jul4b3LUb",
				mResponsive: "_1zFj2WkkmV422Jul4b3LUb",
				HeadingSubtext: "_3yr8kdlxh51P-SJDaWVzJD",
				headingSubtext: "_3yr8kdlxh51P-SJDaWVzJD"
			}
		},
		"./src/reddit/components/Settings/shared/Heading.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			const m = s.a.h2("Heading", l.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n
				} = e, a = d(e, ["children", "isResponsiveSettingsEnabled"]);
				return r.a.createElement(m, c({}, a, {
					className: Object(o.a)({
						[l.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = s.a.p("HeadingSubtext", l.a)
		},
		"./src/reddit/components/Settings/shared/Layout.m.less": function(e, t, n) {
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
		"./src/reddit/components/Settings/shared/Layout.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				s = n.n(o),
				i = n("./src/lib/lessComponent.tsx");
			const l = i.a.div("Container", s.a),
				c = i.a.div("Content", s.a),
				d = i.a.div("Sidebar", s.a);
			t.a = e => r.a.createElement(l, {
				className: e.className
			}, r.a.createElement(c, null, e.children), r.a.createElement(d, null, e.sidebar))
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, n) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
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
		"./src/reddit/components/TabNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/lodash/throttle.js"),
				r = n.n(a),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/constants/zIndex.ts"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				h = n("./src/reddit/components/TabNav/index.m.less"),
				f = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var g, y = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			! function(e) {
				e.GEAR = "gear"
			}(g || (g = {}));
			const E = c.a.wrapped(p.a, "Gear", f.a),
				v = c.a.h3("Title", f.a),
				w = c.a.div("TabNavContainer", f.a),
				x = c.a.div("Tabs", f.a),
				_ = c.a.wrapped(e => {
					var {
						active: t,
						children: n,
						enabled: a
					} = e, r = y(e, ["active", "children", "enabled"]);
					return s.a.createElement(u.a, b({}, r, {
						"aria-selected": t,
						className: Object(i.a)(r.className, {
							[f.a.mIsActive]: t,
							[f.a.mIsEnabled]: !1 !== a
						}),
						role: "tab"
					}), n)
				}, "Tab", f.a),
				k = e => {
					switch (e) {
						case g.GEAR:
							return s.a.createElement(E, null);
						default:
							return null
					}
				},
				S = () => window.pageYOffset || window.scrollY,
				O = 75,
				j = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: d.f,
					willChange: "transform",
					zIndex: m.g
				};
			class C extends s.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = r()(() => {
						this.state.sticky || this.forceUnsticky ? S() < O && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : S() >= O && this.setState({
							sticky: !0
						})
					}, l.F), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: n
					} = this.props, a = Object(i.a)({
						[f.a.mResponsive]: t
					});
					return s.a.createElement(w, {
						className: Object(i.a)(a, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, s.a.createElement(v, {
						className: Object(i.a)(a, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, k(this.props.icon), this.props.title), s.a.createElement(x, {
						className: Object(i.a)(a, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? j : void 0
					}, this.props.children))
				}
			}
			t.c = C
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || a.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(s.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, a.fbt._("Go Home", null, {
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
					}, t || a.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(s.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, a.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileModSettings/Navigation.m.less": function(e, t, n) {
			e.exports = {
				listItem: "BvT1z-ywH7tI443Z5ORMe",
				sectionWrapper: "_1Ivld4cbXCFAZRcstB6jkn"
			}
		},
		"./src/reddit/pages/ProfileModSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				l = n("./src/reddit/components/TabNav/index.tsx"),
				c = n("./src/reddit/i18n/utils.ts"),
				d = n("./src/reddit/pages/ErrorPages/index.tsx"),
				m = n("./src/reddit/selectors/profile.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/config.ts"),
				f = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				g = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				y = n("./src/reddit/controls/Typography/index.tsx"),
				E = n("./src/reddit/i18n/components.tsx"),
				v = n("./src/reddit/pages/ProfileModSettings/Navigation.m.less"),
				w = n.n(v);
			const x = f.a.li("listItem", w.a),
				_ = f.a.wrapped(g.i, "sectionWrapper", w.a);
			class k extends r.a.PureComponent {
				render() {
					const {
						profileName: e
					} = this.props, t = "user/".concat(e);
					return r.a.createElement("div", null, r.a.createElement(b.b, {
						isResponsiveSettingsEnabled: !1
					}, r.a.createElement(E.c, null, "Profile moderation")), r.a.createElement(O, null, r.a.createElement(y.c, null, r.a.createElement(E.c, null, "Posting directly to your profile is optional. If you choose not to post to your profile, you will not have a need for moderation tools.")), r.a.createElement(y.c, null, p.fbt._("If you do choose to post to your profile, then it's important to get familiar with your", null, {
						hk: "EuDG2"
					}), r.a.createElement(g.m, {
						href: "https://www.reddithelp.com/en/categories/using-reddit/profiles/profile-moderation-tools"
					}, r.a.createElement(E.c, null, " moderation tools")), r.a.createElement(E.c, null, " and the "), r.a.createElement(g.m, {
						href: "https://www.reddit.com/help/healthycommunities/"
					}, r.a.createElement(E.c, null, "mod guidelines ")), p.fbt._("to ensure that personal information, spam, and other disallowed content isn't showing up and remaining in the comments of your profile. Below, you'll find a basic guide for the tools provided to you:", null, {
						hk: "308itF"
					}))), r.a.createElement(S, {
						title: Object(c.c)("Traffic"),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/traffic/")
					}, r.a.createElement(E.c, null, "View traffic statistics and graphs for your profile.")), r.a.createElement(S, {
						title: Object(c.c)("Moderators"),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/moderators/")
					}, p.fbt._("If your profile's comments are busy and you need some help with moderation, you might want to add on some users as mods to assist you. You can do this here. Choose users that you trust to represent you via their statements and mod actions, and be mindful of what permissions your grant them.", null, {
						hk: "4iZhyS"
					})), r.a.createElement(S, {
						title: Object(c.c)("Moderation log"),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/log/")
					}, r.a.createElement(E.c, null, "The moderation log lists all mod actions taken by any mod on your profile. If you are the only moderator of your profile the only actions will be from you or Automoderator."), r.a.createElement("ul", null, r.a.createElement(x, null, r.a.createElement(E.c, null, "If you add multiple moderators, the mod log can be helpful in seeing who has taken a particular action like banning a user or removing a comment.")), r.a.createElement(x, null, r.a.createElement(E.c, null, "The moderation log will also list actions taken by Automoderator if it is set up to make actions on your profile.")))), r.a.createElement(S, {
						title: Object(c.c)("Automoderator"),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/wiki/edit/config/automoderator/")
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, null, "Automoderator is our friendly robot that can be used to help you moderate your community. Automod is a versatile tool that can be set up to remove or flag content posted on your page so you can review it."), r.a.createElement("ul", null, r.a.createElement(x, null, r.a.createElement(E.c, null, "If you have questions about setting up rules,", " "), r.a.createElement(g.m, {
						href: "".concat(h.a.redditUrl, "/r/automoderator")
					}, "r/Automoderator"), r.a.createElement(E.c, null, " ", "is a valuable resource for help and advice. You can see the", " "), r.a.createElement(g.m, {
						href: "".concat(h.a.redditUrl, "/wiki/automoderator/full-documentation")
					}, r.a.createElement(E.c, null, "full documentation of how it works here")))))), r.a.createElement(S, {
						title: Object(c.c)("Moderation queue"),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/modqueue/")
					}, r.a.createElement(E.c, null, "Content that users report can be found here so you can approve or remove it.")), r.a.createElement(S, {
						title: Object(c.c)("Ban users"),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/banned")
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, null, "This tool allows you to ban users from participating in your page and should be used sparingly. If users are violating site-wide rules or harassing you, please contact the admins using our", " "), r.a.createElement(g.m, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, p.fbt._("contact form", null, {
						hk: "27cqjK"
					})), r.a.createElement(E.c, null, " or "), r.a.createElement(g.m, {
						href: "https://www.reddit.com/message/compose?to=%2Fr%2Freddit.com"
					}, r.a.createElement(E.c, null, "r/reddit.com modmail")), r.a.createElement(E.c, null, "."), r.a.createElement("ul", null, r.a.createElement(x, null, r.a.createElement(E.c, null, "Bans can be permanent or timed. For minor infractions a warning or a short ban is often enough.")), r.a.createElement(x, null, r.a.createElement(E.c, null, "It is important to use bans only in situations where it is warranted. Educating users or ignoring someone’s bad behavior can often be more effective than banning them."))))), r.a.createElement(S, {
						title: Object(c.c)("Flairs"),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/flair/")
					}, r.a.createElement(E.c, null, "Flair is text that displays next to someone’s username. Users in sports communities use flair to display their favorite team."), r.a.createElement("ul", null, r.a.createElement(x, null, r.a.createElement(E.c, null, "“Flair” is like a label you can apply to a post or a specific user. For example, you could flair someone who works with you so other users are aware of who they are.")))), r.a.createElement(S, {
						title: Object(c.c)("Spam"),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/spam/")
					}, r.a.createElement(E.c, null, "All removed content can be seen here. This includes content caught by the site wide spam filter and content removed by a moderator."), r.a.createElement("ul", null, r.a.createElement(x, null, r.a.createElement(E.c, null, "You can approve content that was removed accidentally.")))), r.a.createElement(O, null, r.a.createElement(E.c, null, "Have more questions? "), r.a.createElement(g.m, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, r.a.createElement(E.c, null, "Submit a request"))))
				}
			}

			function S(e) {
				let {
					title: t,
					url: n,
					children: a
				} = e;
				return r.a.createElement(g.f, {
					link: n,
					label: t,
					subtext: a
				})
			}

			function O(e) {
				let {
					children: t
				} = e;
				return r.a.createElement(_, null, r.a.createElement(g.l, null, t))
			}
			var j = k;
			const C = Object(s.c)({
					isModerator: (e, t) => Object(m.f)(e, t.match.params),
					isOwnProfile: (e, t) => Object(u.J)(e, t.match.params.profileName),
					isPending: e => e.profileModSettingsPage.api.pending,
					hasSubreddit: (e, t) => Object(u.db)(e, {
						userName: t.match.params.profileName
					})
				}),
				N = Object(o.b)(C);
			class P extends r.a.Component {
				render() {
					const {
						isModerator: e,
						isOwnProfile: t,
						isPending: n,
						hasSubreddit: a,
						match: o
					} = this.props;
					if (n) return null;
					const {
						profileName: s
					} = o.params;
					return e || t ? a ? r.a.createElement(r.a.Fragment, null, r.a.createElement(l.c, {
						constrainWidth: !0,
						title: "/user/".concat(s, " Settings"),
						icon: l.b.GEAR
					}), r.a.createElement(i.a, null, r.a.createElement(j, {
						profileName: s
					}))) : r.a.createElement(d.b, {
						message: Object(c.c)("The requested page is not supported")
					}) : r.a.createElement(d.a, null)
				}
			}
			t.default = N(P)
		}
	}
]);
//# sourceMappingURL=ProfileModeration.4e9d3d73984d33702aed.js.map