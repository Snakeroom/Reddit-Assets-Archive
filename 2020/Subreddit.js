// https://www.redditstatic.com/desktop2x/Subreddit.756101f8a6d50a3a7b6f.js
// Retrieved at 1/28/2020, 4:40:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~Multireddit~ProfileComments~ProfileOverv~3f5eede2", "Explore~ProfileSnoobuilder~SubredditWiki", "Explore~InFeedChaining", "CategoriesNavigation"], {
		"./src/graphql/operations/SubredditLayers.json": function(e) {
			e.exports = JSON.parse('{"id":"363cd3f2e49f"}')
		},
		"./src/graphql/operations/SubredditLayersByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"ac126cf0db7a"}')
		},
		"./src/graphql/operations/SubredditLayersConfig.json": function(e) {
			e.exports = JSON.parse('{"id":"58282184edf1"}')
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const r = e => e;

			function n(e, t, s) {
				const [n, a] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: o = r
				} = t || {};
				let {
					start: i = 0,
					end: c = n
				} = t || {};
				if ((i = i < 0 ? 0 : i) >= (c = c > n ? n : c)) return;
				let d = a(i),
					l = o(d, i),
					m = i;
				for (let r = i + 1; r < c; r++) {
					const e = a(r),
						t = o(e, r);
					if (t !== l) {
						if (!1 === s(d, l, m, r)) return;
						l = t, m = r, d = e
					}
				}
				s(d, l, m, c)
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/reddit/i18n/utils.ts");
			const n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? a : n;
					return Object(r.c)(i[o])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, s, r) {
				const n = new Date(1e3 * e),
					a = i(n, s, r),
					d = t ? o(n, s) + ", " : "";
				return "".concat(a, " ").concat(d).concat(c(n, s))
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return f
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/structuredStyles/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/telemetry/index.ts");
			const b = Object(r.a)(a.p),
				g = Object(r.a)(a.q),
				x = Object(r.a)(a.o),
				y = (e, t, s) => async (r, n, a) => {
					const o = Object(p.B)(n(), {
						subredditName: e
					});
					if (o) return f(o, t, s)(r, n, a)
				}, f = (e, t, s) => async (r, a, p) => {
					const y = await Object(l.e)(t);
					r(b());
					const f = a();
					try {
						await Object(n.g)("communityIcon", y, e.id)(r, a, p)
					} catch (E) {
						return Object(h.a)(Object(c.c)(f, "something went wrong with the uploading the image")), r(Object(o.e)({
							kind: m.b.Error,
							text: Object(d.c)("Error uploading image, please try again later")
						})), void r(x())
					}
					const v = Object(u.d)(a(), {
						name: "communityIcon"
					});
					if (!v) return Object(h.a)(Object(c.c)(f, "image is null")), r(Object(o.e)({
						kind: m.b.Error,
						text: Object(d.c)("Error uploading image, please try again later")
					})), void r(x());
					await Object(n.k)(e.id, {
						communityIcon: v
					}, i.b.idCard, s)(r, a, p), r(Object(o.e)({
						kind: m.b.SuccessCommunity,
						text: Object(d.c)("Successfully updated Community Icon!")
					})), r(g())
				}
		},
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/MultiredditSidebar/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/multireddit.ts"),
				l = s("./src/reddit/selectors/user.ts");
			const m = Object(c.t)(),
				u = Object(o.c)({
					language: l.T,
					multireddit: d.a,
					subredditCategory: c.l
				}),
				p = Object(a.b)(u);
			t.a = m(p(e => n.a.createElement(i.b, e)))
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(r);
			const a = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = a
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				y = s("./src/lib/lessComponent.tsx");
			const f = y.a.div("Container", x.a),
				v = y.a.div("LoadingHitbox", x.a),
				E = e => setTimeout(() => {
					throw e
				}, 0);
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					E(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: r = []
					} = this.props;
					try {
						return this.frame && d.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: r
						})
					} catch (n) {
						E(n)
					}
				}
				destroySlot() {
					try {
						this.frame && d.b(this.frame)
					} catch (e) {
						E(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(b.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						E(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && d.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && d.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? n.a.createElement(f, {
						"data-slot": t
					}, n.a.createElement(v, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), n.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : n.a.createElement("div", {
						className: s
					})
				}
			}
			O.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(a.b)(() => Object(o.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const r = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(i.a)("".concat(r).concat(s.url), s.queryParams), Object(p.B)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? d.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(h.b)(O))
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return n.a.createElement(o.a, d({
					className: Object(a.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/CategoriesNavigation/Categories/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "pIlxiRadWdcEAlZpZ3w57",
				titleFontH2: "_3vnIPkjF9gBa5GN2XFL1-n",
				titleFontH3: "MvcJW2tVfXEu3OFs8dyUn",
				titleFontH4: "_1EMItyJFgJK_DvcDtXBW5N",
				titleFontH5: "_1mVw3TrTmgMkNGKgvDGV4m",
				titleFontH6: "_1g_9si81i_Ia2WHfpJJysD",
				metadataFont: "hvzV6yOQzOK0U0lb9LIvc",
				flairFont: "_2d5LK8qj16SfFMeiO51ZxA",
				labelsFont: "_25hPBsDfNcLK2OHu5-NUuT",
				actionFont: "bd1M804sJobTLMn9jONGB",
				smallButtonFont: "_1DsZf85_3IARf2X_-StG2S",
				largeButtonFont: "_1aPJzuSXNyPQv9HMxGsdTF",
				tabFont: "_2Or84wUVDTQzfcwoGc7hDN",
				strongTextFont: "_1sReYAe6Edj9tsiVaUjiK6",
				extraSmallFont: "_3TrsJrdDIIsK6TUgXjQlLn",
				bodyFontH1: "_2Je67ruqe_x3kX9CxIJw5j",
				bodyFontH2: "_1uZDFpBkclKxCYaLJCdi8V",
				bodyFontH3: "_1Ohj1SaXQOG-zW_vtbBdJl",
				bodyFontH4: "_3nI5qwD_dLjCpstcuSuzAO",
				bodyFontH5: "_1V79Mo61gXvVAUMIbL8xII",
				bodyFontH6: "_21ljVz_9cQigv7inOMChAh",
				bodyFont: "_1FceGC28wdOKKUG8PA4aSj",
				bodyFontSmall: "G7nA9YAsdHSxeatvbcFfb",
				bodyFontMono: "_3tx_deDztLnD8a7aX8ujTQ",
				container: "_1Fvwm_nUnZInOU-lABGsba",
				item: "_2-ZGfZ8pVitk1Yqnsi6T4O",
				link: "_3F10i35Gntc-o4JIMuVHZP",
				linkActive: "_3yylOQ1SS6TbgJKQ-8Ux7T",
				arrowIcon: "_3mQpw_UbTbG4OYN4uquCwf",
				arrow: "uBD5FR-aGquNrZX3qcvqv",
				arrowLeft: "EJw8EFAUIlMSU6YEHQEpX",
				arrowRight: "_2smW023ohact6kPgSOwT5F"
			}
		},
		"./src/reddit/components/CategoriesNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3v16LgmyO8Zf2vXkCMxaap",
				showDeprecated: "Ke2rT4kBXk4aoi0TgRmOU",
				showFPR: "_2dq2JfGI0L_UOOpy9csUuG",
				showFpr: "_2dq2JfGI0L_UOOpy9csUuG",
				showM2MTopBanner: "_1hNmV-PmgC6xhngpX4Ww6c",
				showSuspended: "_3kGgzwkJvWmHQjDRfE3Zla",
				blue: "_1k8_u_fQLJ8M1TTkQFfbQR",
				innerContainer: "_3QBsJXq9YmMU-WcnI2nbsH",
				categoriesContainer: "_2GfQ0hFW3IubWuHuFqgPhn"
			}
		},
		"./src/reddit/components/CategoriesNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isBrowserDeprecated/index.ts"),
				d = s("./src/reddit/components/AlertBanner/heights.ts"),
				l = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				m = s("./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx"),
				u = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx"),
				p = s("./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx"),
				h = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/components/ResizeSensor/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/categories.tsx"),
				y = s("./src/reddit/constants/listings.ts"),
				f = s("./src/reddit/constants/topic.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/reddit/helpers/trackers/navigation.ts"),
				S = s("./src/reddit/i18n/components.tsx"),
				w = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				P = s("./src/reddit/selectors/monthsToMinutes.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/CategoriesPlacement/Categories/index.m.less"),
				k = s.n(N);
			const I = 16,
				L = "A",
				T = I + 20,
				M = "home-category-tooltip",
				B = ["right", "bottom"],
				R = ["right", "top"],
				F = Object(o.c)({
					isEligibleCountry: w.d,
					isHomeLinkEnabled: P.m,
					isM2MEnabled: P.w,
					isNightmode: _.V
				}),
				D = Object(a.b)(F, e => ({
					visitPopulatedHome: () => e(Object(l.b)({}))
				}));
			class A extends n.a.Component {
				constructor(e) {
					super(e), this.handleResize = () => {
						if (!this.categoriesRef || !this.visibleCategoriesRef) return;
						const e = this.categoriesRef.offsetWidth - T;
						let t = 0,
							s = 0;
						const r = Array.from(this.visibleCategoriesRef.children).filter(e => e.tagName === L);
						let n = r[0];
						for (; t < e && n;) {
							(t += n.offsetWidth + I) < e && (n = r[++s])
						}
						this.setState(e => e.visibleCategoriesCount === s ? null : {
							visibleCategoriesCount: s
						})
					}, this.sendCategoryClickEvent = e => {
						this.props.sendEvent(Object(j.b)(Object(C.f)(e)))
					}, this.sendPopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(y.b.Popular))
					}, this.sendGeopopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(x.c))
					}, this.sendEventClickEvent = () => {
						this.eventCategory && this.props.sendEvent(Object(j.b)(this.eventCategory.name))
					}, this.sendOverflowClickEvent = () => {
						this.props.sendEvent(Object(j.b)("overflow"))
					}, this.setCategoriesRef = e => {
						this.categoriesRef = e, this.handleResize()
					}, this.setVisibleCategoriesRef = e => {
						this.visibleCategoriesRef = e, this.handleResize()
					}, this.onHomeClick = e => {
						e.preventDefault(), this.props.isHomeLinkEnabled && (this.props.visitPopulatedHome(), this.props.sendEvent(Object(j.b)(y.b.Home)))
					}, this.showTooltip = () => {
						this.setState(e => e.isTooltipOpen ? null : {
							isTooltipOpen: !0
						})
					}, this.hideTooltip = () => {
						this.setState(e => e.isTooltipOpen ? {
							isTooltipOpen: !1
						} : null)
					}, this.renderVisibleCategory = (e, t) => {
						const {
							visibleCategoriesCount: s
						} = this.state, r = Object(C.f)(e.name), a = r === Object(C.f)(this.props.category || "");
						return n.a.createElement(O.a, {
							className: Object(i.a)(k.a.Link, {
								[k.a.active]: a
							}),
							onMouseDown: () => this.sendCategoryClickEvent(r),
							rel: "nofollow",
							tabIndex: t < s ? 0 : -1,
							to: Object(f.b)(r)
						}, r)
					}, this.renderHiddenCategory = e => {
						const t = Object(C.f)(e.name),
							s = t === Object(C.f)(this.props.category || "");
						return n.a.createElement(E.b, {
							className: Object(i.a)(k.a.Row, {
								[k.a.active]: s
							}),
							displayText: t,
							href: Object(f.b)(t),
							isSelected: s,
							key: t,
							onClick: () => this.sendCategoryClickEvent(t),
							rel: "nofollow"
						})
					}, this.state = {
						isTooltipOpen: !1,
						visibleCategoriesCount: e.categories.length
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize), setTimeout(() => {
						this.handleResize()
					}, 2e3)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						categories: e,
						categoriesPlacementVariant: t,
						category: s,
						className: r,
						isEligibleCountry: a,
						isHomeLinkEnabled: o,
						isM2MEnabled: c,
						isNightmode: d
					} = this.props, {
						isTooltipOpen: l,
						visibleCategoriesCount: g
					} = this.state;
					let f = e;
					if (this.eventCategory = Object(w.b)(), this.eventCategory) {
						const e = Object(C.f)(this.eventCategory.name);
						f = f.filter(t => e !== Object(C.f)(t.name))
					}
					if (0 === f.length) return null;
					const v = f.slice(g),
						E = s === y.b.Home,
						j = s === y.b.Popular,
						P = s === x.c,
						_ = s === x.b,
						N = Object(w.c)(t) && !d ? k.a.blue : void 0;
					return n.a.createElement("div", {
						className: Object(i.a)(k.a.Container, N, r)
					}, c && n.a.createElement("span", {
						id: M,
						onMouseEnter: this.showTooltip,
						onMouseLeave: this.hideTooltip,
						onMouseMove: this.showTooltip
					}, n.a.createElement(O.a, {
						className: Object(i.a)(k.a.Link, {
							[k.a.active]: E,
							[k.a.disabled]: !o
						}),
						disabled: !o,
						onMouseDown: this.onHomeClick,
						to: y.c[y.b.Home]
					}, n.a.createElement(S.c, null, "Home"), !o && n.a.createElement(p.a, {
						className: k.a.HomeDisabledTooltip,
						isOpen: l,
						tooltipId: M
					}))), n.a.createElement("span", {
						className: k.a.Item
					}, n.a.createElement(O.a, {
						className: Object(i.a)(k.a.Link, {
							[k.a.active]: j
						}),
						onMouseDown: this.sendPopularClickEvent,
						to: y.c[y.b.Popular]
					}, n.a.createElement(S.c, null, "Popular"))), this.eventCategory && n.a.createElement("span", {
						className: k.a.Item
					}, n.a.createElement(m.a, {
						className: Object(i.a)(k.a.Link, {
							[k.a.active]: _
						}),
						eventCategory: this.eventCategory,
						onMouseDown: this.sendEventClickEvent
					})), a && n.a.createElement("span", {
						className: k.a.Item
					}, n.a.createElement(u.a, {
						changeButtonClassName: k.a.ChangeButton,
						className: Object(i.a)(k.a.Link, {
							[k.a.active]: P
						}),
						onMouseDown: this.sendGeopopularClickEvent
					})), n.a.createElement("div", {
						className: k.a.Categories,
						ref: this.setCategoriesRef
					}, n.a.createElement("div", {
						className: k.a.VisibleCategories,
						ref: this.setVisibleCategoriesRef
					}, f.slice(0, g).map(this.renderVisibleCategory), v.length > 0 && n.a.createElement(h.b, {
						className: k.a.OverflowMenu,
						dropdownClassName: Object(i.a)(k.a.OverflowMenuDropdown, N),
						dropdownId: "categories-navigation",
						isFixed: !0,
						onClick: this.sendOverflowClickEvent,
						targetPosition: B,
						tooltipPosition: R
					}, v.map(this.renderHiddenCategory)), f.slice(g).map(this.renderVisibleCategory))), n.a.createElement(b.a, {
						onResize: this.handleResize
					}))
				}
			}
			var W = Object(v.t)()(D(Object(g.b)(A))),
				H = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				V = s("./src/reddit/constants/experiments.ts"),
				U = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/selectors/category.ts"),
				z = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				K = s("./node_modules/lodash/isEqual.js"),
				q = s.n(K),
				Q = s("./node_modules/react-motion/lib/react-motion.js"),
				Z = s("./src/reddit/constants/page.ts"),
				J = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Y = s("./src/reddit/actions/category.ts"),
				X = s("./src/reddit/components/CategoriesNavigation/Categories/index.m.less"),
				$ = s.n(X);
			class ee extends n.a.Component {
				constructor() {
					super(...arguments), this.sendClickEvent = () => {
						this.props.sendEvent(Object(j.b)(Object(C.f)(this.props.category.name)))
					}, this.handleButtonClick = () => {
						this.sendClickEvent(), this.props.loadSubredditsAndNavigate()
					}
				}
				render() {
					const {
						category: e
					} = this.props;
					return n.a.createElement("span", {
						className: $.a.item,
						ref: this.props.innerRef
					}, n.a.createElement(O.a, {
						className: Object(i.a)($.a.link, this.props.isActive && $.a.linkActive),
						to: "".concat(y.c[Z.d.Explore], "/").concat(Object(C.f)(e.name)),
						onMouseDown: this.sendClickEvent
					}, e.name))
				}
			}
			var te = Object(a.b)(() => {
				const e = Object(G.c)();
				return Object(o.c)({
					language: _.T,
					subreddits: (t, s) => {
						let {
							category: r
						} = s;
						return e(t, {
							categoryName: Object(C.f)(r.name)
						})
					}
				})
			}, (e, t) => {
				let {
					category: s
				} = t;
				return {
					loadSubredditsAndNavigate: () => e(Y.j(s.id))
				}
			})(Object(g.b)(ee));
			class se extends n.a.Component {
				constructor() {
					super(...arguments), this.scrollTo = e => {
						this.containerRef && (this.containerRef.scrollLeft = e)
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}
				}
				componentDidMount() {
					this.scrollTo(this.props.scrollLeft)
				}
				componentDidUpdate(e) {
					this.scrollTo(e.scrollLeft)
				}
				render() {
					return n.a.createElement("div", {
						className: Object(i.a)($.a.container, this.props.className),
						ref: this.setContainerRef
					}, this.props.children)
				}
			}
			const re = 300,
				ne = 24,
				ae = {
					x: 0
				},
				oe = e => n.a.createElement("div", {
					className: Object(i.a)($.a.arrow, e.className),
					onClick: e.onClick
				}, n.a.createElement(J.b, {
					className: $.a.arrowIcon
				}));
			class ie extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						scrollLeft: 0,
						showLeftArrow: !1,
						showRightArrow: !1
					}, this.scrollTo = e => {
						if (!this.containerRef) return;
						const t = this.getMaxScrollLeft(),
							s = Math.min(Math.max(0, e), t),
							r = {
								scrollLeft: s,
								showLeftArrow: 0 !== s,
								showRightArrow: s !== t
							};
						this.setState(e => q()(e, r) ? null : r)
					}, this.handleResize = () => {
						if (!this.containerRef) return;
						let e;
						const {
							scrollLeft: t
						} = this.state, {
							clientWidth: s,
							scrollWidth: r
						} = this.containerRef;
						e = r > s ? {
							scrollLeft: Math.min(this.getMaxScrollLeft(), t),
							showLeftArrow: t > 0,
							showRightArrow: t + s < r
						} : {
							scrollLeft: 0,
							showLeftArrow: !1,
							showRightArrow: !1
						}, this.setState(t => q()(t, e) ? null : e)
					}, this.handleLeftArrowClick = () => {
						const {
							scrollLeft: e
						} = this.state;
						if (!this.containerRef || 0 === e) return;
						this.sendScrollEvent();
						const t = Math.max(0, e - re);
						this.setState({
							scrollLeft: t,
							showLeftArrow: 0 !== t,
							showRightArrow: !0
						})
					}, this.handleRightArrowClick = () => {
						const {
							scrollLeft: e
						} = this.state, t = this.getMaxScrollLeft();
						if (!this.containerRef || e >= t) return;
						this.sendScrollEvent();
						const s = Math.min(t, e + re);
						this.setState({
							scrollLeft: s,
							showLeftArrow: !0,
							showRightArrow: s !== t
						})
					}, this.sendScrollEvent = () => {
						this.props.sendEvent(j.c)
					}, this.sendAllCategoriesClickEvent = () => {
						this.props.sendEvent(Object(j.b)("all"))
					}, this.sendPopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(Z.d.Popular))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.handleResize(), this.ensureActiveIsVisible()
					}, this.setActiveRef = e => {
						this.activeRef = e, this.ensureActiveIsVisible()
					}, this.renderCategory = e => {
						const t = Object(C.f)(e.name),
							s = t === Object(C.f)(this.props.category || "");
						return n.a.createElement(te, {
							category: e,
							innerRef: s ? this.setActiveRef : void 0,
							isActive: s,
							key: t
						})
					}, this.renderContent = e => {
						const t = void 0 === this.props.category,
							s = this.props.category === Z.d.Popular;
						return n.a.createElement(se, {
							className: this.props.className,
							innerRef: this.setContainerRef,
							scrollLeft: e.x
						}, n.a.createElement("span", {
							className: $.a.item,
							ref: t ? this.setActiveRef : void 0
						}, n.a.createElement(O.a, {
							className: Object(i.a)($.a.link, t ? $.a.linkActive : ""),
							onMouseDown: this.sendAllCategoriesClickEvent,
							to: this.props.baseUrl
						}, n.a.createElement(S.c, null, "All Categories"))), Object(z.d)(this.props.exploreV2Variant) && n.a.createElement("span", {
							className: $.a.item,
							ref: s ? this.setActiveRef : void 0
						}, n.a.createElement(O.a, {
							className: Object(i.a)($.a.link, s ? $.a.linkActive : ""),
							onMouseDown: this.sendPopularClickEvent,
							to: y.c[Z.d.Popular]
						}, n.a.createElement(S.c, null, "Popular"))), this.props.categories.map(this.renderCategory), this.state.showLeftArrow && n.a.createElement(oe, {
							className: $.a.arrowLeft,
							onClick: this.handleLeftArrowClick
						}), this.state.showRightArrow && n.a.createElement(oe, {
							className: $.a.arrowRight,
							onClick: this.handleRightArrowClick
						}))
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize), setTimeout(() => {
						this.ensureActiveIsVisible(), this.handleResize()
					}, 2e3)
				}
				componentDidUpdate(e) {
					this.props.category !== e.category && this.ensureActiveIsVisible()
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				getMaxScrollLeft() {
					return this.containerRef ? this.containerRef.scrollWidth - this.containerRef.clientWidth : 0
				}
				ensureActiveIsVisible() {
					if (!this.containerRef || !this.activeRef) return;
					const e = this.state.scrollLeft,
						t = this.state.scrollLeft + this.containerRef.offsetWidth,
						s = this.activeRef.offsetLeft,
						r = this.activeRef.offsetLeft + this.activeRef.offsetWidth;
					if (s > t || r < e) this.scrollTo(this.activeRef.offsetLeft - this.containerRef.offsetWidth / 2 + this.activeRef.offsetWidth / 2);
					else if (r > t) {
						const e = r - t;
						this.scrollTo(this.state.scrollLeft + e + ne)
					} else if (s < e) {
						const t = e - s;
						this.scrollTo(this.state.scrollLeft - t - ne)
					}
				}
				render() {
					return 0 === this.props.categories.length ? null : n.a.createElement(n.a.Fragment, null, n.a.createElement(Q.Motion, {
						defaultStyle: ae,
						style: {
							x: Object(Q.spring)(this.state.scrollLeft)
						}
					}, this.renderContent), n.a.createElement(b.a, {
						onResize: this.handleResize
					}))
				}
			}
			var ce = Object(g.b)(ie),
				de = s("./src/reddit/components/CategoriesNavigation/index.m.less"),
				le = s.n(de);
			const me = Object(o.c)({
					categories: (e, t) => {
						const s = Object(w.a)(e, t) ? V.cb : void 0;
						return Object(G.s)(e, {
							categoriesOrder: s
						})
					},
					categoriesPlacementVariant: w.a,
					exploreV2Variant: z.a,
					isLoggedIn: _.K,
					isNightmode: _.V,
					layout: v.M
				}),
				ue = Object(a.b)(me),
				pe = Object(v.t)({
					isExplore: v.x,
					pageLayer: e => e
				});
			t.default = pe(ue(e => {
				if (e.isLoggedIn) return null;
				const t = {
					browserInfo: c.a,
					showFPR: !1,
					showSuspended: !1
				};
				return n.a.createElement(H.a, {
					className: Object(i.a)(le.a.container, e.className, Object(d.b)(le.a, t), {
						[le.a.blue]: Object(w.c)(e.categoriesPlacementVariant) && !e.isNightmode
					}),
					considerPinnedSubscriptions: !1,
					containerClassName: e.categoriesPlacementVariant && le.a.innerContainer,
					render: () => {
						if (e.categoriesPlacementVariant) return n.a.createElement(W, {
							baseUrl: e.baseUrl,
							categories: e.categories,
							categoriesPlacementVariant: e.categoriesPlacementVariant,
							category: e.category
						});
						const t = n.a.createElement(ce, {
							baseUrl: e.baseUrl,
							categories: e.categories,
							category: e.category,
							exploreV2Variant: e.exploreV2Variant
						});
						return e.isExplore && e.layout === U.g.Classic ? n.a.createElement("div", {
							className: le.a.categoriesContainer
						}, t) : t
					}
				})
			}))
		},
		"./src/reddit/components/CategoriesPlacement/Categories/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "SZcX5Syr-ed8bBsQe3tNA",
				titleFontH2: "_2fKL1yMob1Wr_gF1WyKIXp",
				titleFontH3: "_17043LP2YLngEfMedYc9Fl",
				titleFontH4: "oszneSSYb1zQ76508n0pZ",
				titleFontH5: "_2t_FwfovyZ9eQtHalf2GWe",
				titleFontH6: "_2hGX9YmziVSoSGJ8_f2dmX",
				metadataFont: "C8LBLgppLu5ATIIm0lTiR",
				flairFont: "_3XE11nCGd8DnQuhC6bVvgH",
				labelsFont: "_1fWq1XHq7PX_1EGJLMjYXH",
				actionFont: "_3GaJpiZImPGC_bkhp7x6BE",
				smallButtonFont: "_3GLp704sTP-aLtGyxuTA5Q",
				largeButtonFont: "_2stgUIR1e6_0Hy9-emRsW1",
				tabFont: "_5i4NqHqMcRT3KDta2Xzso",
				strongTextFont: "_2Kp8QLDa7bi21U50tiI2pZ",
				extraSmallFont: "_3Epb7cGcKP5ddJ1qd4A66X",
				bodyFontH1: "_1GLk49zeZjL2450L3r-Mm2",
				bodyFontH2: "_2fdNRQggfR7yh9tyttjr7g",
				bodyFontH3: "_2Bxj_NWl4eNrHz0wtVvljS",
				bodyFontH4: "_3A5XahHQ6t_SPVGwtdoXXK",
				bodyFontH5: "_2C2ldq5lzTBnkQ6kqwge8h",
				bodyFontH6: "_3lWzVuf96fBXmTtSQHtISW",
				bodyFont: "NrFepRahleC53K3xBeoM1",
				bodyFontSmall: "_35lfgRA2pLgtehOJlu5xrL",
				bodyFontMono: "_3I9wY4Cm0Hs5dsLAHUyvGN",
				Container: "EsD_FVvyVtS5ZSc0S6m-4",
				container: "EsD_FVvyVtS5ZSc0S6m-4",
				Categories: "_2GoOkfqKhRysDsY24tXBRg",
				categories: "_2GoOkfqKhRysDsY24tXBRg",
				VisibleCategories: "_2E7u_tiIyY6AbdEI6kcvLD",
				visibleCategories: "_2E7u_tiIyY6AbdEI6kcvLD",
				Item: "_35ooNMaCXaIrZc9-a0AwMN",
				item: "_35ooNMaCXaIrZc9-a0AwMN",
				Link: "_1oJfQuveGUwNMnAa4Pin2q",
				link: "_1oJfQuveGUwNMnAa4Pin2q",
				active: "_8LMJC9uFN3A1P3XdDWKPh",
				disabled: "_1vPOXuj5YXKTUkq70rzAbf",
				blue: "_1Sy8gTYjJfDxmLcKc8HNKB",
				OverflowMenu: "_3UCRZhAnhRs2rUWJe1imha",
				overflowMenu: "_3UCRZhAnhRs2rUWJe1imha",
				OverflowMenuDropdown: "CaaDPlsZy89vmAHCrdrPF",
				overflowMenuDropdown: "CaaDPlsZy89vmAHCrdrPF",
				Row: "_3fEwJpirWd9u0924h8KVsg",
				row: "_3fEwJpirWd9u0924h8KVsg",
				HomeDisabledTooltip: "_2u4sZzqS4yUuzyzmHNrlOP",
				homeDisabledTooltip: "_2u4sZzqS4yUuzyzmHNrlOP",
				ChangeButton: "_17YQtRa70Gvfc6VW3gVVpD",
				changeButton: "_17YQtRa70Gvfc6VW3gVVpD"
			}
		},
		"./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/constants/categories.tsx"),
				o = s("./src/reddit/constants/topic.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			t.a = e => {
				const {
					eventCategory: t
				} = e, s = d(e, ["eventCategory"]);
				return n.a.createElement(i.a, c({}, s, {
					rel: "nofollow",
					to: Object(o.b)(a.b)
				}), t.name)
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "M27cOlSyrfsU8oXk4Kssq",
				icon: "M27cOlSyrfsU8oXk4Kssq",
				ChangeButton: "joDTxMCm6RDjn1_JXPEOR",
				changeButton: "joDTxMCm6RDjn1_JXPEOR",
				ChangeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				changeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				ModalBody: "_3x6FwuogSdxQ1wuQZecnpe",
				modalBody: "_3x6FwuogSdxQ1wuQZecnpe"
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/categories.tsx"),
				u = s("./src/reddit/constants/topic.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/helpers/trackers/navigation.ts"),
				b = s("./src/reddit/i18n/utils.ts"),
				g = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 13 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
					fill: "inherit",
					fillRule: "evenodd",
					transform: "translate(-4 -2)"
				})),
				x = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				f = s("./src/reddit/selectors/categoriesPlacement.ts"),
				v = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less"),
				E = s.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const j = "geopopular-category-modal",
				S = () => {},
				w = Object(o.c)({
					geoObject: f.a,
					isModalOpen: Object(y.b)(j)
				}),
				P = Object(a.b)(w, e => ({
					toggleModal: () => e(Object(c.i)(j))
				})),
				_ = () => n.a.createElement("div", {
					className: E.a.ModalBody
				}, n.a.createElement(x.a, {
					className: E.a.ChangeIcon
				}));
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.changeGeo = () => {
						this.props.toggleModal(), this.props.sendEvent(Object(h.a)(m.c))
					}
				}
				render() {
					const e = this.props,
						{
							changeButtonClassName: t,
							geoObject: s,
							isModalOpen: r,
							sendEvent: a,
							toggleModal: o
						} = e,
						c = C(e, ["changeButtonClassName", "geoObject", "isModalOpen", "sendEvent", "toggleModal"]);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(p.a, O({}, c, {
						rel: "nofollow",
						to: Object(u.b)(m.c)
					}), n.a.createElement(g, {
						className: E.a.Icon
					}), " ", s), n.a.createElement("button", {
						className: Object(i.a)(E.a.ChangeButton, t),
						onClick: this.changeGeo
					}, n.a.createElement(x.a, {
						className: E.a.ChangeIcon
					})), r && n.a.createElement(d.a, {
						actionText: Object(b.c)("Got it"),
						headerText: Object(b.c)("Feature is not available now"),
						modalBody: _,
						modalId: j,
						onConfirm: S,
						toggleModal: o
					}))
				}
			}
			t.a = P(Object(l.b)(N))
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(p),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(l.t)(),
				f = Object(o.c)({
					isFakeSubreddit: l.y
				}),
				v = Object(a.b)(f),
				E = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return n.a.createElement("div", {
						className: Object(i.a)(e.className, g.a.emptyVerticalVotes)
					}, n.a.createElement(d.d, x({
						key: "u"
					}, t)), e.children, n.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				O = () => n.a.createElement(E, null, n.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = y(v(e => n.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement(c.b, null, n.a.createElement(O, null)), n.a.createElement("div", {
				className: g.a.mainBody
			}, n.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, n.a.createElement("div", {
				className: Object(i.a)(g.a.thumbnail, Object(m.b)(e))
			})), n.a.createElement("div", {
				className: g.a.content
			}, n.a.createElement("div", {
				key: "a"
			}, n.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), n.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, n.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(g.a.flatlistExpando, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), n.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(g.a.flatListItemOne, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(g.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/config.ts"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				p = s("./src/reddit/components/ExpandoButton/index.tsx"),
				h = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/helpers.ts"),
				y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				E = s("./src/reddit/components/PostMeta/index.tsx"),
				O = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				S = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				N = s("./node_modules/react-redux/es/index.js"),
				k = s("./node_modules/reselect/es/index.js"),
				I = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/chatPost.ts"),
				D = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				A = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/monthsToMinutes.ts"),
				H = s("./src/reddit/selectors/postFlair.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/user.ts");
			const G = {
					autoplayPref: U.b,
					activeModalId: R.a,
					crosspost: V.c,
					currentUser: U.i,
					isActive: V.g,
					isChatPostExperiment: F.d,
					isCurrentUserProfilePost: V.h,
					isExpanded: V.j,
					isFrontpageHome: W.g,
					isM2MHomeRedirectEnabled: D.c,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(V.o)(e, s)
					},
					language: U.T,
					moderatorPermissions: A.i,
					modModeEnabled: B.O,
					post: V.I,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: H.a,
					showMedia: B.r,
					subredditOrProfile: V.U,
					userIsOp: U.kb,
					flairStyleTemplate: B.Q
				},
				z = (e, t) => {
					let {
						listingKey: s,
						listingName: r,
						postId: n
					} = t;
					return {
						handleVote: t => {
							const s = t === T.a.upvoted ? Object(I.N)(n) : Object(I.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(I.L)(n)),
						onOpenReportsDropdown: t => e(Object(L.g)({
							tooltipId: t
						}))
					}
				},
				K = Object(N.b)(() => Object(k.c)(G), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var q = s("./src/lib/LRUCache/index.ts");
			const Q = Object(B.t)({
					searchQuery: B.U
				}),
				Z = new q.a(250),
				J = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let r = Z.get(s);
						if (void 0 === r) {
							const a = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								o = e.title.split(a);
							for (let e = 1; e < o.length; e += 2) o[e] = n.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, o[e]);
							r = n.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, n.a.Children.toArray(o)), Z.set(s, r)
						}
						return r
					}
				},
				Y = Object(N.b)(() => Object(k.c)(G), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: J(s.searchQuery || "")
				}));
			var X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				re = s("./src/reddit/components/ClassicPost/index.m.less"),
				ne = s.n(re);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return me
			}));
			const oe = 16;
			class ie extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: r,
						isMeta: i,
						inSubredditOrProfile: v,
						eventFactory: N,
						first: k,
						flairStyleTemplate: I,
						formatTitle: L,
						isCheckboxSelected: T,
						isCurrentUserProfilePost: M,
						isFrontpage: B,
						isFrontpageHome: R,
						isM2MHomeRedirectEnabled: F,
						isOverlay: D,
						language: A,
						moderatorPermissions: W,
						modModeEnabled: H,
						onClickPost: V,
						onIgnoreReports: U,
						onOpenReportsDropdown: G,
						poll: z,
						post: K,
						redditStyle: q,
						scrollerItemRef: Q,
						showBulkActionCheckbox: Z,
						showEditFlair: J,
						showMedia: Y,
						subredditOrProfile: te,
						toggleCheckbox: re,
						userIsOp: ie
					} = this.props, de = q ? void 0 : I, le = this.props.crosspost || void 0, me = Object($.a)(W), ue = Object(X.a)(W), pe = H && $.a, he = !!K.media && K.media.type === P.n.RTJSON, be = ie && he, ge = v && !Y, xe = {
						flairStyleTemplate: de,
						post: K,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: M,
						isOverlay: D,
						shouldShowSubscribeButton: !(B && R),
						subredditOrProfile: te,
						language: A
					}, ye = n.a.createElement(f.a, {
						className: Object(o.a)(se.a.classicPostStyles, ne.a.postContainer, Object(ee.a)(this.props), k ? ne.a.mFirst : void 0, e),
						isOverlay: D,
						style: Object.assign({}, Object(ee.d)(this.props), Object(ee.b)(this.props.flairStyleTemplate)),
						post: K,
						onClick: V,
						eventFactory: N
					}, n.a.createElement(C.a, {
						model: K,
						handleVote: s,
						showBulkActionCheckbox: Z,
						isCheckboxSelected: T,
						toggleCheckbox: re,
						flairStyleTemplate: de,
						redditStyle: q
					}), n.a.createElement(y.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, n.a.createElement(u.a, {
						className: ne.a.eventMeta,
						post: K,
						language: A
					}), n.a.createElement("div", {
						className: ne.a.mainBody
					}, n.a.createElement("div", {
						className: ge ? ne.a.expandoContainer : ne.a.thumbnailContainer
					}, !ge && n.a.createElement(_.a, {
						className: ne.a.classicThumbnail,
						crosspost: le && K,
						isMeta: i,
						post: le || K,
						redditStyle: q,
						templatePlaceholderImage: de && de.postPlaceholderImage
					}), n.a.createElement(p.a, {
						crosspost: le,
						className: ne.a.rightExpando,
						isExpanded: !!r,
						post: K,
						useMediaIcons: !1
					})), n.a.createElement("div", {
						className: ne.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(oe, "px")
						}
					}, n.a.createElement(j.c, {
						className: z ? ne.a.titleWithPoll : void 0,
						format: L,
						poll: z,
						post: K,
						redditStyle: q,
						size: j.b.Medium,
						titleColor: de && de.postTitleColor,
						isM2MHomeRedirectEnabled: F,
						isOverlay: D
					}, K.source && !le && n.a.createElement(w.a, {
						href: K.source.url,
						isSponsored: K.isSponsored,
						source: K.source
					}, Object(c.a)(K))), n.a.createElement(E.a, ae({
						key: "PostMeta"
					}, xe)), H && me && Object(x.c)(K) && n.a.createElement(g.a, {
						language: A,
						onIgnoreReports: U,
						reportable: K
					}), n.a.createElement("div", {
						className: ne.a.spacer
					}), K.source && K.source.url && K.isSponsored && n.a.createElement(d.a, {
						className: ne.a.adLinkWrapper
					}, n.a.createElement(w.a, {
						href: K.source.url.replace(a.a.redditUrl, ""),
						isSponsored: K.isSponsored,
						source: K.source
					}, K.source.displayText), K.callToAction && n.a.createElement(l.a, {
						href: K.source.url.replace(a.a.redditUrl, ""),
						isSponsored: K.isSponsored,
						source: K.source
					}, K.callToAction)), n.a.createElement("div", {
						className: ne.a.flatlistContainer
					}, n.a.createElement(p.a, {
						className: ne.a.leftExpando,
						crosspost: le,
						isExpanded: !!r,
						post: K,
						useMediaIcons: !1
					}), n.a.createElement(m.a, {
						className: ne.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: K,
						onVoteClick: s
					}), n.a.createElement(h.a, {
						className: ne.a.flatlistSeparator
					}), n.a.createElement(h.c, {
						className: ne.a.flatlist,
						currentUser: t,
						hasModFlairPerms: ue,
						hasModPostPerms: me,
						isOverlay: !!D,
						language: A,
						modModeEnabled: H,
						onIgnoreReports: U,
						onOpenReportsDropdown: G,
						post: K,
						showEditPost: be,
						showEditFlair: J,
						tooltipType: D ? S.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(O.h)({
							editPost: !pe,
							save: !pe,
							hide: !pe,
							report: !pe
						})
					})), n.a.createElement(b.d, {
						postId: K.id
					}))), ce(K, Q, r)));
					return n.a.createElement(n.a.Fragment, null, ye)
				}
			}
			const ce = (e, t, s) => s ? e.crosspostRootId ? n.a.createElement("div", {
					className: ne.a.crosspostMediaWrapper
				}, de(e, t)) : de(e, t) : null,
				de = (e, t) => n.a.createElement(v.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				le = Object(i.a)(ie),
				me = (e => Q(Y(e)))(le);
			t.b = (e => K(Object(M.b)(e)))(le)
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				subscribeButton: "_2Oxv8udy0lsocAGXEQxb8x",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				m = s("./src/reddit/components/SubredditNav/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				x = s("./src/reddit/constants/tracking.ts"),
				y = s("./src/reddit/selectors/telemetry.ts");
			var f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				E = s("./src/reddit/selectors/widgets.ts"),
				O = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				C = s.n(O);
			const j = d.a.wrapped(f.a, "Planet", C.a),
				S = d.a.img("SubredditIcon", C.a),
				w = Object(o.c)({
					spPollsEnabled: b.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(v.a)(e, {
							subredditId: s
						})
					},
					widget: E.f
				});
			t.a = Object(a.b)(w)(Object(c.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					r = e.subreddit ? e.subreddit.url : e.subredditUrl,
					a = e.subreddit ? e.subreddit.title : "",
					o = e.subreddit && Object(g.a)(e),
					c = !(!e.theme || !o),
					d = s.charAt(0).toUpperCase() + s.slice(1),
					b = !!e.subreddit && e.subredditInlineEditingEnabled,
					f = Object(i.a)(C.a.SubredditIcon, C.a.editableIcon, {
						[C.a.emptyEditableIcon]: !o
					}),
					v = n.a.createElement(l.a, {
						className: f,
						subreddit: e.subreddit,
						iconUrl: o || void 0,
						inTopBar: !0
					}),
					E = c ? n.a.createElement(S, {
						src: o || void 0
					}) : n.a.createElement(j, null),
					O = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0);
				return n.a.createElement("div", {
					className: C.a.container,
					style: {
						maxWidth: e.layout === p.g.Large ? "".concat(984, "px") : "100%"
					}
				}, n.a.createElement("div", {
					className: C.a.subredditMetaContainer
				}, b ? v : E, n.a.createElement("div", {
					className: Object(i.a)(C.a.textContainer, {
						[C.a.textContainerNoIcon]: !c
					})
				}, n.a.createElement("div", {
					className: C.a.text
				}, n.a.createElement("h1", {
					className: C.a.title
				}, a || d), !!a && n.a.createElement("h2", {
					className: C.a.description
				}, "r/", s)), n.a.createElement("div", {
					className: C.a.subscribeButtonContainer
				}, n.a.createElement(u.a, {
					className: C.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign({}, y.defaults(t), {
							source: "id_banner",
							action: x.c.CLICK,
							noun: e,
							subreddit: y.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: h.a.SUBREDDIT
					},
					small: !0
				})))), O && n.a.createElement(m.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: r,
					subredditId: t,
					subredditNavContainerClassName: C.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(p),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				g = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(l.t)(),
				f = Object(o.c)({
					isFakeSubreddit: l.y
				}),
				v = Object(a.b)(f),
				E = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return n.a.createElement("div", {
						className: g.a.emptyVotes
					}, n.a.createElement(d.d, x({
						key: "u"
					}, t)), n.a.createElement("div", {
						key: "s",
						className: g.a.emptyScore
					}), n.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				O = e => n.a.createElement(c.a, {
					className: Object(m.a)(e)
				}),
				C = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(i.a)(g.a.comments, Object(m.b)(e))
				}), n.a.createElement("div", {
					className: Object(i.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = y(v(e => n.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.compactPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: g.a.wrapper
			}, n.a.createElement(E, x({
				key: "c"
			}, e)), n.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, n.a.createElement("div", {
				className: Object(i.a)(g.a.expando, Object(m.a)(e))
			})), n.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, n.a.createElement(O, {
				isLoading: !1
			})), n.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, n.a.createElement("div", {
				key: "ea",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "eb",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), n.a.createElement(C, x({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				donationAmount: "_1TjU-e4dgCSlbuHHatC0G9",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = (s("./node_modules/react-router-dom/esm/react-router-dom.js"), s("./node_modules/reselect/es/index.js")),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/postFlair.ts"),
				E = s("./src/reddit/actions/tooltip.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/postFlair.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				N = s("./src/reddit/components/AwardBadges/index.tsx"),
				k = s("./src/reddit/components/CallToActionButton/index.tsx"),
				I = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				L = s("./src/reddit/components/CommentsLink/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				B = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				R = s("./src/reddit/components/ExpandoButton/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				D = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				A = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				V = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				G = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				z = s("./src/reddit/components/PostBadges/index.tsx"),
				K = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Q = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = s("./src/reddit/components/PostMedia/index.tsx"),
				J = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				X = s("./src/reddit/components/PostTitle/index.tsx"),
				$ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = (s("./src/reddit/components/SubredditIcon/index.tsx"), s("./src/reddit/components/VerticalVotes/index.tsx")),
				re = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				ne = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				oe = s("./src/reddit/controls/Checkbox/index.tsx"),
				ie = s("./src/reddit/controls/MetaData/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				de = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Report/index.tsx"),
				pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = s.n(pe),
				be = s("./src/reddit/components/CompactPost/index.m.less"),
				ge = s.n(be);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var ye = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const fe = e => {
					var {
						isCompact: t
					} = e, s = ye(e, ["isCompact"]);
					return n.a.createElement(R.a, xe({
						className: Object(c.a)(ge.a.responsiveExpandoButton, {
							[ge.a.mHideAboveSmallTablets]: !!t,
							[ge.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				ve = Object(a.b)(() => Object(o.c)({
					activeModalId: O.a,
					crosspost: w.c,
					currentUser: P.i,
					flairStyleTemplate: ae.Q,
					isActive: w.g,
					isExpanded: w.j,
					language: P.T,
					layout: ae.M,
					moderatorPermissions: j.i,
					modModeEnabled: ae.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: w.I,
					showEditFlair: S.a,
					subredditOrProfile: w.U,
					userIsOp: P.kb,
					isInAdLeftSidebarExperiment: C.a
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: r,
						postId: n
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: r,
								selectedTemplateId: n
							} = t;
							return e(Object(v.h)({
								post: s,
								previewFlair: r,
								selectedTemplateId: n
							}))
						},
						handleVote: t => {
							const s = t === y.a.upvoted ? Object(f.N)(n) : Object(f.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(f.L)(n)),
						onOpenReportsDropdown: t => e(Object(E.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: r,
							selectedTemplateId: n
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: r,
							selectedTemplateId: n
						})
					}
				}));
			class Ee extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: r,
						currentUser: a,
						eventFactory: o,
						flairStyleTemplate: d,
						handleVote: l,
						isCheckboxSelected: y = !1,
						isCommentsPage: f,
						isCommentPermalink: v,
						isExpanded: E,
						isInAdLeftSidebarExperiment: O,
						isOverlay: C,
						isProfilePostListing: j,
						inSubredditOrProfile: S = !1,
						language: w,
						layout: P,
						moderatorPermissions: R,
						modModeEnabled: Z,
						onClickPost: te,
						onFlairChanged: ne,
						onIgnoreReports: ae,
						poll: ie,
						post: pe,
						subredditOrProfile: be,
						userIsOp: xe,
						hideModTools: ye,
						scrollerItemRef: fe,
						showBulkActionCheckbox: ve,
						showEditFlair: Ee,
						toggleCheckbox: Ce,
						tooltipType: we,
						sendEvent: Pe
					} = this.props, _e = !!pe.media && pe.media.type === g.n.RTJSON, Ne = xe && _e, ke = Object(q.b)(pe.id, C), Ie = Object(u.a)(R), Le = Object(de.a)(R), Te = "-mod-actions-menu-".concat(pe.id), Me = !!a && Object(x.f)(a) === pe.author, Be = Object(V.c)(pe), Re = Object(D.a)("View--Reports", pe.id, we), Fe = Object(V.a)(pe), De = !(C || f || v), Ae = e => Pe(Object(b.f)(pe.id, e)), We = n.a.createElement(K.a, {
						className: Object(c.a)(he.a.compactPostStyles, ge.a.postContainer, Object(h.a)(this.props), t),
						isOverlay: C,
						style: Object.assign({}, Object(h.d)(this.props), Object(h.b)(this.props.flairStyleTemplate)),
						post: pe,
						onClick: te,
						eventFactory: o
					}, n.a.createElement("div", {
						className: ge.a.compactWrapper
					}, n.a.createElement("div", {
						className: ge.a.leftRailWrapper
					}, n.a.createElement("div", {
						className: ge.a.leftRail,
						style: {
							borderColor: Object(Q.c)({
								isRemoved: !!pe.bannedBy,
								isReported: Object(p.a)(pe),
								isSponsored: pe.isSponsored,
								theme: this.props.theme,
								isInAdLeftSidebarExperiment: O
							})
						}
					}, ve && n.a.createElement(oe.a, {
						className: ge.a.bulkActionCheckbox,
						isCheckboxSelected: y,
						toggleCheckbox: Ce
					}), n.a.createElement(se.a, {
						className: ge.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: d,
						model: pe,
						onVoteClick: l
					}), n.a.createElement(T.a, {
						className: ge.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: d,
						model: pe,
						onVoteClick: l
					}))), n.a.createElement(G.a, {
						className: Object(c.a)(ge.a.content, {
							[ge.a.isEvent]: Object(le.a)(pe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: d
					}, n.a.createElement(B.a, {
						isCompactMode: !0,
						language: w,
						post: pe
					}), n.a.createElement("div", {
						className: ge.a.compactPostRow
					}, !ye && je(pe, r, E, !1), !S && !pe.isSponsored && n.a.createElement(A.h, {
						type: pe.belongsTo.type,
						id: pe.belongsTo.id
					}), n.a.createElement("div", {
						className: ge.a.topLine,
						"data-click-id": "body"
					}, n.a.createElement(X.c, {
						post: pe,
						poll: ie,
						size: X.b.Small,
						titleColor: d && d.postTitleColor,
						isOverlay: !1
					}), Se(pe, be, w), n.a.createElement($.d, {
						className: ge.a.postTopMeta,
						flairStyleTemplate: d,
						language: w,
						post: pe,
						showSub: !!be && !S && !pe.isSponsored,
						subredditOrProfile: be
					}), n.a.createElement(z.a, {
						className: ge.a.postBadges,
						displayText: be ? be.displayText : null,
						inSubredditOrProfile: S,
						language: w,
						post: pe
					}), be && n.a.createElement(M.a, {
						className: ge.a.donationAmount,
						contentId: pe.id,
						subredditId: be.id
					}), n.a.createElement(N.a, {
						isOverlay: C,
						tooltipType: we,
						thing: pe
					})), De && n.a.createElement("div", null, n.a.createElement(I.a, {
						className: ge.a.liveDiscussionIcon,
						isMod: Ie,
						postId: pe.postId
					})), n.a.createElement("div", {
						className: ge.a.flatList
					}, n.a.createElement(L.a, {
						className: ge.a.commentsLink,
						hasModPostPerms: Ie,
						isCommentsPage: f,
						isCommentPermalink: v,
						isOverlay: C,
						postId: pe.id,
						modModeEnabled: Z,
						numComments: pe.numComments,
						type: m.g.Compact
					}), n.a.createElement(U.a, {
						className: ge.a.modToolsFlatlist,
						isOverlay: !1,
						layout: P,
						modModeEnabled: Z,
						post: pe,
						sendEvent: Pe,
						showIconsOnly: !0
					}), Ie && n.a.createElement(W.a, {
						dropdownId: Te,
						onClick: () => Ae("post_mod_action_menu")
					}, n.a.createElement(F.b, null), n.a.createElement(J.a, {
						canEditFlair: Le && Ee,
						hasModPostPerms: Ie,
						isOverlay: !1,
						isPostAuthor: Me,
						language: w,
						modModeEnabled: Z,
						post: pe,
						tooltipId: Te
					})), Ie && Be && !Z && n.a.createElement(ee.c, {
						text: "".concat(Fe),
						onClick: () => {
							this.props.onOpenReportsDropdown(Re), Ae("post_report_menu")
						},
						id: Re
					}, n.a.createElement(re.a, {
						model: pe,
						onIgnoreReports: () => {
							ae(), Ae(pe.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Re
					}), pe.ignoreReports ? n.a.createElement(me.a, null) : n.a.createElement(ue.a, null)), n.a.createElement(Y.g, {
						currentProfileName: s,
						isCommentsPage: f,
						isOverlay: !1,
						isProfilePostListing: j,
						layout: P,
						permalink: pe.permalink,
						postId: pe.postId,
						sendEvent: Pe,
						showEditPost: Ne,
						showEditFlair: Ee,
						dropdownId: "".concat(pe.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object(Y.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ye && je(pe, r, E, !0))), pe.source && pe.source.url && pe.isSponsored && n.a.createElement(_.a, {
						className: ge.a.adLinkWrapper
					}, n.a.createElement(ce.a, {
						href: pe.source.url.replace(i.a.redditUrl, ""),
						isSponsored: pe.isSponsored,
						source: pe.source
					}, pe.source.displayText), pe.callToAction && n.a.createElement(k.a, {
						href: pe.source.url.replace(i.a.redditUrl, ""),
						isSponsored: pe.isSponsored,
						source: pe.source,
						isNotCardView: !0
					}, pe.callToAction)), Z && Ie && Be && n.a.createElement("div", {
						className: ge.a.compactPostRow
					}, n.a.createElement(H.a, {
						language: w,
						onIgnoreReports: ae,
						reportable: pe
					})), n.a.createElement(A.d, {
						postId: pe.id
					}))), E && n.a.createElement(Oe, {
						post: pe,
						scrollerItemRef: fe,
						flairStyleTemplate: d
					}), e === ke && n.a.createElement(q.a, {
						flairs: pe.flair,
						subredditId: pe.belongsTo.id,
						modalId: ke,
						onFlairChanged: ne
					}));
					return n.a.createElement(n.a.Fragment, null, We)
				}
			}
			const Oe = e => n.a.createElement(G.a, {
					className: Object(c.a)(e.className, ge.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? n.a.createElement("div", {
					className: ge.a.crosspostMediaWrapper
				}, Ce(e.post, e.scrollerItemRef)) : Ce(e.post, e.scrollerItemRef)),
				Ce = (e, t) => n.a.createElement(Z.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				je = (e, t, s, r) => n.a.createElement(fe, {
					crosspost: t,
					isCompact: r,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Se = (e, t, s) => n.a.createElement("div", {
					className: ge.a.responsiveMeta
				}, n.a.createElement(ie.b, {
					isScoreHidden: e.scoreHidden,
					language: s,
					score: e.score
				}), n.a.createElement(ie.c, null), Object(ie.d)(e.numComments, s), n.a.createElement(ie.c, null), t && n.a.createElement("a", {
					href: t.url
				}, n.a.createElement(ie.a, null, t.displayText)), e.isSponsored && [n.a.createElement(te.a, {
					key: "label"
				}), n.a.createElement(ie.c, {
					key: "separator"
				})], !e.isSponsored && n.a.createElement(ie.a, null, " Posted by "), n.a.createElement($.b, {
					post: e
				}));
			t.a = ve(Object(l.b)(Object(ne.b)(Object(d.a)(Ee))))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				extraSmallFont: "A_BVHp4etEzRQfPWIVxb2",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, s) {
			"use strict";
			var r, n = s("./src/app/strings/index.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/localStorageAvailable/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/components/Translated/index.tsx");
			! function(e) {
				e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner"
			}(r || (r = {}));
			var u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				h = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				b = e => o.a.createElement("svg", {
					viewBox: "0 0 56 56",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("g", {
					transform: "translate(1 1)",
					fill: "inherit",
					stroke: "inherit",
					fillRule: "evenodd"
				}, o.a.createElement("rect", {
					x: "16",
					y: "35",
					width: "22.4",
					height: "2.8",
					rx: "1.4",
					stroke: "none"
				}), o.a.createElement("path", {
					d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
				}), o.a.createElement("circle", {
					strokeWidth: "2",
					fill: "none",
					cx: "27",
					cy: "27",
					r: "27"
				}))),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/components/CreatePostBanner/index.m.less"),
				f = s.n(y);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = Object(i.b)(null, (e, t) => {
				let {
					language: s
				} = t;
				return {
					showToast: () => {
						e(Object(d.e)({
							kind: x.b.SuccessCommunity,
							text: Object(n.a)(s, "postCreation.modBanner.dismissed")
						}))
					}
				}
			});
			class O extends o.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(p.F)(r.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(h.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(h.a)())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = Object(c.a)() && !Object(p.e)(r.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(h.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? o.a.createElement("div", {
						className: f.a.banner
					}, o.a.createElement("button", {
						className: f.a.closeContainer,
						onClick: this.closeBanner
					}, o.a.createElement(g.a, {
						className: f.a.close
					})), o.a.createElement(b, {
						className: f.a.postIcon
					}), o.a.createElement("div", {
						className: f.a.heading
					}, o.a.createElement(m.a, {
						msgId: "postCreation.modBanner.title",
						replacements: {
							displayText: e.displayText
						}
					})), o.a.createElement("div", {
						className: f.a.text
					}, v._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), o.a.createElement("br", null), v._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), o.a.createElement("div", {
						className: f.a.buttonWrapper
					}, o.a.createElement(u.g, {
						className: f.a.button,
						target: "_blank",
						href: "/".concat(e.displayText, "/submit"),
						onClick: this.createPost
					}, o.a.createElement(m.a, {
						msgId: "postCreation.modBanner.button"
					})))) : null
				}
			}
			t.a = E(Object(l.b)(O))
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/colors.ts");
			const d = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-left-").concat(e)
			};
			var l = e => {
				const {
					seed: t = ""
				} = e, s = d("a", t), r = d("b", t), n = d("c", t), a = d("d", t);
				return o.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("defs", null, o.a.createElement("circle", {
					id: r,
					cx: "18",
					cy: "18",
					r: "18"
				}), o.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, o.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), o.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), o.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), o.a.createElement("path", {
					id: n,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), o.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, o.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, o.a.createElement("use", {
					fill: c.a.black,
					filter: "url(#".concat(s, ")"),
					xlinkHref: "#".concat(r)
				}), o.a.createElement("use", {
					fill: c.a.white,
					xlinkHref: "#".concat(r)
				})), o.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, o.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), o.a.createElement("mask", {
					id: a,
					fill: c.a.white
				}, o.a.createElement("use", {
					xlinkHref: "#".concat(n)
				})), o.a.createElement("use", {
					fill: c.a.black,
					xlinkHref: "#".concat(n)
				}), o.a.createElement("g", {
					fill: c.a.alienblue,
					mask: "url(#".concat(a, ")")
				}, o.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			};
			const m = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-right-").concat(e)
			};
			var u = e => {
					const {
						seed: t = ""
					} = e, s = m("a", t), r = m("b", t), n = m("c", t), a = m("d", t);
					return o.a.createElement("svg", {
						className: e.className,
						onClick: e.onClick,
						viewBox: "4 0 45 45",
						version: "1.1",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("defs", null, o.a.createElement("circle", {
						id: r,
						cx: "18",
						cy: "18",
						r: "18"
					}), o.a.createElement("filter", {
						id: s,
						x: "-33.3%",
						y: "-25%",
						width: "166.7%",
						height: "166.7%"
					}, o.a.createElement("feOffset", {
						dy: "3",
						in: "SourceAlpha",
						result: "shadowOffsetOuter1"
					}), o.a.createElement("feGaussianBlur", {
						in: "shadowOffsetOuter1",
						result: "shadowBlurOuter1"
					}), o.a.createElement("feColorMatrix", {
						in: "shadowBlurOuter1",
						values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
					})), o.a.createElement("path", {
						id: n,
						d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
					})), o.a.createElement("g", {
						fill: "none",
						fillRule: "evenodd"
					}, o.a.createElement("g", {
						fillRule: "nonzero",
						transform: "translate(7 4)"
					}, o.a.createElement("use", {
						fill: c.a.black,
						filter: "url(#".concat(s, ")"),
						xlinkHref: "#".concat(r)
					}), o.a.createElement("use", {
						fill: c.a.white,
						xlinkHref: "#".concat(r)
					})), o.a.createElement("g", {
						transform: "rotate(90 9.326 23.5)"
					}, o.a.createElement("path", {
						d: "M0 16h16V0H0z"
					}), o.a.createElement("mask", {
						id: a,
						fill: c.a.white
					}, o.a.createElement("use", {
						xlinkHref: "#".concat(n)
					})), o.a.createElement("use", {
						fill: c.a.black,
						xlinkHref: "#".concat(n)
					}), o.a.createElement("g", {
						fill: c.a.alienblue,
						mask: "url(#".concat(a, ")")
					}, o.a.createElement("path", {
						d: "M0 0h16v16H0z"
					})))))
				},
				p = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				h = s.n(p);
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			}));
			const b = e => o.a.createElement("button", {
					className: Object(i.a)(h.a.arrow, e.className),
					onClick: e.onClick
				}, o.a.createElement(l, {
					className: h.a.arrowIcon,
					seed: e.seed
				})),
				g = e => o.a.createElement("button", {
					className: Object(i.a)(h.a.arrow, e.className),
					onClick: e.onClick
				}, o.a.createElement(u, {
					className: h.a.arrowIcon,
					seed: e.seed
				}));
			class x extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.makeVisibilityChangeHandler = e => t => {
						this.setState({
							viewableItems: Object.assign({}, this.state.viewableItems, {
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							})
						})
					}, this.getVisibleItemsCount = () => {
						return n()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = e => {
						let {
							adjustment: t,
							itemWidth: s,
							scrollIndex: r,
							spacerWidth: n = 0
						} = e;
						return t - r * (s + n) + n
					}, this.itemsFitInContainer = e => {
						let {
							container: t,
							items: s,
							itemWidth: r,
							spacerWidth: n = 0
						} = e;
						if (!t) return !0;
						const a = s.length * r,
							o = this.getSpacerCount(s.length) * n;
						return t.offsetWidth >= a + o
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: r,
							spacerWidth: n = 0,
							visibleItemsCount: a
						} = e, o = 0;
						if (r === s && a) {
							const e = a * t + this.getSpacerCount(a) * n;
							o = (this.container ? this.container.offsetWidth : e) - e
						} else r > 0 && (o = 0);
						return o
					}, this.setContainerRef = e => {
						this.container = e
					}, this.id = "", this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					})
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						r = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: r,
						visibleItemsCount: e
					})
				}
				onClickPrev() {
					const e = this.getVisibleItemsCount(),
						t = Math.max(1, e),
						s = Math.max(0, this.state.scrollIndex - t);
					this.setState({
						scrollIndex: s,
						visibleItemsCount: e
					})
				}
			}
			t.c = x
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const a = Object(r.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("Explore~InFeedChaining"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = a
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DZ4N46-GxcZN4myRo1Jov",
				metaLine: "_3RsomDBMRm4zJwQoMA4H1I",
				bodyWrapper: "_8QyJR-f-gRDrBnB_U9d9M",
				mediaWrapper: "aAoswTeXSP59D_O0jbLMm",
				textWrapper: "_2QMHsv2ah510M8yVPnDIDo",
				meta: "_3OnBTLhwkjT_qb7jDZaN9k",
				metaWrapper: "_2kgjZeq5YSkBzbG2wBt-_",
				thumbnailWrapper: "_1QpRu40opbkSjXtHCoSpBr",
				thumbnail: "_1DSgZoQLneHjWE3l_dVvDG",
				thumbnailContainer: "_1cYdO4iDTKirKmKc6pjuYh",
				flatlist: "_15Tcsv4uOZy408GvAhSm6S",
				postTitle: "_20l1A0LHN5sLYdsFa4q_mv",
				postTitleCompact: "-si4FJBkXt7YGgVfE6_gR",
				flexSpacer: "oE0WBXnmx0c_cycbOzIeZ",
				innerContainer: "_2-GgqVSOuBRpxRqecJixsh"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsPlaceholder.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-redux/es/index.js")),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/models/Vote/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				g = s.n(b),
				x = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				y = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const E = Object(m.t)(),
				O = Object(i.c)({
					isFakeSubreddit: m.y
				}),
				C = Object(o.b)(O),
				j = e => {
					const t = {
						interactive: !1,
						voteState: h.a.notVoted
					};
					return n.a.createElement("div", {
						className: Object(a.a)(y.a.emptyVotes, e.className)
					}, n.a.createElement(l.d, t), n.a.createElement("div", {
						className: Object(a.a)(y.a.emptyScore, Object(u.b)({
							isLoading: e.isLoading
						}))
					}), n.a.createElement(l.c, t))
				};
			var S = E(C(Object(c.a)(e => {
					var {
						className: t,
						isLoading: s,
						showSubreddit: r
					} = e, o = v(e, ["className", "isLoading", "showSubreddit"]);
					return n.a.createElement("div", {
						className: Object(a.a)(y.a.container, g.a.largeAndMediumPostStyles, t)
					}, n.a.createElement("div", {
						className: Object(a.a)(y.a.thumbnail, Object(u.b)({
							isLoading: s
						}))
					}), n.a.createElement("div", {
						className: y.a.content
					}, n.a.createElement("div", {
						className: y.a.titleContainer
					}, n.a.createElement("div", {
						className: Object(a.a)(y.a.title, Object(u.b)({
							isLoading: s
						}))
					}), n.a.createElement("div", {
						className: Object(a.a)(y.a.title, Object(u.b)({
							isLoading: s
						}))
					})), r && n.a.createElement(p.a, {
						className: y.a.subreddit
					}, n.a.createElement(d.a, f({
						className: Object(a.a)(Object(u.b)({
							isLoading: !1
						}))
					}, o)), n.a.createElement("div", {
						className: Object(a.a)(y.a.subredditName, Object(u.b)({
							isLoading: s
						}))
					})), n.a.createElement(p.a, null, n.a.createElement(j, f({
						isLoading: s
					}, o)), n.a.createElement("div", {
						className: Object(a.a)(y.a.comments, Object(u.b)({
							isLoading: s
						}))
					}), n.a.createElement("div", {
						className: Object(a.a)(y.a.share, Object(u.b)({
							isLoading: s
						}))
					}), n.a.createElement("div", {
						className: Object(a.a)(y.a.ellipsis, Object(u.b)({
							isLoading: s
						}))
					}))))
				}))),
				w = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				P = s.n(w);
			t.a = e => n.a.createElement("div", {
				className: Object(a.a)(P.a.container, e.className)
			}, n.a.createElement("div", {
				className: P.a.largePosts
			}, n.a.createElement(S, {
				className: P.a.topPostLargePost,
				isLoading: !0,
				showSubreddit: e.showSubreddit
			}), n.a.createElement(S, {
				className: P.a.topPostLargePost,
				isLoading: !0,
				showSubreddit: e.showSubreddit
			}), n.a.createElement(S, {
				className: P.a.topPostLargePost,
				isLoading: !0,
				showSubreddit: e.showSubreddit
			})))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_380AW2tV1AjseFZoaW2xp3",
				topPosts: "_3RDCFf4elKrhJHKKZkPPD",
				topPostsLargePostsContainer: "_1iE8_7IcegvYg_Wg3A0jTR",
				largePosts: "_2jBymLZmAms1MelhCFZsUI",
				"m-large": "_2lujqkV5X6gCVwiA3jxvA1",
				mLarge: "_2lujqkV5X6gCVwiA3jxvA1",
				"m-subreddit": "_3UFkxiq8tu1X9rAES7YEk7",
				mSubreddit: "_3UFkxiq8tu1X9rAES7YEk7",
				topPostLargePosts: "_1B27sUe973sxluKyC6_HnP",
				topPost: "_3_Nr3saSmaO8BeqrN2u7Pb",
				largePost: "_21q6EU8IrGnKgnRi9Fcrko",
				topPostLargePost: "_3rjlIRqkC_nm_BoSlEQ8u-",
				smallPosts: "_1XdjckgSGhgpGEGUohL62w",
				smallPost: "_69IUkr5xucpVcbGP5l070"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsLargePostsContainer: "blJHXrhp2aDTr_eU2819a",
				postsWrapper: "_31N1g4ul5_oWaf7McMDm4z",
				arrow: "_3PrQgt3ZKPk7QhsYwrdYga",
				arrowLeft: "_1GoqoM-Z9VRJCHgekfYoZE",
				arrowRight: "SGDu37agzx7_Dwp8seKWa",
				posts: "Fa7qwmMMPp0OdoJcQuaNG",
				largePost: "_2rsZ95X0CQMIjB--1M9rHS",
				slideIn: "_11Gk71fxo8Xiw2sUIcEJd7"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				l = s("./src/reddit/helpers/overlay/index.ts"),
				m = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				u = s("./src/lib/isUrl/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/app/strings/index.ts"),
				b = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = s("./src/lib/timeAgo/index.ts"),
				y = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/components/Translated/index.tsx"),
				v = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				C = s.n(O);
			var j = e => {
					const t = y.a.PROFILE,
						s = Object(v.a)(e.author, t);
					return a.a.createElement("div", {
						className: Object(c.a)(C.a.container, e.className)
					}, a.a.createElement(E.a, {
						className: C.a.layout
					}, a.a.createElement("div", {
						className: C.a.textContainer
					}, a.a.createElement("span", {
						className: C.a.description
					}, a.a.createElement(f.a, {
						msgId: "posts.postedBy"
					})), a.a.createElement(g.a, {
						className: C.a.authorName,
						to: s
					}, Object(v.b)(e.author, t)), a.a.createElement("span", {
						className: C.a.timestamp
					}, Object(x.d)(e.language, e.created / 1e3)))))
				},
				S = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				_ = s.n(P);
			var N = e => {
					const t = Object(v.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(c.a)(_.a.container, e.className)
					}, a.a.createElement(w.a, {
						className: _.a.layout
					}, a.a.createElement("div", {
						className: _.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: _.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(S.a, {
						className: _.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: _.a.textContainer
					}, a.a.createElement(g.a, {
						className: _.a.name,
						to: t
					}, Object(v.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: _.a.separator
					}, "•"), a.a.createElement("span", {
						className: _.a.timestamp
					}, Object(x.d)(e.language, e.created / 1e3)))))
				},
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/Media/index.tsx"),
				L = s("./src/reddit/components/MiniCardPost/index.tsx"),
				T = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				M = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				R = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/models/Subreddit/index.ts"),
				V = s("./src/reddit/models/Widgets/index.ts"),
				U = s("./src/reddit/components/MiniCardPost/index.m.less"),
				G = s.n(U),
				z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(z),
				q = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				Q = s.n(q);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class J extends a.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: r,
						crosspostSubredditOrProfile: n,
						eventFactory: o,
						flairStyleTemplate: i,
						forceLoadMedia: d,
						hideNSFWPref: l,
						isMiniCard: m = !0,
						language: b,
						onClickPost: g,
						post: x,
						scrollerItemRef: y,
						shouldPause: f,
						showAuthorBlock: v = !1,
						showMetaLine: E = !0,
						showSubscribeBlock: O = !1,
						subredditOrProfile: C
					} = this.props, {
						media: S
					} = r || x, w = !S && !!x.source && Object(u.a)(x.source.url);
					let P = S && a.a.createElement(I.a, {
							autoplayPref: e,
							availableWidth: t,
							className: G.a.media,
							forceAspectRatio: W.c,
							imageBoxClassName: G.a.mediaImageBox,
							imageBoxContentImageClassName: G.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: r || x,
							scrollerItemRef: y,
							shouldPause: f,
							shouldLoad: d,
							showCentered: !1,
							showFull: !1
						}),
						_ = !1;
					S && P && (S.type !== W.n.RTJSON && S.type !== W.n.TEXT ? (P = a.a.createElement("div", {
						className: Q.a.mediaWrapper
					}, P), _ = !0) : S && S.content && Object(D.a)(x) && (P = a.a.createElement("div", {
						className: Q.a.textWrapper
					}, P)));
					const L = !_ && !w;
					let U;
					return C && (U = Object(H.e)(C) ? Object(V.h)(C) : Object(V.i)(C)), a.a.createElement(R.a, {
						className: Object(c.a)(Q.a.container, K.a.largeAndMediumActiveStyles, K.a.largeAndMediumPostStyles, G.a.postContainer, Object(A.a)(this.props), s),
						post: x,
						onClick: g,
						eventFactory: o,
						style: Object.assign({}, Object(A.b)(this.props.flairStyleTemplate), Object(A.d)(this.props), this.props.style)
					}, a.a.createElement(B.a, {
						className: G.a.backgroundWrapper,
						flairStyleTemplate: i
					}, a.a.createElement("div", {
						className: Object(c.a)(Q.a.innerContainer, G.a.innerContainer)
					}, O && C && a.a.createElement(N, Z({
						created: x.created,
						language: b
					}, U)), v && C && a.a.createElement(j, Z({
						created: x.created,
						language: b,
						author: x.author
					}, U)), a.a.createElement(F.c, {
						className: L ? Q.a.postTitle : Q.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: x,
						size: F.b.Large,
						titleColor: i && i.postTitleColor
					}), E && C && a.a.createElement(T.a, {
						className: Q.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: l,
						language: b,
						post: x,
						subredditOrProfile: C
					}), (_ || w) && a.a.createElement("div", {
						className: Q.a.flexSpacer
					}), w && a.a.createElement("div", {
						className: Q.a.mediaWrapper
					}, a.a.createElement(M.a, {
						className: Q.a.thumbnailWrapper,
						thumbnailClassName: Q.a.thumbnail,
						thumbnailContainerClassName: Q.a.thumbnailContainer,
						post: x,
						templatePlaceholderImage: i && i.postPlaceholderImage
					})), P, a.a.createElement("div", {
						className: Q.a.metaWrapper
					}, a.a.createElement("span", {
						className: Q.a.meta
					}, Object(h.c)(b, "posts.points.noun", x.score, {
						count: Object(p.b)(x.score)
					})), a.a.createElement("span", {
						className: Q.a.meta
					}, Object(h.c)(b, "posts.comments.noun", x.numComments, {
						count: Object(p.b)(x.numComments)
					}))))), a.a.createElement(k.d, {
						postId: x.id
					}))
				}
			}
			var Y = Object(L.a)(Object(b.a)(J)),
				X = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsPlaceholder.tsx"),
				$ = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				ee = s.n($),
				te = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const se = 326,
				re = 12,
				ne = {
					stiffness: 210,
					damping: 30
				},
				ae = 100,
				oe = e => {
					var {
						root: t,
						handleVisibilityChange: s,
						renderPost: n
					} = e, o = te(e, ["root", "handleVisibilityChange", "renderPost"]);
					const i = n ? n(o) : a.a.createElement(Y, o);
					return a.a.createElement(r.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, i)
				},
				ie = Object(i.b)(null, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: r
					} = t;
					return {
						openOverlay: t => e(Object(l.a)(t.permalink)),
						trackPostClick: (t, s) => e((e, n) => r ? m.w(n(), r, t, s) : null),
						trackPostSubredditClick: t => e((e, n) => s ? m.y(n(), s, t) : r ? m.y(n(), r, t) : null)
					}
				});
			class ce extends d.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.onClickPost = (e, t) => {
						this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = e => {
						const {
							discoveryUnit: t,
							discoveryUnitSubreddit: s,
							searchDiscoveryUnit: r
						} = this.props;
						return (r ? m.L() : m.v(t, s))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: r,
							singleSubredditMode: n
						} = this.props;
						return a.a.createElement(oe, {
							className: ee.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!n,
							showMetaLine: !1,
							showSubscribeBlock: !n,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: r,
							root: this.id,
							key: e,
							postId: e
						})
					}, this.renderPosts = e => a.a.createElement("div", {
						className: ee.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel"
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					this.state !== t && this.trackPostsViewed(this.props)
				}
				componentWillReceiveProps(e) {
					this.props.items !== e.items && this.trackPostsViewed(e)
				}
				trackPostsViewed(e) {
					if (e.isLoading || 0 === e.items.length) return;
					const t = Math.min(this.state.scrollIndex + this.getVisibleItemsCount(), this.props.items.length);
					e.items.slice(this.state.scrollIndex, t).forEach(t => this.props.searchDiscoveryUnit ? e.onPostView(this.props.searchDiscoveryUnit, t, e.searchOptions) : this.props.discoveryUnit ? e.onPostView(this.props.discoveryUnit, t) : null)
				}
				trackArrowClick() {
					const {
						discoveryUnit: e,
						onArrowClick: t,
						searchDiscoveryUnit: s,
						searchOptions: r
					} = this.props, n = s || e;
					n && t && t(n, r)
				}
				onClickNext() {
					super.onClickNext(), this.trackArrowClick(), this.trackPostsViewed(this.props)
				}
				onClickPrev() {
					super.onClickPrev(), this.trackArrowClick(), this.trackPostsViewed(this.props)
				}
				render() {
					const {
						isHidden: e,
						leftArrowClassName: t,
						rightArrowClassName: s,
						seed: r,
						shouldSlideIn: n,
						springConfig: i
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return a.a.createElement(X.a, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: l = se
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: u
					} = this.state, p = this.getMaxScrollIndex(u), h = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: p,
						scrollIndex: m,
						spacerWidth: re,
						visibleItemsCount: u
					}), b = e ? ae : this.getMarginLeft({
						adjustment: h,
						itemWidth: l,
						scrollIndex: m,
						spacerWidth: re
					}), g = this.itemsFitInContainer({
						container: this.container,
						items: this.props.items,
						itemWidth: l,
						spacerWidth: re
					});
					return a.a.createElement("div", {
						className: Object(c.a)(ee.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(o.Motion, {
						defaultStyle: {
							marginLeft: e || n ? ae : 0
						},
						style: {
							marginLeft: Object(o.spring)(b, i || ne)
						}
					}, this.renderPosts), 0 !== m && a.a.createElement(d.a, {
						className: Object(c.a)(ee.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: r
					}), !g && (null == p || m < p) && a.a.createElement(d.b, {
						className: Object(c.a)(ee.a.arrowRight, n && !e && ee.a.slideIn, s),
						onClick: this.onClickNext,
						seed: r
					}))
				}
			}
			t.a = ie(ce)
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				c = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				d = s.n(c);
			t.a = e => n.a.createElement("div", {
				className: Object(a.a)(Object(i.c)(e.exploreV2Variant) ? d.a.oldContainer : e.exploreV2Variant ? Object(a.a)(d.a.smallContainer, o.b) : d.a.heroContainer, e.className)
			}, n.a.createElement("div", {
				className: Object(a.a)(d.a.header, e.headerClassName)
			}, e.header), n.a.createElement("div", {
				className: Object(a.a)(e.hidePadding ? d.a.bodyHidePadding : d.a.body, e.bodyClassName)
			}, e.children))
		},
		"./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_2REdLXF0mpSj8m3oeNFnQI",
				textContainer: "_25evCORf3YPgobOP7A0KBH",
				timestamp: "_12ZMpGOwwzQ5LQDmj2sycd",
				authorName: "_2cI137mSn1p19S7GzCn4aj",
				description: "_3WMX64jyXL-FNQ0kNYl267"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_3w4KSJJGE7TS9xZVlkChNX",
				iconContainer: "_8eVKEiEgNTHopUF8DqZhu",
				separator: "_2dPygXwKlm02lGuxfWM6hJ",
				subscribeIcon: "_3C-lBXRQY9_CCGVZfQJODL",
				subscribeButton: "_26ierA6Rodr6VMGHkKwTPE",
				textContainer: "ZseEDtQar85FcCdC4sPE7",
				timestamp: "_3AdY0o-9CnsxnxO_VDj8Zh",
				icon: "_3YX9w39yU25-vbz-5gk236",
				planetIcon: "f6zRrQi4zqlZ4aoPrzGIN",
				name: "lyBM6dpYVMHQASC9SYGiO",
				subscribers: "uPyUGlwdDzPsq3i6O_w_G",
				right: "_9gZLJghZHrkIQlPvwZYDE",
				visitCommunity: "_1BAg1jhNwLExU7vX1TAvxR",
				description: "_3PWARIYmlsbZulr9sGQAVC",
				descriptionLine: "_2-CpYCxMGuxCYjr8tTgDTR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_1sf7GjDaEBhme5ClA39yBo",
				closeButton: "_3NeLiUZNL4IFv7G1HHx8Km",
				communityBackground: "_1pX_BOlTi53SAMVSDu_OrT",
				seeAllPosts: "_2zf-tJ6dr3umn1gcuEpDk8",
				communityDescriptionPlaceholder: "_1RYE13EcDNn1A1X1-h42f_",
				arrowPlaceholder: "_1q9k3G4VKHdAOsl64CbSge",
				headerLink: "_2HnhAFvq_dYxe2LgLqRXfK",
				layout: "_1p-hDqS1MBOTryteGnBenr",
				widgetHeader: "_3vKpqOprvaCysVAD8GUe6L"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/memoize.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/app/strings/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				h = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = s("./src/reddit/components/Widgets/Base/index.tsx"),
				g = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				y = s("./src/reddit/helpers/chooseVariant/index.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const v = e => Object(f.H)(e) || x.Jb.ShowTopContent === Object(y.c)(e, {
				experimentEligibilitySelector: y.a,
				experimentName: x.Eb
			});
			var E = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				C = s.n(O);
			const j = Object(i.b)(() => Object(d.c)({
				inSubredditTopContentExperiment: v,
				language: f.T,
				subredditUrl: E.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, s) => g.f(s(), t)),
				trackDismissClick: t => e((e, s) => g.h(s(), t)),
				trackPostView: n()((t, s, r) => e((e, n) => g.B(n(), t, s, r)), (e, t) => {
					let {
						id: s
					} = e;
					return "".concat(s, "-").concat(t)
				})
			}));
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.onCloseClick = () => {
						const {
							discoveryUnit: e,
							onCloseClick: t,
							trackDismissClick: s
						} = this.props;
						e && s(e), t()
					}
				}
				componentDidMount() {
					const {
						discoveryUnit: e,
						trackDiscoveryUnitView: t
					} = this.props;
					e && t(e)
				}
				render() {
					const {
						inSubredditTopContentExperiment: e,
						subredditUrl: t,
						topContent: s
					} = this.props;
					if (!e || !s) return null;
					const {
						postIds: r,
						range: n
					} = s, a = "".concat(t).concat(m.N.TOP, "?t=").concat(n), i = o.a.createElement(b.a, {
						className: C.a.widgetHeader
					}, o.a.createElement("button", {
						className: C.a.closeButton,
						onClick: this.onCloseClick
					}, o.a.createElement(h.b, {
						className: C.a.closeIcon,
						"data-redditstyle": !0
					})), o.a.createElement(c.a, {
						className: C.a.headerLink,
						to: a
					}, Object(l.a)(this.props.language, "discoveryUnits.topContentLast", {
						range: n
					})));
					return o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(u.a, {
						className: C.a.layout,
						header: i,
						hidePadding: !0
					}, o.a.createElement(p.a, {
						discoveryUnit: this.props.discoveryUnit,
						searchDiscoveryUnit: this.props.searchDiscoveryUnit,
						isLoading: !1,
						isMiniCard: !1,
						items: r,
						searchOptions: this.props.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						singleSubredditMode: !0,
						onPostView: this.props.trackPostView
					})))
				}
			}
			t.a = j(S)
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, s) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/featureFlags/component.tsx"),
				c = s("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				d = s.n(c);
			const l = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return n.a.createElement("div", {
						className: Object(o.a)(t, d.a.loading)
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less": function(e, t, s) {
			e.exports = {
				checkContainer: "vLDY173Vj0GmHGlQQPGsJ",
				check: "_1PIZA9aT40J0xlDyxPr-bH",
				col: "_2ueaZW2VmYFP3k8IpO59IR",
				explanation: "_3X0Y99cKtJPNprvvqIyeOk",
				header: "_2tkUUsImD0I5jWUKt77ZAH",
				img: "_2qJnksxaH_YpcbYwW6ggtA",
				tutorial: "_13vSv0_15yzB5YMudJnPJt"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less": function(e, t, s) {
			e.exports = {
				button: "aq9ZqWnC2Xwbkzhr1C8hJ",
				container: "m7z0uN9mDxptXfSHafLTw",
				cover: "xyt2inBPUfRQ_Efcqt_Ab",
				description: "KX_LU59tHaCYNg437pykk",
				freeCard: "_3qfrF-S8Mak5I9Y5F6oJFF",
				fullWidth: "_3c3Kr_1Q_oJTZvtAYy1N-6",
				img: "_2VRR41zg0aqqAAjxIzZGz0",
				title: "gRNqnS3tiW9yK_OX8aSV3",
				premiumCard: "_1J7mAZ1dsFqB0jBKT2A-Ry"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less": function(e, t, s) {
			e.exports = {
				container: "yQNQSPTLUWPNXeKzlqNu6",
				cover: "_24vnSg5ae29l97QtBxVV3-",
				divider: "_2fEN3CscLjkwMnMGeO-Gbi",
				trial: "_2o92N1SUEIcx7a3P7K3tJT"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less": function(e, t, s) {
			e.exports = {
				container: "ez89jyuMsOzC0NO44ciD1",
				cover: "i990kFkfa3m_m5S_U0sma",
				description: "a7ZSke4zXeciCfufC-OWq",
				image: "_29JFielihsv0FuuO4vTOLb",
				preview: "_1gyHt90KLC-GJrapFWERJx",
				redo: "_1sHLf9k2ibP_C7Mx2o9Xcf",
				title: "_2F4sRR7iIwaKQvPPvqmiX-"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less": function(e, t, s) {
			e.exports = {
				crown: "YKwhmGUT9303yZWJlH-QT",
				heading: "_2-PLWgbnP8j-2wARSQiPC6",
				prompt: "_34l-xSb_Lf_m0uJryaeQRG",
				sponsorship: "_2gij23f36Hizly0kdb-hWD",
				text: "NgOyQpTLN-QLfbsXr_kxQ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less": function(e, t, s) {
			e.exports = {
				container: "bIIqFNgEct-dJixmNGzH8",
				controller: "U9kRmM-8uzmN81_cyWilS",
				planet: "OsL6tpn4UXSU4UwEHQpxf",
				user: "_3Q0T-a4HcsAzBW8-YqMrdZ",
				selected: "_2rCRpMr2CIl-rgIl_ikgYT",
				triangle: "_1SxOqeKmgCBvhzxL632u7q"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1-fWFAeAioWlCembFKUHMX",
				container: "_1ftim-rZF9xZL_CTpqF85f",
				title: "_3sTbD7175DPlp68I03ayUK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less": function(e, t, s) {
			e.exports = {
				claim: "_2h8JoT5ednzNOqKdVKCHlM",
				close: "_308nelFEzZOnhnqbW5RpPv",
				container: "_26wdyRSALASUyhdTxV6U4k",
				content: "_3D6as82_3SjWTXYShWM5lz",
				dismissedContainer: "_2EAX2PYbs1gAVQGLJ5XaB9",
				dismissedText: "DBgaCJDh9aY3K_vHjS9Q3",
				example: "_3jYACS0eVj0IZYGd02X11f",
				header: "_12kLHf53On8M30LOB009-F",
				successContainer: "_1wtFNjoeAGTIux27TBYRFN"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/config.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less"),
				x = s.n(g);
			const y = {
					description: Object(h.c)("Add your new emoji to comments! Use the action in the bottom right corner to add an emoji."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_use_emoji.gif")
				},
				f = {
					description: Object(h.c)("Open 'My Badges' in the Sidebar to apply your badge."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				},
				v = {
					description: Object(h.c)("Want to change your badge? Visit the Gallery in the Sidebar to view the latest styles."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				};

			function E(e) {
				const t = (e.hideEmoji ? [] : [y]).concat(e.boughtBadge ? f : v);
				return n.a.createElement("article", {
					className: Object(l.a)(e.className, x.a.container)
				}, n.a.createElement("header", {
					className: x.a.header
				}, n.a.createElement("div", {
					className: x.a.checkContainer
				}, n.a.createElement(b.a, {
					className: x.a.check
				})), Object(h.c)("Congrats! Here's how to use it")), n.a.createElement("div", {
					className: x.a.tutorial
				}, t.map(e => {
					let {
						description: t,
						src: s
					} = e;
					return n.a.createElement("div", {
						className: x.a.col,
						key: t
					}, n.a.createElement("img", {
						className: x.a.img,
						src: s
					}), n.a.createElement("div", {
						className: x.a.explanation
					}, t))
				})))
			}
			var O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/contexts/ApiContext.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/endpoints/economics/banners.ts"),
				w = s("./src/reddit/endpoints/economics/emojis.ts"),
				P = s("./src/reddit/helpers/economics/membershipPage.ts"),
				_ = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				N = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/economics.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less"),
				M = s.n(T);

			function B(e) {
				return n.a.createElement("article", {
					className: Object(l.a)(e.className, M.a.container, {
						[M.a.fullWidth]: !!e.fullWidth
					})
				}, n.a.createElement("div", {
					className: M.a.cover
				}), n.a.createElement("header", {
					className: M.a.title
				}, e.title), n.a.createElement("img", {
					className: M.a.img,
					src: e.img
				}), n.a.createElement("div", {
					className: M.a.description
				}, e.description), n.a.createElement(j.n, {
					className: M.a.button,
					onClick: e.onClaim
				}, e.cta))
			}
			var R = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts"),
				F = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less"),
				D = s.n(F);

			function A(e) {
				const {
					className: t,
					platform: s,
					playerType: r,
					region: a,
					userIsSubscriber: o,
					onClaim: i
				} = e, c = Object(R.d)({
					platform: s,
					playerType: r,
					region: a,
					style: "bw"
				}), d = Object(R.d)({
					platform: s,
					playerType: r,
					region: a,
					style: "color"
				});
				return n.a.createElement("div", {
					className: Object(l.a)(D.a.container, t)
				}, !o && n.a.createElement(n.a.Fragment, null, n.a.createElement(B, {
					className: D.a.freeCard,
					cta: Object(h.c)("claim"),
					img: c,
					title: Object(h.c)("Claim Free Badge"),
					onClaim: () => i(!1)
				}), n.a.createElement("div", {
					className: D.a.divider
				}, n.a.createElement("div", {
					className: D.a.cover
				}), "OR"), n.a.createElement(B, {
					className: D.a.premiumCard,
					cta: Object(h.c)("become a supporter"),
					description: Object(h.c)("Colored badge + dozens more,\nemojis and GIFs in comments"),
					img: d,
					title: Object(h.c)("Claim Premium Badge"),
					onClaim: () => i(!0)
				}), n.a.createElement("img", {
					className: D.a.trial,
					src: "".concat(p.a.assetPath, "/img/memberships/banners/free-trial.png")
				})), o && n.a.createElement(B, {
					fullWidth: !0,
					className: D.a.fullWidthCard,
					cta: Object(h.c)("claim"),
					img: d,
					title: Object(h.c)("Claim Premium Badge"),
					onClaim: () => i(!1)
				}))
			}
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var W = s("./node_modules/lodash/sample.js"),
				H = s.n(W),
				V = s("./node_modules/react-motion/lib/react-motion.js"),
				U = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				G = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less"),
				z = s.n(G);
			const K = {
				stiffness: 210,
				damping: 20
			};

			function q() {
				return {
					platform: H()(Object.keys(R.a)) || "pc",
					playerType: H()(Object.keys(R.b)) || "casual",
					region: H()(Object.keys(R.c)) || "nae"
				}
			}
			class Q extends n.a.Component {
				constructor(e) {
					super(e), this.state = q()
				}
				render() {
					const {
						platform: e,
						playerType: t,
						region: s
					} = this.state, r = R.a[e], a = R.b[t], o = R.c[s];
					return n.a.createElement("article", {
						className: Object(l.a)(z.a.container, this.props.className)
					}, n.a.createElement("div", {
						className: z.a.cover
					}), n.a.createElement("header", {
						className: z.a.title
					}, Object(h.c)("Example")), n.a.createElement(V.TransitionMotion, {
						defaultStyles: [{
							key: Object(R.d)(Object.assign({}, this.state, {
								style: "color"
							})),
							style: {
								rotation: 0
							}
						}],
						styles: [{
							key: Object(R.d)(Object.assign({}, this.state, {
								style: "color"
							})),
							style: {
								rotation: Object(V.spring)(0, K)
							}
						}],
						willEnter: () => ({
							rotation: -180
						}),
						willLeave: () => ({
							rotation: Object(V.spring)(180, K)
						})
					}, e => n.a.createElement("div", {
						className: z.a.preview
					}, e.map(e => n.a.createElement("img", {
						className: z.a.image,
						key: e.key,
						src: e.key,
						style: {
							transform: "rotateY(".concat(e.style.rotation, "deg)")
						}
					})))), n.a.createElement("footer", {
						className: z.a.description
					}, "".concat(o, ", ").concat(r, ", ").concat(a)), n.a.createElement(U.a, {
						className: z.a.redo,
						onClick: () => this.setState(q())
					}))
				}
			}
			var Z = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less"),
				J = s.n(Z);
			const Y = Object(i.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(I.r)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var X = Object(a.b)(Y)((function(e) {
					const t = e.subreddit ? e.subreddit.displayText : "the community";
					return n.a.createElement("header", {
						className: Object(l.a)(J.a.container, e.className)
					}, n.a.createElement("div", {
						className: J.a.heading
					}, Object(h.c)("looking for game badge")), n.a.createElement("div", {
						className: J.a.prompt
					}, Object(h.c)("Find New Gamers to Play Together"), n.a.createElement("div", {
						className: J.a.sponsorship
					}, n.a.createElement("img", {
						className: J.a.crown,
						src: "".concat(p.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
					}), Object(h.c)("Sponsored by ".concat(Object(h.b)("members", e.meta.memberAltPlural))))), n.a.createElement("div", {
						className: J.a.text
					}, Object(h.c)("Get a badge that lets you find new teammates in ".concat(Object(h.b)("community", t), ". ")), Object(h.c)("Specify your region, platform, and your play style for the best match. "), Object(h.c)("The badge helps other players find you, and makes it easier for others to start a conversation in Reddit chat.")))
				})),
				$ = s("./src/higherOrderComponents/asTooltip.tsx"),
				ee = s("./src/reddit/controls/Dropdown/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				re = s("./src/reddit/icons/svgs/Planet/index.tsx"),
				ne = s("./src/reddit/icons/svgs/User/index.tsx"),
				ae = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less"),
				oe = s.n(ae);
			const ie = new Map;
			ie.set(R.a, "LFG_BANNER_PLATFORM_DROPDOWN"), ie.set(R.b, "LFG_BANNER_PLAYERTYPE_DROPDOWN"), ie.set(R.c, "LFG_BANNER_REGION_DROPDOWN");
			const ce = new Map;
			ce.set(R.a, "platform"), ce.set(R.b, "playerType"), ce.set(R.c, "region");
			const de = new Map;
			de.set(R.a, n.a.createElement(e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			})), {
				className: oe.a.controller
			})), de.set(R.b, n.a.createElement(ne.a, {
				className: oe.a.user
			})), de.set(R.c, n.a.createElement(re.a, {
				className: oe.a.planet
			}));
			const le = Object($.a)(ee.a);
			var me, ue = Object(O.b)((function(e) {
					const t = de.get(e.type),
						s = ie.get(e.type);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(l.a)(oe.a.container, e.className, {
							[oe.a.selected]: !!e.selected
						}),
						id: s,
						onClick: e.onToggleDropdown
					}, t, e.text, n.a.createElement(se.b, {
						className: oe.a.triangle
					})), n.a.createElement(le, {
						tooltipId: s,
						isOpen: !!e.tooltipVisible
					}, Object.keys(e.type).map((t, s) => n.a.createElement(te.b, {
						"data-redditStyle": !0,
						key: s,
						index: s,
						displayText: String(e.type[t]),
						onClick: () => {
							e.onChange(t), e.sendEvent(s => {
								const r = L.defaults(s);
								return Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_customize_badge",
									correlationId: e.correlationId
								}, r, {
									actionInfo: Object.assign({}, r.actionInfo, {
										paneName: ce.get(e.type),
										reason: t
									}),
									subreddit: L.subreddit(s)
								})
							})
						}
					}))))
				})),
				pe = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less"),
				he = s.n(pe),
				be = Object(O.b)(class extends n.a.Component {
					constructor() {
						super(...arguments), this.state = {
							selectedPlatform: void 0,
							selectedPlayerType: void 0,
							selectedRegion: void 0,
							visibleDropdown: void 0
						}
					}
					render() {
						const {
							className: e,
							onGenerate: t
						} = this.props, {
							selectedPlatform: s,
							selectedPlayerType: r,
							selectedRegion: a,
							visibleDropdown: o
						} = this.state, i = s ? R.a[s] : Object(h.c)("platform"), c = r ? R.b[r] : Object(h.c)("player type"), d = a ? R.c[a] : Object(h.c)("region");
						return n.a.createElement("article", {
							className: Object(l.a)(he.a.container, e)
						}, n.a.createElement("header", {
							className: he.a.title
						}, Object(h.c)("Setup Your Badge")), n.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!a,
							tooltipVisible: "region" === o,
							text: d,
							type: R.c,
							onChange: e => this.setState({
								selectedRegion: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "region"
							}))
						}), n.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!s,
							tooltipVisible: "platform" === o,
							text: i,
							type: R.a,
							onChange: e => this.setState({
								selectedPlatform: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "platform"
							}))
						}), n.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!r,
							tooltipVisible: "playerType" === o,
							text: c,
							type: R.b,
							onChange: e => this.setState({
								selectedPlayerType: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "playerType"
							}))
						}), n.a.createElement(j.f, {
							className: he.a.button,
							disabled: !s || !r || !a,
							onClick: () => {
								s && r && a && (t({
									platform: s,
									playerType: r,
									region: a
								}), this.props.sendEvent(e => Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_generate_badge",
									correlationId: this.props.correlationId
								}, L.defaults(e), {
									subreddit: L.subreddit(e)
								})))
							}
						}, Object(h.c)("generate badge")))
					}
				}),
				ge = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less"),
				xe = s.n(ge);
			! function(e) {
				e.CanClaim = "canclaim", e.Claimed = "claimed", e.Dismissed = "dismissed", e.Generating = "generating", e.Hidden = "hidden", e.Select = "select"
			}(me || (me = {}));
			class ye extends n.a.Component {
				constructor(e) {
					super(e), this.handleClaim = async e => {
						const {
							subscriberState: t,
							subreddit: s
						} = this.props, {
							selectedRegion: r,
							selectedPlatform: n,
							selectedPlayerType: a
						} = this.state;
						if (!(r && n && a && s && t !== I.b.DontKnow)) return null;
						const o = "".concat(r, "_").concat(n, "_").concat(a, "_badge"),
							i = await Object(w.a)(this.props.apiContext(), {
								productId: o,
								subredditId: this.props.subredditId
							});
						i.ok ? (this.setState({
							show: me.Claimed
						}), Object(S.c)(this.props.apiContext(), this.props.subredditId, S.a.LFG), this.props.onBadgeClaimed(o)) : this.props.onError(i.error), e && this.props.onOpenLandingPage(s, this.correlationId), this.props.sendEvent(t => {
							const s = L.defaults(t);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: e && this.correlationId ? "lfg_banner_claim_premium" : "lfg_banner_claim",
								correlationId: this.correlationId
							}, s, {
								actionInfo: Object.assign({}, s.actionInfo, {
									reason: o,
									paneName: S.a.LFG
								}),
								subreddit: L.subreddit(t)
							})
						})
					}, this.handleDismiss = () => {
						this.state.show === me.Claimed ? this.setState({
							show: me.Hidden
						}) : (this.setState({
							show: me.Dismissed
						}), this.props.sendEvent(e => {
							const t = L.defaults(e);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_dismiss",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: S.a.LFG
								}),
								subreddit: L.subreddit(e)
							})
						})), Object(S.c)(this.props.apiContext(), this.props.subredditId, S.a.LFG)
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: me.Select
						}), Object(S.e)(this.props.apiContext(), this.props.subredditId, S.a.LFG), this.props.sendEvent(e => {
							const t = L.defaults(e);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_undo_dismiss",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: S.a.LFG
								}),
								subreddit: L.subreddit(e)
							})
						})
					}, this.state = {
						show: me.Hidden
					}, this.correlationId = d()()
				}
				async componentDidMount() {
					if (this.props.userIsLoggedIn) {
						!!(await Object(S.b)(this.props.apiContext(), this.props.subredditId))[S.a.LFG] || (this.setState({
							show: me.Select
						}), this.props.sendEvent(e => {
							const t = L.defaults(e);
							return Object.assign({
								source: "meta",
								action: "view",
								noun: "lfg_banner",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: S.a.LFG
								}),
								subreddit: L.subreddit(e)
							})
						}))
					}
				}
				render() {
					const {
						className: e,
						subredditId: t,
						subscriberState: s,
						userIsLoggedIn: r
					} = this.props, {
						show: a,
						selectedRegion: o,
						selectedPlatform: i,
						selectedPlayerType: c
					} = this.state;
					return r && s !== I.b.DontKnow && a !== me.Hidden ? this.state.show === me.Dismissed ? n.a.createElement("div", {
						className: Object(l.a)(xe.a.dismissedContainer, e)
					}, n.a.createElement("div", {
						className: xe.a.dismissedText
					}, Object(h.c)("Ok, we won't show you this again.")), n.a.createElement(j.f, {
						onClick: this.handleUndoDismiss
					}, Object(h.c)("undo"))) : this.state.show === me.Claimed ? n.a.createElement("div", {
						className: Object(l.a)(xe.a.successContainer, e)
					}, n.a.createElement(N.a, {
						className: xe.a.close,
						onClick: this.handleDismiss
					}), n.a.createElement(E, {
						boughtBadge: !0,
						hideEmoji: !0
					})) : n.a.createElement("article", {
						className: Object(l.a)(xe.a.container, e)
					}, n.a.createElement(X, {
						className: xe.a.header,
						subredditId: t
					}), n.a.createElement("div", {
						className: xe.a.content
					}, n.a.createElement(be, {
						correlationId: this.correlationId,
						onGenerate: e => this.setState(() => ({
							show: me.CanClaim,
							selectedRegion: e.region,
							selectedPlatform: e.platform,
							selectedPlayerType: e.playerType
						}))
					}), a === me.Select && n.a.createElement(Q, {
						className: xe.a.example
					}), a === me.CanClaim && o && i && c && n.a.createElement(A, {
						className: xe.a.claim,
						platform: i,
						playerType: c,
						region: o,
						userIsSubscriber: s === I.b.Subscribed,
						onClaim: e => this.handleClaim(e)
					})), n.a.createElement(N.a, {
						className: xe.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const fe = Object(i.c)({
					subreddit: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.subreddits.models[s]
					},
					subscriberState: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(I.y)(e, s)
					},
					userIsLoggedIn: e => !!e.user.account
				}),
				ve = Object(O.b)(ye);
			t.a = Object(C.b)(Object(a.b)(fe, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onError: t => e(Object(u.e)({
						duration: 5e3,
						kind: k.b.Error,
						text: Object(_.a)(t)
					})),
					onBadgeClaimed: t => {
						e(Object(m.c)(s, t))
					},
					onOpenLandingPage: (t, s) => {
						e(Object(o.b)(Object(P.a)(t.name, s)))
					}
				}
			})(ve))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var r, n, a, o;

			function i(e) {
				const {
					platform: t,
					playerType: s,
					region: r,
					style: n
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(n, "/").concat(r, "_").concat(t, "_").concat(s, "_").concat(n, ".svg")
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})), s.d(t, "c", (function() {
					return a
				})), s.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(r || (r = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(n || (n = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(a || (a = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(o || (o = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/reddit/featureFlags/component.tsx");
			const a = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumNewUserWelcome").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(n.a)("spPremium", a)
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/upperFirst.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/isFakeSubreddit/index.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/components/EmptySubreddit.m.less"),
				g = s.n(b),
				x = s("./src/lib/lessComponent.tsx");
			const y = x.a.div("PrimaryText", g.a),
				f = x.a.div("SecondaryText", g.a),
				v = x.a.div("MainContentWrapper", g.a),
				E = x.a.div("MainContent", g.a),
				O = x.a.wrapped(h.a, "BackgroundPlaceholder", g.a),
				C = x.a.wrapped(p.h, "SubmitLink", g.a),
				j = x.a.img("SnooImg", g.a),
				S = x.a.div("EmptyHomepage", g.a),
				w = e => {
					switch (e) {
						case c.N.RISING:
							return Object(m.c)("Create a new post and take all the glory");
						case c.N.TOP:
						case c.N.CONTROVERSIAL:
							return null;
						default:
							return Object(m.c)("Be the first to till this fertile land.")
					}
				},
				P = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const r = w(s);
					return o.a.createElement(E, null, o.a.createElement(y, null, (e => {
						switch (e) {
							case c.N.RISING:
								return Object(m.c)("Looks like nothing is rising fast enough in this subreddit");
							case c.N.TOP:
							case c.N.CONTROVERSIAL:
								return Object(m.c)("No posts were found using the ".concat(n()(e), " sort. Try changing the sort."));
							default:
								return Object(m.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(d.a)(t) && !!r && o.a.createElement(o.a.Fragment, null, o.a.createElement(f, null, w(s)), o.a.createElement(C, {
						to: "/r/".concat(t, "/submit")
					}, o.a.createElement(l.c, null, "Add a post"))))
				},
				_ = () => o.a.createElement(E, null, o.a.createElement(j, {
					src: "".concat(i.a.assetPath, "/img/snoo_discovery@1x.png")
				}), o.a.createElement(y, null, o.a.createElement(l.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), o.a.createElement(C, {
					to: "/r/popular"
				}, o.a.createElement(l.c, null, "Browse Popular Posts")));
			t.a = x.a.wrapped(e => o.a.createElement(S, null, o.a.createElement(O, {
				isLoading: !1,
				layout: u.g.Classic
			}), o.a.createElement(v, null, e.subreddit ? o.a.createElement(P, e) : o.a.createElement(_, null))), "Component", g.a)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				v = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				E = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				S = s.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "view--layout--FUE",
				_ = "LayoutSwitch--picker",
				N = Object(i.a)(g.a),
				k = {
					[p.d.Card]: E.a,
					[p.d.Classic]: f.a,
					[p.d.Compact]: v.a
				},
				I = {
					[p.d.Card]: Object(y.c)("card"),
					[p.d.Classic]: Object(y.c)("classic"),
					[p.d.Compact]: Object(y.c)("compact")
				},
				L = Object(h.t)(),
				T = Object(o.c)({
					dropdownIsOpen: Object(C.b)(_),
					postLayout: h.M,
					redditStyle: h.B
				}),
				M = Object(a.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.g)({
						tooltipId: _
					}))
				}));
			class B extends n.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: r,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(O.screen)(t),
							subreddit: Object(O.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: r,
							postLayout: a
						} = this.props, o = s || p.e[a], i = e === o, d = k[e];
						return n.a.createElement(x.b, w({}, t, {
							className: Object(c.a)(S.a.LayoutItem, {
								[S.a.selected]: i
							}),
							"data-layout": e,
							displayText: I[e],
							iconWrapperClassName: S.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: S.a.LayoutItemTextClassName
						}), n.a.createElement(d, {
							className: S.a.LayoutIcon,
							onClick: i ? void 0 : r
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(N, w({}, e, {
							className: S.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: S.a.DropdownRow,
							rowIconClassName: S.a.DropdownRowIcon,
							rowSelectedClassName: S.a.DropdownRowSelected,
							tooltipId: _
						}), this.renderItem(p.d.Card), this.renderItem(p.d.Classic), this.renderItem(p.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, a = t || p.e[r];
					return n.a.createElement("div", {
						className: Object(c.a)(S.a.Container, e),
						id: P
					}, n.a.createElement("div", {
						className: S.a.DropdownContainer,
						onClick: s
					}, this.renderItem(a, {
						id: _,
						showDropdownTriangle: !0
					}), n.a.createElement(b.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(M(Object(u.b)(Object(d.a)(B))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				TimeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				timeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/components/ListingSort/index.tsx"),
				x = s("./src/reddit/components/TimeSort/index.tsx"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/helpers/path/index.ts"),
				E = s("./src/reddit/helpers/trackers/navigation.ts"),
				O = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				S = s.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const P = new Set([b.N.CONTROVERSIAL, b.N.TOP]),
				_ = new Set([b.N.CONTROVERSIAL, b.N.RISING]),
				N = "ListingSort--Overflow",
				k = Object(l.t)({
					isFrontpage: l.z,
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				I = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, C.i, (e, t, s) => {
					if (e) return e;
					const r = [b.N.HOT, b.N.NEW, b.N.TOP, b.N.RISING];
					return t && s && r.unshift(b.N.BEST), r
				}),
				L = Object(p.c)({
					sortOptions: I
				});
			class T extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(E.d)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(h.a)(t, {
							sort: e
						}) : Object(v.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							sort: t
						} = this.props;
						return n.a.createElement(f.a, {
							className: Object(o.a)(S.a.SortLink, e === t && S.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, n.a.createElement(g.a, {
							className: S.a.SortIcon,
							sort: e
						}), n.a.createElement("div", {
							className: S.a.SortLabel
						}, y.a[e]))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: r,
						sortOptions: a,
						timeSort: i
					} = this.props, c = !t && P.has(r), d = _.has(r), l = a.filter(e => !_.has(e)), m = a.filter(e => _.has(e) && e !== r);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(g.d, w({}, this.props, {
						buttonClassName: S.a.DropdownButton,
						className: Object(o.a)(S.a.SortDropdown, e),
						rowClassName: S.a.DropdownRow,
						rowIconClassName: S.a.DropdownRowIcon,
						rowSelectedClassName: S.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(o.a)(S.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(r), c && n.a.createElement(x.a, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: S.a.DropdownButton,
						className: S.a.TimeSort,
						listingSort: r,
						onChange: s,
						rowClassName: S.a.DropdownRow,
						rowSelectedClassName: S.a.DropdownRowSelected,
						timeSort: i || b.Qb,
						wrapperClassName: S.a.TimeSortWrapper
					}), m.length > 0 && n.a.createElement(g.d, w({}, this.props, {
						className: Object(o.a)(S.a.SortOverflow, e),
						dropdownId: N,
						rowClassName: S.a.DropdownRow,
						rowIconClassName: S.a.DropdownRowIcon,
						rowSelectedClassName: S.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), n.a.createElement("button", {
						className: S.a.SortOverflowButton,
						id: N
					}, n.a.createElement(O.a, null))))
				}
			}
			var M = k(Object(a.b)(L)(Object(d.b)(T))),
				B = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				R = s.n(B);
			const F = Object(l.t)({
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				D = Object(a.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (s) {
								const n = Object(i.c)({
									sort: t,
									timeSort: r
								});
								e(Object(c.G)(s, n))
							}
						}
					}
				});
			class A extends n.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: r = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return n.a.createElement("div", {
						className: Object(o.a)(R.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(M, {
						baseUrl: e,
						disabled: r,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !a && n.a.createElement(u.a, {
						className: R.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = F(D(Object(d.b)(A)))
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less": function(e, t, s) {
			e.exports = {
				publicAddressSection: "e0Te0bBkUsDG6nuCjsFky",
				publicAddress: "_3GWjMTgC3OErgLOUT3TdHw",
				yourWalletAddress: "_2ZVoGra9kSZDSEzU8EoxXp",
				settingsButton: "g2yJ86Mg6P4M5NIoQA0Ve",
				settingsIcon: "_1ZIhSQEemVyqYNEOTZVZGv"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_281dcYAIoQvZtLs7iI7QLT",
				risk: "_1r7M4su-D_hCOMd066XY3J",
				riskBody: "_12gDkO_ygs4ikCeyu5bcVg",
				riskTitle: "_3iYb38SYPwjAd1VG859AKs"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less": function(e, t, s) {
			e.exports = {
				overflowingText: "_3s4m8dsZEYcHZ4ojNFUV0R",
				cell: "_1-v1Zgj9IOmc-oaS_dfHfI",
				cellBottomLine: "_1YrPtUZyIgZmt7BoC3IOjC",
				cellContainer: "_3y3jYnCjkWtjpibBnc9e3l",
				cellTopLine: "-pS2f0b04dtavABCVdrie",
				explanation: "_1n5fyOsQxmVlxXd1xuw6fH",
				title: "_2Q8Se5aIjJDpE5JnGoGI5R",
				token: "_2tQrDQoIjV3V6CMgrLYXU3",
				tokenCell: "_2rBuuOwPxb-X6wEPWDBmYH",
				button: "_1Vg1f_Cp7IF32wBdY1l2Gq"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3WnHen22bLKwTkOL3W6F_D",
				link: "_3LjXe6j5_bQ3U8GZLY0HYO",
				showAll: "eRbX9WCebKIuLXdJIwNjK",
				title: "_3il8HJMlHzKppQleJjuboQ"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, s) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, s) {
			"use strict";
			var r, n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/selectors/gov.ts"),
				m = s("./src/app/strings/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/reddit/actions/governance/index.ts"),
				b = s("./src/reddit/actions/login.ts"),
				g = s("./src/reddit/components/Governance/Token/index.tsx"),
				x = s("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/endpoints/governance/crypto.ts"),
				E = s("./src/reddit/helpers/governance/tokens.ts"),
				O = s("./src/reddit/i18n/components.tsx");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(r || (r = {}));
			var C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/higherOrderComponents/asTooltip.tsx"),
				S = s("./src/lib/copyToClipboard/index.ts"),
				w = s("./src/reddit/actions/governance/errorToast.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				N = s("./src/reddit/contexts/ApiContext.tsx"),
				k = s("./src/reddit/controls/Dropdown/index.tsx"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				L = s("./src/reddit/helpers/governance/ethereum.ts"),
				T = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				M = s("./src/reddit/models/Toast/index.ts"),
				B = s("./src/reddit/selectors/tooltip.ts"),
				R = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				F = s.n(R);
			const D = Object(j.a)(k.a),
				A = "BlockchainWalletInfo--SettingsMenu";
			class W extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(S.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(v.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						onOpenDropdown: t,
						provider: s,
						publicAddress: r,
						token: n,
						tokenName: o
					} = this.props;
					if (!r) return null;
					const i = s === v.a.Ethereum || s === v.a.Rinkeby,
						c = s === v.a.Stellar;
					return a.a.createElement("div", {
						className: F.a.publicAddressSection
					}, a.a.createElement("div", {
						className: F.a.publicAddress,
						title: r
					}, function(e, t) {
						switch (t) {
							case v.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(r, s)), a.a.createElement("div", {
						className: F.a.yourWalletAddress
					}, a.a.createElement(O.c, null, "Your Wallet Address"), (i || c) && a.a.createElement("button", {
						className: F.a.settingsButton,
						title: Object(d.c)("Wallet address settings"),
						role: "menu",
						onClick: t,
						id: A
					}, a.a.createElement(T.a, {
						className: F.a.settingsIcon
					})), i && a.a.createElement(D, {
						tooltipId: A,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(I.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}), s && a.a.createElement(I.b, {
						displayText: Object(d.c)("Remove My Wallet"),
						onClick: this.onRemoveMyWallet
					}), n && a.a.createElement(I.b, {
						displayText: Object(d.c)("Track ".concat(Object(d.b)("tokenName", o), " in MetaMask")),
						onClick: () => Object(L.i)(n)
					})), c && a.a.createElement(D, {
						tooltipId: A,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(I.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const H = Object(i.c)({
					dropdownIsOpen: Object(B.b)(A),
					provider: l.a,
					token: l.q,
					tokenName: l.o
				}),
				V = Object(o.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(w.a)(e, t)
					},
					onOpenDropdown: () => e(Object(_.g)({
						tooltipId: A
					})),
					onWalletRemoved: () => {
						e(Object(h.j)({
							subredditId: t.subredditId
						})), e(Object(P.e)({
							kind: M.b.SuccessCommunityGreen,
							text: Object(d.c)("Wallet removed successfully!")
						}))
					}
				}));
			var U = Object(N.b)(V(W)),
				G = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				z = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				K = s.n(z);

			function q(e) {
				return a.a.createElement("div", {
					className: K.a.risk
				}, a.a.createElement("div", {
					className: K.a.riskTitle
				}, a.a.createElement(G.a, {
					className: K.a.alertIcon
				}), e.title), a.a.createElement("div", {
					className: K.a.riskBody
				}, e.body))
			}
			var Q = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				Z = s.n(Q);
			class J extends a.a.PureComponent {
				componentDidMount() {
					const {
						pageLayer: e,
						provider: t,
						wallet: s
					} = this.props, r = s && s.publicAddress;
					Object(x.b)(e) && t && !r && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						className: e,
						distribution: t,
						isLoggedIn: s,
						language: n,
						onOpenLoginModal: o,
						onOpenRegistrationModal: i,
						onOpenTransferModal: c,
						provider: d,
						subredditId: l,
						tokenDisplayConversion: h,
						tokenName: b,
						useCrypto: x,
						wallet: y
					} = this.props, C = y && y.inactive && function(e, t, s) {
						const n = e.actionScheduledAt - Date.now(),
							a = Math.max(1, Math.floor(n / u.w)),
							o = 1 !== a ? "gov.pointsDecay.inactive.time.plural" : "gov.pointsDecay.inactive.time.singular",
							i = Object(m.a)(t, o, {
								numDays: a
							});
						switch (e.reason) {
							case r.Initial:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.inactive.title", {
										tokenName: s
									}), body: Object(m.a)(t, "gov.pointsDecay.inactive.body", {
										time: i,
										tokenName: s
									})
								};
							case r.Mod:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.election.title"), body: Object(m.a)(t, "gov.pointsDecay.election.body", {
										time: i,
										tokenName: s
									})
								}
						}
					}(y.inactive, n, b), j = y && y.publicAddress, S = d === v.a.Ethereum || d === v.a.Rinkeby;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement("div", {
						className: Z.a.title
					}, b), a.a.createElement("div", {
						className: Z.a.cellContainer
					}, y && Y(a.a.createElement("div", {
						className: Z.a.tokenCell
					}, a.a.createElement(g.a, {
						className: Z.a.token,
						subredditId: l
					}), Object(p.a)(Object(E.b)(y.amount, h))), Object(m.a)(n, "sidebar.gov.yourTokens", {
						tokenName: b
					})), t && Y(Object(p.a)(Object(E.b)(t.totalAvailable, h)), Object(m.a)(n, "sidebar.gov.tokensIssued"))), C && a.a.createElement(q, {
						body: C.body,
						title: C.title
					}), a.a.createElement("div", {
						className: Z.a.explanation
					}, Object(m.a)(n, "sidebar.gov.tokenExplanation", {
						tokenName: b
					})), d && a.a.createElement(U, {
						publicAddress: j,
						subredditId: l
					}), d && !j && S && a.a.createElement(f.f, {
						className: Z.a.button,
						onClick: s ? i : o
					}, a.a.createElement(O.c, null, "register")), y && !x && a.a.createElement(f.i, {
						className: Z.a.button,
						onClick: c
					}, a.a.createElement(O.c, null, "send")))
				}
			}

			function Y(e, t) {
				return a.a.createElement("div", {
					className: Z.a.cell
				}, a.a.createElement("div", {
					className: Z.a.cellTopLine
				}, e), a.a.createElement("div", {
					className: Z.a.cellBottomLine
				}, t))
			}
			const X = Object(i.c)({
				isLoggedIn: C.K,
				provider: l.a,
				tokenName: l.o,
				tokenDisplayConversion: l.n,
				language: e => e.user.language,
				useCrypto: l.r
			});
			var $ = Object(o.b)(X, e => ({
					onOpenLoginModal: () => e(Object(b.e)()),
					onOpenRegistrationModal: () => e(Object(h.i)()),
					onOpenTransferModal: () => e(Object(h.h)())
				}))(Object(y.t)()(J)),
				ee = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				te = s("./src/lib/classNames/index.ts"),
				se = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				re = s("./src/reddit/actions/subreddit.ts"),
				ne = s("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				ae = s.n(ne);
			const oe = Object(i.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var ie = Object(y.t)()(Object(o.b)(oe, (e, t) => ({
					onFilterProposals: () => e(Object(re.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(y.F)(e.pageLayer) && e.proposals.length ? a.a.createElement("div", {
						className: Object(te.a)(e.className, ae.a.container)
					}, a.a.createElement("div", {
						className: ae.a.title
					}, a.a.createElement(O.c, null, "Latest Polls")), e.proposals.map(e => a.a.createElement(ee.a, {
						className: ae.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(se.a)(e.permalink)
					}, e.title)), a.a.createElement("a", {
						className: ae.a.showAll,
						onClick: e.onFilterProposals
					}, a.a.createElement(O.c, null, "show all"))) : null
				}))),
				ce = s("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				de = s.n(ce);
			const le = Object(i.c)({
				tokenName: l.o,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: l.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.a = Object(o.b)(le)((function(e) {
				return a.a.createElement(c.a, {
					className: e.className,
					title: Object(d.c)("Subreddit Points")
				}, e.distribution ? a.a.createElement(n.Fragment, null, a.a.createElement($, {
					className: de.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && a.a.createElement(ie, {
					className: de.a.section,
					subredditId: e.subreddit.id
				})) : a.a.createElement("div", {
					className: de.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Leaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceVotingBanner").then(s.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = n
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(a.b)(l)((function(e) {
				return n.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./src/lib/addQueryParams/index.ts");
			const n = "metamaskInstalled";

			function a() {
				window.location.replace(Object(r.a)(window.location.href, {
					[n]: "true"
				}))
			}

			function o(e) {
				return !!(e && e.queryParams && e.queryParams[n])
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistrationStellarBanner").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spStellarWalletRegistration
			});
			t.a = Object(a.b)(l)((function(e) {
				return n.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = s("./src/reddit/components/HeaderImage/index.m.less"),
				b = s.n(h);
			const g = c.a.wrapped(m.a, "Planet", b.a),
				x = c.a.div("SubredditIcon", b.a),
				y = c.a.div("PositionedImage", b.a),
				f = c.a.div("HeaderContent", b.a),
				v = c.a.div("HeaderContainer", b.a),
				E = c.a.span("HeaderText", b.a),
				O = c.a.wrapped(a.a, "HeaderUrl", b.a),
				C = c.a.span("Container", b.a),
				j = Object(i.a)(e => {
					const t = Object(u.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						r = Object(p.a)(e).banner.positionedImageAlignment,
						a = Object(p.a)(e).banner.positionedImage,
						i = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (r) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const m = !!a && !!i && "left" === r,
						h = Object(u.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						S = "".concat(4 + j, "px");
					return n.a.createElement(C, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, n.a.createElement(O, {
						className: e.className,
						to: e.url
					}, n.a.createElement(v, {
						className: Object(o.a)({
							[b.a.fullScreenDisabled]: !e.disableFullscreen,
							[b.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || d.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && n.a.createElement(f, {
						className: Object(o.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? n.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: S,
							width: S
						}
					}) : n.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: S,
							width: S
						}
					})), n.a.createElement(E, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), n.a.createElement(y, {
						className: Object(o.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!a,
							[b.a.hoverPositionedImage]: !!a && !!i
						}),
						style: Object.assign({}, c, {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/IdCard/index.m.less"),
				o = s.n(a);
			const i = n.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return n.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var r = s("./src/app/strings/index.ts"),
				n = s("./src/config.ts"),
				a = s("./src/reddit/constants/listings.ts"),
				o = s("./src/reddit/constants/page.ts");
			const i = e => e && e.toLowerCase() === a.b.Popular,
				c = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === o.c,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: s,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, s, o, m, u, {
						language: p,
						listingName: h,
						isM2MEnabled: b,
						subreddit: g,
						idCardWidget: x
					} = e;
					const y = x && x.subscribersText || Object(r.a)(p, "structuredStyles.widgets.id-card.subscribersText"),
						f = x && x.currentlyViewingText || Object(r.a)(p, "structuredStyles.widgets.id-card.currentlyViewingText");
					let v, E;
					if (d(h))
						if (t = "".concat(n.a.assetPath, "/img/id-cards/home-banner@2x.png"), o = l("url('".concat(n.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = a.c[a.b.Home], b) m = Object(r.a)(p, "listings.populatedHome.title"), s = Object(r.a)(p, "listings.populatedHome.longDescription");
						else {
							s = Object(r.a)(p, "listings.home.longDescription");
							const e = Object(r.a)(p, "listings.home.title");
							m = e.charAt(0).toUpperCase() + e.slice(1)
						}
					else c(h) ? (t = "".concat(n.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(r.a)(p, "listings.all.longDescription"), o = l("url('".concat(n.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/all", u = a.c[a.b.All]) : i(h) ? (t = "".concat(n.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(r.a)(p, "listings.popular.longDescription"), o = l("url('".concat(n.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/popular", u = a.c[a.b.Popular]) : h && (s = x && x.description, o = l(""), m = g.displayText, u = g.url, E = x && x.subscribersCount, v = x && x.currentlyViewingCount);
					return Object.assign({
						snooBackground: o,
						description: s,
						titleText: m,
						url: u,
						subscribersCount: E,
						subscribersText: y,
						currentlyViewingText: f,
						currentlyViewingCount: v
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreateAccountButton: "_2wIWA7CTxkwjuDQ4-Msi_r",
				createAccountButton: "_2wIWA7CTxkwjuDQ4-Msi_r",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/IdCard/index.m.less"),
				i = s.n(o);
			const c = e => {
				let {
					snooBackground: t
				} = e;
				return n.a.createElement("div", {
					className: i.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: s
				} = e;
				return n.a.createElement("div", {
					className: Object(a.a)(i.a.Title, i.a.TitleShifted)
				}, n.a.createElement(c, {
					snooBackground: s
				}), n.a.createElement("div", {
					className: i.a.TitleTextShiftedContainer
				}, n.a.createElement("span", {
					className: i.a.TitleText
				}, t)))
			}
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-InFeedPostCreation").then(s.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(o),
				c = s("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);
			t.a = e => {
				const {
					className: t,
					color: s,
					icon: r,
					subtitle: o,
					title: c
				} = e;
				return n.a.createElement("div", {
					className: Object(a.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, n.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), r ? n.a.createElement(d, null, r) : n.a.createElement(d, null), n.a.createElement(l, null, n.a.createElement("div", {
					className: i.a.title
				}, c), o && n.a.createElement("div", {
					className: i.a.subtitle
				}, o)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				x = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				y = s.n(x);
			const f = n.a.createElement(p.a, {
					className: y.a.icon
				}),
				v = Object(o.c)({
					language: b.T,
					subreddit: h.B,
					subredditAboutInfo: h.y
				}),
				E = Object(a.b)(v);
			t.a = E(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s,
					language: r
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const a = s && s.quarantineMessageHtml,
					o = s && s.quarantineMessage || Object(i.a)(r, "contentGate.quarantinedSubreddit.quarantineMsg");
				return n.a.createElement(g.a, {
					className: y.a.container,
					color: d.a.quarantine,
					icon: f,
					subtitle: n.a.createElement("span", null, n.a.createElement(m.c, null, "This community is"), " ", n.a.createElement("a", {
						className: y.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.a.createElement(m.c, null, "quarantined")), ": ", a ? n.a.createElement(c.a, {
						className: y.a.rawHtmlDisplay,
						html: a
					}) : o, " ", n.a.createElement(l.a, {
						className: y.a.link,
						to: "/"
					}, n.a.createElement(m.c, null, "Click to return home."))),
					title: Object(u.c)("Community Quarantined")
				})
			})
		},
		"./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/selectors/widgets.ts"),
				h = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				b = s.n(h);
			const g = Object(o.c)({
					idCardWidget: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(p.d)(e, {
							subredditId: s
						})
					}
				}),
				x = e => e.includeIcon ? e.idCardWidget && e.idCardWidget.description ? n.a.createElement(u.c, null, "Edit your description and custom icon") : n.a.createElement(u.c, null, "Add a community description and custom icon") : e.idCardWidget && e.idCardWidget.description ? n.a.createElement(u.c, null, "Edit your description") : n.a.createElement(u.c, null, "Add a community description"),
				y = e => e.includeIcon ? n.a.createElement(u.c, null, "Tell us about your community and upload a custom avatar so users can easily identify your community") : n.a.createElement(u.c, null, "Tell us more about your community.");
			class f extends n.a.Component {
				componentDidMount() {
					this.props.sendEvent(m.e), this.props.onViewTooltip()
				}
				render() {
					const e = x(this.props),
						t = y(this.props);
					return n.a.createElement("div", {
						className: b.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, n.a.createElement("span", {
						className: b.a.topRow
					}, n.a.createElement("h3", {
						className: b.a.title
					}, e)), n.a.createElement("p", {
						className: b.a.tooltipBody
					}, t), n.a.createElement(d.f, {
						className: b.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, n.a.createElement(u.c, null, "Got it")))
				}
			}
			t.a = Object(a.b)(g, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissTooltip: () => {
						e(Object(i.h)()), Object(l.O)(s, !0)
					},
					onViewTooltip: () => {
						Object(l.ab)()
					}
				}
			})(Object(c.b)(f))
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, s) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/models/Poll/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Vote/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				f = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				v = s("./src/reddit/selectors/inFeedChaining.ts"),
				E = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/monthsToMinutes.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				S = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				P = s("./src/reddit/components/CallToActionButton/index.tsx"),
				_ = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				N = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				k = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				I = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				T = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				D = s("./src/reddit/components/PostContainer/index.tsx"),
				A = s("./src/reddit/components/PostLeftRail/index.tsx"),
				W = s("./src/reddit/components/PostMedia/index.tsx"),
				H = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/i18n/components.tsx"),
				U = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				G = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				z = s.n(G);
			var K = () => n.a.createElement("div", {
					className: z.a.container
				}, n.a.createElement(U.a, {
					className: z.a.pinnedIcon
				}), n.a.createElement("span", {
					className: z.a.metaText
				}, n.a.createElement(V.c, null, "pinned by moderators"))),
				q = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Q = s("./src/reddit/components/PostTitle/index.tsx"),
				Z = s("./src/reddit/components/PostTopLine/index.tsx"),
				J = s("./src/reddit/components/SourceLink/index.tsx"),
				Y = s("./src/reddit/contexts/InsideOverlay.tsx"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ee = s("./src/reddit/helpers/isCrosspost.ts"),
				te = s("./src/reddit/helpers/postEvent.ts"),
				se = s("./src/reddit/constants/experiments.ts"),
				re = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ae = Object(o.a)(C.O, e => e.some(ne.c)),
				oe = Object(o.a)(ae, e => e),
				ie = (e, t) => Object(re.c)(e, {
					experimentName: se.D,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && oe(e, {
							listingKey: s
						})
					}
				});
			var ce = s("./src/reddit/selectors/postFlair.ts"),
				de = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				le = s.n(de),
				me = s("./src/reddit/components/LargePost/index.m.less"),
				ue = s.n(me);
			const pe = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.O)(e, {
						listingKey: s
					}) : void 0
				},
				he = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.C)(e, {
						listingKey: s
					}) : void 0
				},
				be = Object(a.b)(() => Object(o.c)({
					autoplayPref: j.b,
					activeModalId: y.a,
					currentUser: j.i,
					hideNSFWPref: j.z,
					flairStyleTemplate: X.Q,
					isCurrentUserProfilePost: C.h,
					isFrontpageHome: O.g,
					isM2MHomeRedirectEnabled: f.c,
					language: j.T,
					isActive: C.g,
					isPostChainDismissed: v.c,
					isPostChained: v.d,
					moderatorPermissions: E.i,
					modModeEnabled: X.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: C.I,
					posts: pe,
					postHeightVariant: ie,
					postIds: he,
					showEditFlair: ce.a,
					subredditOrProfile: C.U,
					userIsOp: j.kb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: r,
						postId: n
					} = t;
					return {
						chainPost: () => {
							r && s && e(Object(m.d)({
								listingKey: s,
								listingName: r,
								postId: n
							}))
						},
						handleVote: t => {
							const s = t === x.a.upvoted ? Object(u.N)(n) : Object(u.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(u.L)(n)),
						onOpenReportsDropdown: t => e(Object(p.g)({
							tooltipId: t
						}))
					}
				}),
				ge = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: r,
						className: a,
						currentUser: o,
						eventFactory: m,
						flairStyleTemplate: u,
						forceLoadMedia: p,
						hideNSFWPref: x,
						inSubredditOrProfile: y = !1,
						isCommentsPage: f,
						isCurrentUserProfilePost: v,
						isFrontpage: E,
						isFrontpageHome: O,
						isM2MHomeRedirectEnabled: C,
						isOverlay: j,
						isPostChainDismissed: V,
						isPostChained: U,
						language: G,
						listingKey: z,
						listingName: Y,
						moderatorPermissions: X,
						modModeEnabled: re,
						onClickPost: ne,
						onIgnoreReports: ae,
						onOpenReportsDropdown: oe,
						poll: ie,
						pollResult: ce,
						post: de,
						postHeightVariant: me,
						scrollerItemRef: pe,
						showEditFlair: he,
						subredditOrProfile: be,
						userIsOp: ge
					} = e, xe = !!e.redditStyle || !!e["data-redditstyle"], ye = xe ? void 0 : u, fe = Object(d.a)(X), ve = re && fe, Ee = Object(c.a)(X), Oe = Object(R.c)(de), Ce = !!de.media && de.media.type === h.n.RTJSON, je = ge && Ce, Se = s ? s - A.a : void 0, we = !!ce && !!Object.keys(ce.options).filter(e => ce.options[e].userSelected).length, Pe = !(E && O), _e = (e => e === se.ob.OnlyTitles)(me) && !Object(ee.a)(de), Ne = (e => e === se.ob.MediumHeight)(me) && !Object(ee.a)(de), ke = (e => {
						const {
							post: t,
							postIds: s,
							posts: r
						} = e;
						if (!Object(g.k)(t)) return;
						const n = s && 0 === s.indexOf(t.id),
							a = s && 1 === s.indexOf(t.id),
							o = r && r[1] && Object(g.k)(r[1]);
						return {
							hasTopCompactPostStyles: n && o,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: n
						}
					})(e), Ie = n.a.createElement(D.a, {
						className: Object(S.a)(ue.a.container, a, le.a.largeAndMediumPostStyles, le.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[le.a.mUseRedditTheme]: xe,
							promotedvideolink: de.isSponsored && !(de.media && h.a.has(de.media.type)),
							[ue.a.topCompactPost]: ke && ke.hasTopCompactPostStyles,
							[ue.a.bottomCompactPost]: ke && ke.hasBottomCompactPostStyles
						}),
						isOverlay: j,
						style: Object(l.b)(e.flairStyleTemplate),
						post: de,
						onClick: ne,
						onPostContentClick: r,
						eventFactory: m
					}, n.a.createElement(q.a, {
						model: de,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ye,
						redditStyle: xe
					}), n.a.createElement(F.a, {
						className: Object(S.a)(ue.a.backgroundWrapper, {
							[ue.a.isEvent]: Object(te.a)(de)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ye,
						post: de,
						redditStyle: xe
					}, n.a.createElement(k.a, {
						post: de,
						language: G
					}), ke && ke.showPinnnedHeader && n.a.createElement(K, null), n.a.createElement(Z.a, {
						className: ue.a.postTopLine,
						hideNSFWPref: x,
						iconClassName: ue.a.postTopLineIcon,
						inSubredditOrProfile: y,
						isCommentsPage: !!f,
						isCompactPinnedPost: !!ke,
						isCurrentUserProfilePost: v,
						isOverlay: !!j,
						language: G,
						post: de,
						shouldShowSubscribeButton: Pe,
						showSubreddit: !y && !de.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: be
					}), n.a.createElement(Q.c, {
						className: ue.a.postTitle,
						post: de,
						redditStyle: xe,
						size: Q.b.Large,
						titleColor: ye && ye.postTitleColor,
						isM2MHomeRedirectEnabled: C,
						isOverlay: j
					}), de.source && !de.isSponsored && n.a.createElement(J.a, {
						className: ue.a.sourceLink,
						post: de
					}), n.a.createElement("div", {
						className: Object(S.a)(ue.a.postMediaWrapper, {
							[ue.a.votedContent]: we
						})
					}, !ke && n.a.createElement(W.a, {
						isListing: !0,
						isMediumHeight: Ne,
						isNotCardView: !!j,
						isTitleOnly: _e,
						showCentered: !0,
						flairStyleTemplate: ye,
						post: de,
						availableWidth: Se,
						shouldLoad: p,
						scrollerItemRef: pe,
						autoplayPref: t
					})), ie && n.a.createElement(L.a, {
						className: Object(S.a)(ue.a.proposal, {
							[ue.a.mHasNotVoted]: !ce,
							[ue.a.mPollIsClosed]: !!ce && Object(b.e)(ie, ce),
							[ue.a.mGAPoll]: ie.type === b.a.GA
						}),
						pollId: ie.id,
						subredditId: de.belongsTo.id
					}), de.isMeta && !ie && n.a.createElement(T.a, {
						className: ue.a.noProposal
					}), de.source && de.source.url && de.isSponsored && n.a.createElement(w.a, {
						className: ue.a.adLinkWrapper
					}, n.a.createElement($.a, {
						href: de.source.url.replace(i.a.redditUrl, ""),
						isSponsored: de.isSponsored,
						source: de.source
					}, de.source.displayText), de.callToAction && n.a.createElement(P.a, {
						href: de.source.url.replace(i.a.redditUrl, ""),
						isSponsored: de.isSponsored,
						source: de.source
					}, de.callToAction)), re && fe && Oe && n.a.createElement(B.a, {
						language: G,
						onIgnoreReports: ae,
						reportable: de
					}), n.a.createElement(M.d, {
						postId: de.id
					}), n.a.createElement("div", {
						className: ue.a.flatListContainer
					}, n.a.createElement(_.a, {
						className: ue.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ye,
						model: de,
						onVoteClick: e.handleVote
					}), n.a.createElement(I.c, {
						currentUser: o,
						hasModFlairPerms: Ee,
						hasModPostPerms: fe,
						isLargePost: !0,
						isOverlay: !!j,
						language: G,
						modModeEnabled: re,
						onIgnoreReports: ae,
						onOpenReportsDropdown: oe,
						post: de,
						showEditPost: je,
						showEditFlair: he,
						useFlatlistBreakpoints: Object(H.h)({
							editPost: !1,
							save: !ve,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(n.a.Fragment, null, Ie, U && !V && n.a.createElement(N.a, {
						className: ue.a.chain,
						listingKey: z,
						listingName: Y,
						postId: de.id
					}))
				});
			t.a = be(Object(Y.b)(ge))
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/DragHandler/index.m.less": function(e, t, s) {
			e.exports = {
				dragHandle: "wtIX2QV-WhdMOY61s3LTY"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/Inspector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_4fT2G-XHTG7R9Bm3LWg3",
				header: "_2Fo5iLX6dDRjb63yp94VnJ",
				title: "_3fjMoim4PzelRvk9PfJioM",
				addLayerIcon: "_1o9R8bOgo5mNno5Cm_65zo",
				text: "-Ar0Brssk7m0WKu8C21ae",
				layers: "_1_PpuNfvKwXJGcj6He2ZE_",
				layer: "_1VpjTNzCkLYpwmqldahKjd",
				loader: "_1FB380L1wxoCW-3J0eDFsZ"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/index.m.less": function(e, t, s) {
			e.exports = {
				picker: "_3PrR5es3SdXl4u88yiyfw_"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/DraftLayer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1zsywIMroi20Y30J9I01Yk",
				pencilIcon: "_2h2zKkb3oPLCmLPjI6GcLL",
				trashIcon: "Lt-ewjhAwhlIenLoIHJW2"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_3gPOzQ-Y1W8-CKUhvYB2D_",
				help: "_15Q4CvvbF8SFmwANTPkmDV"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/Header/index.m.less": function(e, t, s) {
			e.exports = {
				addLayer: "_3f1Cf0b1OEcNOC6YKKgVz4",
				addLayerActive: "_2iRm5mzDyW97KE07uRVaIK",
				selectLayerMessage: "_3hnQDAv93FRkjBgk_QCo8I",
				header: "-F190yKxcU1_kIFAcTX-m",
				icon: "_3Evo53HEI4GWjtyrccB1EK",
				wordmark: "_3r35-vS1zSk0NJfa8HxowZ",
				surfaceIcon: "_2kknLzR7Uq1wRbIe5mOtjZ"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/PanelEntry/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3zLvgzKhjaMhzMnmY4K9Iw",
				surfaceAdd: "_24BZf-gAps1VXqTxp83c84",
				active: "LxPQJcYKZcp6adKtSVC8C",
				surfaced: "_33N5jQa90cmt3WHSGtmcTF",
				image: "_1Fu01xrp-tXgahOIW0NjL4",
				name: "_138DakBgGtlmZXzEa2mqec",
				verticalRule: "_5psjtuaQfHE_ZUv7__KHG",
				overflow: "vL2qFYLXyjQCRzrLZx_XH",
				surfaceIcon: "_235IdoYFgEzHnNdwgONCZJ",
				surfaceRemove: "mSC7i3LTFntS_jgMHzNNk"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/SearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OeG7XLTdyJ15F3XXZRzvn",
				iconContainer: "_3nYpomZ1Bkrhh-_2o9w26Z",
				input: "_1NFsWAP_lH4aov7zk6ubKD"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/index.m.less": function(e, t, s) {
			e.exports = {
				scroller: "_2GY0smo7wzakRUqH1dMEGr",
				loader: "_1wrteWUfM9MNUnKB7uciJi",
				surfaceHeader: "_1jZScJrE3mQWzIynSAjcny",
				addSurface: "oFNH1hy7vcljNY6jShFSn",
				surfaceHeaderText: "_2O9z2_0dn7JU5RG5cnTpFr",
				surfacesCount: "_3El6lpCxfKrk5zRm5pxeVi",
				surfacesWrapper: "_3F9GI6VLGlupTkn4h5uU1Z",
				surfacesScroller: "_1jMQKGk0lLDeWIEu3oWPi5",
				surfaceIconBase: "_3AAH1H6fM7pdWM6ZXMGkNl",
				surfaceIcon: "_3jD5l9TjTECztjU3-E-GGA",
				surfaceIconPlus: "mrMwZ7RnAHq2jZkiyAQm6",
				surfaceItem: "_3Nxp_iRyS4WUncZ1fWhrD6",
				surfaceTitle: "_1UIxrPtiIUYVi1eBbFcFFw",
				surfaceLayersCount: "MAby4JtyOny85mfd21NQ0",
				surfaceActive: "X0VrJaQnVec7sedGhxgJe",
				surfaceEmptyText: "_204qFBG8qG0hdJu0dERP7w"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/AddLayer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1aj78cfK2DGcYjXfhW__PZ",
				iconDefault: "_1g9Q65em5fLQj2SIiGi2LO",
				iconRotated: "kIptq_dA-Mun0HyCZiz-b",
				a: "_3z3DB3aJhX_RGfQwH8Hmam",
				b: "_3-6PYkXFR_dBBL0GTvgLc9",
				e: "_3_XiNR8JzWIOxD56fQVwag",
				f: "_3_8M_8x6gyr1R6O4bhEkDg"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Cancel/index.m.less": function(e, t, s) {
			e.exports = {
				background: "yV4tMM31xw5fd2pymWPdW"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Confirm/index.m.less": function(e, t, s) {
			e.exports = {
				background: "_2rPZqOFClOpkti3begBIUX"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/DragHandlerGrapple/index.m.less": function(e, t, s) {
			e.exports = {
				dragHandlerGrapple: "_2uHtla0ud_2r4GWanqohBh"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Help/index.m.less": function(e, t, s) {
			e.exports = {
				a: "_3rEFPDUQzmzMVR-6svmjFs",
				c: "pkOpm1ZzSJxm6lGaxNncr"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Logo/index.m.less": function(e, t, s) {
			e.exports = {
				b: "_3pI0LE1AQ-31WgHUVSU8Pk",
				c: "sFCmWWMZd6IrFPaJJu2zv",
				d: "UoHVV1dqFgE9UqQ5iPsa0"
			}
		},
		"./src/reddit/components/LayersEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				colCanvas: "_2izXpZ70xuGNsFcot44f9E",
				colPanel: "_2VmMmY56AK0rUzJ9CkeTIp",
				container: "XvQHkxZYIFQufipWrmO44",
				fixedArInner: "_3bsSnSTsmdOmGl0BqmFEhM",
				fixedArWrapper: "_3xUZammIe2BU8uUjvEpjh5",
				loaderWrapper: "_3cW2flEQE3_TQkwYSB3bQe"
			}
		},
		"./src/reddit/components/LayersEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				a = s("./node_modules/lodash/isEqual.js"),
				o = s.n(a),
				i = s("./node_modules/lodash/omit.js"),
				c = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/getUrlQueryParams/index.ts"),
				h = s("./src/reddit/actions/layers.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const x = 32,
				y = 10,
				f = 100;
			var v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/contexts/ApiContext.tsx"),
				O = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = s("./src/reddit/endpoints/post/index.tsx"),
				j = s("./src/graphql/operations/SubredditLayers.json"),
				S = s("./src/graphql/operations/SubredditLayersByIds.json"),
				w = s("./src/graphql/operations/SubredditLayersConfig.json"),
				P = s("./src/lib/makeGqlRequest/index.ts");
			const _ = (e, t) => Object(P.a)(e, Object.assign({}, w, {
					variables: {
						subredditId: t
					}
				})),
				N = (e, t, s, r, n, a) => Object(P.a)(e, Object.assign({}, j, {
					variables: {
						subredditId: t,
						first: s,
						after: r,
						box: n,
						layerName: a
					}
				})),
				k = (e, t, s) => Object(P.a)(e, Object.assign({}, S, {
					variables: {
						subredditId: t,
						ids: s
					}
				}));
			var I = s("./src/reddit/featureFlags/layers.ts"),
				L = e => {
					if (!(e && e.id && e.layersByIds && Array.isArray(e.layersByIds))) return {};
					const {
						id: t,
						layersByIds: s
					} = e;
					return {
						[t]: s.filter(Boolean)
					}
				},
				T = e => {
					let t = null;
					if (e.layersConfig) {
						const {
							image: s,
							websocketUrl: r
						} = e.layersConfig;
						t = {
							canvasImage: {
								url: s.url,
								width: s.dimensions.width,
								height: s.dimensions.height
							},
							websocketUrl: r
						}
					}
					return {
						[e.id]: t
					}
				},
				M = s("./node_modules/lodash/get.js"),
				B = s.n(M),
				R = s("./src/reddit/endpoints/post/create.ts"),
				F = e => {
					if (!(e && e.id && e.layers && Array.isArray(e.layers.edges))) return {};
					const {
						id: t,
						layers: s
					} = e;
					return {
						[t]: {
							cursor: B()(s, "pageInfo.endCursor", ""),
							layers: s.edges.map(e => Object.assign({}, e.node, {
								authorId: B()(e, "node.postInfo.authorInfo.id", null),
								postId: Object(R.e)(e.node.postUrl)
							}))
						}
					}
				},
				D = s("./src/reddit/helpers/localStorage/index.ts"),
				A = s("./src/reddit/helpers/trackers/layers.ts"),
				W = s("./src/reddit/i18n/utils.ts"),
				H = s("./src/reddit/models/Toast/index.ts"),
				V = s("./src/reddit/selectors/layers.ts"),
				U = s("./src/reddit/selectors/moderatorPermissions.ts"),
				G = s("./src/config.ts"),
				z = s("./node_modules/lodash/clamp.js"),
				K = s.n(z),
				q = s("./src/lib/getMobileOperatingSystem/index.ts"),
				Q = s("./src/reddit/components/LayersEmbed/icons/AddLayer/index.m.less"),
				Z = s.n(Q),
				J = e => {
					let {
						isRotated: t,
						className: s,
						onClick: r
					} = e;
					return l.a.createElement("svg", {
						className: s,
						onClick: r,
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24"
					}, l.a.createElement("defs", null, l.a.createElement("clipPath", null, l.a.createElement("rect", {
						className: Z.a.a,
						width: "24",
						height: "24"
					})), l.a.createElement("clipPath", null, l.a.createElement("rect", {
						className: Z.a.b,
						width: "24",
						height: "24"
					}))), l.a.createElement("g", {
						className: Z.a.container
					}, l.a.createElement("g", {
						transform: "translate(4 4)"
					}, l.a.createElement("rect", {
						className: Z.a.e,
						width: "16",
						height: "16",
						rx: "3.164"
					}), l.a.createElement("g", {
						transform: t ? "translate(5 5) rotate(45, 3, 3)" : "translate(5 5)"
					}, l.a.createElement("line", {
						className: Z.a.f,
						y2: "6",
						transform: "translate(3)"
					}), l.a.createElement("line", {
						className: Z.a.f,
						x1: "6",
						transform: "translate(0 3)"
					})))))
				},
				Y = s("./src/reddit/components/LayersEmbed/icons/Cancel/index.m.less"),
				X = s.n(Y);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class ee extends l.a.Component {
				render() {
					return l.a.createElement("svg", $({
						height: ee.size,
						width: ee.size
					}, this.props, {
						style: Object.assign({
							position: "absolute",
							cursor: "pointer"
						}, this.props.style ? this.props.style : {})
					}), l.a.createElement("g", null, l.a.createElement("g", {
						className: X.a.background
					}, l.a.createElement("path", {
						d: "M26 39.008c-2.105 0-4.16-.408-6.109-1.213a15.951 15.951 0 01-7.19-5.894 15.951 15.951 0 01-2.702-8.897c0-3.179.934-6.255 2.701-8.897a15.951 15.951 0 017.191-5.894A15.917 15.917 0 0126 7c2.097 0 4.145.404 6.085 1.2a15.913 15.913 0 015.254 3.507 15.922 15.922 0 014.66 11.297A15.92 15.92 0 0137.34 34.3a15.914 15.914 0 01-5.254 3.507c-1.94.797-3.987 1.2-6.085 1.2zm.04-15.653l.707.707 3.53 3.53.121.121.074.155a.325.325 0 00.34.181.322.322 0 00.273-.272.322.322 0 00-.181-.34l-.155-.074-.121-.122-3.53-3.53-.708-.707.708-.707 3.365-3.366a.324.324 0 00-.35-.35l-3.366 3.365-.707.707-.708-.707-3.365-3.366a.325.325 0 00-.35.351l3.365 3.366.707.707-.707.707-3.366 3.365a.324.324 0 00.351.351l3.365-3.365.708-.707z"
					}), l.a.createElement("path", {
						fill: "#fff",
						d: "M26 8a15.004 15.004 0 1010.63 25.595c5.826-5.86 5.826-15.323 0-21.182A15.002 15.002 0 0026 8m.04 13.239l3.53-3.53a1.322 1.322 0 011.506.258c.397.397.5 1 .259 1.507l-3.53 3.53 3.53 3.53A1.324 1.324 0 1129.57 28.3l-3.53-3.53-3.53 3.53a1.322 1.322 0 01-1.507-.258c-.397-.397-.5-1-.259-1.507l3.53-3.53-3.53-3.53a1.324 1.324 0 011.765-1.766l3.53 3.53M26 6v2-2c2.23 0 4.405.43 6.466 1.276 2.1.862 3.978 2.115 5.582 3.725a16.916 16.916 0 014.952 12.003c0 4.528-1.758 8.79-4.95 12a16.91 16.91 0 01-5.584 3.728A16.939 16.939 0 0126 40.008c-2.237 0-4.42-.434-6.49-1.29a16.948 16.948 0 01-7.641-6.261 16.948 16.948 0 01-2.87-9.453c0-3.377.993-6.646 2.87-9.453a16.948 16.948 0 017.64-6.262A16.911 16.911 0 0126 5.999z"
					}))))
				}
			}
			ee.size = 52;
			var te = s("./src/reddit/components/LayersEmbed/icons/Confirm/index.m.less"),
				se = s.n(te);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class ne extends l.a.Component {
				render() {
					return l.a.createElement("svg", re({
						height: ne.size,
						width: ne.size
					}, this.props, {
						style: Object.assign({
							position: "absolute",
							cursor: "pointer"
						}, this.props.style ? this.props.style : {})
					}), l.a.createElement("g", null, l.a.createElement("g", {
						className: se.a.background
					}, l.a.createElement("path", {
						d: "M26 39.008c-2.105 0-4.16-.408-6.109-1.213a15.951 15.951 0 01-7.19-5.894 15.951 15.951 0 01-2.702-8.897c0-3.179.934-6.255 2.701-8.897a15.951 15.951 0 017.191-5.894A15.917 15.917 0 0126 7c2.097 0 4.145.404 6.085 1.2a15.913 15.913 0 015.254 3.507 15.922 15.922 0 014.66 11.297A15.92 15.92 0 0137.34 34.3a15.914 15.914 0 01-5.254 3.507c-1.94.797-3.988 1.2-6.085 1.2zm-6.403-13.994l3.513 3.514a.322.322 0 00.458 0l8.725-8.726a.323.323 0 00-.38-.428l-7.816 7.764-.7.695-.705-.69-2.636-2.584a.323.323 0 00-.443.014.323.323 0 00-.016.441z"
					}), l.a.createElement("path", {
						fill: "#fff",
						d: "M26 8a15.004 15.004 0 1010.63 25.595c5.825-5.86 5.825-15.323 0-21.182A15.002 15.002 0 0026 8m-2.661 21.622a1.32 1.32 0 01-.936-.387l-3.53-3.53a1.324 1.324 0 011.871-1.872l2.648 2.595 7.943-7.89a1.32 1.32 0 011.617.242c.419.444.48 1.117.148 1.63l-8.826 8.825a1.32 1.32 0 01-.935.387M25.999 6v2-2c2.23 0 4.405.43 6.466 1.276 2.1.862 3.978 2.115 5.582 3.725a16.916 16.916 0 014.952 12.003c0 4.528-1.758 8.79-4.95 12a16.91 16.91 0 01-5.584 3.728A16.939 16.939 0 0126 40.008c-2.237 0-4.42-.434-6.49-1.29a16.948 16.948 0 01-7.641-6.261 16.948 16.948 0 01-2.87-9.453c0-3.377.993-6.646 2.87-9.453a16.948 16.948 0 017.64-6.262A16.911 16.911 0 0126 5.999z"
					}))))
				}
			}
			ne.size = 52;
			var ae = s("./src/reddit/components/LayersEmbed/icons/DragHandlerGrapple/index.m.less"),
				oe = s.n(ae);

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var ce = e => l.a.createElement("svg", ie({
					className: oe.a.dragHandlerGrapple,
					viewBox: "0 0 38 20"
				}, e), l.a.createElement("g", null, l.a.createElement("path", {
					d: "M8,2 C8,2 9,2 9,3 L9,5 C9,5 8,6 8,6 L6,6 C5,6 5,5 5,5 L5,3 C5,2 5,2 6,2 L8,2 Z M14,2 C14,2 15,2 15,3 L15,5 C15,5 14,6 14,6 L12,6 C11,6 11,5 11,5 L11,3 C11,2 11,2 12,2 L14,2 Z M20,2 C20,2 21,2 21,3 L21,5 C21,5 20,6 20,6 L18,6 C17,6 17,5 17,5 L17,3 C17,2 17,2 18,2 L20,2 Z M26,2 C26,2 27,2 27,3 L27,5 C27,5 26,6 26,6 L24,6 C25,6 23,5 23,5 L23,3 C23,2 23,2 24,2 L26,2 Z M32,2 C32,2 33,2 33,3 L33,5 C33,5 32,6 32,6 L30,6 C31,6 29,5 29,5 L29,3 C29,2 29,2 30,2 L32,2 Z M8,8 C8,8 9,8 9,9 L9,11 C9,11 8,12 8,12 L6,12 C5,12 5,11 5,11 L5,9 C5,8 5,8 6,8 L8,8 Z M14,8 C14,8 15,8 15,9 L15,11 C15,11 14,12 14,12 L12,12 C11,12 11,11 11,11 L11,9 C11,8 11,8 12,8 L14,8 Z M20,8 C20,8 21,8 21,9 L21,11 C21,11 20,12 20,12 L18,12 C17,12 17,11 17,11 L17,9 C17,8 17,8 18,8 L20,8 Z M26,8 C26,8 27,8 27,9 L27,11 C27,11 26,12 26,12 L24,12 C23,12 23,11 23,11 L23,9 C23,8 23,8 24,8 L26,8 Z M32,8 C32,8 33,8 33,9 L33,11 C33,11 32,12 32,12 L30,12 C29,12 29,11 29,11 L29,9 C29,8 29,8 30,8 L32,8 Z M8,14 C8,14 9,14 9,15 L9,17 C9,17 8,18 8,18 L6,18 C5,18 5,17 5,17 L5,15 C5,14 5,14 6,14 L8,14 Z M14,14 C14,14 15,14 15,15 L15,17 C15,17 14,18 14,18 L12,18 C11,18 11,17 11,17 L11,15 C11,14 11,14 12,14 L14,14 Z M20,14 C20,14 21,14 21,15 L21,17 C21,17 20,18 20,18 L18,18 C17,18 17,17 17,17 L17,15 C17,14 17,14 18,14 L20,14 Z M26,14 C26,14 27,14 27,15 L27,17 C27,17 26,18 26,18 L24,18 C23,18 23,17 23,17 L23,15 C23,14 23,14 24,14 L26,14 Z M32,14 C32,14 33,14 33,15 L33,17 C33,17 32,18 32,18 L30,18 C29,18 29,17 29,17 L29,15 C29,14 29,14 30,14 L32,14 Z"
				}))),
				de = s("./src/reddit/components/LayersEmbed/icons/Help/index.m.less"),
				le = s.n(de);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var ue = e => l.a.createElement("svg", me({
					xmlns: "http://www.w3.org/2000/svg",
					width: "25.568",
					height: "25.568",
					viewBox: "0 0 25.568 25.568"
				}, e), l.a.createElement("defs", null, l.a.createElement("clipPath", null, l.a.createElement("rect", {
					className: le.a.a,
					width: "25.568",
					height: "25.568"
				}))), l.a.createElement("g", null, l.a.createElement("path", {
					className: le.a.c,
					d: "M752.523,29.045A8.523,8.523,0,1,0,744,20.523,8.523,8.523,0,0,0,752.523,29.045Zm-1-8.642v1.956h1.79v-.92a3.068,3.068,0,0,0,.852-.281,2.587,2.587,0,0,0,.716-.524,2.5,2.5,0,0,0,.665-1.739,2.593,2.593,0,0,0-.213-1.074,2.247,2.247,0,0,0-.6-.831,2.858,2.858,0,0,0-.946-.533,3.667,3.667,0,0,0-1.214-.192,3.4,3.4,0,0,0-1.15.179,2.893,2.893,0,0,0-.845.473,2.426,2.426,0,0,0-.562.652,3.185,3.185,0,0,0-.331.746l1.558.652a1.567,1.567,0,0,1,.436-.78,1.178,1.178,0,0,1,.831-.307,1.065,1.065,0,0,1,.746.256.931.931,0,0,1,.293.746v.179a1.1,1.1,0,0,1-.511,1.023A3.292,3.292,0,0,1,751.522,20.4Zm.042,4.807a1.171,1.171,0,0,0,.882.281,1.133,1.133,0,0,0,.869-.281.959.959,0,0,0,.269-.69v-.307a.959.959,0,0,0-.268-.69,1.133,1.133,0,0,0-.869-.281,1.172,1.172,0,0,0-.882.281.989.989,0,0,0-.255.69v.307a.989.989,0,0,0,.256.69Z",
					transform: "translate(-739.739 -7.739)"
				}))),
				pe = s("./src/reddit/components/LayersEmbed/icons/Logo/index.m.less"),
				he = s.n(pe),
				be = e => {
					let {
						className: t
					} = e;
					return l.a.createElement("svg", {
						className: t,
						xmlns: "http://www.w3.org/2000/svg",
						width: "21.023",
						height: "21.023",
						viewBox: "0 0 21.023 21.023"
					}, l.a.createElement("defs", null, l.a.createElement("clipPath", null, l.a.createElement("rect", {
						width: "21.023",
						height: "21.023"
					}))), l.a.createElement("g", {
						transform: "translate(1.168 1.168)"
					}, l.a.createElement("circle", {
						className: he.a.b,
						cx: "9.344",
						cy: "9.344",
						r: "9.344"
					}), l.a.createElement("path", {
						className: he.a.c,
						d: "M11.154,263.411,9.7,262.687l-3.194,1.591a1.889,1.889,0,0,1-1.678,0l-3.193-1.59-1.451.723a.332.332,0,0,0,0,.6l4.943,2.461a1.227,1.227,0,0,0,1.086,0l4.943-2.461a.332.332,0,0,0,0-.6Zm0,0",
						transform: "translate(3.597 -252.321)"
					}), l.a.createElement("path", {
						className: he.a.d,
						d: "M.184,3.516,5.127,5.978a1.226,1.226,0,0,0,1.086,0l4.941-2.462a.332.332,0,0,0,0-.6L6.213.46a1.226,1.226,0,0,0-1.086,0L.184,2.921a.332.332,0,0,0,0,.6Zm0,0",
						transform: "translate(3.597 4.684)"
					})))
				},
				ge = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					width: "3",
					height: "14",
					viewBox: "0 0 3 14"
				}, l.a.createElement("g", {
					transform: "translate(0 0)",
					fill: "inherit"
				}, l.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5",
					transform: "translate(0 5.5)"
				}), l.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5"
				}), l.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5",
					transform: "translate(0 11)"
				})));

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var ye = e => l.a.createElement("svg", xe({
					width: 86,
					height: 18.174
				}, e), l.a.createElement("defs", null, l.a.createElement("clipPath", {
					id: "wordmarkPrefixA"
				}, l.a.createElement("path", {
					d: "M0 0h86v18.174H0z"
				}))), l.a.createElement("g", {
					clipPath: "url(#wordmarkPrefixA)"
				}, l.a.createElement("path", {
					fill: "none",
					d: "M0 0h86v18.174H0z"
				}), l.a.createElement("g", {
					"data-name": "Group 1305"
				}, l.a.createElement("g", {
					"data-name": "Group 544"
				}, l.a.createElement("g", {
					"data-name": "Group 543"
				}, l.a.createElement("path", {
					"data-name": "Path 367",
					d: "M24.654 9.346a29.894 29.894 0 01-.577-1.863c-.237.969-.509 1.98-.868 3.054h1.834z",
					fill: "none"
				}), l.a.createElement("path", {
					"data-name": "Path 368",
					d: "M79.823 5.678a2.32 2.32 0 00-.035-.392 3.55 3.55 0 00-1.065-.151h-1.786v2.77h.607a2.107 2.107 0 002.279-2.227z",
					fill: "none"
				}), l.a.createElement("path", {
					"data-name": "Path 369",
					d: "M10.928 14.199l.154-1.4H6.047v1.4z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 370",
					d: "M4.764 1.395V0H-.001v16.775h1.283V1.395z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 371",
					d: "M24.591 5.748h-.1c-.132.567-.265 1.144-.409 1.736.167.606.355 1.226.577 1.863l.388 1.191h-1.834l-.069.208-.414 1.191h3.6l-.389-1.191a47.136 47.136 0 01-1.35-4.998z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 372",
					d: "M26.908 1.395L26.437 0h-6.318l-5.7 16.775h1.756l5.223-15.38z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 373",
					d: "M26.777 15.584l.4 1.19h.807l-.4-1.19z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 374",
					d: "M34.083 1.395h4.712L38.212 0H32.8l5.645 11.1v5.678h1.283v-4.283z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 375",
					d: "M42.106 7.976c.466-1.346.906-2.512 1.4-3.781l1.114-2.8h3.5l.709-1.4h-5.49l-1.114 2.8c-.368.948-.706 1.837-1.048 2.788.279.768.539 1.555.829 2.391z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Rectangle 1061",
					fill: "#ff4500",
					d: "M59.19 12.8h6.408v1.399H59.19z"
				}), l.a.createElement("path", {
					"data-name": "Path 376",
					d: "M65.397 1.395V0H53.149v16.775h1.283V1.395z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 377",
					d: "M64.471 7.903l.145-1.4h-5.428v1.4z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 378",
					d: "M84.607 13.795l.109-.993h-.207a2.024 2.024 0 01-.962-.269 3.311 3.311 0 001.06 1.262z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 379",
					d: "M78.003 13.299c.053.1.108.206.163.316a6 6 0 001.852 2.443 9.462 9.462 0 01-.569-1.044 3.175 3.175 0 00-1.446-1.715z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 380",
					d: "M76.937 1.395h1.994a8.639 8.639 0 014.959 1.327C82.765.767 80.207.001 77.649.001H70.89v16.774h1.283V1.395z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Path 381",
					d: "M79.789 5.283a2.322 2.322 0 01.035.392 2.107 2.107 0 01-2.279 2.227h-.607v1.4h1.89a2.107 2.107 0 002.279-2.227 1.747 1.747 0 00-1.318-1.792z",
					fill: "#ff4500"
				}), l.a.createElement("path", {
					"data-name": "Rectangle 1062",
					fill: "#14d8c3",
					d: "M4.765 1.399h1.283v11.444H4.765z"
				}), l.a.createElement("path", {
					"data-name": "Path 382",
					d: "M10.643 16.774h-9.36v1.4h10.643l.44-3.988h-1.437z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 383",
					d: "M10.928 14.196H6.047v-1.394H4.764v-11.4H1.282v15.373h9.36z",
					fill: "#1e2a3e"
				}), l.a.createElement("path", {
					"data-name": "Path 384",
					d: "M23.313 4.355h-.1a48.845 48.845 0 01-1.346 5l-.414 1.191h1.766c.359-1.073.632-2.085.869-3.054-.307-1.094-.541-2.137-.775-3.137z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 385",
					d: "M20.193 14.185l-.906 2.589h-3.11l-.474 1.4h4.868l.906-2.59h5.33l-.476-1.4z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 386",
					d: "M26.867 1.399l5.2 15.38H27.98l.476 1.394h4.894L27.679 1.399z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 387",
					d: "M26.899 1.399h-5.507l-5.223 15.375h3.114l.906-2.58h6.137l.476 1.394h.807l.4 1.186h4.087zm-4.16 10.526l.414-1.187.069-.208h-1.766l.414-1.187a48.489 48.489 0 001.346-4.979h.1c.233 1 .468 2.035.77 3.124.145-.59.277-1.165.409-1.73h.1a46.781 46.781 0 001.346 4.979l.388 1.187z",
					fill: "#1e2a3e"
				}), l.a.createElement("path", {
					"data-name": "Path 388",
					d: "M40.736 6.577h.1c.118-.341.234-.67.35-.992-.17-.468-.347-.928-.543-1.389l-1.165-2.8h-.7l.582 1.4c.522 1.219.911 2.434 1.376 3.781z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 389",
					d: "M43.18 11.102v5.678h-3.482v1.394h4.765v-5.678l5.645-11.1h-1.992z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 390",
					d: "M43.194 11.099l4.936-9.7h-3.5l-1.114 2.786a108.379 108.379 0 00-1.4 3.767h-.1c-.29-.834-.549-1.618-.829-2.383-.116.321-.232.649-.35.989h-.105c-.466-1.342-.855-2.554-1.372-3.767l-.582-1.392h-4.712l5.645 11.094v4.282h3.482z",
					fill: "#1e2a3e"
				}), l.a.createElement("path", {
					"data-name": "Path 391",
					d: "M65.599 16.774H54.427v1.4h12.455v-3.988h-1.283z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 392",
					d: "M57.902 3.962v2.564h1.283V5.362l7.483.026V1.4h-1.283v2.589z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 393",
					d: "M57.904 10.479v2.331h1.283v-.931h6.292l.414-3.988h-1.428l-.269 2.588z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 394",
					d: "M65.602 14.196h-6.408v-1.394h-1.283V10.48h6.292l.269-2.579h-5.279V6.507H57.91V3.953l7.483.026V1.4H54.428v15.375H65.6z",
					fill: "#1e2a3e"
				}), l.a.createElement("path", {
					"data-name": "Path 395",
					d: "M78.724 5.139a3.55 3.55 0 011.065.15c-.188-1.107-1.182-1.55-2.347-1.55h-1.787v4.169h1.283v-2.77z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 396",
					d: "M85.793 14.186a2.13 2.13 0 01-1.185-.406l-.331 2.995H82.49a4.145 4.145 0 01-2.473-.716 4.12 4.12 0 003.755 2.115h1.787l.44-3.988z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 397",
					d: "M75.654 11.647v5.127h-3.482v1.4h4.765v-5.127a3.251 3.251 0 011.066.252 2.544 2.544 0 00-2.349-1.652z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 398",
					d: "M81.351 9.995a3.224 3.224 0 01.88 1.113 3.217 3.217 0 001.317 1.466l-.035-.067a3.224 3.224 0 00-.88-1.114 5.9 5.9 0 003.133-4.868 4.433 4.433 0 00-1.877-3.8 4.733 4.733 0 01.594 2.4 5.9 5.9 0 01-3.132 4.87z",
					fill: "#14d8c3"
				}), l.a.createElement("path", {
					"data-name": "Path 399",
					d: "M84.277 16.774l.33-2.984a3.306 3.306 0 01-1.059-1.257 3.211 3.211 0 01-1.317-1.461 3.216 3.216 0 00-.88-1.109c1.657-1.058 3.133-2.632 3.133-4.85a4.7 4.7 0 00-.594-2.388 8.641 8.641 0 00-4.959-1.327h-6.758v15.375h3.482v-5.108a2.543 2.543 0 012.349 1.646 3.168 3.168 0 011.446 1.709 9.417 9.417 0 00.569 1.04 4.156 4.156 0 002.473.713zm-5.45-7.481h-1.89V7.899h-1.283V3.745h1.787c1.165 0 2.159.441 2.348 1.544a1.741 1.741 0 011.317 1.785 2.1 2.1 0 01-2.279 2.219z",
					fill: "#1e2a3e"
				})))))),
				fe = s("./src/lib/classNames/index.ts"),
				ve = s("./src/reddit/components/LayersEmbed/LayersCanvas/DragHandler/index.m.less"),
				Ee = s.n(ve);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class Ce extends l.a.Component {
				render() {
					const {
						className: e,
						style: t
					} = this.props, s = Object(fe.a)(Ee.a.dragHandle, e), r = Object.assign({
						height: Ce.height
					}, t || {});
					return l.a.createElement("div", Oe({}, this.props, {
						className: s,
						style: r
					}), l.a.createElement(ce, null))
				}
			}
			Ce.height = 25;
			var je = Ce,
				Se = s("./src/reddit/components/Scroller/Simple.tsx"),
				we = s("./src/reddit/controls/Typography/index.tsx"),
				Pe = s("./src/reddit/actions/post.ts"),
				_e = s("./src/reddit/actions/reportFlow.ts"),
				Ne = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ke = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ie = s("./src/reddit/controls/Dropdown/Row.tsx");

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var Te = e => l.a.createElement("svg", Le({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, e), l.a.createElement("path", {
					d: "M18.4,11.1l-2.6-1.3l2.9-1.5c0.3-0.2,0.5-0.4,0.5-0.6c0-0.2-0.2-0.5-0.5-0.6l-7.7-3.9C10.8,3.1,10.4,3,10,3 C9.6,3,9.3,3.1,9,3.2L1.2,7.1C0.9,7.3,0.7,7.5,0.7,7.7c0,0.2,0.2,0.5,0.5,0.6l2.9,1.5l-2.6,1.3c-0.5,0.2-0.8,0.7-0.8,1.1 c0,0.5,0.3,0.9,0.8,1.1l7.2,3.6c0.3,0.2,0.8,0.3,1.2,0.3c0.5,0,0.9-0.1,1.2-0.3l7.2-3.6c0.5-0.2,0.8-0.7,0.8-1.1 C19.2,11.7,18.9,11.3,18.4,11.1z M9,12.2l0-4L7.2,8.1l2.8-3l2.8,3.1h-1.9l0.1,4l3.2-1.6l3.1,1.6l-6.8,3.4c-0.1,0.1-0.4,0.1-0.6,0.1 c-0.2,0-0.4,0-0.6-0.1l-6.8-3.4l3.1-1.6L9,12.2z"
				})),
				Me = s("./src/reddit/components/LayersEmbed/LayersPanel/PanelEntry/index.m.less"),
				Be = s.n(Me);
			const Re = Object(u.c)({
				currentUserId: e => B()(e, "user.account.id", null),
				reportFlowIsOpen: (e, t) => {
					let {
						layer: s
					} = t;
					return e.reportFlow.postOrCommentId === _e.a + s.postId
				}
			});
			var Fe = Object(m.b)(Re, e => ({
					onViewPostClick: t => {
						const s = {
							permalink: t
						};
						e(Object(Pe.x)({
							postOrComment: s
						}))
					},
					onReportPostClick: t => e(Object(Pe.q)(t))
				}))(e => {
					let {
						className: t,
						currentUserId: s,
						dropdownId: r,
						isActive: n,
						isCreationEnabled: a,
						isSurfacingEnabled: o,
						isModerator: i,
						layer: c,
						reportFlowIsOpen: d,
						onLayerSelect: m,
						onViewPostClick: u,
						onReferenceClick: p,
						onReportPostClick: h,
						showDeleteModal: b,
						onAddLayerToSurface: g,
						onRemoveLayerFromSurface: x,
						isSurfaced: y
					} = e;
					return l.a.createElement("div", {
						className: Object(fe.a)(Be.a.container, n ? Be.a.active : void 0, t),
						onClick: m
					}, l.a.createElement("img", {
						className: Be.a.image,
						src: c.imageUrl,
						alt: c.name
					}), l.a.createElement("div", {
						className: Be.a.verticalRule
					}), l.a.createElement(we.b, {
						className: Be.a.name,
						title: Object(W.c)("Layer ".concat(c.id))
					}, Object(W.c)("Layer ".concat(c.id))), o && l.a.createElement(Te, {
						className: Object(fe.a)(Be.a.surfaceIcon, y ? Be.a.surfaceRemove : Be.a.surfaceAdd),
						onClick: y ? x : g
					}), l.a.createElement(Ne.b, {
						className: Be.a.overflow,
						dropdownId: r,
						icon: l.a.createElement(ge, null)
					}, l.a.createElement(Ie.b, {
						onClick: () => u(c.postUrl),
						displayText: Object(W.c)("View Post")
					}), a && l.a.createElement(Ie.b, {
						onClick: () => p(c.imageUrl, c.box),
						displayText: Object(W.c)("Use as Reference")
					}), c.authorId && c.authorId !== s && l.a.createElement(Ie.b, {
						onClick: () => h(c.postId),
						displayText: Object(W.c)("Report")
					}), i && l.a.createElement(Ie.b, {
						onClick: b,
						displayText: Object(W.c)("Delete Post")
					})), d && l.a.createElement(ke.a, {
						withOverlay: !0,
						overlayCustomStyles: ke.b,
						postId: c.postId
					}))
				}),
				De = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Ae = s("./src/reddit/components/LayersEmbed/LayersCanvas/Inspector/index.m.less"),
				We = s.n(Ae);
			class He extends l.a.PureComponent {
				constructor() {
					super(...arguments), this.scrollContainerId = "layers-inspector-scroll-container", this.estimatedEntryHeightPx = 40, this.loaderSizePx = 10, this.getContainer = () => document.getElementById(this.scrollContainerId), this.onLayerSelectFromInspector = e => () => this.props.onLayerSelect(e, !0), this.onAddLayerToSurface = e => () => this.props.addLayerToSurface(e), this.onRemoveLayerFromSurface = e => () => this.props.removeLayerFromSurface(e)
				}
				render() {
					const {
						isCreationEnabled: e,
						isSurfacingEnabled: t,
						layerInspectorElementOffset: s,
						layers: r,
						loading: n,
						loadError: a,
						point: o,
						show: i,
						onAddLayer: c,
						onLoadMore: d,
						onReferenceClick: m,
						isModerator: u,
						openDeleteModal: p,
						surfaces: h,
						currentSurfaceId: b
					} = this.props;
					if (!i || !o) return null;
					let g;
					if (a) g = l.a.createElement(we.d, {
						className: We.a.text
					}, Object(W.c)("Load error"));
					else if (r && 0 === r.length) g = l.a.createElement(we.d, {
						className: We.a.text
					}, Object(W.c)("None"));
					else {
						const s = r && r.length ? r[r.length - 1].id : void 0;
						g = r && l.a.createElement("div", {
							id: this.scrollContainerId,
							className: We.a.layers
						}, l.a.createElement(Se.b, {
							getContainer: this.getContainer,
							loadMoreToken: s,
							onLoadMore: d,
							preventScrollOnMount: !0
						}, r.map(s => {
							const r = b ? h[b] : null,
								n = !!r && !!r.find(e => s.id === e.id);
							return {
								estHeight: this.estimatedEntryHeightPx,
								id: n ? "surfaced-".concat(s.id) : s.id,
								render: () => l.a.createElement(Fe, {
									onAddLayerToSurface: this.onAddLayerToSurface(s),
									onRemoveLayerFromSurface: this.onRemoveLayerFromSurface(s.id),
									isSurfaced: n,
									isModerator: u,
									showDeleteModal: p(s.postId),
									className: We.a.layer,
									dropdownId: "inspector-".concat(s.id),
									isActive: s.id === this.props.activeLayerId,
									isCreationEnabled: e,
									isSurfacingEnabled: t,
									key: s.id,
									layer: s,
									onLayerSelect: this.onLayerSelectFromInspector(s),
									onReferenceClick: m
								})
							}
						}))) || null
					}
					const x = {
						left: o.x + He.baseOffsetPx + s.x,
						top: o.y + He.baseOffsetPx + s.y
					};
					return l.a.createElement("div", {
						className: We.a.container,
						style: x
					}, l.a.createElement("div", {
						className: We.a.header
					}, l.a.createElement(we.e, {
						className: We.a.title
					}, Object(W.c)("LAYERS HERE:")), n && l.a.createElement(O.a, {
						className: We.a.loader,
						sizePx: this.loaderSizePx
					}), e && l.a.createElement("div", {
						className: We.a.addLayerIcon,
						onClick: c
					}, l.a.createElement(De.a, null))), g)
				}
			}
			He.baseOffsetPx = 5;
			var Ve = He,
				Ue = s("./src/reddit/components/LayersEmbed/LayersCanvas/index.m.less"),
				Ge = s.n(Ue);
			const ze = "url(".concat(G.a.assetPath, "/img/transparency-background.png)");
			class Ke extends l.a.Component {
				constructor(e) {
					super(e), this._canvas = l.a.createRef(), this._picker = l.a.createRef(), this.ctx = null, this.image = new Image, this.ws = null, this.wsMessageProcessTimeout = 5e3, this.layerInspectorElementOffset = {
						x: 0,
						y: 0
					}, this.confirmPosition = {
						x: 0,
						y: 0
					}, this.cancelPosition = {
						x: 0,
						y: 0
					}, this.isMobile = Object(q.a)(), this.inspectedAreaBorderColor = "#F04921", this.highlightedAreaBorderColor = "#2699FB", this.pickerBorderWidth = 6, this.inspectedAreaSize = 50, this.layerImage = new Image, this.pickerBox = {
						x: 0,
						y: 0,
						width: 100,
						height: 100
					}, this.setImage = () => {
						const {
							canvasImage: e
						} = this.props.layersConfig;
						this.image.src = e.url + "?dummy=" + Math.random()
					}, this.debouncedSetImage = n()(this.setImage, 1e3, {
						leading: !0,
						maxWait: 1e3
					}), this.processWsMessage = e => {
						"update" === JSON.parse(e.data).type && this.setImage()
					}, this.debouncedProcessWsMessage = n()(this.processWsMessage, this.wsMessageProcessTimeout, {
						leading: !0,
						maxWait: this.wsMessageProcessTimeout
					}), this.componentDidUpdate = e => {
						let t, s;
						e.isPickerBoxEnabled && !this.props.isPickerBoxEnabled && (t = !1), e.isInspectorActiveLayer && !this.props.isInspectorActiveLayer && (s = !1), this.props.isPickerBoxEnabled && this.state.showInspector && (this.props.onLayerSelect(null, !1), s = !1);
						const r = {
							showConfirmButtons: t,
							showInspector: s
						};
						if (Object.keys(r).map(e => r[e]).some(e => void 0 !== e) && this.setState(Object.assign({}, r)), this.canvas && !e.isPickerBoxEnabled && this.props.isPickerBoxEnabled) {
							const {
								width: e,
								height: t
							} = this.canvas;
							this.pickerBox = Object.assign({}, this.pickerBox, {
								x: e / 2 - this.pickerBox.width / 2,
								y: t / 2 - this.pickerBox.height / 2
							}), this.forceUpdate()
						}
						this.draw()
					}, this.onMouseEnter = () => {
						if (this.canvas && (!this.state.showConfirmButtons || !this.props.isPickerBoxEnabled)) return this.props.isPickerBoxEnabled && !this.isMobile && this.picker ? (this.canvas.onmousemove = this.onMove, this.picker.onmousemove = this.onMove, void(this.picker.onclick = this.confirmBackgroundSelection)) : void(this.props.isPickerBoxEnabled && this.isMobile || (this.canvas.onclick = this.onLayersInspect))
					}, this.onMouseLeaveCanvas = () => {
						this.canvas && (this.canvas.onmousemove = null, this.canvas.onclick = null)
					}, this.onMouseLeavePicker = () => {
						this.picker && (this.picker.onmousemove = null, this.picker.onclick = null)
					}, this.clearEventHandlers = () => {
						this.onMouseLeaveCanvas(), this.onMouseLeavePicker()
					}, this.updateCanvasEventHandlers = () => {
						this.clearEventHandlers(), this.onMouseEnter()
					}, this.onMove = e => {
						if (!this.picker || !this.canvas) return;
						const t = this.canvas.width / this.canvas.offsetWidth;
						let s;
						s = this.isMobile ? this.getShiftedTouchPosition(this.canvas, e) : this.getShiftedMousePosition(this.canvas, e);
						const {
							canvasImage: r
						} = this.props.layersConfig;
						this.pickerBox.x = K()(s.x, 0, r.width - this.pickerBox.width), this.pickerBox.y = K()(s.y, 0, r.height - this.pickerBox.height), this.picker.style.left = "".concat(this.pickerBox.x / t, "px"), this.picker.style.top = "".concat(this.pickerBox.y / t, "px")
					}, this.onTouchStart = () => {
						document.documentElement.style.overflow = "hidden", this.setState(e => Object.assign({}, e, {
							showConfirmButtons: !1
						}))
					}, this.onTouchEnd = () => {
						this.confirmBackgroundSelection(), document.documentElement.style.overflow = "auto"
					}, this.onLayersInspect = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.canvas) return;
						if (this.props.onLayerSelect(null, !0), this.state.showInspector) return void this.setState({
							inspectedArea: void 0,
							inspectedPoint: void 0,
							showInspector: !1
						});
						const t = this.getMousePagePosition(this.canvas, e),
							s = this.getMouseCanvasPosition(this.canvas, e),
							r = this.getInspectedAreaFromPoint(this.canvas, s),
							n = this.canvas.width / this.canvas.offsetWidth;
						this.layerInspectorElementOffset = {
							x: r.endPoint.x / n - t.x,
							y: r.endPoint.y / n - t.y
						}, this.props.fetchInspectorLayers(r), this.setState({
							inspectedArea: r,
							inspectedPoint: t,
							showInspector: !0
						})
					}, this.onLoadMoreInspectedLayers = () => {
						this.state.inspectedArea && this.props.fetchInspectorLayers(this.state.inspectedArea)
					}, this.draw = () => {
						if (!this.ctx) return;
						this.clear(this.ctx), this.drawImage(this.ctx);
						const {
							surfaces: e,
							currentSurfaceId: t
						} = this.props, s = t ? e[t] : null;
						if (s && s.forEach(e => this.highlightLayer(this.ctx, e)), !this.props.isPickerBoxEnabled) {
							this.highlightInspectedArea(this.ctx);
							const e = this.props.isInspectorActiveLayer ? this.highlightedAreaBorderColor : this.inspectedAreaBorderColor;
							this.highlightLayer(this.ctx, this.props.activeLayer, e)
						}
						this.updateCanvasEventHandlers()
					}, this.drawImage = e => {
						if (!e || !this.image) return;
						const {
							width: t,
							height: s
						} = this.props.layersConfig.canvasImage;
						e.drawImage(this.image, 0, 0, t, s)
					}, this.highlightLayer = (e, t, s) => {
						if (!e || !t) return;
						const r = B()(t, "box.startPoint"),
							n = B()(t, "box.endPoint");
						if (!(r && n && r.x && r.y && n.x && n.y)) return;
						const a = n.x - r.x,
							o = n.y - r.y;
						s && (e.strokeStyle = s, e.beginPath(), e.rect(r.x, r.y, a, o), e.closePath(), e.stroke());
						const i = new Image;
						i.onload = () => {
							e.drawImage(i, r.x, r.y, a, o)
						}, i.src = t.imageUrl
					}, this.highlightInspectedArea = e => {
						const {
							showInspector: t,
							inspectedArea: s
						} = this.state;
						t && s && (e.strokeStyle = this.inspectedAreaBorderColor, e.beginPath(), e.rect(s.startPoint.x, s.startPoint.y, s.endPoint.x - s.startPoint.x, s.endPoint.y - s.startPoint.y), e.closePath(), e.stroke())
					}, this.getShiftedMousePosition = (e, t) => {
						const s = this.getMouseCanvasPosition(e, t),
							r = this.pickerBox.width / 2,
							n = this.pickerBox.height / 2;
						return {
							x: s.x - r,
							y: s.y - n
						}
					}, this.getShiftedTouchPosition = (e, t) => {
						const s = this.getTouchCanvasPosition(e, t),
							r = e.width / e.offsetWidth,
							n = this.pickerBox.width / 2,
							a = this.pickerBox.height,
							o = je.height * r / 2;
						return {
							x: s.x - n,
							y: s.y - (a + o)
						}
					}, this.getTouchCanvasPosition = (e, t) => {
						const s = e.getBoundingClientRect(),
							r = s.left,
							n = s.top,
							a = e.width / e.offsetWidth,
							o = t.targetTouches[0];
						return o ? {
							x: (o.clientX - r) * a,
							y: (o.clientY - n) * a
						} : {
							x: 0,
							y: 0
						}
					}, this.getMouseCanvasPosition = (e, t) => {
						const s = e.getBoundingClientRect(),
							r = s.left,
							n = s.top,
							a = e.width / e.offsetWidth;
						return {
							x: (t.clientX - r) * a,
							y: (t.clientY - n) * a
						}
					}, this.getMousePagePosition = (e, t) => {
						const s = e.getBoundingClientRect();
						return {
							x: t.clientX - s.left,
							y: t.clientY - s.top
						}
					}, this.getLayerBackground = () => {
						const {
							x: e,
							y: t,
							width: s,
							height: r
						} = this.pickerBox, n = {
							startPoint: {
								x: e,
								y: t
							},
							endPoint: {
								x: e + s,
								y: t + r
							}
						}, a = document.createElement("canvas");
						if (!a) return;
						const o = a.getContext("2d");
						o && (a.width = s, a.height = r, o.drawImage(this.image, e, t, s, r, 0, 0, s, r), this.props.onBackgroundSelect(a.toDataURL(), n), this.setState({
							showConfirmButtons: !1
						}, this.updateCanvasEventHandlers))
					}, this.getLayerBackgroundFromInspector = () => {
						this.state.inspectedArea && (this.pickerBox.x = this.state.inspectedArea.startPoint.x, this.pickerBox.y = this.state.inspectedArea.startPoint.y), this.getLayerBackground()
					}, this.confirmBackgroundSelection = () => {
						if (!this.canvas) return;
						const {
							x: e,
							y: t,
							width: s,
							height: r
						} = this.pickerBox, n = this.canvas.width / this.canvas.offsetWidth;
						this.confirmPosition = {
							x: (e + s) / n,
							y: (t + r / 2) / n
						}, this.cancelPosition = {
							x: e / n - ee.size,
							y: (t + r / 2) / n
						}, this.setState({
							showConfirmButtons: !0
						}, this.updateCanvasEventHandlers)
					}, this.continueBackgroundSelection = () => this.setState(e => Object.assign({}, e, {
						showConfirmButtons: !1
					}), this.updateCanvasEventHandlers), this.state = {
						showInspector: !1,
						showConfirmButtons: !1,
						inspectedPoint: void 0,
						inspectedArea: void 0
					}
				}
				get canvas() {
					return this._canvas.current
				}
				get picker() {
					return this._picker.current
				}
				componentDidMount() {
					if (!this.canvas) return;
					if (this.ctx = this.canvas.getContext("2d"), !this.ctx) return;
					const {
						canvasImage: e,
						websocketUrl: t
					} = this.props.layersConfig, {
						width: s,
						height: r
					} = e;
					this.ctx.canvas.width = s, this.ctx.canvas.height = r, this.ctx.lineWidth = this.pickerBorderWidth, this.image.setAttribute("crossOrigin", "anonymous"), this.image.onload = this.draw, this.image.onerror = () => {
						this.image = new Image
					}, this.debouncedSetImage(), this.ws = new WebSocket(t), this.ws.onmessage = this.debouncedProcessWsMessage, this.ws.onerror = e => {
						this.ws && this.ws.close()
					}, this.layerImage.onload = () => {
						this.draw()
					}
				}
				componentWillUnmount() {
					this.ws && this.ws.close()
				}
				getInspectedAreaFromPoint(e, t) {
					const {
						x: s,
						y: r
					} = t, n = this.inspectedAreaSize, a = s + n > e.width ? Math.abs(e.width - s - n) : 0, o = r + n > e.height ? Math.abs(e.height - r - n) : 0, i = {
						x: s > n ? s - n - a : 0,
						y: r > n ? r - n - o : 0
					}, c = 0 === i.x ? Math.abs(s - n) : 0, d = 0 === i.y ? Math.abs(r - n) : 0;
					return {
						startPoint: i,
						endPoint: {
							x: s + n < e.width ? s + n + c : e.width,
							y: r + n < e.height ? r + n + d : e.height
						}
					}
				}
				clear(e) {
					const {
						width: t,
						height: s
					} = this.props.layersConfig.canvasImage;
					e.clearRect(0, 0, t, s)
				}
				render() {
					const {
						activeLayer: e,
						isCreationEnabled: t,
						isSurfacingEnabled: s,
						isPickerBoxEnabled: r,
						layersConfig: n,
						layersInspected: a,
						onLayerSelect: o,
						onBackgroundSelect: i,
						layersInspectedRequestInProgress: c,
						layersInspectedRequestFailed: d,
						isModerator: m,
						openDeleteModal: u,
						surfaces: p,
						currentSurfaceId: h,
						addLayerToSurface: b,
						removeLayerFromSurface: g
					} = this.props, {
						showConfirmButtons: x,
						showInspector: y,
						inspectedPoint: f
					} = this.state, v = this.confirmPosition.y - ne.size / 2, E = {
						top: v,
						left: this.confirmPosition.x
					}, O = {
						top: v,
						left: this.cancelPosition.x
					}, {
						width: C,
						height: j
					} = n.canvasImage, S = r && !x, w = {
						cursor: S ? "none" : "pointer",
						backgroundImage: ze
					}, P = this.canvas ? this.canvas.width / this.canvas.offsetWidth : 1;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement("canvas", {
						width: C,
						height: j,
						ref: this._canvas,
						style: w,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeaveCanvas
					}), l.a.createElement(Ve, {
						surfaces: p,
						currentSurfaceId: h,
						addLayerToSurface: b,
						removeLayerFromSurface: g,
						activeLayerId: e && e.id || null,
						isCreationEnabled: t,
						isSurfacingEnabled: s,
						isModerator: m,
						openDeleteModal: u,
						layerInspectorElementOffset: this.layerInspectorElementOffset,
						show: y,
						point: f,
						layers: a,
						loading: c,
						loadError: d,
						onAddLayer: this.getLayerBackgroundFromInspector,
						onLoadMore: this.onLoadMoreInspectedLayers,
						onLayerSelect: o,
						onReferenceClick: i
					}), r && x && l.a.createElement(l.a.Fragment, null, l.a.createElement(ee, {
						onClick: this.continueBackgroundSelection,
						style: O
					}), l.a.createElement(ne, {
						onClick: this.getLayerBackground,
						style: E
					})), r && l.a.createElement("div", {
						className: Ge.a.picker,
						ref: this._picker,
						style: {
							cursor: S ? "none" : "default",
							left: Math.floor(this.pickerBox.x / P),
							top: Math.floor(this.pickerBox.y / P),
							height: Math.floor(this.pickerBox.height / P),
							width: Math.floor(this.pickerBox.width / P)
						}
					}, this.isMobile && l.a.createElement(je, {
						onTouchStart: this.onTouchStart,
						onTouchMove: this.onMove,
						onTouchEnd: this.onTouchEnd,
						style: {
							marginTop: this.pickerBox.height / P
						}
					})))
				}
			}
			var qe = Ke,
				Qe = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				Ze = s("./src/lib/copyToClipboard/index.ts"),
				Je = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ye = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Xe = s("./src/reddit/icons/svgs/LayerDuplicate/index.tsx"),
				$e = s("./src/reddit/icons/svgs/Share/index.tsx"),
				et = s("./src/reddit/icons/svgs/Trash/index.tsx"),
				tt = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				st = s("./src/reddit/components/LayersEmbed/LayersPanel/DraftLayer/index.m.less"),
				rt = s.n(st);
			var nt = e => l.a.createElement("div", {
					className: Object(fe.a)(Be.a.container, rt.a.container)
				}, l.a.createElement(tt.a, {
					className: rt.a.pencilIcon,
					onClick: e.onEditDraft
				}), l.a.createElement("div", {
					className: Be.a.verticalRule
				}), l.a.createElement(we.b, {
					className: Be.a.name,
					title: Object(W.c)("Layer Draft")
				}, Object(W.c)("Layer Draft")), l.a.createElement(et.a, {
					className: rt.a.trashIcon,
					onClick: e.onDeleteDraft
				})),
				at = s("./src/reddit/components/LayersEmbed/LayersPanel/Footer/index.m.less"),
				ot = s.n(at);
			var it = () => l.a.createElement("div", {
					className: ot.a.footer
				}, l.a.createElement("a", {
					"data-redditstyle": !0,
					href: "https://www.reddit.com/r/Layer/comments/cxkwxu/the_layer_maker_quick_start_guide_user_manual/",
					target: "_blank"
				}, l.a.createElement(ue, {
					className: ot.a.help
				}))),
				ct = s("./src/reddit/components/LayersEmbed/LayersPanel/Header/index.m.less"),
				dt = s.n(ct);
			const lt = () => l.a.createElement("div", {
				className: dt.a.icon
			});
			var mt = e => {
					let {
						isPickerBoxEnabled: t,
						isCreationEnabled: s,
						isSurfacingEnabled: r,
						onAddLayerClick: n,
						onExpandSurfacesClick: a
					} = e;
					const o = Object(fe.a)(dt.a.icon, dt.a.addLayer, {
							[dt.a.addLayerActive]: t
						}),
						i = Object(W.c)("<< SELECT AN AREA FOR YOUR LAYER");
					return l.a.createElement("div", {
						className: dt.a.header
					}, t ? l.a.createElement(we.b, {
						className: dt.a.selectLayerMessage,
						title: i
					}, i) : l.a.createElement(l.a.Fragment, null, l.a.createElement(be, {
						className: dt.a.icon
					}), l.a.createElement(ye, {
						className: dt.a.wordmark
					})), s ? l.a.createElement(J, {
						isRotated: t,
						onClick: n,
						className: o
					}) : r ? l.a.createElement(Te, {
						className: dt.a.surfaceIcon,
						onClick: a
					}) : l.a.createElement(lt, null))
				},
				ut = s("./src/reddit/controls/Input/index.tsx"),
				pt = s("./src/reddit/icons/svgs/Search/index.tsx"),
				ht = s("./src/reddit/components/LayersEmbed/LayersPanel/SearchBar/index.m.less"),
				bt = s.n(ht);
			var gt = e => l.a.createElement("div", {
					className: bt.a.container
				}, l.a.createElement("div", {
					className: bt.a.iconContainer
				}, l.a.createElement(pt.a, null)), l.a.createElement(ut.a, {
					onChange: e.onSearchTextChange,
					value: e.value,
					className: bt.a.input,
					type: "search"
				})),
				xt = s("./src/reddit/components/LayersEmbed/LayersPanel/index.m.less"),
				yt = s.n(xt);
			class ft extends l.a.Component {
				constructor(e) {
					super(e), this.scrollContainerId = "layers-embed-scroll-container", this.estimatedEntryHeightPx = 40, this.getContainer = () => document.getElementById(this.scrollContainerId), this.onLayerSelectFromPanelFactory = e => () => this.props.onLayerSelect(e, !1), this.onToggleSurfaceFactory = e => () => this.props.toggleSurface(e), this.onDuplicateSurfaceFactory = e => t => {
						t.stopPropagation(), this.props.duplicateSurface(e)
					}, this.onRemoveSurfaceFactory = e => t => {
						t.stopPropagation(), this.props.removeSurface(e)
					}, this.onAddLayerToSurfaceFactory = e => () => this.props.addLayerToSurface(e), this.onRemoveLayerFromSurfaceFactory = e => () => this.props.removeLayerFromSurface(e), this.copySurfaceUrlToClipboardFactory = e => t => {
						t.stopPropagation();
						const {
							currentSurfaceId: s,
							surfaces: r,
							toggleSurface: n
						} = this.props, a = r[e] || [];
						if (!a.length) return void this.props.showToast(Object(b.d)(Qe.fbt._("Surface is empty", null, {
							hk: "3Ek7Zj"
						}), H.b.Error));
						const o = a.map(e => e.id).join(","),
							i = "".concat(window.location.origin, "/r/").concat(this.props.subredditName, "/?surfaceLayers=").concat(o);
						Object(Ze.a)(i) ? this.props.showToast(Object(b.d)(Qe.fbt._("Link has been copied", null, {
							hk: "3tMDVE"
						}), H.b.SuccessCommunityGreen)) : this.props.showToast(Object(b.d)(Qe.fbt._("Something went wrong", null, {
							hk: "1z7tqe"
						}), H.b.Error)), s !== e && n(e)
					}, this.toggleExpandSurfacesPanel = () => this.setState(e => ({
						isSurfacingPanelExpanded: !e.isSurfacingPanelExpanded
					})), this.toggleExpandSurfaceFactory = e => t => {
						t.stopPropagation();
						const {
							currentSurfaceId: s,
							toggleSurface: r
						} = this.props;
						if (s !== e) return r(e), void this.setState({
							isSurfaceExpanded: !0
						});
						this.setState(e => ({
							isSurfaceExpanded: !e.isSurfaceExpanded
						}))
					}, this.state = {
						isSurfaceExpanded: !1,
						isSurfacingPanelExpanded: !!Object.keys(e.surfaces).length
					}
				}
				componentDidUpdate(e) {
					Object.keys(e.surfaces).length < Object.keys(this.props.surfaces).length && !this.state.isSurfacingPanelExpanded && this.setState({
						isSurfacingPanelExpanded: !0
					})
				}
				render() {
					const {
						openDeleteModal: e,
						isModerator: t,
						hasLayerDraft: s,
						isLoading: r,
						isCreationEnabled: n,
						isSurfacingEnabled: a,
						isPickerBoxEnabled: o,
						layersSearchValue: i,
						layers: c,
						layersSearchResult: d,
						layersSearchRequestCompleted: m,
						onLoadMore: u,
						onAddLayerClick: p,
						onReferenceClick: h,
						onEditDraft: b,
						onDeleteDraft: g,
						onLayersSearch: v,
						surfaces: E,
						addSurface: C,
						currentSurfaceId: j,
						isSurfaceLoading: S
					} = this.props, {
						isSurfaceExpanded: w,
						isSurfacingPanelExpanded: P
					} = this.state;
					let _, N;
					d && d.length ? _ = d : m && i.length > 1 ? _ = d : (_ = c, N = c && c.length ? c[c.length - 1].id : void 0);
					const k = j ? E[j] : null,
						I = _ ? _.map(s => {
							const r = !!k && !!k.find(e => s.id === e.id);
							return {
								estHeight: this.estimatedEntryHeightPx,
								id: r ? "surfaced-".concat(s.id) : s.id,
								render: () => l.a.createElement(Fe, {
									onAddLayerToSurface: this.onAddLayerToSurfaceFactory(s),
									onRemoveLayerFromSurface: this.onRemoveLayerFromSurfaceFactory(s.id),
									isSurfaced: r,
									isModerator: t,
									showDeleteModal: e(s.postId),
									dropdownId: "panel-".concat(s.id),
									isActive: s.id === this.props.activeLayerId,
									isCreationEnabled: n,
									isSurfacingEnabled: a,
									layer: s,
									key: s.id,
									onLayerSelect: this.onLayerSelectFromPanelFactory(s),
									onReferenceClick: h
								})
							}
						}) : [],
						L = Object.keys(E).length,
						T = S ? l.a.createElement(O.a, {
							center: !0,
							sizePx: x / 2
						}) : L < y ? l.a.createElement("p", {
							className: yt.a.addSurface,
							onClick: C
						}, l.a.createElement(De.a, {
							className: yt.a.surfaceIconPlus
						}), Qe.fbt._("Add new surface", null, {
							hk: "8n8YY"
						}), l.a.createElement(we.f, {
							className: yt.a.surfacesCount
						}, L, " / ", y)) : l.a.createElement("p", {
							className: yt.a.surfaceHeaderText
						}, Qe.fbt._("Maximum number of surfaces reached", null, {
							hk: "heKT9"
						}));
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(mt, {
						isPickerBoxEnabled: o,
						isCreationEnabled: n,
						isSurfacingEnabled: a,
						onAddLayerClick: p,
						onExpandSurfacesClick: this.toggleExpandSurfacesPanel
					}), P && l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: yt.a.surfaceHeader
					}, T), l.a.createElement("div", {
						className: yt.a.surfacesWrapper
					}, l.a.createElement("div", {
						className: yt.a.surfacesScroller
					}, Object.keys(E).sort((e, t) => Number(e) - Number(t)).map(s => {
						const r = E[s];
						return l.a.createElement(l.a.Fragment, {
							key: "surface-".concat(s)
						}, l.a.createElement("div", {
							className: Object(fe.a)(yt.a.surfaceItem, j === s ? yt.a.surfaceActive : void 0),
							onClick: this.onToggleSurfaceFactory(s)
						}, l.a.createElement("p", {
							className: yt.a.surfaceTitle
						}, Qe.fbt._("Surface {surfaceId}", [Qe.fbt._param("surfaceId", s)], {
							hk: "17Jo0q"
						}), l.a.createElement(we.f, {
							className: yt.a.surfaceLayersCount
						}, "".concat(r ? r.length : 0, "/").concat(f))), l.a.createElement("p", {
							onClick: this.onDuplicateSurfaceFactory(s)
						}, l.a.createElement(Xe.a, {
							className: yt.a.surfaceIcon
						})), l.a.createElement("p", {
							onClick: this.copySurfaceUrlToClipboardFactory(s)
						}, l.a.createElement($e.a, {
							className: yt.a.surfaceIcon
						})), l.a.createElement("p", {
							onClick: this.onRemoveSurfaceFactory(s)
						}, l.a.createElement(et.a, {
							className: yt.a.surfaceIcon
						})), l.a.createElement("p", {
							onClick: this.toggleExpandSurfaceFactory(s)
						}, j === s && w ? l.a.createElement(Ye.a, {
							className: yt.a.surfaceIconBase
						}) : l.a.createElement(Je.a, {
							className: yt.a.surfaceIconBase
						}))), j === s && w && (k && k.length ? k.map(r => l.a.createElement(Fe, {
							onAddLayerToSurface: this.onAddLayerToSurfaceFactory(r),
							onRemoveLayerFromSurface: this.onRemoveLayerFromSurfaceFactory(r.id),
							isSurfaced: !0,
							isModerator: t,
							showDeleteModal: e(r.postId),
							dropdownId: "surface-".concat(s, "-").concat(r.id),
							isActive: r.id === this.props.activeLayerId,
							isCreationEnabled: n,
							isSurfacingEnabled: a,
							layer: r,
							key: "surface-".concat(s, "-").concat(r.id),
							onLayerSelect: this.onLayerSelectFromPanelFactory(r),
							onReferenceClick: h
						})) : l.a.createElement("p", {
							className: yt.a.surfaceEmptyText
						}, Qe.fbt._("Surface is empty, add some layers", null, {
							hk: "3iXJZp"
						}))))
					})))), l.a.createElement(gt, {
						value: i,
						onSearchTextChange: v
					}), l.a.createElement("div", {
						id: this.scrollContainerId,
						className: yt.a.scroller
					}, s && n && l.a.createElement(nt, {
						onEditDraft: b,
						onDeleteDraft: g
					}), r ? l.a.createElement(O.a, {
						center: !0,
						className: yt.a.loader,
						sizePx: x
					}) : l.a.createElement(Se.b, {
						getContainer: this.getContainer,
						loadMoreToken: N,
						onLoadMore: u,
						preventScrollOnMount: !0
					}, I)), l.a.createElement(it, null))
				}
			}
			var vt = ft,
				Et = s("./src/reddit/components/LayersEmbed/index.m.less"),
				Ot = s.n(Et);
			const Ct = Object(u.c)({
					isCreationEnabled: I.a,
					isSurfacingEnabled: I.d,
					isModerator: U.g,
					layerDraft: V.b
				}),
				jt = Object(m.b)(Ct, (e, t) => ({
					openEditor: t => e(h.g(t)),
					openLayerDraft: () => e(h.j()),
					deleteLayerDraft: () => e(h.h()),
					showToast: t => e(Object(b.e)(Object.assign({}, t, {
						duration: b.a
					})))
				}));
			class St extends l.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.layersFetchLimit = 25, this.updateComponentHeightTimeoutMs = 500, this.updateComponentHeight = () => {
						const e = document.querySelector(".".concat(Ot.a.fixedArWrapper));
						e && this.setState({
							componentHeight: "".concat(Math.floor(e.getBoundingClientRect().height), "px")
						})
					}, this.debouncedUpdateComponentHeight = n()(this.updateComponentHeight, this.updateComponentHeightTimeoutMs, {
						leading: !0,
						maxWait: this.updateComponentHeightTimeoutMs
					}), this.onLayerSelect = (e, t) => this.setState(s => {
						let r = e;
						return r && s.activeLayer && s.activeLayer.id === r.id && (r = null), {
							isInspectorActiveLayer: t,
							isPickerBoxEnabled: !1,
							activeLayer: r
						}
					}), this.hideDeleteModal = () => this.setState({
						layerToDeleteId: null,
						shouldShowDeleteModal: !1
					}), this.openDeleteModal = e => () => this.setState({
						layerToDeleteId: e,
						shouldShowDeleteModal: !0
					}), this.deleteLayer = async () => {
						const {
							apiContext: e,
							showToast: t
						} = this.props;
						if (this.state.layerToDeleteId)
							if ((await Object(C.l)(e(), this.state.layerToDeleteId, !1)).ok) {
								t(Object(b.d)(Object(W.c)("Post has been deleted"), H.b.SuccessMod))
							} else {
								t(Object(b.d)(Object(W.c)("Post has not been deleted"), H.b.Error))
							}
					}, this.syncPersistedSurfaces = () => {
						const e = Object.keys(this.state.surfaces).reduce((e, t) => {
							const s = this.state.surfaces[t];
							return Object.assign({}, e, {
								[t]: s ? s.map(e => e.id) : null
							})
						}, {});
						Object(D.Z)(e)
					}, this.addSurface = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						const s = Object.keys(t.state.surfaces).length;
						s >= 10 ? t.props.showToast(Object(b.d)(Object(W.c)("Maximum number of surfaces reached"), H.b.Error)) : t.setState(t => {
							const s = t.latestSurfaceId + 1;
							return {
								latestSurfaceId: s,
								currentSurfaceId: String(s),
								surfaces: Object.assign({}, t.surfaces, {
									[String(s)]: e.length ? [...e] : []
								})
							}
						}, t.syncPersistedSurfaces)
					}, this.duplicateSurface = e => {
						const t = this.state.surfaces[e];
						t && this.addSurface(t)
					}, this.removeSurface = e => this.setState(t => ({
						surfaces: c()(t.surfaces, e),
						currentSurfaceId: t.currentSurfaceId === e ? null : t.currentSurfaceId
					}), this.syncPersistedSurfaces), this.toggleSurface = e => {
						this.state.surfaces[e] && this.setState(t => ({
							currentSurfaceId: t.currentSurfaceId !== e ? e : null
						}))
					}, this.addLayerToCurrentSurface = e => {
						const {
							currentSurfaceId: t,
							surfaces: s
						} = this.state;
						if (0 === Object.keys(s).length) return void this.addSurface([e]);
						if (!t) {
							const e = Object(b.d)(Object(W.c)("Please select surface to add layer."), H.b.Error);
							return void this.props.showToast(e)
						}
						const r = this.state.surfaces[t];
						r && (r.length >= f ? this.props.showToast(Object(b.d)(Object(W.c)("Layers per surface limit exceeded."), H.b.Error)) : this.setState(s => ({
							surfaces: Object.assign({}, s.surfaces, {
								[t]: [...r || [], e]
							})
						}), this.syncPersistedSurfaces))
					}, this.removeLayerFromSurface = e => {
						const {
							currentSurfaceId: t
						} = this.state;
						if (!t) return;
						const s = this.state.surfaces[t] || [];
						this.setState(r => ({
							surfaces: Object.assign({}, r.surfaces, {
								[t]: s.filter(t => t.id !== e)
							})
						}), this.syncPersistedSurfaces)
					}, this.loadSurfaces = async function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
							s = arguments.length > 1 ? arguments[1] : void 0;
						const r = Object.keys(s);
						let n = 0;
						r.length && (n = Math.max(...r.map(e => Number(e))));
						const a = t.getSurfaceLayersFromUrlParams(e, s);
						if (a && a.length) {
							n += 1;
							const e = String(n);
							r.push(e), s[e] = [...a]
						}
						t.setState({
							latestSurfaceId: n,
							currentSurfaceId: e && n ? String(n) : null,
							surfaces: Object.assign({}, r.reduce((e, t) => Object.assign({}, e, {
								[t]: null
							}), {}))
						});
						const o = [...new Set(r.reduce((e, t) => [...e, ...s[t]], []))],
							i = await t.loadSurfaceByLayerIds(o);
						if (!i) return;
						const c = i.filter(Boolean).reduce((e, t) => Object.assign({}, e, {
								[t.id]: t
							}), {}),
							d = r.reduce((e, t) => Object.assign({}, e, {
								[t]: s[t].map(e => c[e]).filter(Boolean)
							}), {});
						Object.keys(d).length && t.setState(e => ({
							surfaces: Object.assign({}, e.surfaces, d)
						}), t.syncPersistedSurfaces)
					}, this.getSurfaceLayersFromUrlParams = (e, t) => {
						const s = new RegExp("^[0-9]+$"),
							r = [...new Set(e.split(",").filter(e => s.test(e)))];
						if (!this.isSurfaceIsDuplicate(r, t)) return r
					}, this.isSurfaceIsDuplicate = (e, t) => !!Object.keys(t).find(s => {
						if (t[s].length !== e.length) return !1;
						for (let r = 0; r < e.length; r++)
							if (e[r] !== t[s][r]) return !1;
						return !0
					}), this.onAddLayerClick = () => this.setState(e => ({
						activeLayer: null,
						isPickerBoxEnabled: !e.isPickerBoxEnabled
					})), this.onBackgroundSelect = (e, t) => {
						const s = new Image;
						s.onload = () => {
							this.props.openEditor({
								background: s,
								box: t
							}), this.props.sendEvent(A.c)
						}, s.src = e, this.setState({
							isPickerBoxEnabled: !1
						})
					}, this.fetchLayersConfigFromGql = async () => {
						const {
							gqlContext: e,
							subredditId: t
						} = this.props;
						this.setState({
							layersConfig: null,
							layersConfigRequestInProgress: !0,
							layersConfigRequestFailed: !1
						});
						const s = await _(e(), t);
						let r = null,
							n = !1;
						if (s.ok) {
							r = T(s.body.data.subreddit)[t] || null
						} else n = !0;
						this.setState({
							layersConfig: r,
							layersConfigRequestFailed: n,
							layersConfigRequestInProgress: !1
						})
					}, this.fetchLayersFromGql = async () => {
						if (this.state.layersRequestInProgress) return;
						const {
							gqlContext: e,
							subredditId: t
						} = this.props;
						this.setState({
							layersRequestInProgress: !0,
							layersRequestFailed: !1
						});
						let s = this.state.layersCursor;
						const r = await N(e(), t, this.layersFetchLimit, s);
						let n = this.state.layers && this.state.layers.slice() || [],
							a = !1;
						if (r.ok) {
							const e = F(r.body.data.subreddit)[t];
							e && (n = e.layers && e.layers.length ? [...n, ...e.layers] : n, s = e.cursor || s)
						} else a = !0;
						this.setState({
							layers: n,
							layersCursor: s,
							layersRequestFailed: a,
							layersRequestInProgress: !1
						})
					}, this.loadSurfaceByLayerIds = async e => {
						if (this.state.surfaceLayersRequestInProgress) return;
						if (!e || 0 === e.length) return [];
						this.setState({
							surfaceLayersRequestInProgress: !0
						});
						const {
							gqlContext: t,
							subredditId: s
						} = this.props, r = await k(t(), s, e);
						if (r.ok) {
							const e = L(r.body.data.subreddit)[s];
							return e && e.length ? this.props.showToast(Object(b.d)(Object(W.c)("Surfaces have been loaded"), H.b.SuccessCommunityGreen)) : this.props.showToast(Object(b.d)(Object(W.c)("Surfaces have not been loaded, something went wrong"), H.b.Error)), this.setState({
								surfaceLayersRequestInProgress: !1
							}), e
						}
					}, this.getNormalizedLayersFromResponse = (e, t) => {
						const s = F(e.body.data.subreddit)[t];
						return s && s.layers || null
					}, this.fetchInspectorLayersFromGql = async e => {
						const {
							gqlContext: t,
							subredditId: s
						} = this.props;
						let r = this.state.layersInspectedCursor;
						o()(e, this.state.layersInspectedBox) ? this.setState({
							layersInspectedRequestInProgress: !0,
							layersInspectedRequestFailed: !1
						}) : (r = "", this.setState({
							layersInspectedBox: e,
							layersInspectedCursor: r,
							layersInspected: null,
							layersInspectedRequestInProgress: !0,
							layersInspectedRequestFailed: !1
						}));
						const n = await N(t(), s, this.layersFetchLimit, r, e);
						let a = this.state.layersInspected && this.state.layersInspected.slice() || [],
							i = !1;
						if (n.ok) {
							const e = F(n.body.data.subreddit)[s];
							e && (a = e.layers && e.layers.length ? [...a, ...e.layers] : a, r = e.cursor || r)
						} else i = !0;
						this.setState({
							layersInspected: a,
							layersInspectedCursor: r,
							layersInspectedRequestFailed: i,
							layersInspectedRequestInProgress: !1
						})
					}, this.fetchSearchLayersFromGql = async () => {
						const {
							gqlContext: e,
							subredditId: t
						} = this.props, {
							layersSearchValue: s
						} = this.state;
						if (!s || s.length < 2) return;
						this.setState({
							layersSearchResult: null,
							layersSearchedRequestInProgress: !0,
							layersSearchedRequestFailed: !1
						});
						const r = await N(e(), t, this.layersFetchLimit, void 0, void 0, s);
						let n = null,
							a = !1;
						r.ok ? n = this.getNormalizedLayersFromResponse(r, t) : a = !0, this.setState({
							layersSearchResult: n,
							layersSearchedRequestFailed: a,
							layersSearchRequestCompleted: !0,
							layersSearchedRequestInProgress: !1
						})
					}, this.debouncedFetchSearchLayersFromGql = n()(this.fetchSearchLayersFromGql, 1e3, {
						leading: !0
					}), this.handleSearchTextChange = e => {
						this.setState(Object.assign({
							layersSearchRequestCompleted: !1,
							layersSearchValue: e.target.value
						}, e.target.value ? {} : {
							layersSearchResult: null
						}), this.debouncedFetchSearchLayersFromGql)
					}, this.state = {
						activeLayer: null,
						componentHeight: "",
						isPickerBoxEnabled: !1,
						isInspectorActiveLayer: !1,
						layersConfig: null,
						layersConfigRequestInProgress: !1,
						layersConfigRequestFailed: !1,
						layers: null,
						layersCursor: "",
						layersRequestInProgress: !1,
						layersRequestFailed: !1,
						layersInspected: null,
						layersInspectedBox: null,
						layersInspectedCursor: "",
						layersInspectedRequestInProgress: !1,
						layersInspectedRequestFailed: !1,
						layersSearchValue: "",
						layersSearchResult: null,
						layersSearchedRequestInProgress: !1,
						layersSearchedRequestFailed: !1,
						layersSearchRequestCompleted: !0,
						layerToDeleteId: null,
						shouldShowDeleteModal: !1,
						surfaces: {},
						currentSurfaceId: null,
						latestSurfaceId: 0,
						surfaceLayersRequestInProgress: !1
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.debouncedUpdateComponentHeight), this.updateComponentHeight(), this.fetchLayersConfigFromGql(), this.fetchLayersFromGql();
					const e = Object(p.a)().get("surfaceLayers"),
						t = Object(D.x)() || {};
					this.loadSurfaces(e, t)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.debouncedUpdateComponentHeight), this.props.deleteLayerDraft()
				}
				render() {
					const {
						activeLayer: e,
						isInspectorActiveLayer: t,
						isPickerBoxEnabled: s,
						layers: r,
						layersConfig: n,
						layersSearchResult: a,
						layersSearchValue: o,
						layersRequestInProgress: i,
						layersSearchedRequestInProgress: c,
						layersSearchRequestCompleted: d,
						shouldShowDeleteModal: m,
						surfaces: u,
						currentSurfaceId: p,
						surfaceLayersRequestInProgress: h
					} = this.state, {
						isCreationEnabled: b,
						isSurfacingEnabled: y,
						isModerator: f,
						subredditName: v,
						showToast: E
					} = this.props;
					let C = null;
					C = n ? l.a.createElement(qe, {
						activeLayer: e,
						fetchInspectorLayers: this.fetchInspectorLayersFromGql,
						isCreationEnabled: b,
						isSurfacingEnabled: y,
						isInspectorActiveLayer: t,
						isModerator: f,
						isPickerBoxEnabled: s,
						layersConfig: n,
						layersInspected: this.state.layersInspected,
						layersInspectedRequestInProgress: this.state.layersInspectedRequestInProgress,
						layersInspectedRequestFailed: this.state.layersInspectedRequestFailed,
						onBackgroundSelect: this.onBackgroundSelect,
						onLayerSelect: this.onLayerSelect,
						openDeleteModal: this.openDeleteModal,
						surfaces: u,
						currentSurfaceId: p,
						addLayerToSurface: this.addLayerToCurrentSurface,
						removeLayerFromSurface: this.removeLayerFromSurface
					}) : l.a.createElement("div", {
						className: Ot.a.loaderWrapper
					}, l.a.createElement(O.a, {
						sizePx: x
					}));
					const j = !r && i;
					return l.a.createElement("div", {
						className: Ot.a.container
					}, l.a.createElement("div", {
						className: Ot.a.colCanvas
					}, l.a.createElement("div", {
						className: Ot.a.fixedArWrapper
					}, l.a.createElement("div", {
						className: Ot.a.fixedArInner
					}, C))), l.a.createElement("div", {
						style: {
							height: this.state.componentHeight
						},
						className: Ot.a.colPanel
					}, l.a.createElement(vt, {
						activeLayerId: e && e.id || null,
						isLoading: j || c,
						isCreationEnabled: b,
						isSurfacingEnabled: y,
						isPickerBoxEnabled: s,
						isModerator: f,
						hasLayerDraft: !!this.props.layerDraft,
						layersSearchValue: o,
						layers: r,
						layersSearchResult: a,
						layersSearchRequestCompleted: d,
						onAddLayerClick: this.onAddLayerClick,
						onLayerSelect: this.onLayerSelect,
						onLoadMore: this.fetchLayersFromGql,
						onReferenceClick: this.onBackgroundSelect,
						onEditDraft: this.props.openLayerDraft,
						onDeleteDraft: this.props.deleteLayerDraft,
						onLayersSearch: this.handleSearchTextChange,
						openDeleteModal: this.openDeleteModal,
						subredditName: v,
						surfaces: u,
						currentSurfaceId: p,
						addSurface: this.addSurface,
						duplicateSurface: this.duplicateSurface,
						removeSurface: this.removeSurface,
						toggleSurface: this.toggleSurface,
						addLayerToSurface: this.addLayerToCurrentSurface,
						removeLayerFromSurface: this.removeLayerFromSurface,
						isSurfaceLoading: h,
						showToast: E
					})), f && m && this.state.layerToDeleteId && l.a.createElement(g.a, {
						toggleModal: this.hideDeleteModal,
						onConfirm: this.deleteLayer,
						actionText: Object(W.c)("delete post"),
						headerText: Object(W.c)("Delete post?"),
						modalText: Object(W.c)("Are you sure you want to delete this post? You can't undo this."),
						withOverlay: !0
					}))
				}
			}
			t.a = jt(Object(E.b)(Object(v.b)(St)))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.t)(),
				g = Object(o.c)({
					layout: m.M
				}),
				x = Object(a.b)(g);
			class y extends n.a.Component {
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
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(p.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.n + c.r + c.s,
						t = l.a - e,
						s = c.h - t,
						r = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(r, "px) {\n              .").concat(p.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.h + c.r + c.s, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.s, "px) / 2);\n              }\n\n              .").concat(p.a.Component, ".").concat(p.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.h + c.r + c.s, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return n.a.createElement("div", {
						className: p.a.Container
					}, n.a.createElement("div", {
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
			t.a = b(x(h.a.wrapped(y, "Component", p.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				h = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const g = b.a.div("BodyContainer", h.a),
				x = b.a.div("SidebarPlaceholder", h.a),
				y = b.a.div("InnerContainer", h.a),
				f = Object(o.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				v = Object(a.b)(f);
			class E extends n.a.Component {
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
						containerClassName: s,
						isSubscriptionsPinned: r,
						considerSidebar: a = !0,
						onFocus: o,
						onBlur: c
					} = this.props;
					let l = 0;
					return r && !e && t && (l += i.v), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), n.a.createElement("div", {
						className: this.props.className
					}, n.a.createElement(g, {
						onFocus: o,
						onBlur: c
					}, n.a.createElement(d.a, {
						fitPageToContent: !0
					}, n.a.createElement(y, {
						className: s
					}, n.a.createElement(u.a, {
						bladeOpen: e,
						considerSidebar: a,
						offsetLeft: l,
						render: this.props.render
					}))), a && n.a.createElement(x, null)))
				}
			}
			t.a = b.a.wrapped(v(E), "Component", h.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-redux/es/index.js")),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/components/ListingSort/index.tsx"),
				b = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/app/strings/index.ts");
			const f = {
				[i.Mb.AllStates]: Object(y.e)("stateSorts.allStates"),
				[i.Mb.Alaska]: Object(y.e)("stateSorts.alaska"),
				[i.Mb.Alabama]: Object(y.e)("stateSorts.alabama"),
				[i.Mb.Arkansas]: Object(y.e)("stateSorts.arkansas"),
				[i.Mb.Arizona]: Object(y.e)("stateSorts.arizona"),
				[i.Mb.California]: Object(y.e)("stateSorts.california"),
				[i.Mb.Colorado]: Object(y.e)("stateSorts.colorado"),
				[i.Mb.Connecticut]: Object(y.e)("stateSorts.connecticut"),
				[i.Mb.DistrictOfColumbia]: Object(y.e)("stateSorts.districtOfColumbia"),
				[i.Mb.Delaware]: Object(y.e)("stateSorts.delaware"),
				[i.Mb.Florida]: Object(y.e)("stateSorts.florida"),
				[i.Mb.Georgia]: Object(y.e)("stateSorts.georgia"),
				[i.Mb.Hawaii]: Object(y.e)("stateSorts.hawaii"),
				[i.Mb.Iowa]: Object(y.e)("stateSorts.iowa"),
				[i.Mb.Idaho]: Object(y.e)("stateSorts.idaho"),
				[i.Mb.Illinois]: Object(y.e)("stateSorts.illinois"),
				[i.Mb.Indiana]: Object(y.e)("stateSorts.indiana"),
				[i.Mb.Kansas]: Object(y.e)("stateSorts.kansas"),
				[i.Mb.Kentucky]: Object(y.e)("stateSorts.kentucky"),
				[i.Mb.Louisiana]: Object(y.e)("stateSorts.louisiana"),
				[i.Mb.Massachusetts]: Object(y.e)("stateSorts.massachusetts"),
				[i.Mb.Maryland]: Object(y.e)("stateSorts.maryland"),
				[i.Mb.Maine]: Object(y.e)("stateSorts.maine"),
				[i.Mb.Michigan]: Object(y.e)("stateSorts.michigan"),
				[i.Mb.Minnesota]: Object(y.e)("stateSorts.minnesota"),
				[i.Mb.Missouri]: Object(y.e)("stateSorts.missouri"),
				[i.Mb.Mississippi]: Object(y.e)("stateSorts.mississippi"),
				[i.Mb.Montana]: Object(y.e)("stateSorts.montana"),
				[i.Mb.NorthCarolina]: Object(y.e)("stateSorts.northCarolina"),
				[i.Mb.NorthDakota]: Object(y.e)("stateSorts.northDakota"),
				[i.Mb.Nebraska]: Object(y.e)("stateSorts.nebraska"),
				[i.Mb.NewHampshire]: Object(y.e)("stateSorts.newHampshire"),
				[i.Mb.NewJersey]: Object(y.e)("stateSorts.newJersey"),
				[i.Mb.NewMexico]: Object(y.e)("stateSorts.newMexico"),
				[i.Mb.Nevada]: Object(y.e)("stateSorts.nevada"),
				[i.Mb.NewYork]: Object(y.e)("stateSorts.newYork"),
				[i.Mb.Ohio]: Object(y.e)("stateSorts.ohio"),
				[i.Mb.Oklahoma]: Object(y.e)("stateSorts.oklahoma"),
				[i.Mb.Oregon]: Object(y.e)("stateSorts.oregon"),
				[i.Mb.Pennsylvania]: Object(y.e)("stateSorts.pennsylvania"),
				[i.Mb.RhodeIsland]: Object(y.e)("stateSorts.rhodeIsland"),
				[i.Mb.SouthCarolina]: Object(y.e)("stateSorts.southCarolina"),
				[i.Mb.SouthDakota]: Object(y.e)("stateSorts.southDakota"),
				[i.Mb.Tennessee]: Object(y.e)("stateSorts.tennessee"),
				[i.Mb.Texas]: Object(y.e)("stateSorts.texas"),
				[i.Mb.Utah]: Object(y.e)("stateSorts.utah"),
				[i.Mb.Virginia]: Object(y.e)("stateSorts.virginia"),
				[i.Mb.Vermont]: Object(y.e)("stateSorts.vermont"),
				[i.Mb.Washington]: Object(y.e)("stateSorts.washington"),
				[i.Mb.Wisconsin]: Object(y.e)("stateSorts.wisconsin"),
				[i.Mb.WestVirginia]: Object(y.e)("stateSorts.westVirginia"),
				[i.Mb.Wyoming]: Object(y.e)("stateSorts.wyoming")
			};
			var v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/contexts/Tooltip.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/StateSort/index.m.less"),
				P = s.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = g.a.wrapped(O.a, "_Dropdown", P.a),
				k = Object(b.a)(N),
				I = e => {
					return e.indexOf("_") > 0 && T(e) === i.v.UnitedStates
				},
				L = e => {
					if (I(e)) {
						return e.split("_")[1]
					}
					return i.Mb.AllStates
				},
				T = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				M = e => {
					const t = T(e),
						s = L(e);
					return I(e) ? "".concat(t, "_").concat(s) : t
				},
				B = Object(v.t)(),
				R = Object(o.c)({
					dropdownIsOpen: Object(j.b)("StateSort--StateSortPicker"),
					language: S.T
				}),
				F = Object(a.b)(R, e => ({
					onOpenDropdown: () => e(Object(u.g)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(i.v.UnitedStates + "_" + s))
					}
				}));
			var D = g.a.wrapped(B(F(e => {
					const t = "".concat(e.baseUrl, "?").concat(x.g, "=").concat(i.v.UnitedStates);
					return n.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, n.a.createElement(h.c, {
						disabled: e.disabled
					}, n.a.createElement(h.b, {
						displayText: f[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), n.a.createElement(E.a.Consumer, null, s => n.a.createElement(k, _({
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.Mb).map(s => n.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === i.Mb.AllStates ? t : "".concat(t, "_").concat(e))(i.Mb[s]), M(i.Mb[s]))
					}, n.a.createElement(C.b, {
						displayText: f[i.Mb[s]](e.language),
						isSelected: e.sort === s
					}))))))
				})), "Component", P.a),
				A = s("./src/reddit/constants/countrySorts.ts"),
				W = s("./src/reddit/components/CountrySort/index.m.less"),
				H = s.n(W);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = Object(v.t)(),
				G = Object(o.c)({
					dropdownIsOpen: Object(j.b)("CountrySort--CountrySortPicker"),
					language: S.T
				});
			var z = U(Object(a.b)(G, e => ({
					onOpenDropdown: t => e(Object(u.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(s))
					}
				}))(e => {
					const t = T(e.sort),
						s = L(e.sort),
						r = "".concat(e.baseUrl, "?").concat(x.g, "=");
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(p.a)(H.a.countrySort, e.className),
						onClick: () => e.onOpenDropdown("CountrySort--CountrySortPicker")
					}, n.a.createElement(h.c, {
						disabled: e.disabled
					}, n.a.createElement(h.b, {
						displayText: (() => t in A.a ? A.a[t] : A.a[i.v.Everywhere])(),
						id: "CountrySort--CountrySortPicker",
						showDropdownTriangle: !0
					})), n.a.createElement(E.a.Consumer, null, s => n.a.createElement(k, V({
						isOpen: e.dropdownIsOpen,
						tooltipId: "CountrySort--CountrySortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.v).map(s => n.a.createElement("div", {
						key: s,
						onClick: () => e.onClickLink("".concat(r).concat(M(i.v[s])), i.v[s])
					}, n.a.createElement(C.b, {
						displayText: A.a[i.v[s]],
						isSelected: t === s
					})))))), t === i.v.UnitedStates && n.a.createElement(D, {
						baseUrl: e.baseUrl,
						disabled: e.disabled,
						sort: s
					}))
				})),
				K = s("./src/reddit/components/TimeSort/index.tsx"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/constants/page.ts"),
				Z = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				J = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Y = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				X = s.n(Y);
			const $ = Object(v.t)({
					isProfilePage: v.H,
					pageLayer: e => e
				}),
				ee = Object(o.c)({
					currentUser: S.i,
					language: S.T,
					isPopularListing: v.D,
					redditStyle: v.B
				}),
				te = Object(a.b)(ee, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (s) {
								const n = Object(c.c)({
									sort: t,
									timeSort: r
								});
								e(Object(l.G)(s, n))
							}
						}
					}
				});
			t.a = $(te(Object(q.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: r
				} = e, a = e.sort === i.N.TOP || e.sort === i.N.CONTROVERSIAL, o = s && e.countrySort && e.sort === i.N.HOT, c = e => {
					J.a.setState({
						isListingFocused: e
					})
				};
				return n.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => n.a.Children.toArray([r ? null : n.a.createElement(Z.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), r ? null : n.a.createElement("div", {
						className: X.a.separator
					}), n.a.createElement(h.d, {
						className: X.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && a && [n.a.createElement(K.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Qb
					})], o && n.a.createElement(z, {
						baseUrl: e.isPopularListing ? "/r/".concat(Q.g, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(r.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var d = e => n.a.createElement("svg", {
					className: Object(a.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), n.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var u = e => n.a.createElement("svg", {
					className: Object(a.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				p = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				h = s.n(p);
			var b = e => n.a.createElement("svg", {
					className: Object(a.a)(h.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("title", null, "Hot"), n.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				x = s.n(g);
			var y = e => n.a.createElement("svg", {
					className: Object(a.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				f = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				v = s.n(f);
			var E = e => n.a.createElement("svg", {
					className: Object(a.a)(v.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				O = s("./src/reddit/icons/svgs/Top/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/index.m.less"),
				j = s.n(C);
			const S = {
				[o.N.BEST]: d,
				[o.N.HOT]: b,
				[o.N.NEW]: y,
				[o.N.CONTROVERSIAL]: u,
				[o.N.TOP]: O.a,
				[o.N.RISING]: E
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const r = S[s];
				return r ? n.a.createElement(r, {
					className: Object(a.a)(t, j.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return L
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "c", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/listingSorts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/path/index.ts"),
				f = s("./src/reddit/helpers/trackers/navigation.ts"),
				v = s("./src/reddit/i18n/components.tsx"),
				E = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				S = s("./src/reddit/components/ListingSort/index.m.less"),
				w = s.n(S),
				P = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var N = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const k = "ListingSort--SortPicker",
				I = Object(i.a)(P.a.wrapped(g.a, "Dropdown", w.a)),
				L = P.a.wrapped(j.a, "ListingSortIcon", w.a),
				T = (P.a.wrapped(E.b, "DropdownTriangle", w.a), P.a.div("Title", w.a)),
				M = P.a.wrapped(e => n.a.createElement(x.b, _({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", w.a),
				B = e => {
					var {
						disabled: t
					} = e, s = N(e, ["disabled"]);
					return n.a.createElement("div", _({}, s, {
						className: Object(d.a)(w.a.SortWrapper, s.className, {
							[w.a.isDisabled]: t
						})
					}))
				},
				R = P.a.div("DropdownRowDisabled", w.a),
				F = Object(h.t)({
					isFrontpage: h.z,
					isProfilePage: h.H,
					pageLayer: e => e
				}),
				D = Object(o.c)({
					user: C.i,
					dropdownIsOpen: (e, t) => Object(O.b)(t.dropdownId || k)(e),
					language: C.T
				}),
				A = Object(a.b)(D, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.g)({
							tooltipId: s || k
						}))
					}
				});
			t.d = P.a.wrapped(F(A(Object(u.b)(e => n.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && n.a.createElement(T, null, n.a.createElement(v.c, null, "Sort")), n.a.createElement(B, {
				disabled: e.disabled
			}, e.children || n.a.createElement(M, {
				className: e.buttonClassName,
				displayText: p.a[e.sort],
				id: e.dropdownId || k,
				showDropdownTriangle: !0
			}, n.a.createElement(L, {
				sort: e.sort
			}))), n.a.createElement(b.a.Consumer, null, t => n.a.createElement(I, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || k
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? n.a.createElement(R, null, n.a.createElement(v.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => n.a.createElement(x.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: p.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(f.d)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(y.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, n.a.createElement(L, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", w.a)
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					language: m,
					post: u,
					subredditOrProfile: b
				} = e;
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.container, t)
				}, n.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, n.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: b
				}), n.a.createElement("span", null, b.displayText)), ((e, t, s) => {
					if (s) return n.a.createElement("div", {
						role: "img",
						"aria-label": Object(a.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, n.a.createElement(h, null))
				})(m, u.author, s), b && b.isQuarantined && n.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qxO-jkRl1-0EUFMSW12Wx",
				thumbnail: "_10app6y4qukOnb1vd3WjaL",
				content: "Dmp1nT-wBa1YnTs1m5Qh-",
				titleContainer: "_3zDhT2pkq9c_2I1Wc0TC7W",
				title: "_1baTc1hWul6JGRus85W_n9",
				subreddit: "_1QAmOEgKAW-xepM1iAQ1vt",
				subredditIcon: "_2kjKnQFVUV8rujMRQ0FJcM",
				subredditName: "_1gWkHloK0RuxI3PqEBqAlk",
				comments: "_3Se1TreUiuh_QYZKmggj-E",
				share: "_1auh4Ct-kA4za4GqRMTChm",
				ellipsis: "_3KZqW8v85dlRDNmHXcrU5X",
				emptyScore: "_1vYoQQMevPpZ7Szpl9imM",
				emptyVotes: "zNcTz0MkZAJvitPlo_eI7"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, n.a.createElement(o.a, {
					className: Object(a.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(a.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(a.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/Media/index.tsx"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				E = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/CommentsLink/index.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				B = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = s("./src/reddit/components/ShareMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/constants/postLayout.ts"),
				A = s("./src/reddit/helpers/trackers/post.ts"),
				W = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/icons/fonts/Share/index.tsx"),
				V = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				G = s.n(U),
				z = s("./src/lib/lessComponent.tsx");
			const K = "-MiniCardModMenu",
				q = "-MiniCardOverflowMenu",
				Q = "-MiniCardShareMenu",
				Z = z.a.wrapped(I.a, "HorizontalVotes", G.a),
				J = z.a.button("ShareButton", G.a),
				Y = Object(f.t)({
					currentProfileName: f.h,
					isCommentPermalink: f.v,
					isCommentsPage: f.w,
					isProfilePostListing: f.I,
					pageLayer: e => e
				}),
				X = Object(o.c)({
					layout: f.M,
					subreddit: f.q
				});
			var $ = Y(Object(a.b)(X, {})(Object(F.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: r,
						handleVote: a,
						hasModFlairPerms: o,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						language: h,
						layout: b,
						modModeEnabled: g,
						onCommentsClick: x,
						post: y,
						sendEvent: f,
						showEditFlair: v,
						showEditPost: E,
						subreddit: O
					} = e, C = e => f(Object(A.f)(y.id, e)), j = y.postId, S = Object(L.d)(K, y.id, m, p), w = !!r && Object(V.f)(r) === y.author;
					return n.a.createElement("div", {
						className: Object(i.a)(G.a.flatlistContainer, s)
					}, n.a.createElement(Z, {
						compact: !1,
						model: y,
						onVoteClick: a,
						scoreClassName: G.a.score
					}), n.a.createElement(k.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: y.id,
						modModeEnabled: g,
						numComments: y.numComments,
						type: D.g.Compact,
						onClick: x
					}), n.a.createElement(R.a, {
						className: G.a.shareMenu,
						dropdownId: Object(L.d)(Q, y.id, m, p),
						permalink: y.permalink,
						post: y,
						sendEventWithName: C,
						subreddit: O
					}, n.a.createElement(J, null, n.a.createElement(H.a, {
						className: G.a.shareIcon
					}), n.a.createElement("span", {
						className: G.a.shareText
					}, n.a.createElement(W.c, null, "share")))), c && n.a.createElement(T.a, {
						dropdownId: S,
						onClick: () => C("post_mod_action_menu")
					}, n.a.createElement(L.b, {
						className: G.a.modActionsIcon
					}), n.a.createElement(M.a, {
						canEditFlair: o && !!v,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: w,
						language: h,
						modModeEnabled: g,
						post: y,
						tooltipId: S
					})), n.a.createElement(B.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: y.permalink,
						postId: j,
						dropdownId: Object(L.d)(q, y.id, m, p),
						isFixed: p,
						sendEvent: f,
						showEditPost: !!E,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(B.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				re = s.n(se),
				ne = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ae = s.n(ne);
			s.d(t, "a", (function() {
				return ie
			}));
			const oe = Object(f.t)(),
				ie = Object(a.b)(() => Object(o.c)({
					activeModalId: S.a,
					autoplayPref: N.b,
					crosspostRoot: _.c,
					crosspostSubredditOrProfile: _.d,
					currentUser: N.i,
					flairStyleTemplate: f.Q,
					hideNSFWPref: N.z,
					isActive: _.g,
					language: N.T,
					moderatorPermissions: w.i,
					modModeEnabled: f.O,
					post: _.I,
					showEditFlair: P.a,
					subredditOrProfile: _.U,
					userIsOp: N.kb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: r,
								selectedTemplateId: n
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: r,
								selectedTemplateId: n
							}))
						},
						handleVote: t => {
							const r = t === j.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(r)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(u.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: r,
							selectedTemplateId: n
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: r,
							selectedTemplateId: n
						})
					}
				}));
			t.b = oe(ie(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: r,
					crosspostRoot: a,
					crosspostSubredditOrProfile: o,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: u,
					hideNSFWPref: f,
					language: j,
					moderatorPermissions: S,
					modModeEnabled: w,
					onClickPost: P,
					post: _,
					scrollerItemRef: N,
					shouldPause: k,
					showMetaLine: I = !0,
					showEditFlair: L,
					subredditOrProfile: T,
					userIsOp: M
				} = e, {
					media: B
				} = a || _, R = B && B.type, F = Object(x.b)(_.id), D = R === C.n.RTJSON, A = M && D, W = Object(E.a)(S), H = Object(v.a)(S), V = B && R !== C.n.RTJSON && R !== C.n.TEXT, U = !B && !!_.source && Object(d.a)(_.source.url), G = B && n.a.createElement(h.a, {
					autoplayPref: t,
					availableWidth: s,
					className: ae.a.media,
					imageBoxClassName: ae.a.mediaImageBox,
					imageBoxContentImageClassName: ae.a.mediaImageBoxContentImage,
					forceAspectRatio: C.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: a || _,
					scrollerItemRef: N,
					shouldPause: k,
					shouldLoad: u,
					showCentered: !0,
					showFull: !1
				});
				return n.a.createElement(g.a, {
					className: Object(i.a)(ae.a.postContainer, re.a.largeAndMediumActiveStyles, re.a.largeAndMediumPostStyles, Object(O.a)(e), r),
					style: Object.assign({}, Object(O.b)(e.flairStyleTemplate), Object(O.d)(e)),
					post: _,
					onClick: P,
					eventFactory: l
				}, n.a.createElement(b.a, {
					className: ae.a.backgroundWrapper,
					flairStyleTemplate: m
				}, V && G, n.a.createElement("div", {
					className: ae.a.innerContainer
				}, U && n.a.createElement(te.a, {
					post: _,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), n.a.createElement(y.c, {
					className: ae.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: _,
					size: y.b.Large,
					titleColor: m && m.postTitleColor
				}), I && T && n.a.createElement(ee.a, {
					className: ae.a.metaLine,
					crosspostSubredditOrProfile: o,
					hideNSFWPref: f,
					language: j,
					post: _,
					subredditOrProfile: T
				}), !V && n.a.createElement("div", {
					className: ae.a.mediaWrapper
				}, G), n.a.createElement("div", {
					className: ae.a.flexSpacer
				}), n.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: H,
					hasModPostPerms: W,
					language: j,
					modModeEnabled: w,
					post: _,
					showEditFlair: L,
					showEditPost: A
				}))), e.activeModalId === F && n.a.createElement(x.a, {
					flairs: _.flair,
					subredditId: _.belongsTo.id,
					modalId: F,
					onFlairChanged: e.onFlairChanged
				}), n.a.createElement(p.d, {
					postId: _.id
				}))
			})))
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(a.a)(e => {
				const t = !!e.cancelActionText,
					s = !(!e.actionText || !e.onConfirm);
				return n.a.createElement(o.c, {
					style: e.style
				}, n.a.createElement(o.g, null, n.a.createElement(c.a, null, n.a.createElement(o.n, null, e.headerText), !e.hideCancel && n.a.createElement(i.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, n.a.createElement(o.b, null)))), n.a.createElement(o.j, null, e.modalBody()), (t || s) && n.a.createElement(o.e, null, t && n.a.createElement(o.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), s && n.a.createElement(o.r, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				headerButton: "_3aSsYcE4XPX93_RpWvd-4s"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, s) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/i18n/components.tsx"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				h = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const g = b.a.wrapped(m.b, "SubredditIcon", h.a),
				x = b.a.span("Label", h.a),
				y = Object(l.c)({
					subredditOrProfile: u.M
				});
			var f = Object(d.b)(y)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, a.a.createElement(a.a.Fragment, null, a.a.createElement(g, {
					subredditOrProfile: s
				}), a.a.createElement(x, null, s.displayText)))
			});
			var v = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: r
					} = e;
					const n = r.map(e => a.a.createElement(f, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return a.a.createElement("div", {
						className: s
					}, n)
				},
				E = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				O = s.n(E);
			s.d(t, "a", (function() {
				return S
			}));
			const C = b.a.div("CommunityCount", O.a),
				j = b.a.wrapped(v, "SubredditsOrProfiles", O.a),
				S = b.a.wrapped(o.a, "SidebarSubreddit", O.a),
				w = b.a.wrapped(o.a, "ModalSubreddit", O.a);
			var P;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(P || (P = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					language: n,
					onSeeMoreDetails: o,
					subredditCategory: d
				} = e, l = t ? S : w, m = s.length, u = t && s.length > 4;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(C, null, m > 0 ? Object(i.c)(n, "multireddit.info.communityCount", m, {
					object: Object(i.a)(n, d ? "multireddit.info.category" : "multireddit.info.multi")
				}) : Object(i.a)(n, "multireddit.empty")), m > 0 && a.a.createElement(j, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => a.a.createElement(l, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), m > 0 && u && a.a.createElement(c.n, {
					onClick: o
				}, a.a.createElement(r.c, null, "See more")))
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				SidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				sidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				ModalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				modalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				SidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				sidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				SidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				sidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				SidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				sidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				Attributon: "htg8GP8UyboUgLmuSYKen",
				attributon: "htg8GP8UyboUgLmuSYKen",
				FadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				fadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				shouldFade: "_2ONS322IFK1Sw2jAj3dZqW",
				Component: "_20vfWUdM54Wu07ZOfKYP8o",
				component: "_20vfWUdM54Wu07ZOfKYP8o"
			}
		},
		"./src/reddit/components/MultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				noSubredditsText: "EOCYiZiqAa39tAXUCAqmZ"
			}
		},
		"./src/reddit/components/MultiredditManageWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetContainer: "Md-M9lk_Fnyiovos-cWPZ",
				bubbleSelector: "_32QbfsW2hwOWwyV4hZJqEG",
				error: "s0AzWPiC_eJAnSdDAZPym",
				searchIcon: "_1wfVsnvMUNUkrQpFx5I6O9",
				bubble: "_3NfN8QVLJTyC1hzOZDqDa_",
				selected: "_3Mgq2YpcfG6lx6UTEtbSUX",
				bubbleIcon: "_3kWMG0X0DIgmFR4pMIpuWf",
				text: "_1boSpw2RVthfLh9y4Ln0H2",
				isEmpty: "lsui73aPZobEl_lU01DBf",
				closeIcon: "_1FGYwDvXjw09vL1EUCOelw",
				input: "_2LQWhKcfsIjm5PCEiFbnfv",
				emptyText: "Uqpbu2QyTc_VF5yeJOo0U",
				addButton: "_7aZcaB7RRfblay2Mpw4PJ",
				dropdown: "rUguk2cMQS0qUTWqZTUfE",
				expandButton: "_31vaGAnztsBt2uSP6kVo6D",
				expandButtonContainer: "_2b-PrKZyTcbtQSMmFYdZ3Z"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				detailsContainer: "_2o2cN1Q1R544f7UCxJHRTH",
				modalContainer: "_2qY6j7wtHkEaoEG4g5F53z",
				closeBtn: "_3NmSyduxNX74yaC9kmkYgh",
				modalMain: "_1hG7UoCi1oRW1UnsvoewhT",
				placeholder: "_1wCkMb-wQyvSVuqZWNjIEZ"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/times.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less"),
				y = s.n(x);
			var f = Object(i.b)(null, e => ({
					subscribe: t => e(Object(p.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: s
					} = e, r = t.filter(e => !e.isSubscribed);
					return r.length ? o.a.createElement(h.b, {
						className: y.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(b.b, {
						displayText: Object(g.c)("Join all communities"),
						onClick: () => s(r)
					})) : null
				}),
				v = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				C = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				j = s("./src/reddit/i18n/components.tsx"),
				S = s("./src/reddit/selectors/multireddit.ts"),
				w = s("./src/reddit/components/MultiredditInfo/index.m.less"),
				P = s.n(w);
			const _ = Object(c.c)({
					communities: (e, t) => Object(S.b)(e, t.multireddit)
				}),
				N = Object(i.b)(_),
				k = e => {
					let {
						item: t
					} = e;
					return o.a.createElement(O.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: t.sendEvent,
						type: t.type
					})
				};
			var I = Object(E.b)(N(e => {
					const {
						communities: t,
						titleText: s
					} = e;
					return t.length ? o.a.createElement(v.a, {
						items: t,
						minimizedLength: 5,
						title: s,
						headerButton: o.a.createElement(f, {
							communities: t
						}),
						renderItem: k
					}) : o.a.createElement(C.a, {
						title: s
					}, o.a.createElement("div", {
						className: P.a.noSubredditsText
					}, o.a.createElement(j.c, null, "This custom feed does not yet contain any communities.")))
				})),
				L = s("./src/higherOrderComponents/sizeMe.tsx"),
				T = s("./src/lib/timeAgo/index.ts"),
				M = s("./src/reddit/components/Flair/index.tsx"),
				B = s("./src/reddit/components/RawHTMLDisplay/Listing.tsx"),
				R = s("./src/reddit/constants/posts.ts"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				D = s("./src/reddit/models/Multireddit/index.ts"),
				A = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				W = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				H = s.n(W),
				V = s("./src/lib/lessComponent.tsx");
			const U = V.a.div("SidebarTopSpacer", H.a),
				G = V.a.div("ModalTopSpacer", H.a),
				z = V.a.div("SidebarTitleContainer", H.a),
				K = V.a.div("SidebarTitle", H.a),
				q = V.a.wrapped(M.a, "SidebarFlair", H.a),
				Q = V.a.div("Attributon", H.a),
				Z = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement(B.a, {
						className: s,
						html: t
					})
				},
				J = Object(L.a)(e => {
					let {
						children: t,
						language: s,
						onSeeMoreDetails: r,
						size: n
					} = e;
					const a = !n || "number" != typeof n.height || n.height > 152;
					return o.a.createElement("div", null, o.a.createElement(Z, {
						className: Object(m.a)(H.a.FadingDescription, {
							[H.a.shouldFade]: a
						})
					}, t), a && o.a.createElement(F.n, {
						onClick: r
					}, o.a.createElement(j.c, null, "Read more")))
				});
			var Y;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(Y || (Y = {}));
			var X = V.a.wrapped(e => {
					const {
						mode: t,
						multireddit: s,
						language: r,
						onSeeMoreDetails: n,
						subredditCategory: a
					} = e, i = t === Y.Sidebar, [c, l] = i ? [U, Q] : [G, Q], m = Object(D.f)(s) ? () => o.a.createElement(c, null, i && o.a.createElement(z, null, o.a.createElement(K, null, s.displayText), s.visibility !== D.e.Public && o.a.createElement(q, {
						text: Object(d.a)(r, "multireddit.visibility.".concat(s.visibility))
					})), o.a.createElement(l, null, Object(d.a)(r, "multireddit.info.title", {
						timeAgo: Object(T.d)(r, s.created),
						username: Object(D.i)(s.url)
					}))) : () => null, u = Object(D.f)(s) && s.description ? () => o.a.createElement(c, null, i ? o.a.createElement(J, {
						language: r,
						onSeeMoreDetails: n
					}, s.description) : o.a.createElement(B.a, {
						html: s.description
					})) : () => null, p = [...s.subredditIds && s.subredditIds.map(e => ({
						id: e,
						type: R.a.SUBREDDIT
					})) || [], ...s.profileIds && s.profileIds.map(e => ({
						id: e,
						type: R.a.PROFILE
					})) || []];
					return o.a.createElement("div", {
						className: e.className
					}, m(), u(), o.a.createElement(A.b, {
						isSidebar: i,
						language: r,
						onSeeMoreDetails: n,
						subredditCategory: a,
						subredditsOrProfilesIds: p
					}))
				}, "Component", H.a),
				$ = s("./node_modules/lodash/debounce.js"),
				ee = s.n($),
				te = s("./node_modules/lodash/noop.js"),
				se = s.n(te),
				re = s("./src/lib/constants/index.ts"),
				ne = s("./src/reddit/actions/multireddit/index.ts"),
				ae = s("./src/reddit/actions/subredditAutocomplete.ts"),
				oe = s("./src/reddit/actions/toaster.ts"),
				ie = s("./src/reddit/constants/keycodes.ts"),
				ce = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				de = s("./src/reddit/helpers/name/index.ts"),
				le = s("./src/reddit/icons/svgs/Close/index.tsx"),
				me = s("./src/reddit/icons/svgs/Search/index.tsx"),
				ue = s("./src/reddit/models/Toast/index.ts"),
				pe = s("./src/reddit/models/Widgets/index.ts"),
				he = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				be = s("./src/reddit/selectors/subredditAutocomplete.ts"),
				ge = s("./src/reddit/selectors/user.ts");
			const xe = Object(c.c)({
				isAutocompletePending: be.c,
				items: be.e,
				language: ge.T
			});
			class ye extends o.a.Component {
				constructor() {
					super(...arguments), this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntrySelect = e => {
						this.props.onEntrySelect(this.props.items[e])
					}, this.onEntryFocus = e => {
						this.props.onEntryFocus(this.props.items[e], e)
					}
				}
				render() {
					const {
						className: e,
						focusedIndex: t,
						items: s,
						isAutocompletePending: r,
						language: n
					} = this.props;
					return o.a.createElement(he.a, {
						className: e,
						focusedIndex: t,
						items: s,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !r && 0 === s.length,
						language: n,
						isValid: !0
					})
				}
			}
			var fe = Object(i.b)(xe)(ye),
				ve = s("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				Ee = s.n(ve);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ce = 12,
				je = 5,
				Se = 500,
				we = Object(c.c)({
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					communityInformations: (e, t) => {
						let {
							multireddit: s
						} = t;
						return Object(S.b)(e, s)
					},
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				Pe = Object(i.b)(we, (e, t) => {
					let {
						multireddit: s
					} = t;
					return {
						addSubredditRequested: (t, r) => {
							const n = r ? Object(pe.g)(r) : void 0;
							e(Object(ne.a)({
								communityInfo: n,
								identifier: t,
								multiredditNames: [s.name]
							}))
						},
						errorToast: t => e(Object(oe.e)({
							text: t,
							kind: ue.b.Error
						})),
						removeSubredditRequested: t => {
							let {
								id: r,
								name: n,
								type: a
							} = t;
							return r && e(Object(ne.i)({
								id: r,
								multiredditName: s.name,
								name: n,
								type: a
							}))
						},
						subredditAutocompleteRequested: t => e(Object(ae.d)(t, s.isNSFW))
					}
				}),
				_e = {
					choice: null,
					focusedIndex: -1,
					focusedItem: null,
					isAddError: null,
					isChoiceSelected: !1,
					isDropdownOpen: !1,
					isListExpanded: !1,
					memoizedShortList: [],
					query: ""
				};
			class Ne extends o.a.Component {
				constructor(e) {
					super(e), this.onRemoveClickedFnCache = {}, this.closeDropdown = () => {
						this.setState({
							isDropdownOpen: !1,
							focusedIndex: -1
						})
					}, this.onChange = e => {
						this.state.choice || (this.setState({
							isAddError: null,
							isDropdownOpen: e.target.value.trim().length > 0,
							query: e.target.value.trim()
						}), this.onQueryUpdated())
					}, this.onBlur = () => {
						this.closeDropdown()
					}, this.onFocus = () => {
						this.setState(e => e.query && !e.isDropdownOpen ? {
							isDropdownOpen: !0
						} : null)
					}, this.onKeydown = e => {
						this.state.choice ? this.state.choice && (e.which === ie.a.ArrowLeft ? this.onChoiceSelected() : this.state.isChoiceSelected ? e.which === ie.a.Backspace ? this.setState({
							choice: null
						}) : e.which === ie.a.ArrowRight && this.onChoiceDeselected() : e.which !== ie.a.Backspace || this.state.query.length || this.onChoiceSelected(), e.which === ie.a.Enter && this.onSubmit()) : this.state.isDropdownOpen ? e.which === ie.a.ArrowDown ? (this.setState({
							focusedIndex: this.state.focusedIndex + 1
						}), e.stopPropagation()) : e.which === ie.a.ArrowUp ? (this.setState({
							focusedIndex: this.state.focusedIndex - 1
						}), e.stopPropagation()) : e.which === ie.a.Escape ? (this.closeDropdown(), e.stopPropagation()) : e.which === ie.a.Enter && (this.state.focusedItem ? this.onDropdownItemSelect(this.state.focusedItem) : -1 === this.state.focusedIndex && this.onSubmit()) : e.which === ie.a.Enter && this.onSubmit()
					}, this.onQueryUpdated = () => {
						this.props.subredditAutocompleteRequested(this.state.query)
					}, this.onDropdownItemSelect = e => {
						this.setState(Object.assign({}, _e, {
							choice: e,
							isListExpanded: this.state.isListExpanded,
							memoizedShortList: this.state.memoizedShortList
						}))
					}, this.onDropdownItemFocus = (e, t) => {
						this.setState({
							focusedItem: e,
							focusedIndex: t
						})
					}, this.onChoiceSelected = () => this.setState({
						isChoiceSelected: !0
					}), this.onChoiceDeselected = () => this.setState({
						isChoiceSelected: !1
					}), this.onChoiceRemoved = () => this.setState({
						choice: null
					}), this.onSubmit = () => {
						if (!this.props.addSubredditPending)
							if (this.state.choice) this.props.addSubredditRequested({
								name: this.state.choice.name,
								type: "subreddit"
							}, this.state.choice), this.setState({
								isDropdownOpen: !1
							});
							else {
								const {
									query: e
								} = this.state;
								if (e.length) {
									const t = Object(de.g)(e),
										s = t.startsWith(re.Rb) ? "profile" : "subreddit",
										r = "profile" === s ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: r,
										type: s
									})
								}
							}
					}, this.getOnRemoveClickedFn = e => {
						const t = "".concat(e.id || "", ".").concat(e.name);
						return this.onRemoveClickedFnCache[t] ? this.onRemoveClickedFnCache[t] : (this.onRemoveClickedFnCache[t] = () => {
							this.props.removeSubredditRequested(e)
						}, this.onRemoveClickedFnCache[t])
					}, this.onToggleExpand = () => this.setState({
						isListExpanded: !this.state.isListExpanded
					}), this.state = Object.assign({}, _e, {
						memoizedShortList: e.communityInformations.slice(0, je)
					}), this.onQueryUpdated = ee()(this.onQueryUpdated, Se)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(_e)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, je)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: s,
							removePending: r
						},
						state: {
							choice: n,
							focusedIndex: a,
							isAddError: i,
							isChoiceSelected: c,
							isDropdownOpen: d,
							isListExpanded: l,
							memoizedShortList: u,
							query: p
						}
					} = this;
					return o.a.createElement(C.a, {
						className: Ee.a.widgetContainer,
						headerButton: o.a.createElement(f, {
							communities: t
						}),
						title: Object(g.c)("manage communities")
					}, o.a.createElement("div", {
						className: Object(m.a)(Ee.a.bubbleSelector, {
							[Ee.a.error]: !!i
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, n ? o.a.createElement("div", {
						className: Object(m.a)(Ee.a.bubble, {
							[Ee.a.selected]: c
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, o.a.createElement("img", {
						src: n.iconUrl,
						className: Ee.a.bubbleIcon
					}), o.a.createElement("span", {
						className: Ee.a.text
					}, "r/".concat(n.name)), o.a.createElement(le.a, {
						className: Ee.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : o.a.createElement(me.a, {
						className: Ee.a.searchIcon
					}), o.a.createElement("input", {
						className: Object(m.a)(Ee.a.input, {
							[Ee.a.isEmpty]: !!n
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: p
					}), !i && (n || p.length > 0) && (e ? o.a.createElement(ce.a, {
						sizePx: Ce
					}) : o.a.createElement(F.n, {
						className: Ee.a.addButton,
						onClick: this.onSubmit
					}, Object(g.c)("Add"))), d && o.a.createElement(fe, {
						className: Ee.a.dropdown,
						focusedIndex: a,
						multireddit: s,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: p
					})), 0 === t.length ? o.a.createElement("p", {
						className: Ee.a.emptyText
					}, Object(g.c)("Try adding some communities to your custom feed!")) : (l ? t : u).map(e => o.a.createElement(O.a, Oe({}, e, {
						buttonDisabled: !!r,
						key: e.id,
						isLoading: r === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: se.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: Object(g.c)("Remove"),
						useTertiaryButton: !0
					}))), t.length > je && o.a.createElement("div", {
						className: Ee.a.expandButtonContainer
					}, o.a.createElement(F.n, {
						className: Ee.a.expandButton,
						onClick: this.onToggleExpand
					}, l ? Object(g.c)("show less") : Object(g.c)("show more"))))
				}
			}
			var ke = Pe(Ne),
				Ie = s("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				Le = s.n(Ie);
			const Te = 5,
				Me = Object(c.c)({
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditFetched: e => e.multireddits.api.addSubreddit.fetched,
					recommendations: S.k,
					recommendationsError: e => e.multireddits.api.recommendations.error,
					recommendationsPending: e => e.multireddits.api.recommendations.pending
				});
			class Be extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						memoizedRecommendations: this.props.recommendations,
						recommendationsToExclude: []
					}, this.onRecommendationsRefreshClicked = () => {
						this.setState(e => ({
							recommendationsToExclude: [...e.recommendationsToExclude, ...e.memoizedRecommendations.slice(0, Te).map(e => e.name)]
						}), () => this.props.recommendationsRefreshed(this.state.recommendationsToExclude))
					}
				}
				componentDidUpdate(e) {
					this.props.recommendations !== e.recommendations && this.setState({
						memoizedRecommendations: this.props.recommendations
					}), !this.props.addSubredditPending && e.addSubredditPending && this.setState(t => ({
						recommendationsToExclude: [...t.recommendationsToExclude, ...e.addSubredditPending ? [e.addSubredditPending] : []],
						memoizedRecommendations: t.memoizedRecommendations.filter(t => t.name !== e.addSubredditPending)
					}), () => {
						this.state.memoizedRecommendations.length < Te && this.props.recommendationsRefreshed(this.state.recommendationsToExclude)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							addSubredditRequested: t,
							recommendations: s,
							recommendationsError: r,
							recommendationsPending: n
						},
						state: {
							memoizedRecommendations: a
						}
					} = this;
					return o.a.createElement(O.b, {
						bottomButtonText: Object(g.c)("refresh"),
						className: Le.a.container,
						communities: a.slice(0, Te),
						errorMsg: Object(g.c)("Couldn't find any recommendations. Try adding more communities first!"),
						isError: !s.length || !!r,
						isLoading: n,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: se.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: Object(g.c)("add"),
						title: Object(g.c)("People also added"),
						useTertiaryButton: !0
					})
				}
			}
			var Re = Object(i.b)(Me, (e, t) => ({
					addSubredditRequested: s => {
						Object(D.f)(t.multireddit) && e(Object(ne.a)({
							identifier: {
								name: s.name,
								type: s.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: s
						}))
					},
					recommendationsRefreshed: s => {
						Object(D.f)(t.multireddit) && e(Object(ne.h)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: s
						}))
					}
				}))(Be),
				Fe = s("./src/reddit/components/SidebarContainer/index.tsx"),
				De = s("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Ae = s.n(De),
				We = V.a.div("Component", Ae.a),
				He = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ve = s("./src/reddit/constants/zIndex.ts"),
				Ue = s("./src/reddit/controls/TextButton/index.tsx"),
				Ge = s("./src/reddit/helpers/trackers/idCard.ts"),
				ze = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Ke = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				qe = s("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Qe = s.n(qe);

			function Ze() {
				return (Ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return Ye
			}));
			const Je = Object(l.a)(e => o.a.createElement(u.c, {
					className: Qe.a.modalContainer
				}, !e.shouldHideHeader && o.a.createElement(u.g, null, o.a.createElement(ze.a, null, o.a.createElement(u.n, null, e.multireddit.displayText), o.a.createElement(Ue.a, {
					onClick: e.onCloseModal
				}, o.a.createElement(u.b, null)))), o.a.createElement(u.j, null, o.a.createElement(X, {
					language: e.language,
					mode: Y.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && o.a.createElement(Ue.a, {
					className: Qe.a.closeBtn,
					onClick: e.onCloseModal
				}, o.a.createElement(u.b, null)))),
				Ye = e => o.a.createElement(Je, Ze({}, e, {
					overlayCustomStyles: {
						zIndex: Ve.b
					},
					withOverlay: !0
				})),
				Xe = () => o.a.createElement(C.a, null, n()(5, e => o.a.createElement("div", {
					className: Object(m.a)(Qe.a.placeholder, Object(Ke.a)({
						isLoading: !0
					})),
					key: e
				}))),
				$e = e => Object(D.f)(e.multireddit) ? Object(D.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? o.a.createElement(ke, {
					multireddit: e.multireddit
				}) : o.a.createElement(I, {
					multireddit: e.multireddit,
					titleText: Object(g.c)("Communities in this custom feed")
				}) : o.a.createElement(Xe, null) : o.a.createElement("div", {
					className: Qe.a.detailsContainer
				}, o.a.createElement(We, null, e.subredditCategory ? e.subredditCategory.name : Object(d.a)(e.language, "multireddit.sidebar.details")), o.a.createElement(X, {
					language: e.language,
					mode: Y.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				et = Object(c.c)({
					isCurrentUserMultiredditOwner: (e, t) => {
						let {
							multireddit: s
						} = t;
						return Object(D.f)(s) && Object(S.c)(e, s.url)
					},
					language: (e, t) => {
						let {
							language: s
						} = t;
						return s || Object(ge.T)(e)
					}
				}),
				tt = Object(i.b)(et, (e, t) => {
					let {
						subredditCategory: s
					} = t;
					return {
						trackSeeMoreClicked: () => e((e, t) => Ge.a(t())),
						trackSubredditClicked: t => {
							if (!s) return;
							const r = Object(pe.i)(t);
							e((e, t) => Ge.b(t(), r, s.name))
						}
					}
				});
			class st extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showModal: !1
					}, this.closeModal = () => this.setState({
						showModal: !1
					}), this.openModal = () => this.setState({
						showModal: !0
					}, this.props.subredditCategory ? this.props.trackSeeMoreClicked : void 0)
				}
				render() {
					const {
						className: e,
						isCurrentUserMultiredditOwner: t,
						language: s,
						multireddit: r,
						multiUsername: n,
						subredditCategory: a
					} = this.props, i = t && r.subredditIds && r.subredditIds.length > 0;
					return o.a.createElement(Fe.a, {
						className: e
					}, o.a.createElement($e, {
						isCurrentUserMultiredditOwner: t,
						language: s,
						multireddit: r,
						subredditCategory: a,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? o.a.createElement(Ye, {
						language: s,
						multireddit: r,
						subredditCategory: a,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!a
					}) : null, i && o.a.createElement(Re, {
						multireddit: r,
						multiUsername: n
					}), o.a.createElement(He.a, null))
				}
			}
			t.b = tt(st)
		},
		"./src/reddit/components/MultiredditSuggestionsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3jG8aJCgqOrmMUbRMiakpX"
			}
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Pill/index.m.less": function(e, t, s) {
			e.exports = {
				pill: "C5WTyRErVZSYP9OMmYtVb",
				pillHidden: "_2KYStU8hK1Y9Pz3XXd9zFo",
				primaryButton: "_1NwneinmPwP34LMpJkmKhk",
				closeButton: "_2t7CUoLNlBt20iCMaqgpTi",
				closeIcon: "R9MWxs6smL_jBLt-j9hjB"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			t.a = Object(o.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: o,
					post: c,
					redditStyle: u,
					theme: p
				} = e, h = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(r, e),
					onClick: o
				}, h), t)
			})
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/PostList/Placeholder.tsx"),
				a = s("./src/reddit/components/PostList/LoadMore.m.less"),
				o = s.n(a);
			t.a = r.a.wrapped(n.a, "Component", o.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/constant.js"),
				n = s.n(r),
				a = s("./node_modules/lodash/times.js"),
				o = s.n(a),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				u = s("./src/lib/intersectionObserver/index.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				x = s("./src/reddit/components/PostLeftRail/index.tsx"),
				y = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				O = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				j = s.n(C),
				S = s("./src/reddit/components/LargePost/placeholder.m.less"),
				w = s.n(S);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const N = Object(v.t)(),
				k = Object(l.c)({
					isFakeSubreddit: v.y
				}),
				I = Object(d.b)(k),
				L = e => {
					const t = {
						interactive: !1,
						voteState: O.a.notVoted
					};
					return c.a.createElement("div", {
						className: w.a.emptyVerticalVotes
					}, c.a.createElement(f.d, P({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: w.a.emptyScore,
						key: "s"
					}), c.a.createElement(f.c, P({
						key: "d"
					}, t)))
				},
				T = e => {
					var {
						isLoading: t
					} = e, s = _(e, ["isLoading"]);
					return c.a.createElement(y.b, P({
						className: Object(E.a)({
							isLoading: t
						})
					}, s))
				};
			var M = N(I(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: r
				} = e, n = _(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(g.a)(j.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(x.b, {
					key: "a"
				}, c.a.createElement(L, n)), c.a.createElement("div", {
					className: w.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: w.a.topLine,
					key: "ba"
				}, n.isFakeSubreddit && c.a.createElement(T, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(g.a)(w.a.topMetaOne, Object(E.b)(n))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(w.a.topMetaTwo, Object(E.b)(n))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(w.a.title, Object(E.b)(n))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(g.a)(w.a.media, Object(E.a)(n))
				}), c.a.createElement("div", {
					className: w.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: w.a.flatlist
				}, c.a.createElement("div", {
					className: Object(g.a)(w.a.flatlistItemOne, Object(E.b)(n))
				}), c.a.createElement("div", {
					className: Object(g.a)(w.a.flatListItemTwo, Object(E.b)(n))
				}))))
			}));
			const B = {
				[p.g.Large]: [M, 2],
				[p.g.Classic]: [h.b, 10],
				[p.g.Compact]: [b.a, 30]
			};

			function R(e) {
				return B[e]
			}
			const F = .1,
				D = Object(l.c)({
					loadingPostComponentForLayout: () => R
				}),
				A = Object(d.b)(D);
			class W extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && u.b(this.wrapperRef), e && u.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= F;
						m.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && u.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: r,
						loadingPostComponentForLayout: a
					} = this.props, {
						visible: i
					} = this.state, [d, l] = a(r), m = t || l, u = n()(c.a.createElement(d, {
						isLoading: s && i
					})), p = o()(m, u);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(p))
				}
			}
			t.a = A(W)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/connectors/connectToLanguage.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(o.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: n
				} = e;
				let o = r.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (o = Object(c.a)({
					apiError: n,
					language: t,
					isLoggedOut: !1
				})), a.a.createElement("div", {
					className: l.a.somethingWrong
				}, a.a.createElement("div", {
					className: l.a.somethingWrongText
				}, o), s && a.a.createElement(i.f, {
					onClick: s
				}, r.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			})
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return K
			})), s.d(t, "a", (function() {
				return Z
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				a = s.n(n),
				o = s("./node_modules/lodash/last.js"),
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				v = s("./src/reddit/components/Scroller/Simple.tsx"),
				E = s("./src/reddit/components/Translated/index.tsx"),
				O = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/getClickInfo.ts"),
				P = s("./src/reddit/helpers/pixels.ts"),
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/helpers/brandSafety/index.ts"),
				I = s("./src/lib/LRUCache/index.ts"),
				L = s("./src/telemetry/index.ts"),
				T = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(M),
				R = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const F = 500,
				D = new I.a(F),
				A = new I.a(F),
				W = new I.a(F),
				H = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				V = b.a.div("SeeMore", B.a),
				U = b.a.wrapped(_.a, "ArrowRight", B.a),
				G = (e, t, s, r, n, a, o, i) => {
					const c = s ? "last-".concat(r, "-").concat(n) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(a);
					let l = D.get(d);
					return void 0 === l && (l = () => {
						s && o.onBottomViewed(r, n), o.trackOnPostEnteredViewport(e, t, i)
					}, D.set(d, l)), l
				},
				z = (e, t, s, r) => {
					const n = "left-".concat(e, "-").concat(t);
					let a = A.get(n);
					return void 0 === a && (a = n => {
						s.trackOnPostExitedViewport(e, t, n, r)
					}, A.set(n, a)), a
				},
				K = (e, t) => {
					const s = "click-".concat(e);
					let r = W.get(s);
					return void 0 === r && (r = (e, s) => {
						s.isSponsored && Object(P.a)(s.events, O.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(w.a)(e)
						})
					}, W.set(s, r)), r
				},
				q = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case j.g.Medium:
							return 188;
						case j.g.Classic:
							return 96;
						case j.g.Compact:
							return 32;
						default:
							return 200
					}
				},
				Q = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class Z extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new I.a(F), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = a()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: r
						} = this.props, n = t(), a = [];
						n.forEach(e => a.push(e.id));
						const o = a.map(e => s[e]).filter(Boolean),
							i = o.map(e => r[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(k.a)(o, i))
					}, p.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && L.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = L.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = L.c.end(this.timerId);
						setTimeout(() => Object(L.b)(p.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && L.c.cancel(this.timerId), e.postIds.length && (this.timerId = L.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && L.c.has(this.timerId)) {
						const e = L.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(L.b)(p.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && L.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return L.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = L.c.end(e);
					setTimeout(() => {
						s(t(r, T.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						r = R(t, ["postsById"]),
						{
							postsById: n
						} = e,
						a = R(e, ["postsById"]),
						o = Object.keys(r),
						i = Object.keys(a);
					if (i.length !== o.length) return !0;
					if (i.some(e => r[e] !== a[e])) return !0;
					if (s === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((r, a) => {
							const o = 0 === a;
							return t({
								isFirstPost: o,
								layout: e,
								post: s[r]
							}) !== t({
								isFirstPost: o,
								layout: e,
								post: n[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: n,
						isCommentPermalink: a,
						isCommentsPage: o,
						isFrontpage: i,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: u,
						pageReferrer: h,
						postClickEvent: b,
						redditStyle: g
					} = this.props, y = 0 === t, f = s ? "last-index" : "", v = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(f, "-").concat(m, "-").concat(l, "-").concat(h);
					let E;
					if (void 0 === (E = this.scrollChildCache.get(v))) {
						const {
							inSubredditOrProfile: f,
							postsById: O
						} = this.props, C = O[e], S = C.crosspostRootId && O[C.crosspostRootId] ? O[C.crosspostRootId] : C;
						C.crosspostRootId && !O[C.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", p.p.API), e.setExtra("description", "Post ".concat(C.id, " is crosspost of ").concat(C.crosspostRootId, ", but ") + "".concat(C.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const w = this.props.postComponentForLayout({
								isCrosspost: !!C.crosspostRootId,
								isFirstPost: y,
								layout: r,
								post: S
							}),
							P = "post-list-item-[layout: ".concat(r, "]-[postId: ").concat(e, "]"),
							_ = G(e, r, s, l, m, h, this.props, t),
							k = z(e, r, this.props, t),
							I = K(e, this.props),
							L = S.media && S.media.type === N.n.EMBED ? S.media.provider : null;
						E = {
							estHeight: q(C, r),
							id: e,
							isFocusable: !(!S.media || r !== j.g.Large) && (N.d.has(S.media.type) && (!L || !N.q.has(L)) && !S.isSpoiler && !S.isNSFW),
							trackOnEnteredViewport: _,
							trackOnExitedViewport: k,
							render: t => {
								let {
									className: r,
									height: p,
									width: h,
									remeasure: x,
									setScrollerChildRef: v,
									shouldLoadInitially: E
								} = t;
								return d.a.createElement(w, {
									className: r,
									currentProfileName: n,
									key: P,
									availableWidth: h,
									eventFactory: b,
									first: y,
									forceLoadMedia: E,
									inSubredditOrProfile: f,
									isCommentPermalink: a,
									isCommentsPage: o,
									isFrontpage: i,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: u,
									last: s,
									onClickPost: I,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: v
								})
							}
						}, this.scrollChildCache.set(v, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: r,
						onTryAgain: n,
						postListPlaceholderComponent: a
					} = this.props;
					if (s) return;
					const o = a;
					return d.a.createElement("div", {
						className: B.a.placeholder
					}, d.a.createElement(o, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: n,
						onLoadMore: a
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: B.a.placeholder
					}, d.a.createElement(y.a, {
						className: n,
						isLoading: !!t,
						layout: r,
						countOverride: H[r]
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: a
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: a,
						layout: o,
						location: i,
						loadMore: l,
						postIds: h,
						onLoadMore: b
					} = this.props;
					let g = h.map((e, t, s) => {
						const r = t === h.length - 1;
						return this.scrollChildForPost(e, t, r, o)
					});
					n && (g = Q(g, n));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(o) : void 0,
						y = i ? Object(r.e)(i) : null,
						f = y || a;
					return d.a.createElement(c.Fragment, null, d.a.createElement(v.b, {
						innerRef: this.updateScrollerRef,
						className: f ? B.a.truncatedPostList : Object(u.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: C.g
					}, g), y && d.a.createElement(V, {
						className: B.a.seeMoreButton
					}, d.a.createElement(S.a, {
						className: B.a.seeMorePostsText,
						to: Object(m.a)(y, {
							type: p.Kb.Posts
						})
					}, d.a.createElement(E.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(U, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Z.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/LRUCache/index.ts"),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx");
			const c = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return n.a.createElement(i.a, {
						className: t,
						layout: s
					})
				},
				getComponent: () => s.e("RpanListingUnit").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var d = e => n.a.createElement(c, e),
				l = s("./src/reddit/helpers/trackers/rpan.ts"),
				m = s("./src/reddit/constants/postLayout.ts");
			const u = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340;
			s.d(t, "a", (function() {
				return h
			}));
			const p = new a.a(20),
				h = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = p.get(t);
					if (s) return s;
					const r = b(e.desiredIndex, e.children),
						a = {
							child: {
								id: t,
								estHeight: u(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(l.l)()),
								render: t => {
									let {
										className: s
									} = t;
									return n.a.createElement(d, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: r
						};
					return p.set(t, a), a
				},
				b = (e, t) => {
					const s = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; s.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				moreContainer: "_3WyMekikYHiwNeWOKndqQp",
				moreCaption: "_2OsGQXO2YdWHs0NVAbBl99",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				thumbnailTitle: "asOYju9PbMblWUua6ZsDl",
				watchingCounter: "_39XcbVabXFJtShzyIs8H1I",
				redditorIcon: "_2hUZYf9a2TRLQxn5jLEohm",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				descriptionPlaceholder: "_1WqW1SYAmWeFcfecGlX5vw",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				c = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(m),
				p = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = s.n(p);
			const b = e => {
					let {
						className: t
					} = e;
					return n.a.createElement("div", {
						className: Object(a.a)(t, h.a.container, h.a.placeholder, h.a.large, u.a.largeAndMediumPostStyles)
					}, n.a.createElement(d.a, {
						className: h.a.backgroundWrapper
					}, n.a.createElement("div", {
						className: h.a.titleAndDescriptionContainer
					}, n.a.createElement("div", {
						className: h.a.titlePlaceholder
					}), n.a.createElement("div", {
						className: h.a.descriptionPlaceholder
					})), n.a.createElement("div", {
						className: h.a.body
					}, g(o.j))))
				},
				g = e => Array.from({
					length: e
				}).map((e, t) => n.a.createElement("div", {
					className: Object(a.a)(h.a.thumbnailContainer, h.a.placeholder),
					key: "rpan-thumb-placeholder-".concat(t)
				}, n.a.createElement("div", {
					className: Object(a.a)(h.a.thumbnail, h.a.placeholder)
				})));
			t.a = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === l.g.Classic ? n.a.createElement(i.b, {
					className: Object(a.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === l.g.Compact ? n.a.createElement(c.a, {
					className: Object(a.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : n.a.createElement(b, {
					className: t
				})
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "Pr5bGphZnd_UYC5p4gJCD",
				container: "Pr5bGphZnd_UYC5p4gJCD",
				PopularIcon: "_2uzMzf2xHgtXHeHKoewIn9",
				popularIcon: "_2uzMzf2xHgtXHeHKoewIn9"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				c = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					children: t,
					className: s,
					showIcon: r
				} = e;
				return n.a.createElement("div", {
					className: Object(a.a)(d.a.Container, s)
				}, r && n.a.createElement(i.a, {
					className: d.a.PopularIcon
				}), n.a.createElement(o.b, {
					type: o.a.Widget
				}, t))
			}
		},
		"./src/reddit/components/RawHTMLDisplay/Listing.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => n.a.createElement(i.a, c({
				style: {
					color: Object(o.a)(e).post
				}
			}, e)))
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = s.n(n);
			t.a = r.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/index.tsx"),
				p = s("./src/reddit/components/Translated/index.tsx"),
				h = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(C),
				S = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				w = s.n(S);
			const P = e => e.type === v.f.Spoiler,
				_ = Object(b.t)();
			t.a = _(Object(u.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: n,
					onPostClick: c,
					trendingPost: u,
					trendingSearch: b,
					shouldOpenPost: v,
					showSubredditMeta: C = !0,
					showSubredditName: S,
					subredditOrProfile: _
				} = e, N = u && u.preview && u.preview.url || void 0, k = u && u.isSponsored ? "promoted_trend" : "trending", I = u && Object(d.a)(u.permalink) || "", L = v && I || b && Object(o.a)("/search", {
					q: b.rawQuery,
					source: k
				}) || I, T = b ? b.subredditInfo && b.subredditInfo.icon : _ && _.icon.url, M = b ? b.subredditInfo && b.subredditInfo.displayText : _ && (_.displayText || _.name), B = u ? u.flair.filter(P) : [], R = u ? u.score : 0, F = u ? u.numComments : 0, D = u && u.isSponsored, A = Object(O.a)(e).body, W = "linear-gradient(\n      ".concat(Object(r.j)(A, .2), ",\n      ").concat(Object(r.j)(A, .3), ",\n      ").concat(Object(r.j)(A, .4), ",\n      ").concat(Object(r.j)(A, .6), ",\n      ").concat(Object(r.j)(A, .8), ",\n      ").concat(A, "\n    )"), H = a.a.createElement("div", {
					className: Object(i.a)(w.a.trendingPost, {
						[w.a["m-background"]]: !!N
					})
				}, a.a.createElement(g.a, {
					to: L
				}, a.a.createElement("div", {
					className: Object(i.a)(w.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(E.g)(Object(O.a)(e).body, N || Object(O.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, D && a.a.createElement("div", {
					className: w.a.promoted
				}, a.a.createElement(f.c, null, "promoted")), a.a.createElement("div", {
					className: Object(i.a)(w.a.innerContainer, j.a.innerContainer, n),
					onClick: c,
					title: u ? u.title : ""
				}, a.a.createElement("h2", {
					className: u ? w.a.title : w.a.titleNoDescription
				}, e.title), u ? a.a.createElement("div", {
					className: Object(i.a)(w.a.description, s)
				}, B.length > 0 && a.a.createElement(m.a, {
					className: w.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: u,
					showCategoryTag: !1
				}), u.title) : a.a.createElement("div", {
					className: w.a.spacer
				}), C && T && M && a.a.createElement(x.a, {
					className: w.a.relatedSubredditMetaData,
					iconClassName: w.a.subredditIcon,
					iconUrl: T || void 0,
					suffix: a.a.createElement(p.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: M
						}
					})
				}), !C && u && a.a.createElement("div", {
					className: w.a.metaLine
				}, S && M && a.a.createElement("span", {
					className: w.a.meta
				}, Object(y.b)(M)), a.a.createElement("span", {
					className: w.a.meta
				}, a.a.createElement(f.c, null, "".concat(Object(l.b)(R), " "), a.a.createElement(f.a, {
					count: R,
					name: "score",
					plural: "points",
					singular: "point"
				}))), a.a.createElement("span", {
					className: w.a.meta
				}, a.a.createElement(f.c, null, "".concat(Object(l.b)(F), " "), a.a.createElement(f.a, {
					count: F,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return D ? a.a.createElement(h.a, {
					post: u,
					children: H
				}) : H
			})))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					className: t,
					exploreV2Variant: s,
					layoutBodyClassName: r,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return n.a.createElement("div", {
					className: Object(a.a)(c.a.container, d, t)
				}, n.a.createElement(o.a, {
					className: s ? void 0 : c.a.layout,
					bodyClassName: Object(a.a)(c.a.layoutBody, d, r),
					exploreV2Variant: s,
					header: e.header,
					headerClassName: Object(a.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_c5cqV3WsdQo95Ql4El73",
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/components/Translated/index.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = s.n(l);
			const u = n.a.createElement(o.a, {
					className: m.a.duHeader
				}, n.a.createElement(c.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				p = Object(d.a)({
					isLoading: !0
				});
			t.a = e => n.a.createElement(i.a, {
				className: e.className,
				exploreV2Variant: e.exploreV2Variant,
				header: u,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView,
				children: Array.from({
					length: e.numberOfItems || 6
				}).map(e => n.a.createElement("div", {
					className: m.a.post,
					key: "placeholder-post-".concat(e)
				}, n.a.createElement("div", {
					className: Object(a.a)(m.a.desc, m.a.one, p)
				}), n.a.createElement("div", {
					className: Object(a.a)(m.a.desc, m.a.two, p)
				}), n.a.createElement("div", {
					className: Object(a.a)(m.a.icon, p)
				}), n.a.createElement("div", {
					className: Object(a.a)(m.a.name, p)
				})))
			})
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/BannerAd/index.tsx"),
				d = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				u = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				p = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.div("BannerContainer", p.a),
				g = h.a.wrapped(e => n.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", p.a),
				x = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			var y = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: s
						} = x[e];
					return n.a.createElement(b, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, n.a.createElement("a", {
						href: d.a.redditUrl + s,
						target: "_blank"
					}, n.a.createElement(g, {
						src: d.a.assetPath + t
					})))
				},
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				E = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/components/PostTopMeta/index.tsx"),
				C = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				j = s("./src/lib/getShortenedLink.ts"),
				S = s("./src/lib/opener/index.ts"),
				w = s("./src/reddit/actions/ads/index.ts"),
				P = s("./src/reddit/components/PostContainer/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				N = s("./src/reddit/contexts/InsideOverlay.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				I = s("./src/reddit/helpers/adCount/index.ts"),
				L = s("./src/reddit/helpers/pixels.ts"),
				T = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				B = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				R = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				F = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				D = s("./src/reddit/models/Theme/index.ts"),
				A = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				W = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				V = s.n(H);
			const U = h.a.wrapped(e => n.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", V.a);
			class G extends n.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(W.F)(e.media) || Object(W.C)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case f.eb.IMAGE:
							return n.a.createElement(U, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var z = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				K = s.n(z);
			const q = h.a.wrapped(O.d, "PostTopMeta", K.a),
				Q = h.a.div("BannerAdContainer", K.a),
				Z = e => {
					let {
						children: t
					} = e;
					return n.a.createElement("div", null, t)
				},
				J = h.a.div("PromotedPostContainer", K.a),
				Y = h.a.wrapped(R.a, "OutboundLinkIcon", K.a),
				X = h.a.div("SourceLinkWrapper", K.a),
				$ = h.a.div("TopLine", K.a),
				ee = h.a.wrapped(E.c, "PostTitle", K.a),
				te = h.a.div("PostMediaWrapper", K.a),
				se = h.a.div("BackgroundWrapper", K.a),
				re = h.a.wrapped(P.a, "PostContainer", K.a),
				ne = 640,
				ae = (e, t) => {
					Object(L.a)(t.events, _.a.Click), t.source ? t.source.outboundUrl ? Object(S.d)(t.source.outboundUrl, S.c.BLANK) : Object(S.d)(t.source.url, S.c.BLANK) : Object(S.d)(t.permalink, S.c.BLANK)
				},
				oe = e => Object(B.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(T.a)(e), F.a.actionIcon, F.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				ce = e => ({
					background: Object(D.g)(Object(A.a)(e).body, null, null) || ""
				});
			class de extends n.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: r
					} = this.props;
					let a, o, c = {};
					return e.isBlank ? (a = Z, o = null) : e.isMediaOnly ? (a = Q, c = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, o = n.a.createElement(G, {
						post: e
					})) : (a = J, o = n.a.createElement(se, {
						style: ce(this.props)
					}, n.a.createElement($, null, n.a.createElement(q, {
						tooltipType: r ? O.c.Lightbox : void 0,
						language: f.y,
						post: e,
						showTimestamp: !1
					})), n.a.createElement(ee, {
						post: e,
						size: E.b.Large,
						format: oe
					}), e.source && n.a.createElement(X, null, n.a.createElement(k.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(j.a)(e), n.a.createElement(Y, null))), n.a.createElement(te, null, e.media && n.a.createElement(v.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: ne,
						shouldLoad: !0
					})))), n.a.createElement(a, c, n.a.createElement(re, {
						className: t,
						isOverlay: r,
						post: e,
						onClick: ae,
						eventFactory: s,
						style: ie(this.props)
					}, o))
				}
			}
			var le = Object(a.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: r,
							isOverlay: n
						} = t;
						e(Object(w.c)(Object(I.a)(s, !!n, r)))
					}
				}))(Object(N.b)(Object(C.a)(de))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				ue = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				pe = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				he = s.n(pe);
			const be = Object(o.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: r
						} = t, n = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(I.a)(s, n, r)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(a.b)(be),
				xe = h.a.wrapped(c.a, "BannerAd", he.a),
				ye = h.a.wrapped(ue.a, "ThemedWidget", he.a),
				fe = h.a.div("SidebarAdPlaceholder", he.a),
				ve = (e, t, s) => {
					let r = "";
					return t && (r += "overlay-"), r += "sidebar-".concat(e), null != s && (r += "-".concat(s)), r
				},
				Ee = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(W.B)(e.media) && e.media.content)),
				Oe = e => !!e && e.isBlank;
			class Ce extends n.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: r,
						placementIndex: a,
						refreshKey: o,
						listingName: c,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: u,
						forcePlaceholder: p,
						forceHouseAd: h,
						waitForProgrammatic: b
					} = this.props;
					return p || t || !Ee(s) && b ? n.a.createElement(me.a, null, n.a.createElement(ye, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, n.a.createElement(fe, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : h ? n.a.createElement(me.a, null, n.a.createElement(ye, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, n.a.createElement(y, null))) : Ee(s) ? n.a.createElement(me.a, null, n.a.createElement(le, {
						post: s,
						refreshKey: o,
						listingName: c,
						placement: d,
						placementIndex: a
					})) : n.a.createElement(me.a, null, n.a.createElement(ye, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: u
					}, Oe(s) && n.a.createElement(le, {
						post: s,
						refreshKey: o,
						listingName: c,
						placement: d,
						placementIndex: a
					}), n.a.createElement(xe, {
						id: ve(d, r, a),
						sizes: l,
						placement: d,
						listingName: c,
						refreshKey: o,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(Ce)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const u = Object(o.t)();
			t.a = u(Object(a.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: r
				} = t;
				const n = Object(i.b)(e, {
						listingName: s,
						pageLayer: r
					}),
					a = Object(c.y)(e),
					o = Object(i.e)(e);
				return {
					canShowAd: n && !a,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: a,
					viewIsUnsafe: o
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: r,
					pageLayer: a
				} = e, o = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && a ? n.a.createElement(d.a, l({
					forceHouseAd: r
				}, o)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				a = s.n(n);
			t.a = r.a.div("container", a.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/take.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				y = s.n(x),
				f = s("./src/lib/lessComponent.tsx");
			const v = 10,
				E = f.a.wrapped(u.n, "TertiaryButton", y.a);
			class O extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: s,
							onLoadMore: r,
							pending: n
						} = this.props, a = !e || t && r ? Object(d.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(d.a)(s, "sidebar.widgets.expandableList.viewLess");
						return o.a.createElement(E, {
							onClick: this.onButtonClick
						}, n ? o.a.createElement(p.a, {
							sizePx: v
						}) : a)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: r,
						minimizedLength: a,
						renderItem: i,
						title: c
					} = this.props, {
						expanded: d
					} = this.state, l = r.length > a || t, u = (!l || d ? r : n()(r, a)).map(e => i({
						item: e
					}));
					return o.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: c
					}, u, o.a.createElement(h.a, null, o.a.createElement(b.a, null, l && this.renderToggleButton())))
				}
			}
			O.defaultProps = {
				minimizedLength: l.Db
			};
			const C = Object(c.c)({
				language: g.T
			});
			t.a = Object(i.b)(C)(O)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.a("Link", c.a);
			t.a = e => n.a.createElement(o.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: c.a.LinkContainer
			}, n.a.createElement("div", {
				className: c.a.Column
			}, n.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), n.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), n.a.createElement("div", {
				className: c.a.Column
			}, n.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), n.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), n.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), n.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), n.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), n.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), n.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), n.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarPostList/ObservedPost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n);
			const o = .99;
			class i extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= o && t(s)
					}
				}
				render() {
					return a.a.createElement(r.a, {
						threshold: o,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			t.a = i
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/name/index.ts"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				x = s("./src/lib/isUrl/index.ts"),
				y = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/reddit/components/FlairWrapper/index.tsx"),
				v = s("./src/reddit/components/Thumbnail/index.tsx"),
				E = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				S = s.n(j);
			const w = e => e.type === E.f.Nsfw || e.type === E.f.Spoiler,
				P = Object(o.c)({
					language: C.T,
					post: b.I,
					subredditOrProfile: b.U
				});
			class _ extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: r,
						subredditOrProfile: a
					} = this.props, o = {
						post: t
					}, c = Object(x.a)(Object(v.b)(o)), d = t.flair.filter(w);
					return n.a.createElement("div", {
						className: Object(i.a)(S.a.container, e, {
							[S.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, n.a.createElement("div", {
						className: S.a.mainLine
					}, c && n.a.createElement("div", {
						className: S.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, n.a.createElement(v.a, o)), n.a.createElement("div", {
						className: Object(i.a)(S.a.title, !c && S.a.titleSingle),
						title: t.title
					}, d.length > 0 && n.a.createElement(f.a, {
						className: S.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), n.a.createElement("div", {
						className: S.a.metaLine
					}, r && !!a && n.a.createElement("span", {
						className: S.a.meta
					}, Object(O.e)(a) ? Object(m.c)(a.displayText || a.name) : Object(m.b)(a.displayText || a.name)), n.a.createElement("span", {
						className: S.a.meta
					}, "".concat(Object(y.b)(t.score), " "), n.a.createElement(p.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), n.a.createElement("span", {
						className: S.a.meta
					}, "".concat(Object(y.b)(t.numComments), " "), n.a.createElement(p.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var N = Object(a.b)(P, e => ({
					openLightbox: t => e(Object(u.a)(t.permalink))
				}))(_),
				k = s("./src/reddit/components/SidebarPostList/index.m.less"),
				I = s.n(k);
			s.d(t, "b", (function() {
				return M
			}));
			const L = 10,
				T = 2,
				M = Object(o.a)(b.O, e => e.filter(e => !e.isSponsored)),
				B = Object(o.c)({
					posts: M
				}),
				R = Object(a.b)(B, e => ({
					openPost: t => e(Object(u.a)(t.permalink))
				}));
			class F extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [r] = s;
						r && (t(r), e && e(r.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || L, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, r) => (e = Math.ceil(r.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: r,
							redditStyle: a,
							smallPostClassName: o
						} = this.props;
						return n.a.createElement(g.a, {
							key: e.id,
							onPostVisible: r,
							postId: e.id
						}, n.a.createElement(N, {
							className: Object(i.a)(I.a.smallPost, o),
							containerOnClick: s,
							postId: e.id,
							redditStyle: a,
							showSubredditName: Object(c.a)(Object(m.f)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: r,
						onPostVisible: a,
						posts: o,
						redditStyle: u,
						showMoreButton: b,
						topPostsVariant: x
					} = this.props, {
						chunkIdx: y
					} = this.state;
					if (0 === o.length) return null;
					const f = this.getVisiblePostsCounts(),
						v = Object(h.a)(x),
						E = Object(h.b)(x),
						O = v || E,
						C = o.slice(y * f, (y + 1) * f),
						[j, ...S] = C,
						w = O ? C.slice(0, T) : S.slice(0, T),
						P = O ? C.slice(T) : S.slice(T);
					return n.a.createElement("div", {
						className: Object(i.a)(I.a.container, t, {
							[I.a.redditStyle]: u
						})
					}, !O && n.a.createElement(g.a, {
						onPostVisible: a,
						postId: j.id
					}, n.a.createElement(d.a, {
						backgroundWrapperClassName: I.a.largePostBackgroundWrapper,
						descriptionClassName: I.a.largePostDescription,
						innerContainerClassName: I.a.largePostInnerContainer,
						"data-redditstyle": u,
						onPostClick: this.openLargePost,
						postId: j.id,
						showSubredditMeta: !1,
						showSubredditName: Object(c.a)(Object(m.f)(s)),
						trendingPost: j
					})), w.map(this.renderSmallPost), e, P.map(this.renderSmallPost), b && n.a.createElement(l.n, {
						className: I.a.SeeMore,
						onClick: this.showMorePosts
					}, r || n.a.createElement(p.c, null, "See More")))
				}
			}
			t.a = R(F)
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, s) {
			e.exports = {
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV",
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/throttle.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m),
				p = e => i.a.createElement("div", {
					className: Object(r.a)(e.className, u.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(y),
				v = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const C = c.e[1] + 24,
				j = b.g + 8 + 152 + 32 + 16,
				S = j + C + 8,
				w = v.a.div("Container", f.a),
				P = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return i.a.createElement(p, E({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				_ = e => {
					let {
						categoriesPlacementVariant: t,
						children: s,
						className: n,
						isSticky: a
					} = e;
					return i.a.createElement("div", {
						className: Object(r.a)(n, {
							[f.a.StickyStyles]: a,
							[f.a.LargeOffset]: Object(x.f)(t)
						})
					}, s)
				};
			class N extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > j
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = a()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							categoriesPlacementVariant: t,
							children: s,
							className: r,
							hideFooter: n,
							railsWidgetsVariant: a
						}
					} = this, o = this.state.isAdSticky && !(!e && !s);
					return i.a.createElement(w, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(_, {
						categoriesPlacementVariant: t,
						isSticky: o || !!a
					}, e, s, !n && i.a.createElement(h.a, null)), !this.props.hideBackToTop && i.a.createElement(P, null))
				}
			}
			const k = Object(g.t)();
			t.a = k(N)
		},
		"./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				Pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				DropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				dropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				OverflowMenu: "KZF0GvnWopJYsNtVGODBn",
				overflowMenu: "KZF0GvnWopJYsNtVGODBn"
			}
		},
		"./src/reddit/components/SidebarSubredditChannels/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2sEbIFP3ssTnt1Fo23m26r",
				wrapper: "_2sEbIFP3ssTnt1Fo23m26r"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, s) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loadWithRetries/index.ts"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				h = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				v = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = s.n(v),
				O = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const C = m.a.div("BladeContainer", E.a),
				j = m.a.wrapped(g.a, "CloseIcon", E.a),
				S = m.a.div("LoadingTitleContainer", E.a),
				w = m.a.div("LoadingNavContainer", E.a),
				P = m.a.div("ShortLoadingNav", E.a),
				_ = m.a.wrapped(b.a, "ThemedChevron", E.a),
				N = e => {
					var t = O(e, []);
					return o.a.createElement(C, null, o.a.createElement(j, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, o.a.createElement(h.c, null, "Back to mod tools")), o.a.createElement(p.o, null, o.a.createElement(S, null, o.a.createElement("div", {
						className: Object(l.a)(E.a.LoadingTitle, t.isLoading && E.a.loading)
					})), o.a.createElement(w, null, o.a.createElement("div", {
						className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
					}), o.a.createElement(_, null)), o.a.createElement(w, null, o.a.createElement(P, null), o.a.createElement(_, null)), o.a.createElement(w, null, o.a.createElement("div", {
						className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
					}), o.a.createElement(_, null)), o.a.createElement(w, null, o.a.createElement(P, null), o.a.createElement(_, null)), o.a.createElement(w, null, o.a.createElement("div", {
						className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
					}), o.a.createElement(_, null)))))
				},
				k = Object(d.a)({
					getComponent: () => Object(u.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
					ErrorComponent: () => o.a.createElement(N, {
						gradientType: "posts",
						isLoading: !1
					}),
					LoadingComponent: () => o.a.createElement(N, {
						gradientType: "posts",
						isLoading: !0
					})
				}),
				I = Object(c.c)({
					isEditing: y.j,
					isSubscriptionsPinned: f.b,
					moderatorPermissions: x.j
				});
			t.a = Object(i.b)(I)(e => {
				const t = e.moderatorPermissions && n()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(k, {
					subredditId: e.subredditId
				})) : o.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return o
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "j", (function() {
				return E
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = s.n(n);
			const o = r.a.section("FormPage", a.a),
				i = r.a.h1("HomePageTitle", a.a),
				c = r.a.button("HomePageBreadcrumb", a.a),
				d = r.a.div("HomePageGroup", a.a),
				l = r.a.h1("FormPageTitle", a.a),
				m = r.a.div("FormPageSection", a.a),
				u = r.a.div("FormGroup", a.a),
				p = r.a.h2("FormGroupTitle", a.a),
				h = r.a.div("FormElement", a.a),
				b = r.a.div("FormGroupDescription", a.a),
				g = r.a.div("FormItem", a.a),
				x = r.a.h3("FormElementTitle", a.a),
				y = r.a.div("FormElementDescription", a.a),
				f = r.a.div("FormElementError", a.a),
				v = r.a.div("FormElementSubGroup", a.a),
				E = r.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				primaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				ModalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				modalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				ModalText: "_3HL4gEFxPNzkrPu94hblvT",
				modalText: "_3HL4gEFxPNzkrPu94hblvT",
				ItemLink: "vByM_anguY6xuCJEcusmJ",
				itemLink: "vByM_anguY6xuCJEcusmJ",
				Detail: "_1hkd6aDOGqeroDz5-yntAS",
				detail: "_1hkd6aDOGqeroDz5-yntAS",
				DescText: "_2Kwn1xR6xMSka95C9d72vF",
				descText: "_2Kwn1xR6xMSka95C9d72vF",
				Title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				Header: "tLKlMoU4-CQkARSxZg_yj",
				header: "tLKlMoU4-CQkARSxZg_yj",
				ChatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				chatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				PlanetIcon: "hsKCEb94KysCjbHbmbhzx",
				planetIcon: "hsKCEb94KysCjbHbmbhzx",
				Pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				Group: "dfN8kolCvNCsNzzf9W39l",
				group: "dfN8kolCvNCsNzzf9W39l",
				Key: "_2fgNZYjyiPjn_UlFwxeaVr",
				key: "_2fgNZYjyiPjn_UlFwxeaVr",
				SubredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				subredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				EditButton: "_21mAHvYUh9NgVPMyp45QZJ",
				editButton: "_21mAHvYUh9NgVPMyp45QZJ",
				ShowAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				showAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				ChannelName: "KIQLM-ci4WJOXrwjTsEzx",
				channelName: "KIQLM-ci4WJOXrwjTsEzx",
				HeaderText: "_3n6CTc1D2t_MfB0tNSgiAj",
				headerText: "_3n6CTc1D2t_MfB0tNSgiAj"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/orderBy.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/opener/index.ts"),
				m = s("./src/app/strings/index.ts"),
				u = s("./src/chat/helpers/urls/index.ts"),
				p = s("./src/reddit/actions/chat/subredditChannel.ts"),
				h = s("./src/reddit/actions/chat/toggle.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/helpers/trackers/chat.ts"),
				O = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				j = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				S = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/models/SubredditChannel/index.ts"),
				P = s("./src/reddit/selectors/chat.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/subredditChannel.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/SubredditChannelList/index.m.less"),
				L = s.n(I);
			s.d(t, "a", (function() {
				return Y
			}));
			const T = d.a.wrapped(g.f, "ModalFormItem", L.a),
				M = d.a.wrapped(v.f, "PrimaryButton", L.a),
				B = d.a.wrapped(g.m, "ModalText", L.a),
				R = d.a.a("ItemLink", L.a),
				F = d.a.p("Detail", L.a),
				D = d.a.p("DescText", L.a),
				A = d.a.div("Title", L.a),
				W = d.a.div("Header", L.a),
				H = d.a.wrapped(j.a, "ChatIcon", L.a),
				V = d.a.wrapped(S.a, "PlanetIcon", L.a),
				U = d.a.wrapped(C.a, "Pencil", L.a),
				G = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return o.a.createElement("svg", {
						className: t,
						viewBox: "0 0 16 16",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("g", {
						transform: "translate(-26.000000, -37.000000)"
					}, o.a.createElement("path", {
						d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
					})))
				}, "Group", L.a),
				z = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return o.a.createElement("svg", {
						className: t,
						viewBox: "0 0 16 16",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("path", {
						d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
					}))
				}, "Key", L.a),
				K = d.a.wrapped(x.b, "SubredditIcon", L.a),
				q = d.a.button("EditButton", L.a),
				Q = d.a.button("ShowAllLink", L.a),
				Z = d.a.span("ChannelName", L.a),
				J = d.a.div("HeaderText", L.a);
			var Y;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Y || (Y = {}));
			const X = Object(c.c)({
					isCollectionReady: N.e,
					isModerator: P.e,
					language: k.T,
					selectedSubreddit: _.S,
					shouldRequestCollection: N.f,
					subredditChannels: N.a
				}),
				$ = Object(i.b)(X, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						toggleModal: () => e(Object(b.i)(f.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(b.i)(f.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(b.i)(f.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(p.l)(t)),
						onChatLinkClick: (t, s) => e(Object(h.b)(t, s)),
						onSelectChannel: t => e(Object(p.m)({
							channelId: t
						}))
					}
				});
			class ee extends o.a.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.fetchChannelList()
				}
				fetchChannelList() {
					this.props.shouldRequestCollection && this.props.fetchSubredditChannels(this.props.selectedSubreddit.id)
				}
				getDisplayChannelList() {
					return this.props.subredditChannels && this.props.maxChannels ? this.props.subredditChannels.slice(0, this.props.maxChannels) : this.props.subredditChannels || []
				}
				displayShowAllLink() {
					return !!(this.props.maxChannels && this.props.subredditChannels && this.props.maxChannels < this.props.subredditChannels.length)
				}
				displayChannelsList() {
					const {
						props: {
							maxChannels: e,
							subredditChannels: t
						}
					} = this;
					if (t) {
						const s = n()(t, ["name"]);
						return e ? s.slice(0, e) : s
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: s,
						onChatLinkClick: r
					} = this.props;
					r(t, s.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = w.a, {
						channelId: s,
						channelState: r
					} = e, {
						Widget: n,
						Modal: a
					} = Y, {
						parentContext: o,
						sendEvent: i
					} = this.props;
					return o === n && r === t ? i(Object(E.c)(s)) : o === n ? i(Object(E.e)(s)) : o === a && r === t ? i(Object(E.a)(s)) : o === a ? i(Object(E.b)(s)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(E.d)()))
				}
				getLinkURL(e) {
					const {
						selectedSubreddit: t
					} = this.props;
					return Object(u.channelUrl)(e.channelId, t.name)
				}
				render() {
					const {
						props: {
							className: e,
							isCollectionReady: t,
							isModerator: s,
							language: r,
							onAddChannel: n,
							toggleEditModal: a,
							selectedSubreddit: i,
							onSelectChannel: c,
							toggleCreateModal: d
						}
					} = this;
					if (!t) return null;
					const u = this.displayChannelsList();
					return o.a.createElement("div", {
						className: e
					}, u.length ? o.a.createElement(T, null, u.map((e, t) => o.a.createElement(R, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, o.a.createElement(A, {
						key: "item-link-title-".concat(t)
					}, o.a.createElement(H, {
						key: "item-link-icon-".concat(t)
					}), i.icon.url ? o.a.createElement(K, {
						key: "subreddit-icon-".concat(t),
						iconUrl: i.icon.url
					}) : o.a.createElement(V, {
						key: "planet-".concat(t),
						isSmall: !0
					}), o.a.createElement(W, {
						key: "item-header-".concat(t)
					}, o.a.createElement(J, {
						key: "item-header-text-".concat(t)
					}, o.a.createElement(F, {
						key: "item-detail-".concat(t)
					}, i.name, Object(m.c)(r, "listings.channelMembers", e.membersCount)), o.a.createElement(Z, {
						key: "channel-name-".concat(t)
					}, e.type === w.c.Public ? o.a.createElement(G, null) : o.a.createElement(z, null), e.name)), s && o.a.createElement(q, {
						key: "button-".concat(t),
						onClick: t => {
							c(e.channelId), a(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(E.l)())
						}
					}, o.a.createElement(U, null)))), e.description && o.a.createElement(D, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && o.a.createElement(Q, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, o.a.createElement(O.c, null, "See more"))) : s ? o.a.createElement(T, null, o.a.createElement(B, null, o.a.createElement(O.c, null, "Create your first room and get your community chatting in real time.")), o.a.createElement(M, {
						onClick: n || d
					}, o.a.createElement(O.c, null, "+ Add room"))) : o.a.createElement(T, null, o.a.createElement(B, null, o.a.createElement(O.c, null, "There are no joined chatrooms yet"))))
				}
			}
			t.b = $(Object(y.b)(ee))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/ContentTooltip/index.tsx"),
				m = s("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/tooltips.ts"),
				h = s("./src/reddit/controls/ImageInput/index.tsx"),
				b = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				x = s("./src/reddit/helpers/localStorage/index.ts"),
				y = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				O = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, n.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				C = s("./src/reddit/models/ApiRequestState/index.ts"),
				j = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				S = s("./src/reddit/components/SubredditIcon/index.m.less"),
				w = s.n(S);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			class N extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(x.l)(this.props.subredditId)
					})
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: s,
							inTopBar: r,
							tooltipDisabled: a
						} = e,
						o = _(e, ["subredditId", "className", "inTopBar", "tooltipDisabled"]),
						c = [s, w.a.inTopBar, w.a.iconContainer];
					return r ? c.push(w.a.emptyEditableIconInTopBar) : c.push(w.a.editableIcon, w.a.emptyEditableIcon), n.a.createElement("span", P({}, o, {
						id: this.props.tooltipDisabled ? void 0 : p.a,
						className: Object(i.a)(...c)
					}), r ? n.a.createElement(O, {
						className: w.a.emptyUploadButton
					}) : n.a.createElement(E.a, {
						className: w.a.emptyPlusButton
					}), this.props.children, !this.state.tooltipDismissed && !this.props.tooltipDisabled && n.a.createElement(l.a, {
						className: w.a.tooltip,
						tooltipId: p.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, n.a.createElement(m.a, {
						includeIcon: !r,
						subredditId: t
					})))
				}
			}
			const k = e => {
					const {
						iconColor: t,
						className: s,
						alt: r,
						role: a,
						onClick: o,
						inTopBar: c,
						src: d
					} = e;
					return n.a.createElement("span", {
						className: w.a.iconContainer
					}, n.a.createElement("img", {
						onClick: o,
						role: a,
						alt: r,
						src: d,
						className: Object(i.a)(s, {
							[w.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				I = Object(o.c)({
					isLoading: j.b
				});
			class L extends n.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(y.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => n.a.createElement(h.a, {
						className: w.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(C.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.inTopBar || this.props.onShowTooltip()
				}
				renderEditButton() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? n.a.createElement("span", {
						className: w.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? n.a.createElement(f.c, null, "Update icon") : n.a.createElement(f.c, null, "Add icon")) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = n.a.createElement(n.a.Fragment, null, n.a.createElement(k, P({
						src: e,
						alt: Object(v.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? n.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? n.a.createElement("a", {
						href: this.props.linkTo
					}, n.a.createElement(N, P({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : n.a.createElement(n.a.Fragment, null, n.a.createElement(N, P({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [w.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(w.a.loadingIconInTopBar), t = 32), n.a.createElement(b.a, {
							className: Object(i.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? n.a.createElement("div", {
						className: w.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(a.b)(I, (e, t) => ({
				onFileSelected: (s, r) => {
					e(Object(c.a)(t.subreddit, s, r))
				},
				onShowTooltip: () => {
					e(Object(d.f)({
						tooltipId: p.a
					}))
				}
			}))(Object(u.b)(L))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				u = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				h = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				b = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/components/SubredditNav/index.m.less"),
				y = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const E = (e, t, s) => Object(b.a)(e, {
					[y.a.mActive]: t
				}, {
					[y.a.topBannerVariant]: s
				}),
				O = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: r
					} = e, a = v(e, ["children", "isActive", "isTopBannerVariant"]);
					return n.a.createElement("div", f({
						className: E(y.a.subNavTitle, s, r)
					}, a), n.a.createElement("span", null, t), n.a.createElement(g.b, {
						className: y.a.navDropdownIcon
					}))
				},
				C = e => {
					var {
						className: t,
						isActive: s,
						to: r,
						isTopBannerVariant: a
					} = e, o = v(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = E(y.a.navLink, s, a);
					return r ? n.a.createElement(h.a, f({
						className: i,
						to: r
					}, o)) : n.a.createElement("a", f({
						className: i
					}, o))
				},
				j = e => {
					var {
						className: t,
						isActive: s
					} = e, r = v(e, ["className", "isActive"]);
					return n.a.createElement(h.a, f({
						className: E(y.a.navLink, s)
					}, r))
				},
				S = e => {
					var {
						className: t,
						isActive: s
					} = e, r = v(e, ["className", "isActive"]);
					return n.a.createElement("a", f({
						className: E(y.a.subNavLink, s)
					}, r))
				},
				w = e => {
					var {
						className: t
					} = e, s = v(e, ["className"]);
					return n.a.createElement("div", f({
						className: Object(b.a)(y.a.subNavContainer, t)
					}, s))
				},
				P = e => {
					var {
						className: t,
						isOpen: s
					} = e, r = v(e, ["className", "isOpen"]);
					return n.a.createElement("div", f({
						className: Object(b.a)(y.a.subNavList, t, {
							[y.a.mIsOpen]: s
						})
					}, r))
				};
			const _ = Object(o.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var N = Object(c.t)()(Object(a.b)(_, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? n.a.createElement(j, {
						className: y.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(c.F)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, n.a.createElement(p.c, null, "Polls")) : null
				}))),
				k = s("./src/lib/linkMatchers/index.ts");
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return n.a.createElement(w, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, n.a.createElement(O, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), n.a.createElement(P, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var L = I;
			const T = e => {
				const t = e.url && Object(k.g)(k.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? n.a.createElement(C, {
					href: T(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : n.a.createElement(L, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => n.a.createElement(S, {
					key: "".concat(e.text, "-").concat(T(e)),
					role: "listitem",
					href: T(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				B = s("./src/lib/constants/index.ts");
			const R = Object(c.t)(),
				F = [B.yb.SUBREDDIT, B.yb.COMMENTS, B.yb.COLLECTION_COMMENTS],
				D = Object(o.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && F.indexOf(t.pageLayer.meta.name) > -1
				});
			var A = R(Object(a.b)(D, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: r,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, i = r && !s;
					return n.a.createElement(C, {
						to: t,
						isActive: i,
						isTopBannerVariant: a,
						onClick: e => {
							s && (e.preventDefault(), o())
						}
					}, n.a.createElement(p.c, null, "Posts"))
				}))),
				W = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = s("./src/higherOrderComponents/makeAsync.tsx");
			var V = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				U = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/models/Theme/index.ts"),
				K = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				q = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const Q = Object(W.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: r
				} = e, a = q(e, ["className", "children", "isTopBannerVariant"]);
				const o = Object(K.a)(a);
				return n.a.createElement("div", {
					className: Object(b.a)(y.a.outerContainer, t),
					style: {
						position: o.navBar.useOverlay && !r ? "absolute" : "static",
						background: r ? "inherit" : Object(z.g)(o.navBar.backgroundColor, o.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var Z = e => n.a.createElement(Q, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, n.a.createElement("div", {
					className: y.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === U.g.Large ? "".concat(e.maxWidth || G.a, "px") : "100%"
					}
				}, n.a.createElement("div", null, e.children), n.a.createElement(V, null))),
				J = s("./src/reddit/components/Translated/index.tsx"),
				Y = s("./src/reddit/constants/wiki.ts"),
				X = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: r
				} = e, a = !!r && !!r.meta && r.meta.name === B.yb.SUBREDDIT_WIKI, o = "wiki/".concat(Y.i), i = t.endsWith("/") ? t + o : "".concat(t, "/").concat(o);
				return n.a.createElement(C, {
					isActive: a,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object(X.g)())
				}, n.a.createElement(J.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const ee = Object(d.a)("spPolls", N),
				te = Object(c.t)(),
				se = Object(o.c)({
					language: l.T,
					layout: c.M,
					widget: m.f
				}),
				re = Object(a.b)(se);
			t.a = te(re(Object(i.b)(e => n.a.createElement(Z, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && n.a.createElement(n.a.Fragment, null, n.a.createElement(A, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), n.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && n.a.createElement(n.a.Fragment, null, e.widget.showWiki && n.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => n.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				u = s("./src/higherOrderComponents/makeAsync.tsx"),
				p = s("./src/reddit/featureFlags/component.tsx");
			const h = Object(u.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			var b = Object(p.a)("spPremium", h),
				g = s("./src/reddit/components/Governance/CommunityCard/index.tsx"),
				x = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				y = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/lib/isFakeSubreddit/index.ts"),
				v = s("./src/reddit/components/IdCard/helpers.ts"),
				E = e => !Object(f.a)(e) || Object(v.c)(e) || Object(v.d)(e) || Object(v.e)(e),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				j = s("./src/reddit/components/SidebarContainer/index.tsx"),
				S = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				w = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				P = s("./src/lib/classNames/index.ts"),
				_ = s("./src/app/strings/index.ts"),
				N = s("./src/higherOrderComponents/asTooltip.tsx"),
				k = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/i18n/utils.ts"),
				L = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/constants/modals.ts"),
				M = s("./src/reddit/controls/Dropdown/index.tsx"),
				B = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				R = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/tooltip.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				H = s.n(W);
			const V = l.a.wrapped(M.a, "_Dropdown", H.a),
				U = l.a.wrapped(R.a, "Pencil", H.a),
				G = l.a.a("DropdownRow", H.a),
				z = Object(N.a)(V),
				K = e => "SubredditChannels--Menu--".concat(e),
				q = Object(c.c)({
					isModerator: F.g,
					language: A.T,
					isDropdownOpen: (e, t) => Object(D.b)(K(t.subredditId))(e)
				}),
				Q = l.a.wrapped(e => {
					const {
						className: t,
						isModerator: s,
						language: r,
						onOpenDropdown: n,
						isDropdownOpen: a,
						toggleModal: i
					} = e, c = K(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": a,
						"aria-haspopup": !0,
						"aria-label": Object(I.c)("Chat menu"),
						className: Object(P.a)(H.a.top, t),
						id: c,
						onClick: () => n(c)
					}, o.a.createElement(B.a, null), o.a.createElement(z, {
						isOpen: a,
						tooltipId: c,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(G, {
						onClick: i
					}, s ? Object(_.a)(r, "subredditModeration.chat.subredditWidget.menu.manageRooms") : Object(_.a)(r, "subredditModeration.chat.subredditWidget.menu.viewRooms"), o.a.createElement(U, null))))
				}, "OverflowMenu", H.a);
			var Z = Object(i.b)(q, e => ({
					onOpenDropdown: t => e(Object(k.g)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(L.i)(T.a.MANAGE_SUBREDDIT_CHAT))
				}))(Q),
				J = s("./src/reddit/components/SubredditChannelList/index.tsx"),
				Y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				X = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				$ = s("./src/reddit/featureFlags/index.ts"),
				ee = s("./src/reddit/helpers/trackers/chat.ts"),
				te = s("./src/reddit/selectors/subreddit.ts"),
				se = s("./src/reddit/selectors/subredditChannel.ts"),
				re = s("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				ne = s.n(re);
			const ae = l.a.div("Wrapper", ne.a),
				oe = Object(c.c)({
					isCollectionReady: se.e,
					isModerator: F.g,
					isWhitelistedSubreddit: te.e,
					shouldRequestCollection: se.f,
					subredditChannels: se.a,
					userInSubredditChat: e => !!$.d.userInSubredditChat(e)
				});
			let ie;
			class ce extends o.a.Component {
				constructor(e) {
					super(e)
				}
				shouldComponentUpdate(e, t) {
					return this.props.isCollectionReady !== e.isCollectionReady || this.props.isModerator !== e.isModerator || this.props.isWhitelistedSubreddit !== e.isWhitelistedSubreddit || this.props.shouldRequestCollection !== e.shouldRequestCollection || this.props.subredditChannels !== e.subredditChannels
				}
				trackViewEvent() {
					this.props.subredditId !== ie && (ie = this.props.subredditId, this.props.sendEvent(Object(ee.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: s,
						subredditChannels: r,
						userInSubredditChat: n
					} = this.props, a = r && r.length;
					return !(!t || !s || !a && !e) && n
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, s = o.a.createElement(J.b, {
						maxChannels: 3,
						parentContext: J.a.Widget,
						subredditId: e
					});
					return t ? s : this.isEnabled() ? (this.trackViewEvent(), o.a.createElement(S.a, null, o.a.createElement(X.a, {
						className: this.props.className,
						title: Object(I.c)("Chat rooms"),
						headerButton: o.a.createElement(Z, {
							subredditId: e
						})
					}, o.a.createElement(ae, null, s)))) : null
				}
			}
			var de = Object(i.b)(oe)(Object(Y.b)(ce)),
				le = s("./src/lib/makeListingKey/index.ts"),
				me = s("./src/reddit/actions/subreddit.ts"),
				ue = s("./src/reddit/components/SidebarPostList/index.tsx"),
				pe = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				he = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				be = s("./src/reddit/selectors/discoveryUnit.ts"),
				ge = s("./src/reddit/selectors/posts.ts"),
				xe = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				ye = s.n(xe);
			const fe = 10,
				ve = Object(c.a)((e, t) => t.subredditName, e => Object(le.a)(e, d.N.TOP, {
					t: d.Pb.WEEK
				})),
				Ee = Object(c.c)({
					discoveryUnit: e => Object(be.f)(e, {
						unitName: he.r
					}),
					listingKey: ve,
					posts: (e, t) => {
						const s = ve(e, t);
						return Object(ge.O)(e, {
							listingKey: s
						})
					},
					subreddit: te.B
				});
			class Oe extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(pe.g)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(pe.x)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(pe.C)(t, e, void 0, s))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						loadMorePosts: r,
						posts: n,
						subredditName: a,
						topPostsVariant: i
					} = this.props;
					if (0 === n.length) return null;
					const c = a,
						d = n.length > fe;
					return o.a.createElement(X.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: Object(I.c)("Top posts this week")
					}, o.a.createElement(ue.a, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: ye.a.smallPost,
						showMoreButton: d,
						topPostsVariant: i
					}, o.a.createElement("div", null, e)))
				}
			}
			var Ce = Object(i.b)(Ee, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(me.r)({
							sort: d.N.TOP,
							subredditName: s,
							t: d.Pb.WEEK
						}))
					}
				})(Object(Y.b)(Oe)),
				je = s("./src/config.ts"),
				Se = s("./src/lib/localStorageAvailable/index.ts"),
				we = s("./src/higherOrderComponents/asModal/index.tsx"),
				Pe = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_e = s("./src/reddit/components/Translated/index.tsx"),
				Ne = s("./src/reddit/controls/TextButton/index.tsx"),
				ke = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			class Ie extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Pe.c, null, o.a.createElement(Pe.g, null, o.a.createElement(ke.a, null, o.a.createElement(Pe.n, null, o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.modal.title"
					})), o.a.createElement(Ne.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Pe.b, null)))), o.a.createElement(Pe.j, null, o.a.createElement(Pe.m, null, o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.modal.text"
					}))), o.a.createElement(Pe.e, null, o.a.createElement(Pe.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.modal.cancel"
					})), o.a.createElement(Pe.o, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.modal.confirm"
					}))))
				}
			}
			var Le = Object(we.a)(Ie),
				Te = s("./src/reddit/components/IdCard/Banner.tsx"),
				Me = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Be = s("./src/reddit/constants/blade.ts"),
				Re = s("./src/reddit/controls/Button/index.tsx"),
				Fe = s("./src/reddit/controls/InternalLink/index.tsx"),
				De = s("./src/reddit/helpers/localStorage/index.ts"),
				Ae = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				We = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				He = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Ve = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = s("./src/reddit/selectors/activeModalId.ts"),
				Ge = s("./src/reddit/selectors/structuredStyles.ts"),
				ze = s("./src/reddit/components/IdCard/index.m.less"),
				Ke = s.n(ze),
				qe = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Qe = s.n(qe);
			const {
				fbt: Ze
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Je = "mod_onboarding_modal", Ye = "mod_onboarding_widget", Xe = Object(c.a)(Ue.a, (e, t) => Object(F.a)(Ve.c.config)(e, {
				subredditId: t.subredditId
			}), (e, t) => Object(Ge.l)(e, {
				subredditId: t.subredditId
			}), (e, t, s) => ({
				activeModalId: e,
				hasModeratorPermissions: t,
				modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
				modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
				modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
			}));
			class $e extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(De.S)(Ye, !0, this.props.subredditId), this.props.sendEvent(Object(Ae.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Ae.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Ae.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Ae.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Ae.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: r,
						subredditId: n
					} = this.props, a = e && !(t && s && r) && (!Object(Se.a)() || !Object(De.q)(Ye, n));
					a !== this.state.visible && (this.setState({
						visible: a
					}), a && this.props.sendEvent(Object(Ae.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: r,
						subredditName: n,
						toggleCloseMenuModal: a
					} = this.props;
					return this.state.visible ? o.a.createElement(X.a, {
						className: Object(P.a)(Qe.a.container, this.props.className)
					}, o.a.createElement(Te.a, {
						bannerBackgroundImage: "".concat(je.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(He.a, {
						className: Qe.a.closeIcon,
						onClick: a
					}), Object(Me.a)({
						titleText: o.a.createElement(_e.a, {
							msgId: "sidebar.moderatorOnboarding.title"
						}),
						snooBackground: Object(v.b)("url('".concat(je.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), o.a.createElement("div", {
						className: Object(P.a)(Ke.a.Description, Qe.a.description)
					}, Ze._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview}. Here are some great ways to get started.", [Ze._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: Be.e.exportImport,
						className: Qe.a.modHelpLink,
						target: "_blank"
					}, Ze._("Customize Appearance Overview", null, {
						hk: "2qylj9"
					})))], {
						hk: "2BIfV4"
					})), o.a.createElement(Fe.a, {
						to: "/r/".concat(n, "?styling=true&route=").concat(Be.c.NameAndIcon),
						className: Qe.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(We.a, {
						className: Qe.a.checked
					}) : o.a.createElement(We.a, {
						className: Qe.a.unchecked
					}), o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.addCommunityIcon"
					})), o.a.createElement(Fe.a, {
						to: "/r/".concat(n, "?styling=true&route=").concat(Be.c.Banner),
						className: Qe.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(We.a, {
						className: Qe.a.checked
					}) : o.a.createElement(We.a, {
						className: Qe.a.unchecked
					}), o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.customizeHeader"
					})), o.a.createElement(Fe.a, {
						to: "/r/".concat(n, "?styling=true&route=").concat(Be.c.Global),
						className: Qe.a.link,
						onClick: this.customizeThemeColors
					}, s ? o.a.createElement(We.a, {
						className: Qe.a.checked
					}) : o.a.createElement(We.a, {
						className: Qe.a.unchecked
					}), o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.customizeColors"
					})), o.a.createElement(Re.k, {
						to: "/r/".concat(n, "?styling=true"),
						className: Qe.a.button,
						onClick: this.customizeAppearance
					}, o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.customizeAppearance"
					})), o.a.createElement("div", {
						className: Qe.a.subtext
					}, o.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.onlyModerators"
					})), e === Je && o.a.createElement(Le, {
						withOverlay: !0,
						toggleModal: a,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var et = Object(i.b)(Xe, (e, t) => {
					let {
						subredditId: s,
						subredditName: r
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(L.i)(Je))
					}
				})(Object(Y.b)($e)),
				tt = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				st = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				rt = s("./src/reddit/models/Widgets/index.ts"),
				nt = s("./src/reddit/selectors/communityFlairs.ts"),
				at = s("./src/reddit/selectors/experiments/topPosts.ts"),
				ot = s("./src/reddit/selectors/listings.ts"),
				it = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				ct = s.n(it);
			const dt = 250,
				lt = 270,
				mt = l.a.wrapped(j.a, "SidebarContainer", ct.a),
				ut = Object(c.c)({
					apiError: ot.c,
					apiPending: ot.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(nt.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(nt.c)(e, s)
					},
					language: A.T,
					showGovernance: $.d.spPoints,
					showLeaderboard: $.d.spLeaderboard,
					widgets: te.u
				}),
				pt = Object(i.b)(ut);
			class ht extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const s = this.getRelatedCommunitiesWidgetData();
						return s ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: Object(I.c)("Related Communities"),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign({}, this.getPostFlairWidget(), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: rt.d.Cloud,
							shortName: Object(I.c)("Filter by flair"),
							templates: this.props.communityFlairModels
						})
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, s = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !n()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						language: t,
						listingName: s,
						showGovernance: r,
						showLeaderboard: n,
						subredditId: a,
						subredditName: i,
						topPostsVariant: c
					} = this.props;
					let l = 0;
					const u = Object(at.a)(c),
						p = Object(at.b)(c),
						h = Object(at.c)(c),
						f = u || p,
						v = this.getCommunityWidgets(),
						j = this.makeFlairFilterWidget(),
						P = this.makeRelatedCommunitiesWidget(u, p),
						_ = !u,
						N = p,
						k = o.a.createElement(C.a, {
							placement: d.c.ABOVE_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: st.a.FIRST,
							sizes: d.h
						});
					return o.a.createElement(mt, {
						className: e
					}, E(s) && o.a.createElement(y.a, {
						listingName: s
					}), o.a.createElement(b, {
						cardClassName: ct.a.card,
						subredditId: a
					}), f && o.a.createElement(S.a, null, o.a.createElement(Ce, {
						subredditName: i,
						topPostsVariant: c
					}, o.a.createElement("div", {
						className: ct.a.inFeedAd
					}, k))), f && P && o.a.createElement(S.a, null, o.a.createElement(tt.a, {
						subredditName: i,
						truncateThreshold: lt,
						widget: P
					})), N && v.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(S.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(tt.a, {
							subredditName: i,
							truncateThreshold: dt,
							widget: e
						}))
					}), o.a.createElement(m.a, {
						className: ct.a.card,
						subredditId: a
					}), o.a.createElement(et, {
						language: t,
						subredditId: a,
						subredditName: i
					}), r && o.a.createElement(g.a, {
						className: ct.a.card,
						subredditId: a
					}), j && o.a.createElement(S.a, null, o.a.createElement(tt.a, {
						subredditName: i,
						widget: j
					})), n && o.a.createElement(x.a, {
						className: ct.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(O.g, {
						subredditId: a
					}), !f && k, _ && !N && v.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(S.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(tt.a, {
							subredditName: i,
							truncateThreshold: h && s ? lt : h ? dt : void 0,
							widget: e
						}))
					}), o.a.createElement(de, {
						subredditId: a
					}), o.a.createElement(w.a, {
						adComponent: o.a.createElement(C.a, {
							placement: d.c.BELOW_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: st.a.BOTTOM,
							sizes: d.m
						})
					}))
				}
			}
			t.a = pt(ht)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(u),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const y = b.a.button("IconButton", p.a),
				f = b.a.wrapped(l.a, "SubscribeIcon", p.a),
				v = b.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = x(e, ["border", "small"]);
					return n.a.createElement(y, r, n.a.createElement(f, {
						className: Object(h.a)(r.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				O = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = x(e, ["border", "small"]);
					return t ? n.a.createElement(i.f, g({}, r, {
						className: Object(h.a)(r.className, {
							[p.a.isSmall]: s
						})
					})) : n.a.createElement(i.n, g({}, r, {
						className: Object(h.a)(r.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				C = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? n.a.createElement(E, g({}, s, {
						className: Object(h.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : n.a.createElement(O, g({}, s, {
						className: Object(h.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				j = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: r,
						type: a
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return n.a.createElement(y, i, n.a.createElement(v, {
						className: Object(h.a)(o.o, i.className, {
							[p.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				S = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: r,
						type: a
					} = e, o = x(e, ["border", "language", "small", "type"]);
					const d = n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? Object(c.c)("Joined") : Object(c.c)("Following")), n.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === a ? Object(c.c)("Leave") : Object(c.c)("Unfollow"))),
						l = Object(h.a)(o.className, {
							[p.a.isSmall]: r
						});
					return t ? n.a.createElement(i.i, g({}, o, {
						className: l,
						children: d
					})) : n.a.createElement(i.n, g({}, o, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", p.a),
				w = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? n.a.createElement(j, g({}, s, {
						className: Object(h.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : n.a.createElement(S, g({}, s, {
						className: Object(h.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class P extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: r,
						language: o,
						small: i = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? n.a.createElement(w, g({}, c, {
						language: o,
						type: this.props.identifier.type
					})) : n.a.createElement(C, g({}, c, {
						id: r
					}), this.props.children, Object(a.a)(o, "subscriptions.".concat(Object(m.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.b)(a.a))
		},
		"./src/reddit/components/TabBadger/index.m.less": function(e, t, s) {
			e.exports = {
				pillContainer: "_2w46GjyOK9f8VUpIbu6q1B",
				pillContainerStickyBottom: "_7kb4OXAvuR9TsrRqbMJfc",
				pillContainerStickyTop: "_1qh97acYzcSsqej9apaCGC",
				pillTop: "_2G32Ut0BL64CVk7JruZpIz"
			}
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/components/Pill/index.m.less"),
				u = s.n(m);
			var p = e => n.a.createElement("div", {
				className: Object(c.a)(u.a.pill, e.className)
			}, n.a.createElement("button", {
				className: u.a.primaryButton,
				onClick: e.handleClick
			}, e.children), n.a.createElement("button", {
				className: u.a.closeButton,
				onClick: e.handleCloseClick
			}, n.a.createElement(l.a, {
				className: u.a.closeIcon
			})));
			var h = e => {
					let {
						className: t,
						children: s,
						handleClick: r,
						handleCloseClick: a,
						isHidden: o
					} = e;
					const i = o && u.a.pillHidden;
					return n.a.createElement(p, {
						className: Object(c.a)(i, t),
						handleClick: r,
						handleCloseClick: a
					}, s)
				},
				b = s("./src/reddit/constants/page.ts"),
				g = s("./src/reddit/helpers/tabBadging/index.ts");
			const x = "refresh_page_pill",
				y = e => ({
					source: "popup",
					action: "view",
					noun: x
				}),
				f = e => ({
					source: "popup",
					action: "click",
					noun: x
				});
			var v = s("./src/reddit/selectors/experiments/badging.ts"),
				E = s("./src/reddit/components/TabBadger/index.m.less"),
				O = s.n(E);
			const C = 12 * d.I,
				j = 2 * d.I,
				S = 5e4;
			class w extends r.Component {
				constructor() {
					super(...arguments), this.timer = 0, this.state = {
						isPillHidden: !0
					}, this.badgeFavicon = () => {
						Object(g.b)(), this.activatePill(), window.clearTimeout(this.timer)
					}, this.setTimer = () => {
						const {
							shortTimer: e,
							subredditName: t,
							subscriberCount: s
						} = this.props;
						window.clearTimeout(this.timer), e || t === b.d.All || t === b.d.Popular ? this.timer = window.setTimeout(this.badgeFavicon, j) : s && s > S && (this.timer = window.setTimeout(this.badgeFavicon, C))
					}, this.unbadgeFavicon = () => !this.props.tabBadged && Object(g.b)(!1), this.hidePill = () => this.setState({
						isPillHidden: !0
					}), this.activatePill = () => {
						this.props.sendEvent(y), this.setState({
							isPillHidden: !1
						})
					}, this.handlePillClick = () => {
						this.props.handlePillClick(), this.props.sendEvent(f), this.unbadgeFavicon(), this.hidePill()
					}
				}
				componentDidMount() {
					this.setTimer()
				}
				componentDidUpdate(e, t) {
					e.tabBadged === this.props.tabBadged && (this.state.isPillHidden ? (this.unbadgeFavicon(), this.setTimer()) : t.isPillHidden || (this.unbadgeFavicon(), this.hidePill()))
				}
				componentWillUnmount() {
					this.unbadgeFavicon(), window.clearTimeout(this.timer)
				}
				render() {
					const e = Object(v.b)(this.props.variant),
						t = Object(v.c)(this.props.variant),
						s = Object(c.a)(O.a.pillContainer, {
							[O.a.pillContainerStickyTop]: t,
							[O.a.pillContainerStickyBottom]: e
						}),
						r = t && O.a.pillTop;
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(h, {
						className: r,
						handleClick: this.handlePillClick,
						handleCloseClick: this.hidePill,
						isHidden: this.state.isPillHidden
					}, i.fbt._("New Posts", null, {
						hk: "355pK6"
					})))
				}
			}
			var P = w,
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				N = s("./src/reddit/selectors/posts.ts");
			const k = Object(o.c)({
					postCount: N.N,
					tabBadged: e => e.tabBadged,
					variant: e => Object(v.d)(e)
				}),
				I = Object(a.b)(k);
			t.a = I(Object(_.b)(e => 0 !== e.postCount && e.variant ? n.a.createElement(P, {
				handlePillClick: e.handlePillClick,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged,
				variant: e.variant
			}) : null))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var r = s("./node_modules/path-browserify/index.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/ListingSort/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/listingSorts.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/trackers/navigation.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/TimeSort/index.m.less"),
				w = s.n(S),
				P = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "TimeSort--SortPicker",
				k = Object(l.a)(v.a),
				I = (e, t, s) => {
					let r = e.url;
					return e.urlParams.sort || Object(y.H)(e) || (r = n.a.join(r, t)), Object(m.a)(r, {
						[x.t]: s
					})
				},
				L = P.a.div("ListingSortContainer", w.a),
				T = Object(y.t)(),
				M = Object(c.c)({
					dropdownIsOpen: Object(C.b)(N),
					language: j.T
				}),
				B = Object(i.b)(M, e => ({
					onOpenDropdown: () => e(Object(p.g)({
						tooltipId: N
					}))
				}));
			t.a = T(B(Object(b.b)(e => o.a.createElement(L, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, o.a.createElement(h.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, o.a.createElement(h.b, {
				className: e.buttonClassName,
				displayText: g.b[e.timeSort],
				id: N,
				showDropdownTriangle: !0
			})), o.a.createElement(f.a.Consumer, null, t => o.a.createElement(k, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: N
			}, t), [u.Pb.HOUR, u.Pb.DAY, u.Pb.WEEK, u.Pb.MONTH, u.Pb.YEAR, u.Pb.ALL].map(t => o.a.createElement(E.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: g.b[t],
				href: I(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(O.f)(t))
				}
			}))))))))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const l = a.a.div("WidgetBackground", c.a),
				m = a.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return n.a.createElement("div", s, n.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				h = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const g = Object(i.c)({
				language: b.T
			});
			var x = Object(a.b)(g, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(h.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(h.e()),
						onUnsubscribe: () => e(h.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				y = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				P = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(P);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return L
			}));
			const k = e => n.a.createElement(y.a, {
					className: Object(d.a)(_.a.Container, {
						[_.a.rails]: !!e.railsWidgetsVariant
					}, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.railsWidgetsVariant ? "" : e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, !!e.railsWidgetsVariant && n.a.createElement(u.a, {
					className: _.a.WidgetTitle
				}, e.title), n.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? n.a.createElement(E.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : n.a.createElement(n.a.Fragment, null, e.isError ? n.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || Object(O.c)("Something went wrong.")) : n.a.createElement(n.a.Fragment, null, e.communities.map(t => n.a.createElement(L, N({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					railsWidgetsVariant: e.railsWidgetsVariant,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && n.a.createElement(v.n, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(i.c)({
					hideNSFWPref: b.z,
					language: b.T
				}),
				L = Object(a.b)(I)(e => n.a.createElement("div", {
					className: _.a.communityItemContainer
				}, n.a.createElement(j.a, {
					widthRight: f.u
				}, n.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? n.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : n.a.createElement(C.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), n.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, n.a.createElement(o.a, {
					className: _.a.communityName,
					to: Object(w.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(w.b)(e.name, e.type)), n.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && n.a.createElement("p", {
					className: _.a.subscriberCount
				}, Object(c.c)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && n.a.createElement(m.b, {
					flair: {
						type: S.f.Nsfw,
						text: "nsfw"
					}
				}))), !e.railsWidgetsVariant && (e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? n.a.createElement(E.a, {
					className: Object(d.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : n.a.createElement(v.n, {
					className: Object(d.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? n.a.createElement(x, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : n.a.createElement(p.a, {
					disabled: e.buttonDisabled,
					identifier: {
						name: e.name,
						type: e.type
					},
					getEventFactory: e.getSubscribeEventFactory,
					small: !0
				}))), !!e.description && n.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/posts.ts"),
				n = s("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === r.a.PROFILE ? Object(n.c)(e) : Object(n.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2j6XpwwZyn7dNcfH7Blz0B",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				rails: "_2ucwLgmYT_bEawlfA81Q3L",
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				WidgetTitle: "g-Bp8lR31etQDRRiyWCDU",
				widgetTitle: "g-Bp8lR31etQDRRiyWCDU"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				y = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				C = s.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const w = 129,
				P = Object(b.t)({
					filterName: e => Object(b.R)(e)[h.f],
					url: e => Object(b.V)(e)
				}),
				_ = Object(i.c)({
					subredditId: (e, t) => Object(E.G)(e, t.subredditName)
				}),
				N = Object(o.b)(_),
				k = l.a.div("WidgetContent", C.a),
				I = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: r
					} = e, n = S(e, ["display", "isFlairFilter", "onMouseDown"]);
					return a.a.createElement("li", {
						className: Object(c.a)(C.a.StyledFlair, t === v.d.Cloud && C.a.cloudDisplay, {
							[C.a.flairFilter]: s,
							[C.a["m-selected"]]: n.isSelected
						}),
						onMouseDown: r
					}, a.a.createElement(m.b, j({}, n, {
						className: C.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class L extends a.a.Component {
				constructor(e) {
					super(e), this.flairListRef = a.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(f.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(f.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(f.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(f.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(y.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(y.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > w && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return a.a.createElement(g.n, {
						className: C.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? r.fbt._("See more", null, {
						hk: "2fWFes"
					}) : r.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return a.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => a.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? w : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return a.a.createElement("div", {
						className: C.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return a.a.createElement("ul", null, a.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, r = t.order, n = this.getFlairsFromIds(r), o = e && this.getSelectedFlair(n) || void 0, i = t.order.length > r.length || s && !o;
					return a.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, a.a.createElement(k, null, o && this.renderSelectedFlairFilter(o), !o && this.renderFlairFilters(n), i && this.renderButton()))
				}
			}
			t.a = P(N(Object(u.b)(L)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/helpers/dom/index.ts"),
				p = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				y = s.n(x);
			const f = d.a.div("RuleShortName", y.a),
				v = d.a.div("RuleIndex", y.a),
				E = d.a.div("RuleTitle", y.a),
				O = d.a.div("RuleDescription", y.a),
				C = d.a.wrapped(l.a, "RawHTMLDisplay", y.a),
				j = {};
			class S extends n.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: r
					} = this, a = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !r(e) && !!a;
					return n.a.createElement(f, {
						className: Object(c.a)({
							[y.a.pointerCursor]: o
						}),
						onClick: r(e) || !a ? void 0 : s
					}, n.a.createElement(b.a, null, n.a.createElement(v, null, "".concat(e.humanIndex, ".")), n.a.createElement(E, null, "".concat(e.rule.shortName)), n.a.createElement("div", null, !r(e) && a && (t.isVisible ? n.a.createElement(h.a, {
						className: y.a.Chevron
					}) : n.a.createElement(p.a, {
						className: y.a.Chevron
					})))), t.isVisible && n.a.createElement(O, null, e.rule.descriptionRichText ? n.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: j
					}) : e.rule.descriptionHtml ? n.a.createElement(C, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return w
			}));
			const w = Object(i.a)(e => e.rules.length > 0 ? n.a.createElement(o.a, {
				className: e.className,
				styles: e.styles,
				title: Object(a.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return n.a.createElement(S, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => n.a.createElement(w, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(p.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, p.defaults);
			var b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				y = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(E.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(E.a)(e).widgetColors.sidebarWidgetHeaderColor,
				j = e => {
					const t = O(e);
					return Object(v.f)(t)
				},
				S = e => {
					const t = C(e);
					return Object(v.f)(t)
				};
			var w = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				P = s.n(w);
			const _ = Object(m.t)(),
				N = Object(a.b)(() => Object(o.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							r = t.redditStyle || Object(y.m)(e, {
								subredditId: s
							}),
							n = Object(f.V)(e);
						return r || n
					},
					nigtmode: f.V,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = j(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = S(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: r,
						headerButton: a,
						onClick: o,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? P.a.widgetContentOnly : P.a.widgetContent, h = !r && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(i.a)(t, P.a.widgetBackground, {
							[P.a.redditStyle]: r,
							[P.a.clickable]: !!o,
							[P.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: o,
						style: g
					}, c && n.a.createElement("div", {
						className: P.a.widgetHeader,
						style: x
					}, n.a.createElement("div", {
						className: Object(i.a)(P.a.widgetTitle, l)
					}, n.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), a), n.a.createElement("div", {
						className: Object(i.a)(p, {
							[P.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(u.n, {
						className: P.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, n.a.createElement(b.c, null, "See More")))
				}
			}
			t.a = _(N(Object(c.a)(Object(l.b)(k))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/linkMatchers/index.ts"),
				h = s("./src/reddit/models/Image/index.tsx"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Widgets/Button/index.m.less"),
				v = s.n(f);
			const E = (e, t, s) => {
					let r = {},
						n = {};
					r = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: r,
							fillColor: n,
							textColor: a
						} = e;
						return t && (r = a = s, n = "transparent"), {
							"--widget-button-background-color": "".concat(n || "transparent"),
							"--widget-button-border": "1px solid ".concat(r),
							"--widget-button-color": "".concat(a || r)
						}
					})(e, t, s);
					const a = e.hoverState || e;
					if (a.kind === g.f.Image) n = {
						"--widget-button-hover-background-image": "url('".concat(a.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: r,
							textColor: o
						} = a;
						t && (e = o = s, r = "transparent"), n = {
							"--widget-button-hover-background-color": "".concat(r || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(o || e)
						}
					}
					return Object.assign({}, r, n)
				},
				O = e => e.kind === g.f.Image ? v.a.imageButton : v.a.textButton,
				C = e => {
					const t = Object(g.n)(e),
						s = Object(p.g)(p.e, t);
					return s ? s.url : e.url
				},
				j = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, r = Object(b.a)(e).button;
					return n.a.createElement(d.i, {
						className: O(t),
						style: E(t, s, r)
					}, t.kind === g.f.Text && n.a.createElement("span", {
						className: t.hoverState ? v.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && n.a.createElement("span", {
						className: v.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				S = e => n.a.createElement(l.a, {
					href: C(e.button),
					isSponsored: !1,
					source: null
				}, n.a.createElement(j, e)),
				w = u.a.wrapped(i.a, "RawHTMLDisplay", v.a);
			var P = Object(a.b)(() => Object(o.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: y.V
				}))(e => n.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && n.a.createElement(w, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => n.a.createElement(S, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				_ = s("./src/lib/humanizeDate/index.ts"),
				N = s("./src/reddit/controls/TextButton/index.tsx"),
				k = s("./src/reddit/i18n/utils.ts"),
				I = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = s.n(I);
			const T = 100,
				M = {
					isExpanded: !1
				},
				B = u.a.wrapped(i.a, "RawHTMLDisplay", L.a),
				R = u.a.div("EventContainer", L.a),
				F = u.a.div("EventTitle", L.a),
				D = u.a.div("EventDate", L.a),
				A = u.a.div("EventLocation", L.a),
				W = u.a.div("EventDescription", L.a),
				H = u.a.wrapped(N.a, "ToggleDescription", L.a);
			class V extends n.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > T ? n.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, T), n.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(k.c)("read less") : Object(k.c)("...read more"))) : n.a.createElement(W, null, e.text)
				}
			}
			const U = Object(o.c)({
				language: y.T
			});
			var G = Object(a.b)(U)(e => n.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => n.a.createElement(R, {
					key: "".concat(s, "-").concat(t.title)
				}, n.a.createElement(F, null, t.titleHtml ? n.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && n.a.createElement(D, null, Object(_.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && n.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						r = t.getMinutes();
					return r < 10 ? "".concat(s, ":0").concat(r) : "".concat(s, ":").concat(r)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && n.a.createElement(A, null, t.locationHtml ? n.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && n.a.createElement(V, {
					language: e.language,
					text: t.description
				}))))),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var q = Object(z.b)(e => n.a.createElement(K.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Q = Object(o.c)({
					stylesheet: e => e.stylesheets
				}),
				Z = Object(a.b)(Q),
				J = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class Y extends n.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = J(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, n.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var X = Z(Y),
				$ = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = s.n($);
			var te = u.a.div("ImageFrame", ee.a),
				se = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				re = s.n(se);
			var ne = u.a.img("StyledImage", re.a);
			class ae extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						r = n.a.createElement(te, null, n.a.createElement(ne, {
							alt: Object(k.c)("Widget image"),
							src: s.url
						}));
					return s.linkUrl ? n.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, r) : r
				}
			}
			var oe = ae,
				ie = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				de = s("./src/reddit/controls/InternalLink/index.tsx"),
				le = s("./src/reddit/icons/fonts/helpers.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				ue = s.n(me);
			var pe = u.a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(le.b)("envelope"), " ").concat(e.className)
				}), "Envelope", ue.a),
				he = s("./src/reddit/models/Flair/index.ts"),
				be = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = s.n(be);
			const xe = u.a.div("ModeratorListItem", ge.a),
				ye = u.a.div("Username", ge.a),
				fe = u.a.a("MessageModsLink", ge.a),
				ve = u.a.wrapped(ce.b, "FlairComponent", ge.a),
				Ee = e => e.authorFlairType === he.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				Oe = e => n.a.createElement(ye, null, "u/".concat(e)),
				Ce = u.a.wrapped(de.a, "InternalLink", ge.a),
				je = u.a.div("LinkContainer", ge.a);
			var Se = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return n.a.createElement(c.a, {
						styles: s.styles,
						title: Object(k.c)("Moderators"),
						headerButton: n.a.createElement(fe, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, n.a.createElement(pe, null))
					}, s.mods.map(e => n.a.createElement(xe, {
						key: e.name
					}, (e => n.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, Oe(e.name)))(e), n.a.createElement(ve, {
						flair: Ee(e),
						forceSmallEmojis: !0
					}))), n.a.createElement(je, null, n.a.createElement(Ce, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(k.c)("View All Moderators"))))
				},
				we = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Pe = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				_e = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ne = s.n(_e);
			const ke = u.a.div("WidgetContent", Ne.a),
				Ie = u.a.wrapped(i.a, "RawHTMLDisplay", Ne.a);
			var Le = e => n.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, n.a.createElement(ke, null, n.a.createElement(Ie, {
					html: e.widget.textHtml || ""
				}))),
				Te = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Me = e => n.a.createElement(Te.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Se;
						case "textarea":
							return Le;
						case "button":
							return P;
						case "subreddit-rules":
							return Pe.b;
						case "community-list":
							return q;
						case "calendar":
							return G;
						case "image":
							return oe;
						case "custom":
							return X;
						case "post-flair":
							return we.a;
						default:
							return Me
					}
				}(e.widget);
				return n.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const E = v(),
				O = {
					apiError: b.c,
					apiPending: b.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: b.g,
					postsById: x.T,
					postIds: Object(a.a)((e, t) => {
						let {
							listingKey: s,
							listingName: r,
							inSubredditOrProfile: n
						} = t;
						return Object(x.F)(e, s, r, n)
					}),
					subredditsById: y.Y,
					viewportDataLoaded: f.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => p.a
				},
				C = Object(n.c)(O),
				j = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.x(t))
					},
					trackOnPostEnteredViewport: (t, s, r) => {
						e(i.A(t, r))
					},
					trackOnPostExitedViewport: (t, s, r, n) => {
						e(i.B(t, r, n))
					}
				}),
				S = Object(r.b)(C, j, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: u.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(E(S(e)))
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/selectors/user.ts");
			const o = Object(n.c)({
				language: a.T
			});

			function i(e) {
				return Object(r.b)(o)(e)
			}
		},
		"./src/reddit/constants/countrySorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/i18n/utils.ts");
			const a = {
				[r.v.Everywhere]: Object(n.c)("everywhere"),
				[r.v.UnitedStates]: Object(n.c)("united states"),
				[r.v.Argentina]: Object(n.c)("argentina"),
				[r.v.Australia]: Object(n.c)("australia"),
				[r.v.Bulgaria]: Object(n.c)("bulgaria"),
				[r.v.Canada]: Object(n.c)("canada"),
				[r.v.Chile]: Object(n.c)("chile"),
				[r.v.Colombia]: Object(n.c)("colombia"),
				[r.v.Croatia]: Object(n.c)("croatia"),
				[r.v.CzechRepublic]: Object(n.c)("czech republic"),
				[r.v.Finland]: Object(n.c)("finland"),
				[r.v.Greece]: Object(n.c)("greece"),
				[r.v.Hungary]: Object(n.c)("hungary"),
				[r.v.Iceland]: Object(n.c)("iceland"),
				[r.v.India]: Object(n.c)("india"),
				[r.v.Ireland]: Object(n.c)("ireland"),
				[r.v.Japan]: Object(n.c)("japan"),
				[r.v.Malaysia]: Object(n.c)("malaysia"),
				[r.v.Mexico]: Object(n.c)("mexico"),
				[r.v.NewZealand]: Object(n.c)("new zealand"),
				[r.v.Philippines]: Object(n.c)("philippines"),
				[r.v.Poland]: Object(n.c)("poland"),
				[r.v.Portugal]: Object(n.c)("portugal"),
				[r.v.PuertoRico]: Object(n.c)("puerto rico"),
				[r.v.Romania]: Object(n.c)("romania"),
				[r.v.Serbia]: Object(n.c)("serbia"),
				[r.v.Singapore]: Object(n.c)("singapore"),
				[r.v.Sweden]: Object(n.c)("sweden"),
				[r.v.Taiwan]: Object(n.c)("taiwan"),
				[r.v.Thailand]: Object(n.c)("thailand"),
				[r.v.Turkey]: Object(n.c)("turkey"),
				[r.v.UnitedKingdom]: Object(n.c)("united kingdom")
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/i18n/utils.ts");
			const a = {
					[r.N.BEST]: Object(n.c)("best"),
					[r.N.HOT]: Object(n.c)("hot"),
					[r.N.NEW]: Object(n.c)("new"),
					[r.N.CONTROVERSIAL]: Object(n.c)("controversial"),
					[r.N.RISING]: Object(n.c)("rising"),
					[r.N.TOP]: Object(n.c)("top")
				},
				o = {
					[r.Pb.HOUR]: Object(n.c)("Now"),
					[r.Pb.DAY]: Object(n.c)("Today"),
					[r.Pb.WEEK]: Object(n.c)("This week"),
					[r.Pb.MONTH]: Object(n.c)("This month"),
					[r.Pb.YEAR]: Object(n.c)("This year"),
					[r.Pb.ALL]: Object(n.c)("All time")
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = n.a.createContext({})
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			class a extends n.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, a = s || r;
					return n.a.createElement("div", {
						className: e.className
					}, s && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), !a && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				E = s.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const j = e => Object(c.a)(E.a.iconStyles, e.className, {
					[E.a.mDisabled]: e.disabled,
					[E.a.mRedditStyle]: e.redditStyle
				}),
				S = e => {
					var {
						isActive: t
					} = e, s = C(e, ["isActive"]);
					return n.a.createElement("button", O({
						className: Object(c.a)(E.a.layoutButton, {
							[E.a.mIsActive]: t
						})
					}, s))
				},
				w = Object(i.e)("listings.layoutSwitcher.label"),
				P = Object(i.e)("listings.layoutSwitcher.card"),
				_ = Object(i.e)("listings.layoutSwitcher.classic"),
				N = Object(i.e)("listings.layoutSwitcher.compact"),
				k = [{
					layout: u.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: r
						} = e, a = C(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(b.a, O({
							className: j({
								className: t,
								disabled: s,
								redditStyle: r
							})
						}, a))
					},
					tooltipTranslation: P
				}, {
					layout: u.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: r
						} = e, a = C(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(p.a, O({
							className: j({
								className: t,
								disabled: s,
								redditStyle: r
							})
						}, a))
					},
					tooltipTranslation: _
				}, {
					layout: u.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: r
						} = e, a = C(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(h.a, O({
							className: j({
								className: t,
								disabled: s,
								redditStyle: r
							})
						}, a))
					},
					tooltipTranslation: N
				}],
				I = Object(x.t)(),
				L = Object(o.c)({
					language: f.T,
					postLayout: x.M,
					redditStyle: x.B
				}),
				T = Object(a.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = I(T(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, r = e.layout || u.e[e.postLayout];
				return n.a.createElement("div", {
					className: Object(c.a)(E.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, n.a.createElement("div", {
					className: E.a.title
				}, w(e.language)), n.a.createElement("div", {
					className: E.a.iconContainer
				}, k.map(a => {
					const o = () => (r => {
							e.onChange ? e.onChange(r) : (e.onListingLayoutChange(r, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: r,
								screen: Object(y.screen)(e),
								subreddit: Object(y.subreddit)(e)
							})))
						})(a.layout),
						i = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + a.layout,
						l = a.layout === r;
					return n.a.createElement(S, {
						"aria-label": a.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: a.layout,
						onClick: o,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: o
					}, n.a.createElement(a.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), n.a.createElement(d.c, {
						className: E.a.tooltip,
						tooltipId: c,
						text: a.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const u = o.a.span("metaText", l.a),
				p = e => n.a.createElement(u, e, " · "),
				h = Object(a.d)("comment.point"),
				b = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: r,
						useUpvotes: a
					} = e, o = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(r),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], r), "\n  ")),
						p = t ? Object(c.c)("Score hidden") : a ? l : h(s, r, {
							count: d
						});
					return n.a.createElement(u, o, p)
				},
				g = (e, t) => {
					const s = Object(a.c)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return n.a.createElement(u, null, s)
				}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, s) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, s) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts");
			const d = {
				leading: !0,
				trailing: !1
			};
			var l = function(e, t, s) {
					let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
					const n = Object.assign({}, d, r),
						a = t > e ? 1 : -1;
					let o = e;
					if (e !== t) {
						for (n.leading || (o += a); o !== t;) s(o), o += a;
						n.trailing && s(o)
					} else(n.leading || n.trailing) && s(e)
				},
				m = s("./src/lib/forEachGroup/index.ts"),
				u = s("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				h = s.n(p);
			class b extends a.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return o.a.createElement("div", {
						className: Object(c.a)(h.a.entry, this.props.disabled && h.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			s("./node_modules/core-js/modules/es6.symbol.js");
			var g = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				x = s.n(g);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				},
				v = e => {
					var {
						className: t,
						children: s,
						title: r
					} = e, n = f(e, ["className", "children", "title"]);
					return o.a.createElement("div", y({
						className: Object(c.a)(x.a.dropdownSection, t)
					}, n), r && o.a.createElement("div", {
						className: x.a.title
					}, r), s)
				},
				E = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/lib/lessComponent.tsx"),
				C = s("./src/reddit/components/SubredditIcon/index.tsx"),
				j = s("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				S = s("./src/reddit/icons/svgs/Link/index.tsx"),
				w = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				P = s("./src/reddit/icons/svgs/Video/index.tsx"),
				_ = s("./src/reddit/layout/row/Inline/index.tsx"),
				N = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				k = s.n(N);
			const I = [{
				type: "text",
				Icon: w.a
			}, {
				type: "images",
				Icon: j.a
			}, {
				type: "videos",
				Icon: P.a
			}, {
				type: "links",
				Icon: S.a
			}];
			var L = e => {
					const {
						allowedPostTypes: t,
						className: s
					} = e;
					return o.a.createElement(_.a, {
						className: Object(c.a)(k.a.rowStyle, s)
					}, I.map(e => {
						let {
							type: s,
							Icon: r
						} = e;
						return o.a.createElement("div", {
							className: Object(c.a)(k.a.iconWrapper, {
								[k.a.mDisabled]: !t[s]
							})
						}, o.a.createElement(r, null))
					}))
				},
				T = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				M = s.n(T);
			const B = O.a.wrapped(C.b, "subredditIcon", M.a);
			var R = e => {
					const {
						highlight: t,
						icon: s,
						title: r,
						secondaryText: n,
						item: a
					} = e, {
						allowedPostTypes: i
					} = a;
					return o.a.createElement("div", {
						className: Object(c.a)(M.a.container, {
							[M.a.mHighlight]: t
						})
					}, s, o.a.createElement("div", {
						className: M.a.main
					}, o.a.createElement("span", {
						className: M.a.title
					}, r), n && o.a.createElement("span", {
						className: M.a.secondary
					}, n)), t && i && o.a.createElement(L, {
						allowedPostTypes: i
					}))
				},
				F = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				D = s.n(F);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(i.d)("listings.subscribers");
			var H = e => {
				const {
					language: t,
					item: {
						name: s,
						iconUrl: r,
						subscribers: n
					}
				} = e, a = Object(E.c)(s), i = void 0 !== n ? W(t, n) : void 0, c = o.a.createElement(B, {
					className: D.a.profileIcon,
					iconUrl: r
				});
				return o.a.createElement(R, A({
					icon: c,
					title: a,
					secondaryText: i
				}, e))
			};

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = Object(i.d)("listings.subscribers");
			var G = e => {
					const {
						language: t,
						item: {
							primaryColor: s,
							iconUrl: r,
							name: n,
							subscribers: a
						}
					} = e, i = Object(E.b)(n), c = void 0 !== a ? U(t, a) : void 0, d = o.a.createElement(B, {
						iconUrl: r,
						primaryColor: s,
						redditStyle: !0
					});
					return o.a.createElement(R, V({
						icon: d,
						title: i,
						secondaryText: c
					}, e))
				},
				z = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				K = s.n(z);
			const q = Object(i.e)("subredditPicker.noCommunitiesFound"),
				Q = {
					[u.a.OWN_PROFILE]: Object(i.e)("subredditPicker.sectionOwnProfile"),
					[u.a.SUBSCRIBED_TO_SUBREDDIT]: Object(i.e)("subredditPicker.sectionSubscriptions"),
					[u.a.OTHER_SUBREDDIT]: Object(i.e)("subredditPicker.sectionOthers"),
					[u.a.MODERATED_SUBREDDIT]: Object(i.e)("subredditPicker.sectionModeratedSubreddits")
				};
			t.a = class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = n()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case u.a.OWN_PROFILE:
							return H;
						default:
							return G
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						language: s
					} = this.props, r = [];
					return this.props.showNoMatchesCaption && r.push(o.a.createElement(v, {
						key: "no-matches"
					}, o.a.createElement("div", {
						className: K.a.noMatches
					}, s && q(s)))), Object(m.a)(t, {
						keyFn: e => e.type
					}, (n, a, i, c) => {
						const d = [];
						l(i, c, r => {
							const n = t[r],
								a = r === e,
								i = this.getEntryContentComponent(n.type, n.name);
							i && d.push(o.a.createElement(b, {
								entryIndex: r,
								disabled: n.disabled,
								key: n.id || n.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, o.a.createElement(i, {
								language: s,
								highlight: a,
								item: n
							})))
						});
						const m = Q[a];
						r.push(o.a.createElement(v, {
							key: a,
							title: m && m(s),
							children: d
						}))
					}), o.a.createElement("div", {
						className: Object(c.a)(K.a.container, this.props.className, {
							[K.a.mIsValid]: this.props.isValid,
							[K.a.mIsVisible]: r.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, r)
				}
			}
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, a = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, s, r) {
				return Object(o.a)(e, {
					endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
					method: "patch",
					data: r
				})
			}
			async function c(e, t) {
				const s = await async function(e, t, s) {
					return Object(o.a)(e, {
						endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function d(e, t, s, n) {
					const a = await c(e, t),
						o = Object.assign({}, a, {
							[s]: n
						});
					return (await i(e, t, r.UpsellBanners, o)).ok ? o : a
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})), s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return c
				})), s.d(t, "c", (function() {
					return l
				})), s.d(t, "e", (function() {
					return m
				})), s.d(t, "d", (function() {
					return u
				})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(n || (n = {}));
			const l = async (e, t, s) => d(e, t, s, !0), m = async (e, t, s) => d(e, t, s, !1), u = (e, t) => i(e, t, r.UpsellBanners, Object.keys(n).reduce((e, t) => (e[n[t]] = !1, e), {}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};

			function d(e, t, s) {
				const r = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(r)(e => {
					const {
						featureEnabled: r,
						dispatch: a
					} = e, o = c(e, ["featureEnabled", "dispatch"]);
					return r ? n.a.createElement(t, o) : void 0 !== s ? n.a.createElement(s, o) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === r.a.NO_ADS);
				return !s && !n
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/lib/isFakeSubreddit/index.ts"),
				n = s("./src/reddit/constants/postLayout.ts");
			const a = Math.floor(100 * Math.random());
			var o;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(o || (o = {}));
			t.b = (e, t, s, o, i) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: n.b[t.prefs.layout]
				};
				return o && !Object(r.a)(o.name) && (c.subreddit = o.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = a, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/defaultStyledSVG/index.m.less": function(e, t, s) {
			e.exports = {
				defaultSVG: "_2tsJkJBrXn7yERCuGwPDHh",
				defaultSvg: "_2tsJkJBrXn7yERCuGwPDHh"
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/app/strings/index.ts"),
				n = s("./src/lib/constants/index.ts");

			function a(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: a
				} = e;
				switch (t.type) {
					case n.D.AUTHORIZATION_ERROR:
						return s ? Object(r.a)(a, "error.type.notLoggedIn") : Object(r.a)(a, "error.type.notAuthorized");
					case n.D.VALIDATION_ERROR:
						return Object(r.a)(a, "error.type.validation");
					case n.D.NOT_FOUND_ERROR:
						return Object(r.a)(a, "error.type.notFound");
					case n.D.SERVER_ERROR:
						return Object(r.a)(a, "error.type.server");
					case n.D.LIKELY_UBLOCK_ERROR:
						return Object(r.a)(a, "error.type.blocked");
					default:
						return Object(r.a)(a, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function n(e, t) {
				return Object(r.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(r.a)(e).banner.iconImage ? String(Object(r.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/i18n/utils.ts");

			function n() {
				return window.ethereum
			}

			function a() {
				const e = n();
				return !(!e || !e.isMetaMask)
			}

			function o() {
				const e = n();
				return e && e.selectedAddress || null
			}

			function i() {
				return n().networkVersion || null
			}

			function c() {
				const e = n();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, r, a) {
				const [o, i] = await Promise.all([s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new o.providers.Web3Provider(n()).getSigner(),
					l = new o.Contract(e, i, d),
					m = await l[r](...a);
				return await m.wait()
			}
			const m = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const u = 1;
			async function p(e, t, r, n, a) {
				const o = await s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: p
					} = o.utils,
					h = i(r).add(a),
					b = u,
					g = "0x" + [c(1)].concat([b, i(n), i(a)].map(c).map(e => d(e, 32))).concat(c(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, s, r) {
					return l(e, Promise.resolve(m), "send", [t, s, r])
				}(e, t, h.toString(), g)
			}
			const h = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function b(e, t, s) {
				await c();
				const n = o() || "";
				if (t.toLowerCase() !== n.toLowerCase()) throw new Error(Object(r.c)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(h), "subscribe", [t, s])
			}

			function g(e) {
				const t = n();
				return new Promise((s, n) => {
					const a = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, a],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) n(e);
						else {
							const e = t && t.result;
							e ? s(e) : n({
								message: Object(r.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function x(e) {
				return new Promise((t, s) => {
					n().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, r) => {
						e || "error" in r ? s("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/isUrl/index.ts"),
				o = s("./src/lib/logs/console.ts"),
				i = s("./src/reddit/components/BlankPost/index.tsx"),
				c = s("./src/reddit/components/ClassicPost/index.tsx"),
				d = s("./src/reddit/components/CompactPost/index.tsx"),
				l = s("./src/reddit/components/LargePost/index.tsx"),
				m = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/react-redux/es/index.js")),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/config.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/actions/inFeedChaining.ts"),
				g = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				f = s("./src/reddit/components/CallToActionButton/index.tsx"),
				v = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				E = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				O = s("./src/reddit/components/FlairWrapper/index.tsx"),
				C = s("./src/reddit/components/Flatlist/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = s("./src/reddit/components/ModModeReports/index.tsx"),
				w = s("./src/reddit/components/ModModeReports/helpers.ts"),
				P = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				_ = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				k = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				I = s("./src/reddit/components/PostTitle/index.tsx"),
				L = s("./src/reddit/components/PostTopLine/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				M = s("./src/reddit/components/SourceLink/index.tsx"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				D = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				A = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				W = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/models/Vote/index.ts"),
				U = s("./src/reddit/selectors/experiments/categories.ts"),
				G = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				z = s("./src/reddit/selectors/inFeedChaining.ts"),
				K = s("./src/reddit/selectors/moderatorPermissions.ts"),
				q = s("./src/reddit/selectors/monthsToMinutes.ts"),
				Q = s("./src/reddit/selectors/postFlair.ts"),
				Z = s("./src/reddit/selectors/posts.ts"),
				J = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				X = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = s.n(X),
				ee = s("./src/reddit/components/MediumPost/index.m.less"),
				te = s.n(ee);
			var se = Object(m.b)(() => Object(u.c)({
					crosspost: Z.c,
					currentUser: J.i,
					flairStyleTemplate: R.Q,
					hideNSFWPref: J.z,
					isActive: Z.g,
					isCurrentUserProfilePost: Z.h,
					isFrontpageHome: q.g,
					isM2MHomeRedirectEnabled: G.c,
					isPostChainDismissed: z.c,
					isPostChained: z.d,
					language: J.T,
					moderatorPermissions: K.i,
					modModeEnabled: R.O,
					post: Z.I,
					showEditFlair: Q.a,
					showMedia: R.r,
					isInCategoriesExperiment: U.a,
					subredditOrProfile: Z.U
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: r,
						postId: n
					} = t;
					return {
						chainPost: () => {
							r && s && e(Object(b.d)({
								listingKey: s,
								listingName: r,
								postId: n
							}))
						},
						handleVote: t => t === V.a.upvoted ? e(Object(g.N)(n)) : e(Object(g.o)(n)),
						onIgnoreReports: () => e(Object(g.L)(n)),
						onOpenReportsDropdown: t => e(Object(x.g)({
							tooltipId: t
						}))
					}
				})(Object(B.b)(e => {
					const {
						chainPost: t,
						className: s,
						crosspost: r,
						currentUser: a,
						eventFactory: o,
						flairStyleTemplate: i,
						hideNSFWPref: c,
						inSubredditOrProfile: d = !1,
						isCheckboxSelected: l,
						isCommentsPage: m,
						isCurrentUserProfilePost: u,
						isFrontpage: b,
						isFrontpageHome: g,
						isM2MHomeRedirectEnabled: x,
						isOverlay: B,
						isPostChainDismissed: R,
						isPostChained: V,
						language: U,
						listingKey: G,
						listingName: z,
						moderatorPermissions: K,
						modModeEnabled: q,
						onClickPost: Q,
						onIgnoreReports: Z,
						onOpenReportsDropdown: J,
						post: X,
						redditStyle: ee,
						showBulkActionCheckbox: se,
						showEditFlair: re,
						showMedia: ne,
						sendEvent: ae,
						subredditOrProfile: oe,
						toggleCheckbox: ie
					} = e, ce = ee ? void 0 : i, de = Object(W.a)(K), le = q && de, me = Object(A.a)(K), ue = Object(w.c)(X), pe = Object(D.a)(X), he = d && !ne, be = he && !!X.source && !r, ge = !(b && g || u), xe = n.a.createElement(_.a, {
						className: Object(h.a)(te.a.container, s, $.a.largeAndMediumPostStyles, $.a.largeAndMediumActiveStyles, Object(H.a)(e), {
							[$.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: B,
						style: Object(H.b)(e.flairStyleTemplate),
						post: X,
						onClick: Q,
						onPostContentClick: t,
						eventFactory: o
					}, n.a.createElement(k.a, {
						model: X,
						handleVote: e.handleVote,
						showBulkActionCheckbox: se,
						isCheckboxSelected: l,
						toggleCheckbox: ie,
						flairStyleTemplate: ce,
						redditStyle: ee
					}), n.a.createElement(P.a, {
						className: te.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: ce,
						post: X,
						redditStyle: ee
					}, n.a.createElement("article", {
						className: te.a.mainBody
					}, n.a.createElement("div", {
						className: te.a.content,
						"data-click-id": "body"
					}, n.a.createElement(L.a, {
						className: te.a.postTopLine,
						hideNSFWPref: c,
						iconClassName: te.a.postTopLineIcon,
						inSubredditOrProfile: d,
						isCommentsPage: m,
						isCurrentUserProfilePost: u,
						isOverlay: !!B,
						language: U,
						post: X,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: be,
						showSubreddit: !d && !X.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: oe
					}), n.a.createElement(I.c, {
						className: te.a.postTitle,
						post: X,
						redditStyle: ee,
						size: I.b.Large,
						titleColor: ce && ce.postTitleColor,
						isM2MHomeRedirectEnabled: x,
						isOverlay: B
					}), m && (X.flair && X.flair.length > 0 || e.isInCategoriesExperiment) && n.a.createElement(O.a, {
						className: m ? te.a.leftPadding : null,
						disableFlair: !m,
						post: X,
						sendEvent: ae,
						showCategoryTag: e.isInCategoriesExperiment && m
					}), X.source && !X.isSponsored && !r && n.a.createElement(M.a, {
						className: te.a.sourceLink,
						isCommentsPage: m,
						post: X
					})), !he && pe && n.a.createElement(Y.a, {
						crosspost: r ? X : void 0,
						hasModPostPerms: de,
						isCommentsPage: m,
						isOverlay: B,
						modModeEnabled: q,
						post: r || X,
						redditStyle: ee,
						shouldShowSubscribeButton: ge && !d,
						subredditOrProfile: oe,
						templatePlaceholderImage: ce && ce.postPlaceholderImage
					})), X.source && X.source.url && X.isSponsored && n.a.createElement(y.a, {
						className: te.a.adLinkWrapper
					}, n.a.createElement(F.a, {
						href: X.source.url.replace(p.a.redditUrl, ""),
						isSponsored: X.isSponsored,
						source: X.source
					}, X.source.displayText), X.callToAction && n.a.createElement(f.a, {
						href: X.source.url.replace(p.a.redditUrl, ""),
						isSponsored: X.isSponsored,
						source: X.source,
						isNotCardView: !0
					}, X.callToAction)), q && de && ue && n.a.createElement(S.a, {
						className: te.a.modModeReports,
						language: U,
						onIgnoreReports: Z,
						reportable: X
					}), n.a.createElement(j.d, {
						postId: X.id
					}), n.a.createElement("div", {
						className: te.a.flatlistContainer
					}, n.a.createElement(v.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ce,
						redditStyle: ee,
						model: X,
						onVoteClick: e.handleVote
					}), n.a.createElement(C.c, {
						currentUser: a,
						hasModFlairPerms: me,
						hasModPostPerms: de,
						isOverlay: !!B,
						language: U,
						modModeEnabled: q,
						onIgnoreReports: Z,
						onOpenReportsDropdown: J,
						post: X,
						showEditFlair: re,
						tooltipType: B ? T.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(N.h)({
							editPost: !le,
							save: !le,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(n.a.Fragment, null, xe, V && !R && n.a.createElement(E.a, {
						className: te.a.chain,
						listingKey: G,
						listingName: z,
						postId: X.id
					}))
				})),
				re = s("./src/reddit/constants/postLayout.ts"),
				ne = s("./src/reddit/models/Media/index.ts");
			s.d(t, "a", (function() {
				return oe
			})), s.d(t, "b", (function() {
				return de
			}));
			const ae = {
					[re.g.Large]: l.a,
					[re.g.Medium]: se,
					[re.g.Classic]: c.b,
					[re.g.Compact]: d.a
				},
				oe = e => n.a.createElement(i.b, e),
				ie = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				ce = e => !e.media || e.media.type === ne.n.EMBED && !(ne.b.has(e.media.provider) || (e => e.source && e.source.url && e.isSponsored && ie.some(t => e.source.url.startsWith(t)))(e));

			function de(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: r,
					post: n
				} = e;
				if (n.isBlank) return oe;
				const i = !n.media && !!n.source && Object(a.a)(n.source.url),
					c = t && i;
				r === re.g.Large && ce(n) && !c && (r = re.g.Medium);
				const d = ae[r];
				return void 0 === d ? (Object(o.a)(void 0, "Could not find component for layout ".concat(r, ".")), oe) : s && n.isSponsored && r === re.g.Large ? se : d
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh"
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				h = e => Object(r.o)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(a.a)(Object(n.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var r = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/reddit/selectors/widgets.ts"),
				o = s("./src/telemetry/index.ts");
			const i = e => {
					Object(o.a)(Object.assign({}, n.defaults(e), {
						action: r.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					}))
				},
				c = (e, t, s) => {
					const {
						subreddit: i,
						profile: c
					} = Object(a.b)(e, t);
					Object(o.a)(Object.assign({}, n.defaults(e), {
						action: r.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: c,
						source: "id_card",
						subreddit: Object.assign({}, i, {
							categoryName: s
						})
					}))
				},
				d = e => t => ({
					action: r.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: n.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/layers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/telemetry/models/Timer.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: n.subreddit(e),
					actionInfo: Object.assign({}, n.defaults(e).actionInfo, {
						pageType: "layer_maker"
					})
				}),
				o = e => t => Object.assign({
					source: "layer_maker",
					action: "click",
					noun: "create"
				}, n.defaults(t), {
					subreddit: n.subreddit(t),
					user: Object.assign({}, n.defaults(t).user, {
						app_name: "layer_maker"
					}),
					timer: {
						type: r.TimerType.LayerCreationTime,
						millis: e
					}
				}),
				i = e => ({
					source: "layer_maker",
					action: "click",
					noun: "delete",
					subreddit: n.subreddit(e)
				}),
				c = e => t => ({
					source: "layer_maker",
					action: "click",
					noun: "color_picker",
					subreddit: n.subreddit(t),
					actionInfo: Object.assign({}, n.defaults(t).actionInfo, {
						settingValue: e
					})
				}),
				d = e => ({
					source: "layer_maker",
					action: "click",
					noun: "close",
					subreddit: n.subreddit(e)
				})
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			}));
			const r = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				n = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				a = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				o = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				i = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "j", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "g", (function() {
				return f
			}));
			var r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case r.a.LIVE:
							return "stream_live";
						case r.a.VOD:
							return "stream_vod";
						case r.a.UNAVAILABLE:
							return "stream_unavailable";
						default:
							return
					}
				},
				o = (e, t) => {
					if (t) {
						const s = Object(r.i)(e, {
							streamIdFromPath: t.post.id
						});
						return {
							post: n.post(e, t.post.id),
							media: Object.assign({}, n.media(e, t.post.id, void 0, t), {
								type: a(s)
							})
						}
					}
				},
				i = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				c = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}),
				d = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					actionInfo: {
						position: t || 0
					}
				}, o(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, i(t), e && Object.assign({}, o(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, i(t), o(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), o(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, i(t), o(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), o(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), o(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), o(t, e)),
				x = e => t => {
					const s = Object(r.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, o(t, s))
				},
				y = e => t => {
					const s = Object(r.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, o(t, s))
				},
				f = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "r", (function() {
				return p
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "o", (function() {
				return S
			}));
			var r = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => Object.assign({}, n.defaults(e), {
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				o = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, a(e)),
				i = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, a(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, a(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				u = c("view_wiki_page"),
				p = c("view_source"),
				h = c("add_wiki_page_contributor"),
				b = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				x = c("copy_url"),
				y = c("add_wiki_subreddit_contributor"),
				f = c("remove_wiki_subreddit_contributor"),
				v = c("ban_wiki_contributor"),
				E = c("unban_wiki_contributor"),
				O = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				C = {
					[r.a.Inherit]: "subreddit_wiki_perms",
					[r.a.Contributors]: "only_wiki_contributors",
					[r.a.Mods]: "only_mods"
				},
				j = e => t => Object.assign({}, a(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: n.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				S = e => t => Object.assign({}, a(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: n.actionInfo(t, {
						settingValue: C[e]
					})
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/LayerDuplicate/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				className: e.className
			}, n.a.createElement("g", null, n.a.createElement("g", {
				transform: "translate(-78 82.5)"
			}, n.a.createElement("path", {
				d: "M-435,387.5h-7a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h1v2h-1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-1h2v1A3,3,0,0,1-435,387.5Zm3-8h-2v-2a1,1,0,0,0-1-1h-2v-2h2a3,3,0,0,1,3,3Z",
				transform: "translate(526 -448.5)"
			}), n.a.createElement("path", {
				d: "M96-66H89a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h7a3,3,0,0,1,3,3v7A3,3,0,0,1,96-66ZM89-77a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7a1,1,0,0,0-1-1Z"
			}))))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("title", null, "Planet"), n.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), n.a.createElement("g", null, n.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/helpers/defaultStyledSVG/index.m.less"),
				c = s.n(i);
			var d = e => o.a.wrapped(e, "defaultSVG", c.a),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(a.a)(d(e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: e.fill || Object(l.a)(e).actionIcon
			}, n.a.createElement("path", {
				fill: "inherit",
				d: "M11.43375,2.195625 C11.031875,1.831875 10.3125,2.116875 10.3125,2.6590625 L10.3125,5.9096875 C10,5.975625 9.2321875,6.0775 8.675625,6.2209375 C3.85875,7.4628125 0.5928125,11.9 0.5928125,16.874375 C0.5928125,17.479375 1.308125,17.7309375 1.6634375,17.24125 C3.67375,14.4715625 6.875,12.561875 10.3125,12.1584375 L10.3125,14.8409375 C10.3125,15.383125 11.031875,15.668125 11.43375,15.304375 L18.673125,8.75 L11.43375,2.195625 Z"
			})))))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), n.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				transform: "translate(3, 4)"
			}, n.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				a = s.n(n);
			t.a = r.a.div("rightAligned", a.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(a.a)(e => n.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
			}, n.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), n.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), n.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var r, n;
			s.d(t, "b", (function() {
					return r
				})), s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(r || (r = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(n || (n = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				iframe: "_2c5jkTqwY6PkaTiAs5Ijuu",
				iframeContainer: "_1qwRT12qwOr9otmFG3skug",
				mShowCardView: "_11y6tAK6CZS-RU5Z28vPjw",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				newbieBanner: "_2yjtWm1t0hFL9JDdG1EXR5",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				Container: "_3LltgwlOPMqp9SuLSX3Qcs",
				container: "_3LltgwlOPMqp9SuLSX3Qcs",
				SidebarRight: "_33zikAe_JEyi3Ulm5L3p--",
				sidebarRight: "_33zikAe_JEyi3Ulm5L3p--",
				TrendingPosts: "_31DFU9jVTS4FfS8EjhrehO",
				trendingPosts: "_31DFU9jVTS4FfS8EjhrehO",
				large: "MCFasrNCNYTYDIlH3-nqu"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				n = s.n(r),
				a = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(a),
				i = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = s.n(i),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				m = s.n(l),
				u = s("./node_modules/react/index.js"),
				p = s.n(u),
				h = s("./node_modules/react-redux/es/index.js"),
				b = s("./src/reddit/i18n/components.tsx"),
				g = s("./node_modules/reselect/es/index.js"),
				x = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/extractQueryParams/index.ts"),
				f = s("./src/lib/isAdHocMultireddit/index.ts"),
				v = s("./src/lib/isFakeSubreddit/index.ts"),
				E = s("./src/lib/listingSort/index.ts"),
				O = s("./src/lib/makeListingKey/index.ts"),
				C = s("./src/lib/objectSelector/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/fastdom/index.ts"),
				w = s("./src/lib/performanceTimings/index.tsx"),
				P = s("./src/reddit/actions/pages/subreddit.ts"),
				_ = s("./src/reddit/actions/preferences.ts"),
				N = s("./src/reddit/actions/search.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				I = s("./src/reddit/components/AdHocMultiredditSidebar/index.tsx"),
				L = s("./src/reddit/components/CategoriesNavigation/index.tsx"),
				T = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				M = s("./src/reddit/components/ContentGate/index.tsx"),
				B = s("./src/reddit/components/CreatePostBanner/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"),
				F = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"),
				D = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				A = s("./src/reddit/components/EmptySubreddit.tsx"),
				W = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				H = s("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				V = s("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				U = s("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				G = s("./src/reddit/components/HeaderImage/index.tsx"),
				z = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				K = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				q = s("./src/reddit/components/JumpToContent/index.tsx"),
				Q = s("./src/reddit/components/LayersEmbed/index.tsx"),
				Z = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				J = s("./src/reddit/components/ListingPostList/index.tsx"),
				Y = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				X = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				$ = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				ee = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				te = s("./src/reddit/components/SubredditSidebar/index.tsx"),
				se = s("./src/reddit/components/TabBadger/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = s("./src/reddit/constants/listings.ts"),
				ae = s("./src/reddit/constants/page.ts"),
				oe = s("./src/reddit/constants/parameters.ts"),
				ie = s("./src/reddit/constants/postLayout.ts"),
				ce = s("./src/reddit/contexts/PageLayer/index.tsx"),
				de = s("./src/reddit/featureFlags/index.ts"),
				le = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				me = s("./src/reddit/helpers/trackers/screenview.ts"),
				ue = s("./src/reddit/layout/page/Listing/index.tsx"),
				pe = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				he = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				be = s("./src/reddit/pages/Topic/SidebarLeft/Loader.ts"),
				ge = s("./src/reddit/selectors/discoveryUnit.ts"),
				xe = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				ye = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				fe = s("./src/reddit/selectors/experiments/generalCleanup.ts"),
				ve = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				Ee = s("./src/reddit/selectors/experiments/topPosts.ts"),
				Oe = s("./src/reddit/selectors/experiments/trending.ts"),
				Ce = s("./src/reddit/selectors/listings.ts"),
				je = s("./src/reddit/selectors/meta.ts"),
				Se = s("./src/reddit/selectors/moderatorPermissions.ts"),
				we = s("./src/reddit/selectors/posts.ts"),
				Pe = s("./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts"),
				_e = s("./src/reddit/selectors/subreddit.ts"),
				Ne = s("./src/reddit/selectors/user.ts"),
				ke = s("./src/reddit/pages/Subreddit/index.m.less"),
				Ie = s.n(ke);

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Te = 5,
				Me = 3,
				Be = Object(ce.t)(),
				Re = Object(C.a)(Object(g.a)((e, t) => {
					let {
						location: s
					} = t;
					return s.search
				}, e => m()([...Object(y.a)(e)]))),
				Fe = Object(g.a)((e, t) => {
					let {
						match: s
					} = t;
					return s.params.subredditName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, Re, Ne.Y, (e, t, s, r) => {
					let n = t;
					!n && Object(v.a)(e) && (n = j.N.HOT);
					const a = Object(P.f)(s, r);
					return Object(P.g)(e, n, s, a)
				}),
				De = Object(g.c)({
					isTopContentDismissed: Ne.Q
				}),
				Ae = Object(g.c)({
					subreddit: (e, t) => Object(_e.B)(e, {
						subredditName: t.match.params.subredditName
					})
				}),
				We = Object(g.c)({
					countryMeta: je.b,
					geopopular: Ne.m
				}),
				He = Object(g.c)({
					isLoggedIn: Ne.K
				}),
				Ve = Object(C.a)((e, t) => {
					const {
						subreddit: s
					} = Ae(e, t), {
						subredditName: r
					} = t.match.params;
					if (s) {
						const n = Fe(e, t),
							a = Object(Se.a)(he.c.config)(e, {
								subredditId: s.id
							}),
							o = Object(we.F)(e, n, r, !0),
							i = !Object(Ce.d)(e, {
								listingKey: n
							});
						if (a && i && o.length <= 1) return !0
					}
					return !1
				}),
				Ue = Object(g.c)({
					exploreV2Variant: (e, t) => {
						if (Object(ce.D)(e, t)) return Object(ye.a)(e)
					},
					generalCleanupVariant: fe.a,
					isPopular: ce.D,
					isInTrendingEntrypointExperiment: Oe.a
				}),
				Ge = e => {
					const t = oe.t in e && e[oe.t].toUpperCase();
					if ("string" == typeof t && t in j.Pb) return j.Pb[t]
				},
				ze = Object(C.a)((e, t) => {
					const {
						sort: s,
						subredditName: r
					} = t.match.params, n = Re(e, t);
					if (s) return Object(E.b)({
						sort: s,
						timeSort: Ge(n)
					});
					if (Object(v.a)(r)) return Object(E.b)({
						sort: j.N.HOT
					});
					const a = Fe(e, t),
						o = e.listings.postOrder.listingSort[a];
					if (o && !o.hasChanged) return Object(E.d)(o.sort);
					const {
						subreddit: i
					} = Ae(e, t);
					if (i) {
						const t = Object(_e.E)(e, {
							subredditId: i.id
						});
						return Object(E.d)(t)
					}
					return Object(E.d)(e.user.prefs.sort)
				}),
				Ke = Object(C.a)((e, t) => {
					const {
						subredditName: s
					} = t.match.params;
					return Object(_e.W)(e, {
						subredditName: s
					})
				}),
				qe = Object(g.c)({
					subredditPremiumEnabled: de.d.spPremiumUpsells,
					isBlacklistedTopContentPage: ge.j,
					language: Ne.T,
					layersEmbedEnabledOnSubreddit: de.d.layersEmbed,
					listingKey: Fe,
					railsWidgetsVariant: ve.d,
					sortParams: ze,
					stellarRegistrationBannerEnabled: de.d.spStellarWalletRegistration,
					topContent: Ke,
					topContentDiscoveryUnit: e => Object(ge.f)(e, {
						unitName: pe.a
					}),
					topPostsVariant: Ee.d,
					walletRegistrationBannerEnabled: de.d.spWalletRegistrationBanner
				}),
				Qe = Object(g.c)({
					categoriesPlacementVariant: xe.a,
					showCreatePostBanner: Ve,
					contentGateInfo: (e, t) => Object(Ne.f)(e, t.match.params.subredditName),
					layout: ce.M,
					isRpanDuVisible: (e, t) => {
						let {
							match: s
						} = t;
						return Object(Pe.a)(e, {
							listingName: "r/".concat(s.params.subredditName)
						})
					},
					rpanInjectionIndex: (e, t) => {
						let {
							match: s
						} = t;
						return Object(Pe.b)(e, {
							listingName: "r/".concat(s.params.subredditName)
						})
					}
				}),
				Ze = () => Object(g.a)(Ne.Y, We, Re, De, Ae, (e, t) => {
					let {
						match: s
					} = t;
					return Object(_e.y)(e, {
						subredditName: s.params.subredditName
					})
				}, He, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.subredditName
				}, Ue, qe, Qe, (e, t, s, r, n, a, o, i, c, d, l) => {
					let {
						countryMeta: m,
						geopopular: u
					} = t, {
						isTopContentDismissed: p
					} = r, {
						subreddit: h
					} = n, {
						isLoggedIn: b
					} = o, {
						exploreV2Variant: g,
						generalCleanupVariant: x,
						isInTrendingEntrypointExperiment: y,
						isPopular: f
					} = c, {
						subredditPremiumEnabled: v,
						language: E,
						layersEmbedEnabledOnSubreddit: O,
						listingKey: C,
						sortParams: {
							sort: S,
							timeSort: w
						},
						stellarRegistrationBannerEnabled: P,
						topContent: _,
						topContentDiscoveryUnit: N,
						topPostsVariant: k,
						isBlacklistedTopContentPage: I,
						railsWidgetsVariant: L,
						walletRegistrationBannerEnabled: T
					} = d;
					const M = m || j.v.Everywhere,
						B = u || M,
						R = s && oe.g in s ? s[oe.g].toUpperCase() : B,
						F = !!s.hasOwnProperty("f");
					return Object.assign({
						countrySort: R,
						exploreV2Variant: g,
						subredditPremiumEnabled: v,
						generalCleanupVariant: x,
						isLoggedIn: b,
						isInTrendingEntrypointExperiment: y,
						isPopular: f,
						language: E,
						layersEmbedEnabledOnSubreddit: O,
						listingKey: C,
						railsWidgetsVariant: L,
						renderNSFWContentGate: h && h.isNSFW && !e,
						isTopContentDismissed: p,
						sort: S,
						stellarRegistrationBannerEnabled: P,
						subreddit: h,
						subredditAboutInfo: a,
						subredditName: i,
						timeSort: w,
						topContent: _,
						topContentDiscoveryUnit: N,
						topPostsVariant: k,
						isBlacklistedTopContentPage: I,
						isFlairFilter: F,
						walletRegistrationBannerEnabled: T
					}, l)
				}),
				Je = (e, t) => ({
					onLoadMorePosts: () => e(k.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					})),
					onLoadMoreSearchResults: () => e(Object(N.g)([j.Kb.Posts])),
					refreshFeed: () => e(k.s({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					})),
					setTopContentDismissalPref: () => e(Object(_.D)())
				}),
				Ye = Object(h.b)(Ze, Je),
				Xe = Object(d.a)({
					resolved: {},
					chunkName: () => "Trending",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
					}
				}, {
					ssr: !1
				}),
				$e = e => p.a.createElement(Xe, Le({}, e, {
					fallback: p.a.createElement($.a, {
						className: e.className,
						showCardView: !!e.showCardView
					})
				})),
				et = Object(d.a)({
					resolved: {},
					chunkName: () => "FrontpageSidebar",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FrontpageSidebar").then(s.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FrontpageSidebar/index.tsx"
					}
				}),
				tt = Object(d.a)({
					resolved: {},
					chunkName: () => "TopWeekPostsDiscoveryUnit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("TopWeekPostsDiscoveryUnit").then(s.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
					}
				});
			class st extends p.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					S.a.read(() => {
						Object(w.d)(w.c.Subreddit, this.props.isLoggedIn)
					})
				}
				render() {
					const {
						categoriesPlacementVariant: e,
						contentGateInfo: t,
						countrySort: s,
						exploreV2Variant: r,
						isInTrendingEntrypointExperiment: n,
						isPopular: a,
						isLoggedIn: o,
						language: i,
						layersEmbedEnabledOnSubreddit: c,
						layout: d,
						listingKey: l,
						match: m,
						railsWidgetsVariant: u,
						renderNSFWContentGate: h,
						showCreatePostBanner: g,
						sort: y,
						subredditPremiumEnabled: E,
						isTopContentDismissed: C,
						stellarRegistrationBannerEnabled: S,
						sendEvent: w,
						subreddit: P,
						subredditAboutInfo: _,
						subredditName: N,
						timeSort: k,
						topContent: $,
						topContentDiscoveryUnit: re,
						topPostsVariant: oe,
						isBlacklistedTopContentPage: ce,
						isRpanDuVisible: de,
						rpanInjectionIndex: pe,
						isFlairFilter: he,
						walletRegistrationBannerEnabled: ge
					} = this.props, ye = a && e, fe = !!ye && Object(xe.e)(e), ve = !(fe || !r && !ye), Oe = N.toLowerCase(), Ce = "/r/".concat(N, "/"), je = {
						className: fe ? Object(x.a)(Ie.a.SidebarRight, Ie.a.categories) : void 0,
						listingKey: l,
						listingName: Oe
					}, Se = Object(Ee.a)(oe), we = Object(Ee.b)(oe), Pe = Object(Ee.c)(oe);
					let _e;
					Object(v.a)(N) ? _e = Object(f.a)(N) ? p.a.createElement(I.a, je) : p.a.createElement(et, Le({}, je, {
						categoriesPlacementVariant: e,
						railsWidgetsVariant: u
					})) : P && (_e = p.a.createElement(te.a, Le({}, je, {
						className: Ie.a.sidebar,
						subredditId: P.id,
						subredditName: N,
						topPostsVariant: oe
					})));
					const Ne = Object(le.a)(t, h, N);
					if (Ne) return p.a.createElement(M.b, Ne);
					const ke = d === ie.g.Large,
						Be = a && n,
						Re = P ? P.id : void 0,
						Fe = !m.params.sort && $ && !$.isSubscribed && $.postIds && $.postIds.length >= Te && !C && !ce && !Se && !we;
					let De;
					!P || "sequence" !== P.name && "sequence_playground" !== P.name ? Be && (De = p.a.createElement($e, {
						className: Object(x.a)(Ie.a.TrendingPosts, {
							[Ie.a.large]: fe
						}),
						showCardView: this.props.layout === ie.g.Large
					})) : De = p.a.createElement("div", {
						className: Object(x.a)(Ie.a.iframeContainer, {
							[Ie.a.mShowCardView]: this.props.layout === ie.g.Large
						})
					}, p.a.createElement("iframe", {
						className: Ie.a.iframe,
						src: "https://www.reddit.com/sequence/embed",
						style: {
							overflow: "hidden"
						}
					}));
					const Ae = {},
						We = d === ie.g.Classic ? Ie.a.classicChild : d === ie.g.Compact ? Ie.a.compactChild : Ie.a.cardChild;
					if (E && P && d === ie.g.Large && (Ae[0] = {
							estHeight: 487,
							id: "newbie-banner-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(D.a, {
									className: Object(x.a)(t, Ie.a.newbieBanner)
								})
							}
						}, Ae[3] = {
							estHeight: 256,
							id: "lfg-banner-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(F.a, {
									className: Object(x.a)(t, Ie.a.childLayoutClass),
									subredditId: P.id
								})
							}
						}), ge && P && (Ae[1] = {
							estHeight: 384,
							id: "wallet-registration-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(V.a, {
									className: Object(x.a)(t, We),
									subredditId: P.id
								})
							}
						}), S && P && (Ae[2] = {
							estHeight: 200,
							id: "stellar-registration-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(U.a, {
									className: Object(x.a)(t, We),
									subredditId: P.id
								})
							}
						}), !a && Pe && k !== j.Pb.WEEK && d === ie.g.Large) {
						const e = Object(O.a)(N, j.N.TOP, {
							t: j.Pb.WEEK
						});
						Ae[Me] = {
							estHeight: 0,
							id: "top-week-posts-".concat(d, "-").concat(l),
							render: t => {
								let {
									className: s
								} = t;
								return p.a.createElement(tt, {
									className: s,
									listingKey: e,
									subredditName: N
								})
							}
						}
					}
					if (de) {
						const {
							child: e,
							idx: t
						} = Object(Y.a)({
							children: Ae,
							desiredIndex: pe,
							layout: d,
							listingKey: l,
							listingName: "r/".concat(N),
							sendEvent: w
						});
						Ae[t] = e
					}
					const He = {
							baseUrl: Ce,
							countrySort: s,
							sort: y,
							subredditId: Re,
							timeSort: k
						},
						Ve = he ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Ue = Object(v.a)(N),
						Ge = P && c && p.a.createElement(Q.a, {
							subredditId: P.id,
							subredditName: N
						}),
						ze = P && P.subscribers;
					return p.a.createElement(ee.a, {
						subredditId: Re
					}, p.a.createElement(ue.a, {
						subredditId: Re,
						className: Object(x.a)(Ie.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !Ue && p.a.Children.toArray([p.a.createElement(G.a, {
							headerText: P ? P.name : N,
							disableFullscreen: ke,
							isTopBannerVariant: !0,
							subredditOrProfile: P,
							url: Ce
						}), p.a.createElement(T.a, {
							layout: d,
							subreddit: P || void 0,
							subredditId: Re,
							subredditName: N,
							subredditUrl: Ce
						})]),
						trendingUnit: De,
						contentNavBar: p.a.createElement(p.a.Fragment, null, ve && p.a.createElement(L.default, {
							baseUrl: ne.c[ae.d.Explore],
							category: ae.d.Popular
						}), Ue && p.a.createElement(Z.a, He)),
						content: p.a.createElement(p.a.Fragment, null, P && P.isQuarantined && p.a.createElement(K.a, {
							subredditName: N
						}), P && g && p.a.createElement(B.a, {
							subreddit: P,
							language: i,
							listingKey: l,
							listingName: Oe
						}), Be && p.a.createElement(X.a, {
							className: Ie.a.duHeader
						}, p.a.createElement(b.c, null, "Popular posts")), Fe && p.a.createElement(R.a, {
							discoveryUnit: re,
							subredditName: P ? P.name : N,
							topContent: $,
							onCloseClick: this.onTopContentDismissed
						}), !Ue && o && !(_ && _.userIsBanned) && p.a.createElement(z.a, {
							subredditName: N
						}), !Ue && p.a.createElement(W.a, He), p.a.createElement(q.a, null), p.a.createElement(se.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: l,
							subredditName: N,
							subscriberCount: ze
						}), p.a.createElement(J.a, {
							injectChildren: Ae,
							listingKey: l,
							listingName: Oe,
							listingViewed: (e, t) => Object(me.d)(l, y, t, e, k),
							noPostsComponent: () => p.a.createElement(A.a, {
								listingName: Oe,
								sort: y,
								subreddit: P || void 0
							}),
							onLoadMore: Ve,
							inSubredditOrProfile: !Object(v.a)(N)
						}), p.a.createElement(H.a, null)),
						sidebar: fe ? null : _e,
						sidebars: fe ? [p.a.createElement(be.a, {
							categoriesPlacementVariant: e,
							topicName: ne.b.Popular
						}), _e] : void 0,
						layerEmbed: Ge
					}))
				}
			}
			t.default = Be(Ye(Object(re.b)(st)))
		},
		"./src/reddit/pages/Topic/SidebarLeft/Loader.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-pages-Topic-SidebarLeft-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-pages-Topic-SidebarLeft-index").then(s.bind(null, "./src/reddit/pages/Topic/SidebarLeft/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/pages/Topic/SidebarLeft/index.tsx"
				}
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				o = s("./src/reddit/selectors/user.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = Object(r.a)(a.a, a.b, o.O, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(i.n)(e, {
						subreddit: s
					})
				}, i.l, (e, t, s, r, a, o) => {
					if (!e) return !1;
					if (o.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!a && a.show_discovery_unit;
					if (!o.global.viewer_enabled) return !1;
					return [n.R, "r/popular"].indexOf(r) > -1
				}),
				d = Object(r.a)(a.b, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(i.n)(e, {
						subreddit: s
					})
				}, i.m, (e, t, s, r) => {
					if (!e) {
						const e = "home" === t ? r.home_feed_discovery_unit_index : "r/popular" === t ? r.popular_feed_discovery_unit_index : n.h;
						return "number" == typeof e ? e : n.h
					}
					return s ? s.discovery_unit_index : n.h
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(n.a)(Object(r.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "l", (function() {
				return C
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "k", (function() {
				return M
			})), s.d(t, "m", (function() {
				return B
			})), s.d(t, "j", (function() {
				return R
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "i", (function() {
				return H
			})), s.d(t, "b", (function() {
				return V
			})), s.d(t, "d", (function() {
				return U
			}));
			const b = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				x = e => e.publicAccessNetwork.history.cursor,
				y = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				v = Object(r.a)(f, e => e.ended),
				E = Object(r.a)(f, e => e.removed),
				O = Object(r.a)(e => e.publicAccessNetwork.models, v, E, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = D(r, i.b.ENDED) ? i.b.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !0 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = D(r, i.b.ENDED) ? i.b.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !1 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				C = (e, t) => {
					return O(e)[Object(o.k)(t)]
				},
				j = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), O, b, c.f, d.b, (e, t, s, r, n, c) => {
					if (c) {
						const a = [];
						if (e) {
							const t = Object(o.k)(e);
							s[t] && a.push(t)
						}
						const c = a.concat(t),
							d = [...new Set(c)],
							l = new Set([...r, ...n]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const d = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== a.o).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				S = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, O, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return j(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				w = Object(r.a)(y, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return S(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				P = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, O, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return S(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, g, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = n.find(e => e.stream.state === i.b.IS_LIVE);
					if (a) return a.post.id;
					const o = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				_ = Object(n.a)(Object(r.a)(P, O, (e, t) => e ? t[e] : void 0)),
				N = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.k)(s) : void 0
				}, P, b, c.f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return S(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				k = Object(r.a)(x, y, w, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				I = Object(r.a)(x, y, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				L = Object(n.a)(Object(r.a)(N, O, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(r.a)(k, O, (e, t) => e ? t[e] : void 0)),
				M = Object(n.a)(Object(r.a)(I, O, (e, t) => e ? t[e] : void 0)),
				B = Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, O, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))),
				R = Object(r.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e]),
				F = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? C(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function D(e, t) {
				const s = {
					[i.b.NOT_STARTED]: 0,
					[i.b.PUBLISHED]: 1,
					[i.b.IS_LIVE]: 2,
					[i.b.DISCONNECTED]: 2,
					[i.b.ENDED]: 3,
					[i.b.KILLED]: 4,
					[i.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const A = Object(r.a)(N, g, (e, t) => e && t.timestamps[e] || 0);
			var W;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(W || (W = {}));
			const H = Object(r.a)(N, O, h.b, (e, t, s) => {
					if (s) return W.INTRO;
					const r = e && t[e];
					if (!r) return W.UNAVAILABLE;
					const n = r.stream.state;
					return n === i.b.IS_LIVE || n === i.b.DISCONNECTED ? W.LIVE : n === i.b.ENDED && r.stream.vod_accessible ? W.VOD : W.UNAVAILABLE
				}),
				V = Object(r.a)(L, H, h.b, l.c, l.p, (e, t, s, r, n) => s ? r : e ? t === W.LIVE || t === W.VOD ? e.stream.hls_url : n : void 0),
				U = Object(r.a)(L, H, A, (e, t, s) => e ? t === W.LIVE ? e.broadcast_time : t === W.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, a.o, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/categoriesPlacement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = (s("./src/lib/makeOnboardingSubredditsKey/index.ts"), s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/countrySorts.ts")),
				a = s("./src/reddit/selectors/category.ts"),
				o = (s("./src/reddit/selectors/experiments/categoriesPlacement.ts"), s("./src/reddit/selectors/meta.ts"));
			s("./src/reddit/selectors/subreddit.ts");
			Object(a.c)();
			const i = Object(r.a)(o.a, o.h, o.b, (e, t, s) => e || t || n.a[s] || s)
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=Subreddit.756101f8a6d50a3a7b6f.js.map