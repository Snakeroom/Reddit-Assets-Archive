// https://www.redditstatic.com/desktop2x/EmailCollectionBanner.f5ee35001a9693ae2b87.js
// Retrieved at 8/3/2023, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailCollectionBanner"], {
		"./src/reddit/components/EmailCollection/Banner/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "kEQVd8aneM1tVkcIKUyDT",
				innerContainer: "_1I7r9jQEbdVXbklbNNdr9d",
				addEmail: "_1W9_YG1glHXb4sNlEEB1Yi",
				active: "_3ndPlMEDEQ0VlfTedxJKXg",
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
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/emailCollection/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/EmailCollection/Envelope/index.tsx"),
				d = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/constants/componentSizes.ts"),
				p = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.tsx"),
				v = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/userPrefs.ts"),
				f = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				h = n("./src/reddit/components/LayoutNavigation/Container.m.less"),
				x = n.n(h),
				g = n("./src/lib/lessComponent.tsx");
			const E = g.a.div("BodyContainer", x.a),
				y = g.a.div("SidebarPlaceholder", x.a),
				_ = g.a.div("InnerContainer", x.a),
				C = Object(d.c)({
					bladeOpen: e => !!Object(v.i)(e),
					isSubscriptionsPinned: b.c
				}),
				N = Object(o.b)(C);
			class O extends a.a.Component {
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
							bodyScrollOffset: Object(p.d)(document.body)
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
						considerSidebar: o = !0,
						onFocus: r,
						onBlur: i
					} = this.props;
					let c = 0;
					return s && !e && t && (c += m.t), 0 !== this.state.bodyScrollOffset && (c -= this.state.bodyScrollOffset), a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement(E, {
						onFocus: r,
						onBlur: i
					}, a.a.createElement(u.a, {
						fitPageToContent: !0
					}, a.a.createElement(_, {
						className: n
					}, a.a.createElement(f.a, {
						bladeOpen: e,
						considerSidebar: o,
						offsetLeft: c,
						render: this.props.render
					}))), o && a.a.createElement(y, null)))
				}
			}
			var L = g.a.wrapped(N(O), "Component", x.a),
				S = n("./src/reddit/components/Settings/modalIds.ts"),
				j = n("./src/reddit/components/TrackingHelper/index.tsx"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				B = n("./src/reddit/icons/svgs/Close/index.tsx"),
				P = n("./src/reddit/models/User/index.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/EmailCollection/Banner/index.m.less"),
				D = n.n(H);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					className: t
				} = e;
				const n = Object(o.d)(),
					d = Object(j.b)(),
					m = Object(o.e)(I.m);
				Object(s.useEffect)(() => {
					d(Object(k.f)("banner"))
				}, [d]);
				const p = () => {
					n(Object(c.h)(S.h)), d(Object(k.a)("banner"))
				};
				return m ? a.a.createElement("div", {
					className: Object(r.a)(D.a.wrapper, t)
				}, a.a.createElement("div", {
					className: D.a.topLine
				}), a.a.createElement(L, {
					containerClassName: D.a.innerContainer,
					considerSidebar: !0,
					render: () => {
						if (!m) return null;
						const e = q._("{username}, add your email to verify your Reddit account.", [q._param("username", Object(P.e)(m))], {
								hk: "1WZjMk"
							}),
							t = q._("Verify your email to prevent being locked out of your account.", null, {
								hk: "27IsZu"
							});
						return a.a.createElement("div", {
							className: D.a.layout
						}, a.a.createElement(l.a, {
							className: D.a.envelope
						}), a.a.createElement("div", {
							className: D.a.text
						}, a.a.createElement("div", {
							className: D.a.header
						}, a.a.createElement("h2", {
							className: D.a.title
						}, e), a.a.createElement(w.a, {
							onClick: p,
							priority: w.c.Secondary
						}, q._("Add email", null, {
							hk: "3kllGi"
						}))), a.a.createElement("p", {
							className: D.a.description
						}, t)))
					}
				}), a.a.createElement("button", {
					className: D.a.close,
					onClick: () => {
						n(Object(i.a)()), d(Object(k.e)("banner"))
					}
				}, a.a.createElement(B.a, {
					className: D.a.closeIcon
				}))) : null
			}
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
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Envelope/index.tsx"),
				i = n("./src/reddit/icons/svgs/Warning/index.tsx"),
				c = n("./src/reddit/components/EmailCollection/Envelope/index.m.less"),
				l = n.n(c);
			t.a = e => a.a.createElement("div", {
				className: Object(o.a)(l.a.container, e.className)
			}, a.a.createElement("div", {
				className: l.a.content
			}, a.a.createElement(r.a, {
				className: l.a.envelopeIcon
			}), a.a.createElement(i.a, {
				className: Object(o.a)(l.a.warningIcon, e.warningClassName)
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
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = n.n(p),
				v = n("./src/lib/lessComponent.tsx");
			const b = Object(m.v)(),
				f = Object(r.c)({
					layout: m.U
				}),
				h = Object(o.b)(f);
			class x extends a.a.Component {
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
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${u.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.l + c.p + c.q,
						t = d.a - e,
						n = c.g - t,
						s = d.a + n + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== l.g.Large ? null : a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${s}px) {\n              .${u.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${c.g+c.p+c.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.q}px) / 2);\n              }\n\n              .${u.a.Component}.${u.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.g+c.p+c.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return a.a.createElement("div", {
						className: u.a.Container
					}, a.a.createElement("div", {
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
			t.a = b(h(v.a.wrapped(x, "Component", u.a)))
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
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), a.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Warning/index.m.less"),
				i = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), a.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailCollectionBanner.f5ee35001a9693ae2b87.js.map