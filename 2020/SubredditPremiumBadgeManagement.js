// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.71da905b634f03934550.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeManagement"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseFlatten.js"),
				n = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? s(e, n) : []
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const a = Object(s.a)(e),
					n = parseInt(a) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			a("./node_modules/core-js/modules/es6.regexp.replace.js");

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, a) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return j
			})), a.d(t, "c", (function() {
				return S
			})), a.d(t, "a", (function() {
				return N
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				r = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = a("./src/reddit/actions/tooltip.ts"),
				m = a("./src/higherOrderComponents/makeAsync.tsx");
			var u = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([a.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), a.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), a.e("SubredditPremiumBadgeHovercardTooltip")]).then(a.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				g = a("./src/reddit/featureFlags/index.ts"),
				b = a("./src/reddit/helpers/economics/sortBadges.ts"),
				h = a("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = a("./src/reddit/models/Badge/index.ts");
			var B = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => a.e("CustomBadgeHovercardTooltip").then(a.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				y = a("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				f = a.n(y);
			const E = "add-custom-badge-tooltip",
				x = 100,
				_ = 2 * x;
			class j extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, x)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, _)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return n.a.createElement("img", {
						className: Object(i.a)(f.a.image, this.props.className),
						src: "".concat(r.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(E, "-").concat(this.props.uniqueIdentifier);
					return n.a.createElement(s.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: f.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: f.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(h.a, {
						className: f.a.addCustom
					})), n.a.createElement(B, {
						className: f.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(this.props.badges).map(e => {
						const t = Object(v.b)(24, 24, e),
							a = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return n.a.createElement(s.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, n.a.createElement("div", {
							className: Object(i.a)(f.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(a),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: f.a.image,
							id: a,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? n.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: f.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: a,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: a,
							text: e.title
						})))
					}))
				}
			}
			const O = Object(c.c)({
					badges: (e, t) => {
						let {
							subredditId: a,
							userId: s
						} = t;
						return ((e.users.appliedBadges[s] || {})[a] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: g.d.spSpecialMemberships
				}),
				C = Object(c.c)({
					badges: (e, t) => {
						let {
							subredditId: a
						} = t;
						const s = e.user.account;
						if (s) {
							return ((e.users.appliedBadges[s.id] || {})[a] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: g.d.spSpecialMemberships
				}),
				w = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(o.j)())
				}),
				S = Object(d.b)(O, w)(j),
				N = Object(d.b)(C, w)(j)
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				let {
					className: t
				} = e;
				return n.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: t
				}, d._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less": function(e, t, a) {
			e.exports = {
				badges: "_3mDmosajY6zTATVHnP5KOb",
				badgeGroup: "_19NY2fgfHU7p-zs-alMlLo",
				container: "F12I7lN71uLjLoKb2I-L0",
				header: "TEdYqDC_V6vKy_RaEYbj"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Badge/index.m.less": function(e, t, a) {
			e.exports = {
				applied: "_1YFFZKAm7eQBPEXKlOo2KT",
				checkmark: "gIO1GZ8DEKJjAWvOqsOTl",
				container: "_3NRBkAhpSeNQB_tmPG3Xms",
				image: "_2SBs9i3xOB9xMjm5XTukSB",
				lock: "_3hAd8_XzUtm045CB39Hq0P",
				selectable: "_2W6Je91QKlHApv9Hv3FrIy",
				selected: "_2ZM5Qsuo9411wvbgRQ1kzm"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeGroup/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2nT4-JJZxYKvBlpZRQVIqu",
				description: "_19NLP3Fwro2Nib39QPnvRa",
				grid: "_36-xrwfqhHsRvGCkKbeRTx",
				item: "_3M3pxLy4RvHVKdF8oOOsTx",
				row: "_22jxxtl0tka2x7FPWkg8Hb",
				title: "_2lE-W3uhUjJqXSurdRAzBd"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/Tab/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_36m8BDbadDq0-gYUSXUmoH",
				containerSelected: "_1-8agS2yUb16I0PexeSx0p",
				disabled: "_1zzGgCSXdecCJWsOsduhuB",
				inner: "_31Do6W0Z4_eYcS0869uxiP",
				lock: "_7W2z2wOsfyOHa_AvGjbPS",
				lockContainer: "_28p3jF6E233fYTSXPCDZnB",
				selected: "_3YW1CzavsA9qsKnYCL13-m",
				unselected: "_4cTYYTne76NRKaBCHACxx"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_38oH-ihrQvnvD3p6J5LwNb",
				img: "_1A-b6EupVC5DI2HNuk4Y0z",
				tab: "ppH3ypMZXaJro43Cy6EN1",
				tabContent: "_2QtUlgSrwCoVhrK8C0L96W",
				tabText: "_1Fo0Rm0t4CFpxVLRwZ8tsq"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less": function(e, t, a) {
			e.exports = {
				badges: "_2MOQa7enWaO_R-AankQKvB",
				badgeGroup: "_2S6eQSyvhPUFchjGssqiud",
				container: "_22kGe_WYKpmrA9ArSBz2iM"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/HideBadge/index.m.less": function(e, t, a) {
			e.exports = {
				applied: "_14aprcoM44T1vbm03Vc8Kw",
				checkmark: "_2606MYNAjsvlkcczh0Laa5",
				container: "EUQOGOe-rj230itR5Ea5c",
				description: "_2o7gKpy7CmN1u-Q2dz3KSk",
				grid: "_1ro7lFHM8OTcDj2RZehEDf",
				hide: "ARqtFTx-bt29Jw8Wj9xHk",
				hideIcon: "_1ITLYbiAO8tERgy87rW8OR",
				item: "_28zwxmNnzRDaV1utSQ5UX2",
				row: "_16zQIqCyD-yibl_WRU1Y77",
				selected: "_2f84UgU0v18en7WlqR4XJT",
				title: "_3uDdJx7h1Mup11Q1SCLK_A"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less": function(e, t, a) {
			e.exports = {
				badges: "AFv-ZBaaGj1OcWdH_KdEy",
				badgeGroup: "_36rHAzSbN7bCUeF8THA1OD",
				container: "lsXAdBFPBGW_giUp2ix9p",
				header: "_1BHSXYtPP5_Dfvst5rtoZF"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less": function(e, t, a) {
			e.exports = {
				container: "WVkDjoG0zQdAYjfOvdyLl",
				img: "_2I2hiGiPtVasvVKEAOGWCj",
				learnMore: "_1NMgkH5qbvjrMI7pGV2rEY",
				text: "_3fCITxJ-N-GY_5PtFIoOwY",
				title: "Zz8TSO15KMvqXqHyXw7LS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less": function(e, t, a) {
			e.exports = {
				addCustom: "_3X7LDqRPi4Hwh9hfzVr6IC",
				addCustomWrapper: "RddUdxS9STV2KBvIN9kFh",
				badges: "GJ6VHWR0HQLocIhsBRyWB",
				badgeGroup: "_1RA2gLXeKuuFqrA8Ob3Agm",
				container: "_1QpW8EIE51AEM0pAhcpBcB",
				noBadges: "_1vClDBPA-9hVrWoY1FzNd_"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ScrollableArea/index.m.less": function(e, t, a) {
			e.exports = {
				bottomGradient: "_2W-SUh-dcZ13bZsSSUEng9",
				container: "_37_43cGsJiNCmp-DVE6VoM",
				scrollableContent: "_2FhFvh_BcFw7CLLSeC4nNk",
				topGradient: "_1KqLKwrD0XBp2whcHvwe54"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less": function(e, t, a) {
			e.exports = {
				close: "_2Hdtb_eimurDStdnS0Zq1x",
				description: "XZ5K0Mf5I8pXcahU5t7h_",
				descriptionHeader: "_2JFzDzyxvZhcFkGR_jCfu0",
				descriptionText: "_33xBZlcjYK6hNKJREQKSaT",
				descriptionTitle: "_26Lx7cp6M9b7HlQgPGp0Hn",
				info: "hDmjue5-JPlHEXPvlkEvc",
				title: "_2BkxUJlRiw_z67z48K8j68"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1wqnOAHeE9xlBrIG_5etYD",
				selected: "xhBHlGkiAnj8kXGPFxXGO"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_31A6PSuZaAm7howVRV3yMy",
				newDot: "_3iyfsnzmYgaYPYp2NKMM2e",
				tab: "_3ZIeCZ2bEh6Cf9nH1NV7aX"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_34eglC-9H0W4faVex0RHsi",
				content: "_3gsEkt9rBh-pT-TbkUmokG",
				contentWrapper: "_34WPc3uK4Xjxo5MYR413d",
				nav: "GIAuzWUkWaWPC2YS-AJem",
				viewSelector: "_3LV19SQKXQEJWp8DfkG3WY",
				withView: "_2O-9B_ZPoC84Tni3bEnlMa",
				withoutView: "_14Fzq6h0B1jkgQ8tL_M6Md"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, a) {
			e.exports = {
				collectionTitle: "BKuPdCEiKWhUuAAZSV8Hu",
				singleLineText: "_3vV5Hg-hZiDuQVXYnhgzdZ",
				description: "_3K0DQ21Q-wH4kETiMxiaNo",
				fullWidth: "_1HsWtVhofw3GuWXgyObfz4",
				info: "_30GDKdvss889YcOkeQXbVz",
				image: "_3vLr4Xzqw3Fx7cHwT9nDP7",
				progressAmount: "_2zNarMBPc02JsQXIFrSaFR",
				progressBar: "_3hmtSMaZH5Wkj8Ftna8Wy1",
				progressContainer: "_2F36VBMAcVYDe4GdSPiMdk",
				progressThumb: "_3i-h-gzh3Oskm1I04nHRT3",
				title: "_2ZnmMFDAIE41ruoyRhfq3L",
				wrapper: "_2se6JR27PiBUl4k4nrgmAS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				d = a.n(n),
				c = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				o = a("./src/reddit/models/Badge/index.ts"),
				l = a("./src/reddit/models/Badge/managementPage.ts"),
				m = a("./src/reddit/selectors/economics.ts"),
				u = a("./src/reddit/selectors/gov.ts"),
				p = a("./node_modules/reselect/es/index.js"),
				g = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				b = a.n(g);
			const h = Object(p.c)({
				collection: (e, t) => {
					let {
						badge: a,
						subredditId: s
					} = t;
					if (a.collections) {
						const t = Object.keys(a.collections);
						if (t.length) {
							const a = t[0];
							return Object(m.h)(e, {
								collectionId: a,
								subredditId: s
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: a,
						subredditId: s,
						type: n
					} = t;
					const d = e.user.account;
					if (d && !Object(o.c)(a) && n === l.a.Achievement && i.a[a.id]) {
						const t = Object(u.i)(e, {
							subredditId: s,
							userId: d.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: i.a[a.id]
						}
					}
				}
			});
			t.a = Object(c.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? s.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? s.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : s.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					a = e.collection ? e.collection.title : t,
					{
						url: n,
						url2x: c
					} = Object(o.b)(60, 60, e.badge),
					i = e.progress;
				return d.a.createElement("article", {
					className: Object(r.a)(e.className, {
						[b.a.fullWidth]: !!e.fullWidth
					})
				}, d.a.createElement("div", {
					className: b.a.wrapper
				}, d.a.createElement("img", {
					className: b.a.image,
					src: c,
					srcSet: "".concat(n, ", ").concat(c, " 2x")
				}), d.a.createElement("div", {
					className: b.a.info
				}, d.a.createElement("div", {
					className: b.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: a
				}, a), d.a.createElement("header", {
					className: b.a.title
				}, e.badge.title), i && i.complete < i.total && d.a.createElement("div", {
					className: b.a.progressContainer
				}, d.a.createElement("div", {
					className: b.a.progressBar
				}, d.a.createElement("div", {
					className: b.a.progressThumb,
					style: {
						width: "".concat(i.complete / i.total * 100, "%")
					}
				})), d.a.createElement("div", {
					className: b.a.progressAmount
				}, function(e) {
					const t = "".concat(Math.floor(e.complete / 1e3), "k"),
						a = "".concat(Math.floor(e.total / 1e3), "k");
					return "".concat(t, "/").concat(a)
				}(i))), d.a.createElement("div", {
					className: b.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2ZTi5QrGM2DoaGzw3CUXpJ",
				link: "_3T7uMShYdunqBNsVsU6Jzf"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less": function(e, t, a) {
			e.exports = {
				button: "_10ESw5cXwHBLWInQHjwYH2",
				container: "_1sfIwxqWpDotVXLjKV_2jO",
				loading: "_18AJBQlrwo3obCZczqf9Is",
				loadingIcon: "_3A8u5o0uPgpbYt-dE4XZiC",
				submitting: "_167697f4GfaciFsGrMXP-w"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/actions/governance/errorToast.ts"),
				i = a("./src/reddit/components/TrackingHelper/index.tsx"),
				o = a("./src/reddit/contexts/ApiContext.tsx"),
				l = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = a("./src/reddit/endpoints/governance/products/badges.ts"),
				u = a("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = a("./src/reddit/selectors/telemetry.ts"),
				g = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				b = a.n(g);
			const h = "subreddit-premium-purchase-braintree";
			class v extends n.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						loading: !0,
						submitting: !1
					}, this.getId = () => h + this.props.productId
				}
				componentDidMount() {
					if (this.mounted = !0, this.props.subreddit) {
						const e = this.props.apiContext(),
							t = this.props.subreddit.id;
						Object(u.a)({
							apiContext: e,
							config: {
								type: "purchase"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: a => Object(m.d)(e, {
								nonce: a,
								subredditId: t,
								price: this.props.price,
								products: [{
									productId: this.props.productId,
									quantity: "1"
								}]
							}),
							onCancel: () => this.mounted && this.setState({
								submitting: !1
							}),
							onClientLoad: () => this.mounted && this.setState({
								loading: !1
							}),
							onError: e => {
								this.mounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), console.error(e))
							},
							onSubmitting: () => {
								this.mounted && this.setState({
									submitting: !0
								}), this.props.sendEvent(e => Object.assign(Object.assign({
									source: "meta",
									action: "click",
									noun: "badge_gallery_paypal_purchase",
									correlationId: this.props.correlationId
								}, p.defaults(e)), {
									subreddit: p.subreddit(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful()
						})
					}
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				render() {
					return n.a.createElement("div", {
						className: Object(c.a)(this.props.className, b.a.container)
					}, n.a.createElement("div", {
						className: Object(c.a)(b.a.button, {
							[b.a.loading]: this.state.loading,
							[b.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && n.a.createElement(l.a, {
						className: b.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(o.b)(Object(d.b)(void 0, (e, t) => {
				let {
					subreddit: a
				} = t;
				return {
					onError: t => Object(r.a)(e, t)
				}
			})(Object(i.c)(v)))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less": function(e, t, a) {
			e.exports = {
				button: "_1vdKo7uqCTdj1lwD40JJWv",
				description: "_1UVEhdH_kRKJ7YRJvu19j9",
				legal: "gceg0z1f43MmsRWqcrHWR",
				price: "_2vykDDj9CleWt88L-vGzLi",
				purchaseButton: "_1_8fBf5hh_j_kzNtAFItNi",
				wrapper: "AW3E2QVGRQAZ04bSKbSyP"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3fdoyw0y7NTskxV1QUObns",
				hide: "_2KLxay4WmF6pjRbh1yUy7u",
				text: "_13oQyEu8B5hL8C9vyDZPl-"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2iFtTzgocWLjtsoE-CPOwo",
				content: "_3-ygUAsCp76q7Lpdp6VPSs",
				dismiss: "_3ILXOydVv0XesbiRWuVOwx",
				footer: "pN64cQ_emSADV0Zu2TZJr",
				hide: "_34f_7CfOVE_rExubx7qzKV"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/index.m.less": function(e, t, a) {
			e.exports = {
				badgePreviewContainer: "_1nhidGazTjQ0L8ec4qFAyF",
				close: "_6cwFK0NJEv886PAerxOwR",
				commentPreviewContainer: "_1vUlYsMH62HjzarirkQK9w",
				commentPreview: "_38aTvlwDXi83rF9j5qefcu",
				commentPreviewLabel: "qQSdG-2Bes9LJ52s9RFz6",
				container: "_3wEzB-LSd46T3bLB2dqr8c",
				content: "_1nofqfhYAUpLDH39dEuA5f",
				contentBackground: "_18SJ2fC3k7c0GnXmbl_9Kx",
				header: "_3J0qoyrIGQCaXE0DDe7pvJ",
				previewClosed: "_3kjltEdl8rud4emZ2RCuko",
				previewOpen: "_36Z7r98kQLEcIojvDoEhi2",
				radialHighlight: "_2F7J_PYf95G92D1kPXnGys",
				radialHighlightOuter: "_1sNYmVjYmQbOy9R9fI7PkE",
				rotatesun: "_2movtq4X6N4-EjdwhozPk7",
				radialHighlightInner: "wypvHwARLm7TV9NN08kQO",
				voteContainer: "-y23V9UmABV9ctDXHN2Xl",
				vote: "_22qOVd0mdjumRe2P-VrS7p"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2cRTFe2J952Y_M77Sns7vc",
				content: "_29rPcFDLuj9RXaeepKmA1G",
				header: "VlYLnpN6MdRIZVtrEYCDM",
				leftRail: "QB_B8uVPl5gOHzOFgZ5jl",
				preview: "gKO5JJ8acW9E8VvzkJGE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				r = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/contexts/PageLayer/index.tsx"),
				o = a("./src/reddit/featureFlags/component.tsx"),
				l = a("./src/reddit/models/Badge/index.ts"),
				m = a("./src/reddit/models/Badge/managementPage.ts"),
				u = a("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = a("./src/reddit/selectors/economics.ts"),
				g = a("./src/lib/classNames/index.ts"),
				b = a("./node_modules/fbt/lib/FbtPublic.js"),
				h = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				v = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				B = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Badge/index.m.less"),
				y = a.n(B);

			function f(e) {
				const {
					url: t,
					url2x: a
				} = Object(l.b)(40, 40, e.model);
				return n.a.createElement("div", {
					className: Object(g.a)(e.className, y.a.container, {
						[y.a.applied]: !!e.applied,
						[y.a.selected]: !!e.selected,
						[y.a.selectable]: !!e.onSelect
					}),
					onClick: e.onSelect
				}, e.applied && n.a.createElement(h.a, {
					className: y.a.checkmark
				}), e.locked && n.a.createElement(v.a, {
					className: y.a.lock
				}), n.a.createElement("img", {
					className: y.a.image,
					src: a,
					srcSet: "".concat(t, ", ").concat(a, " 2x")
				}))
			}
			var E = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeGroup/index.m.less"),
				x = a.n(E);

			function _(e) {
				const {
					children: t,
					className: a,
					description: s,
					highlight: d,
					rowLength: c = 4,
					title: r
				} = e;
				if (!t.length) return null;
				const i = t.reduce((e, t) => {
					let a = e[e.length - 1];
					return a.length >= c && (a = [], e.push(a)), a.push(t), e
				}, [
					[]
				]);
				return n.a.createElement("div", {
					className: Object(g.a)(a, x.a.container)
				}, n.a.createElement("div", {
					className: x.a.centerContent
				}, r && n.a.createElement("header", {
					className: x.a.title,
					style: {
						color: d
					}
				}, r), s && n.a.createElement("div", {
					className: x.a.description
				}, s), n.a.createElement("article", {
					className: x.a.grid
				}, i.map((e, t) => n.a.createElement("div", {
					className: Object(g.a)(x.a.row),
					key: "".concat(r, "-").concat(t)
				}, e.map((e, a) => n.a.createElement("div", {
					className: Object(g.a)(x.a.item, x.a.itemBottom),
					key: "".concat(r, "-").concat(t, "-").concat(a)
				}, e)))))))
			}
			var j = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ScrollableArea/index.m.less"),
				O = a.n(j);

			function C(e) {
				return n.a.createElement("div", {
					className: Object(g.a)(e.className, O.a.container)
				}, n.a.createElement("div", {
					className: O.a.scrollableContent
				}, e.children), n.a.createElement("div", {
					className: O.a.topGradient
				}), n.a.createElement("div", {
					className: O.a.bottomGradient
				}))
			}
			var w = a("./src/reddit/contexts/ApiContext.tsx"),
				S = a("./src/config.ts"),
				N = a("./src/reddit/endpoints/governance/requester.ts");
			async function k(e, t, a, s) {
				return Object(N.a)(e, {
					endpoint: "".concat(S.a.metaUrl, "/storage/").concat(t, "/me/").concat(a),
					method: "patch",
					data: {
						on: s
					}
				}).then(e => !!e.ok)
			}
			async function M(e, t, a, s) {
				return Object(N.a)(e, {
					endpoint: "".concat(S.a.metaUrl, "/storage/").concat(t, "/me/").concat(a),
					method: "get"
				}).then(e => e.ok ? Boolean(e.body && e.body.on) : s)
			}
			var P = a("./src/reddit/icons/svgs/Close/index.tsx"),
				L = a("./src/reddit/icons/svgs/Info/index.tsx"),
				I = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less"),
				T = a.n(I),
				A = Object(w.b)(class extends n.a.Component {
					constructor(e) {
						super(e), this.closeDescription = () => {
							this.setState(e => Object.assign(Object.assign({}, e), {
								descriptionOpen: !1
							})), ((e, t, a) => k(e, t, a, !0))(this.props.apiContext(), this.props.subredditId, this.props.sectionName)
						}, this.openDescription = () => this.setState(e => Object.assign(Object.assign({}, e), {
							descriptionOpen: !0
						})), this.state = {
							descriptionOpen: !1
						}
					}
					componentDidMount() {
						((e, t, a) => M(e, t, a, !1))(this.props.apiContext(), this.props.subredditId, this.props.sectionName).then(e => this.setState({
							descriptionOpen: !e
						}))
					}
					render() {
						return n.a.createElement("div", {
							className: this.props.className
						}, n.a.createElement("header", {
							className: T.a.title
						}, this.props.title, n.a.createElement(L.a, {
							className: T.a.info,
							onClick: this.openDescription
						})), this.state.descriptionOpen && n.a.createElement("div", {
							className: T.a.description
						}, n.a.createElement("div", {
							className: T.a.descriptionHeader
						}, n.a.createElement("div", {
							className: T.a.descriptionTitle
						}, b.fbt._("about", null, {
							hk: "1XpxW5"
						})), n.a.createElement(P.a, {
							className: T.a.close,
							onClick: this.closeDescription
						})), n.a.createElement("div", {
							className: T.a.descriptionText
						}, this.props.info)))
					}
				}),
				H = a("./src/reddit/icons/svgs/EyeCancel/index.tsx"),
				D = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/HideBadge/index.m.less"),
				R = a.n(D);
			const F = {
				id: "removeBadge",
				type: "removeBadge"
			};

			function U(e) {
				const {
					badgeType: t,
					className: a
				} = e, {
					description: s,
					title: d
				} = function(e) {
					switch (e) {
						case m.a.Achievement:
							return {
								description: b.fbt._("Do not display an Achievement Badge", null, {
									hk: "XaQt5"
								}), title: b.fbt._("Hide Achievement Badge", null, {
									hk: "1J1U2J"
								})
							};
						case m.a.Cosmetic:
							return {
								description: b.fbt._("Do not display a Style Badge", null, {
									hk: "2ASTcV"
								}), title: b.fbt._("Hide Style Badge", null, {
									hk: "3fpbDK"
								})
							};
						case m.a.Loyalty:
							return {
								description: b.fbt._("Do not display a Loyalty Badge", null, {
									hk: "1e0IJN"
								}), title: b.fbt._("Hide Loyalty Badge", null, {
									hk: "29NfeM"
								})
							}
					}
				}(t);
				return n.a.createElement("div", {
					className: Object(g.a)(a, R.a.container)
				}, n.a.createElement("div", {
					className: R.a.centerContent
				}, n.a.createElement("header", {
					className: R.a.title
				}, d), n.a.createElement("div", {
					className: R.a.description
				}, s), n.a.createElement("article", {
					className: R.a.grid
				}, n.a.createElement("div", {
					className: R.a.row
				}, n.a.createElement("div", {
					className: R.a.item
				}, n.a.createElement("div", {
					className: Object(g.a)(R.a.hide, {
						[R.a.applied]: !!e.applied,
						[R.a.selected]: !!e.selected
					}),
					onClick: () => e.onSelect(Object.assign({
						badgeType: t
					}, F))
				}, e.applied && n.a.createElement(h.a, {
					className: R.a.checkmark
				}), n.a.createElement(H.a, {
					className: R.a.hideIcon
				})))))))
			}
			var G = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less"),
				V = a.n(G);
			const W = Object(c.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.o)(e, a, m.a.Achievement)
				}
			});
			var q = Object(d.b)(W)((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(V.a.container, e.className)
					}, n.a.createElement(C, null, n.a.createElement(A, {
						className: V.a.header,
						info: b.fbt._("Show off with an Achievement Badge! Unlock badges by completing goals.", null, {
							hk: "h44Q4"
						}),
						sectionName: "achievement_badge",
						subredditId: e.subredditId,
						title: b.fbt._("Achievement Badges", null, {
							hk: "4m7kLd"
						})
					}), n.a.createElement("div", {
						className: V.a.badges
					}, e.collections.map(t => n.a.createElement(_, {
						className: V.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: V.a.badge,
						key: t.id + a
					}, n.a.createElement(f, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => n.a.createElement("div", {
						className: V.a.badge,
						key: t.id
					}, n.a.createElement(f, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), n.a.createElement(U, {
						applied: !e.appliedBadge,
						className: V.a.badgeGroup,
						badgeType: m.a.Achievement,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				Y = a("./node_modules/lodash/curry.js"),
				z = a.n(Y),
				K = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Q = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/Tab/index.m.less"),
				X = a.n(Q);

			function Z(e) {
				const t = n.a.Children.only(e.children);
				return n.a.createElement("button", {
					className: Object(g.a)(X.a.container, e.className, {
						[X.a.disabled]: !!e.locked,
						[X.a.containerSelected]: !!e.selected
					}),
					onClick: e.locked ? void 0 : e.onSelect
				}, n.a.cloneElement(t, {
					className: Object(g.a)(t.props.className, X.a.inner, {
						[X.a.selected]: !!e.selected,
						[X.a.unselected]: !e.selected
					})
				}), e.locked && n.a.createElement("div", {
					className: X.a.lockContainer
				}, n.a.createElement(v.a, {
					className: X.a.lock
				})))
			}
			var J = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less"),
				$ = a.n(J);
			const ee = z()((e, t, a) => "".concat(S.a.assetPath, "/img/memberships/badges/management/tabs/").concat(e, "/").concat(t, "-").concat(a ? "on" : "off", "-v2.png")),
				te = [{
					type: m.a.Loyalty,
					text: () => b.fbt._("Loyalty", null, {
						hk: "wG8nE"
					})
				}, {
					type: m.a.Achievement,
					text: () => b.fbt._("Achievement", null, {
						hk: "2y4Del"
					})
				}, {
					type: m.a.Cosmetic,
					text: () => b.fbt._("Style", null, {
						hk: "25q9XS"
					})
				}];
			const ae = Object(c.c)({
				currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasAchievementBadges: (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = Object(p.o)(e, a, m.a.Achievement);
					for (const n of s)
						if (n.locked.length || n.unlocked.length) return !0;
					return !1
				}
			});
			var se = Object(d.b)(ae, e => ({
					onChangeBadgeType: t => e(Object(K.b)(t))
				}))((function(e) {
					const {
						hasAchievementBadges: t
					} = e, a = ee(e.subredditId), s = te.filter(e => e.type !== m.a.Achievement || t);
					return n.a.createElement("nav", {
						className: Object(g.a)($.a.container, e.className)
					}, s.map((t, s) => n.a.createElement(n.a.Fragment, {
						key: "".concat(t.type)
					}, n.a.createElement(Z, {
						className: $.a.tab,
						selected: e.currentBadgeType === t.type,
						onSelect: () => e.onChangeBadgeType(t.type)
					}, n.a.createElement("div", {
						className: $.a.tabContent
					}, n.a.createElement("img", {
						className: $.a.img,
						src: a(t.type, e.currentBadgeType === t.type)
					}), n.a.createElement("div", {
						className: $.a.tabText
					}, t.text()))))))
				})),
				ne = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less"),
				de = a.n(ne);
			const ce = Object(c.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.o)(e, a, m.a.Cosmetic, m.c.Gallery)
				}
			});
			var re = Object(d.b)(ce)((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(de.a.container, e.className)
					}, n.a.createElement(C, null, n.a.createElement("div", {
						className: de.a.badges
					}, e.collections.map(t => n.a.createElement(_, {
						className: de.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.locked.filter(e => Object(l.d)(e) || !!e.price).map(t => n.a.createElement("div", {
						className: de.a.badge,
						key: t.id
					}, n.a.createElement(f, {
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))))))))
				})),
				ie = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less"),
				oe = a.n(ie);
			const le = Object(c.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.o)(e, a, m.a.Loyalty)
				},
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.s)(e, a)
				}
			});
			var me = Object(d.b)(le)((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(oe.a.container, e.className)
					}, n.a.createElement(C, null, n.a.createElement(A, {
						className: oe.a.header,
						info: b.fbt._("The Loyalty Badge shows how long you've been a {memberAlt} in the subreddit. The longer you remain a member, the more Loyalty Badges you unlock", [b.fbt._param("memberAlt", e.meta.memberAlt)], {
							hk: "2jAQmP"
						}),
						sectionName: "loyalty_badge",
						subredditId: e.subredditId,
						title: b.fbt._("Loyalty Badges", null, {
							hk: "L1pPB"
						})
					}), n.a.createElement("div", {
						className: oe.a.badges
					}, e.collections.map(t => n.a.createElement(_, {
						className: oe.a.badgeGroup,
						highlight: t.highlight,
						key: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: oe.a.badge,
						key: t.id + a
					}, n.a.createElement(f, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => n.a.createElement("div", {
						className: oe.a.badge,
						key: t.id
					}, n.a.createElement(f, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), n.a.createElement(U, {
						applied: !e.appliedBadge,
						className: oe.a.badgeGroup,
						badgeType: m.a.Loyalty,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				ue = a("./src/lib/constants/specialMembership.ts"),
				pe = a("./src/reddit/featureFlags/index.ts"),
				ge = a("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				be = a("./src/reddit/actions/modal.ts"),
				he = a("./src/reddit/components/TrackingHelper/index.tsx"),
				ve = a("./src/reddit/controls/Button/index.tsx"),
				Be = a("./src/reddit/helpers/economics/membershipPage.ts"),
				ye = a("./src/reddit/selectors/telemetry.ts"),
				fe = a("./node_modules/uuid/v4.js"),
				Ee = a.n(fe),
				xe = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less"),
				_e = a.n(xe);
			const je = Object(c.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.s)(e, a)
				},
				subreddit: (e, t) => {
					let {
						subredditId: a
					} = t;
					return e.subreddits.models[a]
				}
			});
			var Oe = Object(he.c)(Object(d.b)(je, (e, t) => {
					let {
						badge: a,
						subredditId: s
					} = t;
					return {
						onCloseModal: () => e(Object(be.f)())
					}
				})((function(e) {
					const t = "".concat(S.a.assetPath, "/img/memberships/badges/management/myBadges/").concat(e.subredditId, "/noBadges.png"),
						a = Ee()(),
						s = e.subreddit ? e.subreddit.name : "";
					return n.a.createElement("div", {
						className: Object(g.a)(_e.a.container, e.className)
					}, n.a.createElement("img", {
						className: _e.a.img,
						src: t
					}), n.a.createElement("div", {
						className: _e.a.title
					}, b.fbt._("You Don't Have Any Style Badges Yet", null, {
						hk: "13yxIM"
					})), n.a.createElement("div", {
						className: _e.a.text
					}, b.fbt._("Get a {membershipAlt} and receive new style badges every month. You can also buy badges individually from the Gallery.", [b.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "1JWnXS"
					})), n.a.createElement(ve.k, {
						className: _e.a.learnMore,
						disabled: !e.subreddit,
						to: Object(Be.a)(s, a),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: a,
								source: "meta",
								action: "click",
								noun: "subscription_myBadges_open_learn_more"
							}, ye.defaults(e)), {
								subreddit: ye.subreddit(e)
							})), e.onCloseModal()
						}
					}, b.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})))
				}))),
				Ce = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less"),
				we = a.n(Ce);
			const Se = Object(c.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.o)(e, a, m.a.Cosmetic, m.c.MyBadges)
				},
				customBadgesEnabled: pe.d.spCustomBadgesAndEmotes
			});
			var Ne = Object(d.b)(Se, e => ({
					onOpenUploadDialog: () => e(Object(K.j)())
				}))((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(we.a.container, e.className)
					}, n.a.createElement(C, null, e.collections.length ? n.a.createElement("div", {
						className: we.a.badges
					}, e.collections.map(t => n.a.createElement(_, {
						className: we.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: we.a.badge,
						key: t.id + a
					}, n.a.createElement(f, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.id === ue.a && e.customBadgesEnabled ? n.a.createElement("button", {
						className: we.a.addCustomWrapper,
						onClick: e.onOpenUploadDialog
					}, n.a.createElement(ge.a, {
						className: we.a.addCustom
					})) : []))), n.a.createElement(U, {
						applied: !e.appliedBadge,
						className: we.a.badgeGroup,
						badgeType: m.a.Cosmetic,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					})) : n.a.createElement(Oe, {
						className: we.a.noBadges,
						subredditId: e.subredditId
					})))
				})),
				ke = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less"),
				Me = a.n(ke);
			const Pe = Object(c.c)({
				isSelected: (e, t) => {
					let {
						viewType: a
					} = t;
					return e.economics.currentBadgeManagementScreen.view === a
				}
			});
			var Le = Object(d.b)(Pe, (e, t) => {
					let {
						viewType: a
					} = t;
					return {
						onSelect: () => e(Object(K.d)(a))
					}
				})((function(e) {
					return n.a.createElement("button", {
						className: Object(g.a)(e.className, Me.a.container, {
							[Me.a.selected]: e.isSelected
						}),
						onClick: e.onSelect
					}, e.children)
				})),
				Ie = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less"),
				Te = a.n(Ie);

			function Ae(e) {
				return n.a.createElement("nav", {
					className: Object(g.a)(e.className, Te.a.container)
				}, n.a.createElement(Le, {
					className: Te.a.tab,
					viewType: m.c.Gallery
				}, b.fbt._("Gallery", null, {
					hk: "40A6Dd"
				})), n.a.createElement(Le, {
					className: Te.a.tab,
					viewType: m.c.MyBadges
				}, b.fbt._("My Badges", null, {
					hk: "2OwjDY"
				})))
			}
			var He = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less"),
				De = a.n(He);
			const Re = Object(c.c)({
				badgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.i)(e, a)
				},
				view: e => e.economics.currentBadgeManagementScreen.view
			});
			var Fe = Object(d.b)(Re)((function(e) {
					const t = Object(g.a)(De.a.contentWrapper, {
						[De.a.withView]: e.badgeType === m.a.Cosmetic,
						[De.a.withoutView]: e.badgeType !== m.a.Cosmetic
					});
					return n.a.createElement("div", {
						className: Object(g.a)(e.className, De.a.container)
					}, n.a.createElement(se, {
						className: De.a.nav,
						subredditId: e.subredditId
					}), e.badgeType === m.a.Cosmetic && e.hasGalleryBadges && n.a.createElement(Ae, {
						className: De.a.viewSelector
					}), e.badgeType === m.a.Loyalty && n.a.createElement(me, {
						appliedBadge: e.appliedBadges[m.a.Loyalty],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Loyalty],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Loyalty, t)
					}), e.badgeType === m.a.Achievement && n.a.createElement(q, {
						appliedBadge: e.appliedBadges[m.a.Achievement],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Achievement],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Achievement, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.MyBadges && n.a.createElement(Ne, {
						appliedBadge: e.appliedBadges[m.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Cosmetic, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.Gallery && n.a.createElement(re, {
						appliedBadge: e.appliedBadges[m.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Cosmetic, t)
					}))
				})),
				Ue = a("./node_modules/react-motion/lib/react-motion.js"),
				Ge = a("./src/reddit/helpers/economics/sortBadges.ts"),
				Ve = a("./src/reddit/icons/fonts/Downvote/index.tsx"),
				We = a("./src/reddit/icons/fonts/Upvote/index.tsx"),
				qe = a("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				Ye = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				ze = a("./node_modules/lodash/last.js"),
				Ke = a.n(ze),
				Qe = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Xe = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				Ze = a("./src/lib/currency/centsToDollars/index.ts"),
				Je = a("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				$e = a("./src/reddit/actions/toaster.ts"),
				et = a("./src/reddit/models/Toast/index.ts"),
				tt = a("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				at = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less"),
				st = a.n(at);
			const {
				fbt: nt
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function dt(e) {
				return n.a.createElement("div", {
					className: Object(g.a)(e.className, st.a.container)
				}, nt._("By purchasing, you agree to the {=Reddit User Agreement} and {previewsUserAgreement}.", [nt._param("=Reddit User Agreement", n.a.createElement("a", {
					className: st.a.link,
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, nt._("Reddit User Agreement", null, {
					hk: "49nG3E"
				}))), nt._param("previewsUserAgreement", n.a.createElement(tt.a, {
					className: st.a.link
				}))], {
					hk: "e28UM"
				}))
			}
			var ct = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				rt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less"),
				it = a.n(rt);
			const ot = Object(c.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.s)(e, a)
				},
				ownedBadge: p.m,
				subreddit: (e, t) => {
					let {
						subredditId: a
					} = t;
					return e.subreddits.models[a]
				}
			});
			var lt = Object(he.c)(Object(d.b)(ot, (e, t) => {
					let {
						badge: a,
						subredditId: s
					} = t;
					return {
						onApply: () => e(Object(Je.b)({
							badge: a,
							subredditId: s,
							placement: a.placement
						})),
						onCloseModal: () => e(Object(be.f)()),
						onPurchased: () => {
							e(Object($e.e)({
								kind: et.b.SuccessCommunityGreen,
								text: b.fbt._("Congratulations! You've bought a badge!", null, {
									hk: "3smVrt"
								})
							})), e(Object(Je.d)(s, a))
						}
					}
				})((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						a = Ee()();
					return n.a.createElement("footer", {
						className: Object(g.a)(e.className, it.a.container)
					}, n.a.createElement("div", {
						className: it.a.wrapper
					}, n.a.createElement("div", {
						className: it.a.description
					}, !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.d)(e.badge) && n.a.createElement("div", {
						className: it.a.price
					}, b.fbt._("Buy for ${price}", [b.fbt._param("price", Object(Ze.a)(e.badge.price, !0))], {
						hk: "JLs1D"
					})), !Object(l.c)(e.badge) && !e.ownedBadge && Object(l.d)(e.badge) && n.a.createElement("div", {
						className: it.a.price
					}, b.fbt._("Get monthly reward badges by purchasing a {membershipAlt}!", [b.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "19iqHa"
					}))), e.ownedBadge && n.a.createElement(ve.i, {
						className: it.a.button,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, e.alreadyApplied ? b.fbt._("Applied", null, {
						hk: "3zELtm"
					}) : b.fbt._("Apply", null, {
						hk: "19U1iU"
					})), !Object(l.c)(e.badge) && !e.ownedBadge && Object(l.d)(e.badge) && n.a.createElement(ve.k, {
						className: it.a.button,
						disabled: !e.subreddit,
						to: Object(Be.a)(t, a),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: a,
								source: "meta",
								action: "click",
								noun: "subscription_gallery_open_learn_more"
							}, ye.defaults(e)), {
								subreddit: ye.subreddit(e)
							})), e.onCloseModal()
						}
					}, b.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})), !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.d)(e.badge) && n.a.createElement(ct.a, {
						className: it.a.purchaseButton,
						correlationId: a,
						price: e.badge.price,
						productId: e.badge.id,
						subreddit: e.subreddit,
						onPaymentSuccessful: e.onPurchased
					})), !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && n.a.createElement(dt, {
						className: it.a.legal
					}))
				}))),
				mt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less"),
				ut = a.n(mt);
			var pt = Object(d.b)(void 0, (e, t) => {
					let {
						badge: a,
						subredditId: s
					} = t;
					return {
						onApply: () => e(Object(Je.b)({
							badge: a,
							subredditId: s,
							placement: m.b[a.badgeType]
						}))
					}
				})((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(e.className, ut.a.container)
					}, e.alreadyApplied ? n.a.createElement("div", {
						className: ut.a.text
					}, function(e) {
						switch (e.badgeType) {
							case m.a.Achievement:
								return b.fbt._("You do not currently have an Achievement Badge selected.", null, {
									hk: "2MhvgS"
								});
							case m.a.Cosmetic:
								return b.fbt._("You do not currently have a Style Badge selected.", null, {
									hk: "4uRiIX"
								});
							case m.a.Loyalty:
								return b.fbt._("You do not currently have a Loyalty Badge selected.", null, {
									hk: "34Q4VK"
								})
						}
					}(e.badge)) : n.a.createElement(s.Fragment, null, n.a.createElement("div", {
						className: ut.a.text
					}, function(e) {
						switch (e.badgeType) {
							case m.a.Achievement:
								return b.fbt._("Hide your Achievement Badge?", null, {
									hk: "4cRkIB"
								});
							case m.a.Cosmetic:
								return b.fbt._("Hide your Style Badge?", null, {
									hk: "2Ljc6w"
								});
							case m.a.Loyalty:
								return b.fbt._("Hide your Loyalty Badge?", null, {
									hk: "3H5CTM"
								})
						}
					}(e.badge)), n.a.createElement(ve.i, {
						className: ut.a.hide,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, b.fbt._("Hide", null, {
						hk: "2r7mgg"
					}))))
				})),
				gt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/index.m.less"),
				bt = a.n(gt);

			function ht(e) {
				return "removeBadge" === e.type
			}
			const vt = Object(c.c)({
				alreadyApplied: (e, t) => {
					let {
						badge: a,
						subredditId: s,
						type: n
					} = t;
					const d = Object(p.f)(e, s)[n];
					return d ? d.id === a.id : "removeBadge" === a.type
				},
				lastUnlockedLoyaltyBadge: (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = Object(p.o)(e, a, m.a.Loyalty)[0];
					if (s) return Ke()(s.unlocked)
				}
			});
			var Bt = Object(d.b)(vt)((function(e) {
					return ht(e.badge) ? n.a.createElement("div", {
						className: Object(g.a)(e.className, bt.a.container)
					}, n.a.createElement(pt, {
						alreadyApplied: e.alreadyApplied,
						className: bt.a.hide,
						badge: e.badge,
						subredditId: e.subredditId
					})) : n.a.createElement("div", {
						className: Object(g.a)(e.className, bt.a.container)
					}, n.a.createElement(Xe.a, {
						badge: e.badge,
						className: bt.a.content,
						subredditId: e.subredditId,
						type: e.type
					}, n.a.createElement(Qe.a, {
						className: bt.a.dismiss,
						onClick: e.onDeselect
					})), function(e) {
						return e.type === m.a.Cosmetic || (!(e.type !== m.a.Achievement || ht(e.badge) || !Object(l.c)(e.badge)) || !(e.type !== m.a.Loyalty || !e.lastUnlockedLoyaltyBadge || e.badge.id !== e.lastUnlockedLoyaltyBadge.id))
					}(e) && n.a.createElement(lt, {
						alreadyApplied: e.alreadyApplied,
						className: bt.a.footer,
						badge: e.badge,
						subredditId: e.subredditId
					}))
				})),
				yt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/index.m.less"),
				ft = a.n(yt);
			const Et = {
					stiffness: 210,
					damping: 20
				},
				xt = () => ({
					bottom: -200
				}),
				_t = () => ({
					bottom: Object(Ue.spring)(-200, Et)
				}),
				jt = [40, 68, 96];

			function Ot(e, t) {
				return jt.slice(0, e.length)[e.findIndex(e => e.id === t.id)]
			}

			function Ct(e) {
				return "removeBadge" !== e.type
			}
			const wt = Object(c.c)({
				subreddit: (e, t) => {
					let {
						subredditId: a
					} = t;
					return e.subreddits.models[a]
				}
			});
			var St = Object(d.b)(wt, e => ({
					onClose: () => e(Object(be.f)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "Community",
						a = Object(Ge.a)(e.badges.filter(Ct)),
						s = a.find(t => t.placement === m.b[e.previewedBadge.type]);
					return n.a.createElement("div", {
						className: Object(g.a)(e.className, ft.a.container)
					}, n.a.createElement("article", {
						className: ft.a.content
					}, n.a.createElement("header", {
						className: ft.a.header
					}, b.fbt._("Edit {communityName} Badges", [b.fbt._param("communityName", t)], {
						hk: "3R1TMF"
					}), n.a.createElement(P.a, {
						className: ft.a.close,
						onClick: e.onClose
					})), n.a.createElement("div", {
						className: ft.a.contentBackground
					}), n.a.createElement("div", {
						className: ft.a.commentPreviewLabel
					}, b.fbt._("comment preview", null, {
						hk: "Lhdaw"
					})), n.a.createElement("div", {
						className: Object(g.a)(ft.a.commentPreviewContainer, {
							[ft.a.previewClosed]: !e.previewedBadge.badge,
							[ft.a.previewOpen]: !!e.previewedBadge.badge
						})
					}, n.a.createElement("div", {
						className: ft.a.commentPreview
					}, n.a.createElement("div", {
						className: ft.a.voteContainer
					}, n.a.createElement(We.b, {
						className: ft.a.vote
					}), n.a.createElement(Ve.b, {
						className: ft.a.vote
					})), s && n.a.createElement(n.a.Fragment, null, n.a.createElement(qe.a, {
						className: ft.a.radialHighlightOuter,
						style: {
							left: Ot(a, s)
						}
					}), n.a.createElement(qe.a, {
						className: ft.a.radialHighlightInner,
						style: {
							left: Ot(a, s)
						}
					})), n.a.createElement(Ye.a, {
						showExplanation: !0,
						badges: a,
						subredditId: e.subredditId
					}))), n.a.createElement(Ue.TransitionMotion, {
						defaultStyles: [],
						styles: e.previewedBadge.badge ? [{
							data: e.previewedBadge.badge,
							key: e.previewedBadge.badge.id,
							style: {
								bottom: Object(Ue.spring)(16, Et)
							}
						}] : [],
						willEnter: xt,
						willLeave: _t
					}, t => n.a.createElement(n.a.Fragment, null, t.map(t => n.a.createElement("div", {
						className: ft.a.badgePreviewContainer,
						key: t.key,
						style: {
							bottom: t.style.bottom
						}
					}, n.a.createElement(Bt, {
						badge: t.data,
						subredditId: e.subredditId,
						type: e.previewedBadge.type,
						onDeselect: e.onDeselect
					})))))))
				})),
				Nt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less"),
				kt = a.n(Nt);

			function Mt(e) {
				return !!e
			}
			class Pt extends n.a.Component {
				constructor(e) {
					super(e), this.handleBadgeSelection = (e, t) => {
						this.setState(a => {
							const s = a.selectedBadges[e];
							return {
								selectedBadges: Object.assign(Object.assign({}, a.selectedBadges), {
									[e]: s && s.id === t.id ? void 0 : t
								})
							}
						})
					};
					const t = Object.assign({}, e.appliedBadges);
					if (e.initialSelectedBadge) {
						t[Object(m.d)(e.initialSelectedBadge.placement)] = e.initialSelectedBadge
					}
					this.state = {
						selectedBadges: t,
						prevBadgeType: e.currentBadgeType,
						prevView: e.currentView
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						prevBadgeType: e.currentBadgeType,
						prevView: e.currentView,
						selectedBadges: e.currentBadgeType !== t.prevBadgeType || e.currentView !== t.prevView ? e.appliedBadges : t.selectedBadges
					}
				}
				render() {
					const {
						account: e,
						subreddit: t
					} = this.props;
					if (!t || !e) return null;
					const a = {
						badge: this.state.selectedBadges[this.props.currentBadgeType],
						type: this.props.currentBadgeType
					};
					return n.a.createElement("div", {
						className: kt.a.container
					}, n.a.createElement("article", {
						className: kt.a.content
					}, n.a.createElement(Fe, {
						appliedBadges: this.props.appliedBadges,
						className: kt.a.leftRail,
						selectedBadges: this.state.selectedBadges,
						subredditId: t.id,
						userId: e.id,
						onSelectBadge: this.handleBadgeSelection
					}), n.a.createElement(St, {
						appliedBadge: this.props.appliedBadges[this.props.currentBadgeType],
						badges: [this.state.selectedBadges[m.a.Loyalty] || this.props.appliedBadges[m.a.Loyalty], this.state.selectedBadges[m.a.Achievement] || this.props.appliedBadges[m.a.Achievement], this.state.selectedBadges[m.a.Cosmetic] || this.props.appliedBadges[m.a.Cosmetic]].filter(Mt),
						className: kt.a.preview,
						previewedBadge: a,
						subredditId: t.id,
						onDeselect: () => {
							a.badge && this.handleBadgeSelection(a.type, a.badge)
						}
					})))
				}
			}
			const Lt = Object(c.c)({
					account: e => e.user.account,
					appliedBadges: (e, t) => {
						const a = Object(i.q)(e, t);
						return a ? Object(p.f)(e, a.id) : {
							[m.a.Loyalty]: void 0,
							[m.a.Achievement]: void 0,
							[m.a.Cosmetic]: void 0
						}
					},
					currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
					currentView: e => e.economics.currentBadgeManagementScreen.view,
					initialSelectedBadge: (e, t) => {
						const a = e.economics.currentBadgeManagementScreen.view,
							s = Object(i.q)(e, t);
						let n;
						if (s && e.economics.currentModalArgs && e.economics.currentModalArgs.badge) {
							const t = e.economics.currentModalArgs.badge.type,
								a = e.economics.subredditPremium[s.id];
							if (a && a.status === u.a.Fetched) {
								(n = a.data.userOwnedBadges.find(e => e.type === t)) || (n = a.raw.products[t])
							}
						}
						if (s && !n && a === m.c.Gallery) {
							const t = Object(p.o)(e, s.id, m.a.Cosmetic, m.c.Gallery)[0];
							if (t) {
								const e = t.locked[0];
								e && (Object(l.d)(e) || e.price) && (n = t.locked[0])
							}
						}
						return n
					},
					subreddit: i.q
				}),
				It = Object(d.b)(Lt),
				Tt = Object(i.t)();
			t.default = Object(o.a)("spSpecialMemberships", Object(r.a)(Tt(It(Pt))))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, a) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				o = a("./src/reddit/actions/tooltip.ts"),
				l = a("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				m = a("./src/reddit/featureFlags/index.ts"),
				u = a("./src/reddit/selectors/economics.ts"),
				p = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				g = a.n(p);

			function b(e) {
				const {
					badges: t
				} = e;
				return t.length ? n.a.createElement(l.b, {
					useHovercard: !0,
					badges: t,
					className: Object(r.a)(e.className, g.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && t.length < 2 && e.accountId === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			t.b = Object(d.b)(() => Object(c.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, t) => {
					let {
						subredditId: a,
						userId: s
					} = t;
					return Object(u.r)(e, a, s)
				},
				customBadgesEnabled: m.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => m.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(o.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(o.i)()),
				onOpenUploadDialog: () => e(Object(i.j)())
			}))(b)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less": function(e, t, a) {
			e.exports = {
				clickable: "_2W-yYYgiKN7Nv6X-LYi_9w",
				container: "_2FOpaOYxDZOwfOdaggJpwm",
				description: "_2Q0iZfK75k4af7Yh_QhiFm",
				user: "_3B1S9qGju-2qKwMcvkVFtz",
				userContainer: "_2Y-fftIz65RlW68o233ly9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				i = a("./src/reddit/actions/tooltip.ts"),
				o = a("./src/reddit/helpers/economics/sortBadges.ts"),
				l = a("./src/reddit/models/Badge/managementPage.ts"),
				m = a("./node_modules/reselect/es/index.js"),
				u = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				p = a("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				g = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				b = a.n(g);
			const {
				fbt: h
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const v = Object(m.c)({
				account: e => e.user.account
			});
			t.a = Object(d.b)(v, (e, t) => {
				let {
					subredditId: a
				} = t;
				return {
					onShowTooltip: t => e(Object(i.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(i.i)()),
					onOpenModal: () => e(Object(r.c)({
						subredditId: a,
						initialView: l.c.MyBadges
					})),
					onOpenUploadDialog: () => e(Object(r.j)())
				}
			})((function(e) {
				if (!e.account) return null;
				const t = Object(o.a)(e.badges),
					a = t[t.length - 1],
					s = a && a.extra && a.extra.style && a.extra.style.backgroundColor,
					d = a && a.extra && a.extra.style && a.extra.style.color;
				return n.a.createElement("div", {
					className: Object(c.a)(e.className, b.a.container, {
						[b.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: s || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, n.a.createElement("div", {
					className: b.a.userContainer
				}, n.a.createElement(u.a, {
					accountId: e.account.id,
					badges: t,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: e.account.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), n.a.createElement(p.a, {
					badges: t,
					subredditId: e.subredditId,
					userId: e.account.id
				}, n.a.createElement("span", {
					className: b.a.user
				}, e.account.username || e.account.displayText || "username"))), e.showExplanation && n.a.createElement("div", {
					className: b.a.description
				}, s || d ? s ? h._("Username and content is distinguished with a color matching the last badge.", null, {
					hk: "M24zz"
				}) : h._("Username is distinguished with a color matching the last badge.", null, {
					hk: "2fnnbI"
				}) : h._("This is how your username will appear.", null, {
					hk: "meyGf"
				})))
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				r = a("./src/reddit/selectors/economics.ts");

			function i(e) {
				const {
					badges: t
				} = e, a = t[t.length - 1];
				return a && !e.ignore ? n.a.cloneElement(e.children, {
					style: a.extra && a.extra.style && a.extra.style.color ? Object.assign(Object.assign({}, e.children.props.style || {}), {
						color: a.extra.style.color,
						fontWeight: 700
					}) : e.children.props.style
				}) : e.children
			}
			t.b = Object(d.b)(() => Object(c.c)({
				badges: (e, t) => {
					let {
						subredditId: a,
						userId: s
					} = t;
					return Object(r.r)(e, a, s)
				}
			}))(i)
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, a) {
			"use strict";
			var s, n, d, c;

			function r(e) {
				const {
					platform: t,
					playerType: a,
					region: s,
					style: n
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(n, "/").concat(s, "_").concat(t, "_").concat(a, "_").concat(n, ".svg")
			}
			a.d(t, "a", (function() {
					return s
				})), a.d(t, "b", (function() {
					return n
				})), a.d(t, "c", (function() {
					return d
				})), a.d(t, "d", (function() {
					return r
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(s || (s = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(n || (n = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(d || (d = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(c || (c = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return r
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/lodash/flattenDeep.js"),
				n = a.n(s),
				d = a("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				r = new Set(n()(Object.keys(d.a).map(e => Object.keys(d.b).map(t => Object.keys(d.c).map(a => "".concat(a, "_").concat(e, "_").concat(t, "_badge"))))))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				r = a("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var a = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (a[s[n]] = e[s[n]])
					}
					return a
				};

			function o(e, t, a) {
				const s = Object(c.c)({
					featureEnabled: t => r.d[e](t)
				});
				return Object(d.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, d = i(e, ["featureEnabled"]);
					return s ? n.a.createElement(t, d) : void 0 !== a ? n.a.createElement(a, d) : null
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./src/lib/permalinkToOverlayLocation/index.ts");

			function n(e, t) {
				return Object(s.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = a("./src/lib/currency/centsToDollars/index.ts"),
				n = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				d = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function c(e) {
				let {
					apiContext: t,
					config: a,
					elementId: c,
					price: r,
					purchaseFn: i,
					username: o,
					onCancel: l,
					onClientLoad: m,
					onError: u,
					onSubmitting: p,
					onSuccess: g
				} = e;
				const b = (e, t) => {
					if (!u) return;
					let a = e.toString ? e.toString() : "";
					a.toLowerCase().includes("object object") && (a = JSON.stringify(e)), u(e, a, t)
				};
				try {
					const [e] = await Promise.all([Object(n.b)(t, {
						username: o
					}), Object(d.b)()]);
					if (!e.ok) return void b(e.error, "/ps/me/braintree-client-tokens");
					const u = await braintree.client.create({
							authorization: e.body.clientToken
						}),
						h = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: u
							}, (a, s) => a ? t(a) : e(s))
						});
					m && m(), await paypal.Buttons({
						createBillingAgreement: "subscription" === a.type ? () => (p && p(), h.createPayment({
							amount: Object(s.a)(r(), !0),
							billingAgreementDescription: a.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === a.type ? () => (p && p(), h.createPayment({
							amount: Object(s.a)(r(), !0),
							currency: "USD",
							flow: "checkout",
							intent: "capture"
						})) : void 0,
						style: {
							height: 32
						},
						onApprove: async e => {
							h.tokenizePayment(e).then(e => {
								let {
									nonce: t
								} = e;
								return i(t)
							}).then(e => {
								e.ok ? g && g() : b(e.error, "/orders")
							})
						},
						onCancel: () => l && l(),
						onError: e => b(e, "paypalError")
					}).render("#".concat(c))
				} catch (h) {
					b(h, "paypalError")
				}
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function d(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/EyeCancel/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function d(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M13.6926 12.277L17.7076 16.293C18.0986 16.684 18.0986 17.316 17.7076 17.707C17.5126 17.902 17.2566 18 17.0006 18C16.7446 18 16.4886 17.902 16.2936 17.707L2.29361 3.70701C1.90261 3.31601 1.90261 2.68401 2.29361 2.29301C2.68461 1.90201 3.31661 1.90201 3.70761 2.29301L7.24661 5.83201C9.79961 4.73701 12.8686 5.21001 14.9496 7.29101L17.7076 10.049C18.0976 10.439 18.0976 11.072 17.7076 11.463C17.5116 11.658 17.2556 11.756 16.9996 11.756C16.7446 11.756 16.4886 11.658 16.2926 11.463L13.5356 8.70501C13.4987 8.66806 13.4583 8.63769 13.4178 8.60724C13.3859 8.58329 13.354 8.5593 13.3236 8.53201C13.7496 9.16801 13.9996 9.93301 13.9996 10.756C13.9996 11.296 13.8886 11.809 13.6926 12.277ZM2.29301 10.0488C1.90201 10.4398 1.90201 11.0718 2.29301 11.4628C2.68401 11.8538 3.31601 11.8538 3.70701 11.4628L5.87801 9.29081L4.46401 7.87681L2.29301 10.0488ZM6.00011 10.7559C6.00011 12.9649 7.79111 14.7559 10.0001 14.7559C10.4041 14.7559 10.7861 14.6779 11.1531 14.5669L6.17511 9.58791C6.06211 9.95791 6.00011 10.3499 6.00011 10.7559Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function d(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.71da905b634f03934550.js.map