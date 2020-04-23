// https://www.redditstatic.com/desktop2x/EmailCollectionBanner.3d4f72cf8ca94515f251.js
// Retrieved at 4/23/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailCollectionBanner"], {
		"./src/reddit/components/EmailCollection/Banner/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "kEQVd8aneM1tVkcIKUyDT",
				innerContainer: "_1I7r9jQEbdVXbklbNNdr9d",
				addEmail: "_1W9_YG1glHXb4sNlEEB1Yi",
				topLine: "_25n1vjWrHyVcdDkuLwR2Y-",
				layout: "_2p2GJqXvl9hoFT7vpcbdQj",
				envelope: "Qw7S_mLx6jh-G7N9EwHQN",
				text: "_2RF0fzQBXhCaTmsS7SVEbk",
				header: "_3Fkhk8W1TiKrZt2cKeiKBK",
				title: "pA51pXP8kqXK7gVZueSnX",
				description: "_2Jjax_A5_sk6cCocgHzlV5",
				close: "_3GEY4V1vCvw8HqDBo4DyQW",
				closeIcon: "_3QZWpJ7epNySDhiKtc-OEx"
			}
		},
		"./src/reddit/components/EmailCollection/Banner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/emailCollection/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/EmailCollection/Envelope/index.tsx"),
				m = n("./src/reddit/components/LayoutNavigation/Container.tsx"),
				p = n("./src/reddit/components/Settings/modalIds.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/models/User/index.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/EmailCollection/Banner/index.m.less"),
				y = n.n(g);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = "banner", C = Object(r.c)({
				user: f.i
			}), N = Object(a.b)(C, e => ({
				onAddEmail: () => e(Object(d.h)(p.c)),
				onClose: () => e(Object(c.a)())
			}));
			class L extends o.a.Component {
				constructor() {
					super(...arguments), this.closeBanner = () => {
						this.props.sendEvent(Object(v.e)(_)), this.props.onClose()
					}, this.addEmail = () => {
						this.props.onAddEmail(), this.props.sendEvent(Object(v.a)(_))
					}, this.renderLayout = () => {
						const {
							user: e
						} = this.props;
						return e ? o.a.createElement("div", {
							className: y.a.layout
						}, o.a.createElement(l.a, {
							className: y.a.envelope
						}), o.a.createElement("div", {
							className: y.a.text
						}, o.a.createElement("div", {
							className: y.a.header
						}, o.a.createElement("h2", {
							className: y.a.title
						}, E._("{username}, add your email to verify your Reddit account.", [E._param("username", Object(x.f)(e))], {
							hk: "1WZjMk"
						})), o.a.createElement(h.i, {
							className: y.a.addEmail,
							onClick: this.addEmail
						}, E._("Add email", null, {
							hk: "3kllGi"
						}))), o.a.createElement("p", {
							className: y.a.description
						}, E._("Verify your email to prevent being locked out of your account.", null, {
							hk: "27IsZu"
						})))) : null
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(v.f)(_))
				}
				render() {
					const {
						className: e,
						user: t
					} = this.props;
					return t ? o.a.createElement("div", {
						className: Object(i.a)(y.a.wrapper, e)
					}, o.a.createElement("div", {
						className: y.a.topLine
					}), o.a.createElement(m.a, {
						containerClassName: y.a.innerContainer,
						considerSidebar: !0,
						render: this.renderLayout
					}), o.a.createElement("button", {
						className: y.a.close,
						onClick: this.closeBanner
					}, o.a.createElement(b.a, {
						className: y.a.closeIcon
					}))) : null
				}
			}
			t.default = N(Object(u.c)(L))
		},
		"./src/reddit/components/EmailCollection/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1yYBGklEZ27AA6Pk4a5xcB",
				content: "_1tsHXJq8O99kY-Hnw0TU9H",
				envelopeIcon: "_2MwJgJPAzuZmaOVwlLfjeO",
				warningIcon: "_1UqQ04HyR3qGPylb_9baOq"
			}
		},
		"./src/reddit/components/EmailCollection/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Envelope/index.tsx"),
				i = n("./src/reddit/icons/svgs/Warning/index.tsx"),
				c = n("./src/reddit/components/EmailCollection/Envelope/index.m.less"),
				d = n.n(c);
			t.a = e => o.a.createElement("div", {
				className: Object(a.a)(d.a.container, e.className)
			}, o.a.createElement("div", {
				className: d.a.content
			}, o.a.createElement(r.a, {
				className: d.a.envelopeIcon
			}), o.a.createElement(i.a, {
				className: Object(a.a)(d.a.warningIcon, e.warningClassName)
			})))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = n.n(p),
				h = n("./src/lib/lessComponent.tsx");
			const v = Object(m.t)(),
				b = Object(r.c)({
					layout: m.M
				}),
				x = Object(a.b)(b);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.m + c.q + c.r,
						t = l.a - e,
						n = c.g - t,
						s = l.a + n + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(s, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.g + c.q + c.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.r, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.g + c.q + c.r, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: u.a.Container
					}, o.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = v(x(h.a.wrapped(f, "Component", u.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, n) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				defaultLayout: "_3gXSYtUgFtDmPjSmbC1exY",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = n("./src/reddit/layout/page/Listing/Content.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				m = n("./src/reddit/selectors/userPrefs.ts"),
				p = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				u = n("./src/reddit/components/LayoutNavigation/Container.m.less"),
				h = n.n(u),
				v = n("./src/lib/lessComponent.tsx");
			const b = v.a.div("BodyContainer", h.a),
				x = v.a.div("SidebarPlaceholder", h.a),
				f = v.a.div("InnerContainer", h.a),
				g = Object(r.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				y = Object(a.b)(g);
			class E extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: n,
						isSubscriptionsPinned: s,
						considerSidebar: a = !0,
						onFocus: r,
						onBlur: c
					} = this.props;
					let l = 0;
					return s && !e && t && (l += i.u), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(b, {
						onFocus: r,
						onBlur: c
					}, o.a.createElement(d.a, {
						fitPageToContent: !0
					}, o.a.createElement(f, {
						className: n
					}, o.a.createElement(p.a, {
						bladeOpen: e,
						considerSidebar: a,
						offsetLeft: l,
						render: this.props.render
					}))), a && o.a.createElement(x, null)))
				}
			}
			t.a = v.a.wrapped(y(E), "Component", h.a)
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Warning/index.m.less"),
				i = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), o.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=EmailCollectionBanner.3d4f72cf8ca94515f251.js.map