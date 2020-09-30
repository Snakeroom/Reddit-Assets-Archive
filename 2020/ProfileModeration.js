// https://www.redditstatic.com/desktop2x/ProfileModeration.3d1bb075df00b902f633.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
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
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (o = Object.getOwnPropertySymbols(e); a < o.length; a++) t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]])
				}
				return n
			};
			const u = s.a.h2("Heading", l.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n
				} = e, o = d(e, ["children", "isResponsiveSettingsEnabled"]);
				return a.a.createElement(u, c({}, o, {
					className: Object(r.a)({
						[l.a["m-responsive"]]: n
					})
				}), t)
			};
			const m = s.a.p("HeadingSubtext", l.a)
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
			var o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx");
			const l = i.a.div("Container", s.a),
				c = i.a.div("Content", s.a),
				d = i.a.div("Sidebar", s.a);
			t.a = e => a.a.createElement(l, {
				className: e.className
			}, a.a.createElement(c, null, e.children), a.a.createElement(d, null, e.sidebar))
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
				return w
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/lodash/throttle.js"),
				a = n.n(o),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				u = n("./src/reddit/constants/zIndex.ts"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				p = n("./src/reddit/components/TabNav/index.m.less"),
				f = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var g, y = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (o = Object.getOwnPropertySymbols(e); a < o.length; a++) t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]])
				}
				return n
			};
			! function(e) {
				e.GEAR = "gear"
			}(g || (g = {}));
			const v = c.a.wrapped(h.a, "Gear", f.a),
				_ = c.a.h3("Title", f.a),
				k = c.a.div("TabNavContainer", f.a),
				E = c.a.div("Tabs", f.a),
				w = c.a.wrapped(e => {
					var {
						active: t,
						children: n,
						enabled: o
					} = e, a = y(e, ["active", "children", "enabled"]);
					return s.a.createElement(m.a, b({}, a, {
						"aria-selected": t,
						className: Object(i.a)(a.className, {
							[f.a.mIsActive]: t,
							[f.a.mIsEnabled]: !1 !== o
						}),
						role: "tab"
					}), n)
				}, "Tab", f.a),
				x = e => {
					switch (e) {
						case g.GEAR:
							return s.a.createElement(v, null);
						default:
							return null
					}
				},
				S = () => window.pageYOffset || window.scrollY,
				O = 75,
				C = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: d.f,
					willChange: "transform",
					zIndex: u.g
				};
			class j extends s.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = a()(() => {
						this.state.sticky || this.forceUnsticky ? S() < O && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : S() >= O && this.setState({
							sticky: !0
						})
					}, l.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					} = this.props, o = Object(i.a)({
						[f.a.mResponsive]: t
					});
					return s.a.createElement(k, {
						className: Object(i.a)(o, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, s.a.createElement(_, {
						className: Object(i.a)(o, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, x(this.props.icon), this.props.title), s.a.createElement(E, {
						className: Object(i.a)(o, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? C : void 0
					}, this.props.children))
				}
			}
			t.c = j
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				a = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: l.a.container
					}, r.a.createElement("h3", {
						className: l.a.title
					}, t || o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(s.k, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, o.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: l.a.container
					}, r.a.createElement("h3", {
						className: l.a.title
					}, t || o.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(s.k, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, o.fbt._("Go Home", null, {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				c = n("./src/reddit/components/TabNav/index.tsx"),
				d = n("./src/reddit/pages/ErrorPages/index.tsx"),
				u = n("./src/reddit/selectors/profile.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				h = n("./src/config.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				b = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = n("./src/reddit/controls/Typography/index.tsx"),
				y = n("./src/reddit/pages/ProfileModSettings/Navigation.m.less"),
				v = n.n(y);
			const _ = p.a.li("listItem", v.a),
				k = p.a.wrapped(b.j, "sectionWrapper", v.a);
			class E extends r.a.PureComponent {
				render() {
					const {
						profileName: e
					} = this.props, t = "user/".concat(e);
					return r.a.createElement("div", null, r.a.createElement(f.b, {
						isResponsiveSettingsEnabled: !1
					}, o.fbt._("Profile moderation", null, {
						hk: "3wd5uz"
					})), r.a.createElement(x, null, r.a.createElement(g.c, null, o.fbt._("Posting directly to your profile is optional. If you choose not to post to your profile, you will not have a need for moderation tools.", null, {
						hk: "1fhfms"
					})), r.a.createElement(g.c, null, o.fbt._("If you do choose to post to your profile, then it's important to get familiar with your {=moderation tools} and the {=mod guidelines} to ensure that personal information, spam, and other disallowed content isn't showing up and remaining in the comments of your profile. Below, you'll find a basic guide for the tools provided to you:", [o.fbt._param("=moderation tools", r.a.createElement(b.n, {
						href: "https://www.reddithelp.com/en/categories/using-reddit/profiles/profile-moderation-tools"
					}, o.fbt._("moderation tools", null, {
						hk: "134iKj"
					}))), o.fbt._param("=mod guidelines", r.a.createElement(b.n, {
						href: "https://www.reddit.com/help/healthycommunities/"
					}, o.fbt._("mod guidelines", null, {
						hk: "1pCYsz"
					})))], {
						hk: "3sL7qq"
					}))), r.a.createElement(w, {
						title: o.fbt._("Traffic", null, {
							hk: "3p7y3G"
						}),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/traffic/")
					}, o.fbt._("View traffic statistics and graphs for your profile.", null, {
						hk: "Ldtz5"
					})), r.a.createElement(w, {
						title: o.fbt._("Moderators", null, {
							hk: "3NZZDm"
						}),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/moderators/")
					}, o.fbt._("If your profile's comments are busy and you need some help with moderation, you might want to add on some users as mods to assist you. You can do this here. Choose users that you trust to represent you via their statements and mod actions, and be mindful of what permissions your grant them.", null, {
						hk: "4iZhyS"
					})), r.a.createElement(w, {
						title: o.fbt._("Moderation log", null, {
							hk: "3SnXfa"
						}),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/log/")
					}, o.fbt._("The moderation log lists all mod actions taken by any mod on your profile. If you are the only moderator of your profile the only actions will be from you or Automoderator.", null, {
						hk: "2E5IUN"
					}), r.a.createElement("ul", null, r.a.createElement(_, null, o.fbt._("If you add multiple moderators, the mod log can be helpful in seeing who has taken a particular action like banning a user or removing a comment.", null, {
						hk: "1jkBZO"
					})), r.a.createElement(_, null, o.fbt._("The moderation log will also list actions taken by Automoderator if it is set up to make actions on your profile.", null, {
						hk: "1jFtuS"
					})))), r.a.createElement(w, {
						title: o.fbt._("Automoderator", null, {
							hk: "RlDIl"
						}),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/wiki/edit/config/automoderator/")
					}, r.a.createElement(r.a.Fragment, null, o.fbt._("Automoderator is our friendly robot that can be used to help you moderate your community. Automod is a versatile tool that can be set up to remove or flag content posted on your page so you can review it.", null, {
						hk: "39AqGb"
					}), r.a.createElement("ul", null, r.a.createElement(_, null, o.fbt._("If you have questions about setting up rules, {=r/Automoderator} is a valuable resource for help and advice. You can see the {=full documentation of how it works here}", [o.fbt._param("=r/Automoderator", r.a.createElement(b.n, {
						href: "".concat(h.a.redditUrl, "/r/automoderator")
					}, o.fbt._("r/Automoderator", null, {
						hk: "4G6JG7"
					}))), o.fbt._param("=full documentation of how it works here", r.a.createElement(b.n, {
						href: "".concat(h.a.redditUrl, "/wiki/automoderator/full-documentation")
					}, o.fbt._("full documentation of how it works here", null, {
						hk: "38DU6Z"
					})))], {
						hk: "3RyHot"
					}))))), r.a.createElement(w, {
						title: o.fbt._("Moderation queue", null, {
							hk: "2klx0L"
						}),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/modqueue/")
					}, o.fbt._("Content that users report can be found here so you can approve or remove it.", null, {
						hk: "1XCfvS"
					})), r.a.createElement(w, {
						title: o.fbt._("Ban users", null, {
							hk: "1aSzpl"
						}),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/banned")
					}, r.a.createElement(r.a.Fragment, null, o.fbt._("This tool allows you to ban users from participating in your page and should be used sparingly. If users are violating site-wide rules or harassing you, please contact the admins using our {=contact form} or {=r/reddit.com modmail} .", [o.fbt._param("=contact form", r.a.createElement(b.n, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, o.fbt._("contact form", null, {
						hk: "2SNqWb"
					}))), o.fbt._param("=r/reddit.com modmail", r.a.createElement(b.n, {
						href: "https://www.reddit.com/message/compose?to=%2Fr%2Freddit.com"
					}, o.fbt._("r/reddit.com modmail", null, {
						hk: "39y2SZ"
					})))], {
						hk: "utbR5"
					}), r.a.createElement("ul", null, r.a.createElement(_, null, o.fbt._("Bans can be permanent or timed. For minor infractions a warning or a short ban is often enough.", null, {
						hk: "lLQqA"
					})), r.a.createElement(_, null, o.fbt._("It is important to use bans only in situations where it is warranted. Educating users or ignoring someone’s bad behavior can often be more effective than banning them.", null, {
						hk: "RCs7j"
					}))))), r.a.createElement(w, {
						title: o.fbt._("Flairs", null, {
							hk: "1Xgd2b"
						}),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/flair/")
					}, o.fbt._("Flair is text that displays next to someone’s username. Users in sports communities use flair to display their favorite team.", null, {
						hk: "1d8Ly3"
					}), r.a.createElement("ul", null, r.a.createElement(_, null, o.fbt._("“Flair” is like a label you can apply to a post or a specific user. For example, you could flair someone who works with you so other users are aware of who they are.", null, {
						hk: "2vQddD"
					})))), r.a.createElement(w, {
						title: o.fbt._("Spam", null, {
							hk: "Z2twC"
						}),
						url: "".concat(h.a.redditUrl, "/").concat(t, "/about/spam/")
					}, o.fbt._("All removed content can be seen here. This includes content caught by the site wide spam filter and content removed by a moderator.", null, {
						hk: "13xRK1"
					}), r.a.createElement("ul", null, r.a.createElement(_, null, o.fbt._("You can approve content that was removed accidentally.", null, {
						hk: "4n2TOC"
					})))), r.a.createElement(x, null, o.fbt._("Have more questions?", null, {
						hk: "2YqHcl"
					}), r.a.createElement(b.n, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, o.fbt._("Submit a request", null, {
						hk: "1poUz6"
					}))))
				}
			}

			function w(e) {
				let {
					title: t,
					url: n,
					children: o
				} = e;
				return r.a.createElement(b.f, {
					link: n,
					label: t,
					subtext: o
				})
			}

			function x(e) {
				let {
					children: t
				} = e;
				return r.a.createElement(k, null, r.a.createElement(b.m, null, t))
			}
			var S = E;
			const O = Object(i.c)({
					isModerator: (e, t) => Object(u.f)(e, t.match.params),
					isOwnProfile: (e, t) => Object(m.L)(e, t.match.params.profileName),
					isPending: e => e.profileModSettingsPage.api.pending,
					hasSubreddit: (e, t) => Object(m.hb)(e, {
						userName: t.match.params.profileName
					})
				}),
				C = Object(s.b)(O);
			class j extends r.a.Component {
				render() {
					const {
						isModerator: e,
						isOwnProfile: t,
						isPending: n,
						hasSubreddit: a,
						match: s
					} = this.props;
					if (n) return null;
					const {
						profileName: i
					} = s.params;
					return e || t ? a ? r.a.createElement(r.a.Fragment, null, r.a.createElement(c.c, {
						constrainWidth: !0,
						title: "/user/".concat(i, " Settings"),
						icon: c.b.GEAR
					}), r.a.createElement(l.a, null, r.a.createElement(S, {
						profileName: i
					}))) : r.a.createElement(d.b, {
						message: o.fbt._("The requested page is not supported", null, {
							hk: "41VUSW"
						})
					}) : r.a.createElement(d.a, null)
				}
			}
			t.default = C(j)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileModeration.3d1bb075df00b902f633.js.map