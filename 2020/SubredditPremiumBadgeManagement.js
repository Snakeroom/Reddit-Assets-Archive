// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.eb06edfc9b7a80042cfd.js
// Retrieved at 3/4/2020, 10:00:07 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/stripLineBreaks/index.ts": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/es6.regexp.replace.js");
			const s = /\r?\n|\r/g;
			t.a = e => e.replace(s, "")
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
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				r = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = a("./src/reddit/actions/tooltip.ts"),
				m = a("./src/higherOrderComponents/makeAsync.tsx");
			var u = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([a.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), a.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), a.e("SubredditPremiumBadgeHovercardTooltip")]).then(a.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				g = a("./src/reddit/featureFlags/index.ts"),
				b = a("./src/reddit/helpers/economics/sortBadges.ts"),
				h = a("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = a("./src/reddit/models/Badge/index.ts");
			var y = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => a.e("CustomBadgeHovercardTooltip").then(a.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				B = a("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				f = a.n(B);
			a.d(t, "b", (function() {
				return O
			})), a.d(t, "c", (function() {
				return _
			})), a.d(t, "a", (function() {
				return S
			}));
			const x = "add-custom-badge-tooltip",
				E = 100,
				j = 2 * E;
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, E)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return n.a.createElement("img", {
						className: Object(i.a)(f.a.image, this.props.className),
						src: "".concat(r.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(x, "-").concat(this.props.uniqueIdentifier);
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
					})), n.a.createElement(y, {
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
			const C = Object(d.c)({
					badges: (e, t) => {
						let {
							subredditId: a,
							userId: s
						} = t;
						return ((e.users.appliedBadges[s] || {})[a] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: g.d.spPremium
				}),
				w = Object(d.c)({
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
					useHovercard: g.d.spPremium
				}),
				N = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(o.i)())
				}),
				_ = Object(c.b)(C, N)(O),
				S = Object(c.b)(w, N)(O)
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
				singleLineText: "_3vV5Hg-hZiDuQVXYnhgzdZ",
				collectionTitle: "BKuPdCEiKWhUuAAZSV8Hu",
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
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				o = a("./src/reddit/i18n/utils.ts"),
				l = a("./src/reddit/models/Badge/index.ts"),
				m = a("./src/reddit/models/Badge/managementPage.ts"),
				u = a("./src/reddit/selectors/economics.ts"),
				p = a("./src/reddit/selectors/gov.ts"),
				g = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				b = a.n(g);
			const h = Object(d.c)({
				collection: (e, t) => {
					let {
						badge: a,
						subredditId: s
					} = t;
					if (a.collections) {
						const t = Object.keys(a.collections);
						if (t.length) {
							const a = t[0];
							return Object(u.i)(e, {
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
					const c = e.user.account;
					if (c && !Object(l.c)(a) && n === m.a.Achievement && i.a[a.id]) {
						const t = Object(p.i)(e, {
							subredditId: s,
							userId: c.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: i.a[a.id]
						}
					}
				}
			});
			t.a = Object(c.b)(h)((function(e) {
				const t = e.type === m.a.Loyalty ? Object(o.c)("Loyalty Badge") : e.type === m.a.Achievement ? Object(o.c)("Achievement Badge") : Object(o.c)("Style Badge"),
					a = e.collection ? e.collection.title : t,
					{
						url: s,
						url2x: c
					} = Object(l.b)(60, 60, e.badge),
					d = e.progress;
				return n.a.createElement("article", {
					className: Object(r.a)(e.className, {
						[b.a.fullWidth]: !!e.fullWidth
					})
				}, n.a.createElement("div", {
					className: b.a.wrapper
				}, n.a.createElement("img", {
					className: b.a.image,
					src: c,
					srcSet: "".concat(s, ", ").concat(c, " 2x")
				}), n.a.createElement("div", {
					className: b.a.info
				}, n.a.createElement("div", {
					className: b.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: a
				}, a), n.a.createElement("header", {
					className: b.a.title
				}, e.badge.title), d && d.complete < d.total && n.a.createElement("div", {
					className: b.a.progressContainer
				}, n.a.createElement("div", {
					className: b.a.progressBar
				}, n.a.createElement("div", {
					className: b.a.progressThumb,
					style: {
						width: "".concat(d.complete / d.total * 100, "%")
					}
				})), n.a.createElement("div", {
					className: b.a.progressAmount
				}, function(e) {
					const t = "".concat(Math.floor(e.complete / 1e3), "k"),
						a = "".concat(Math.floor(e.total / 1e3), "k");
					return "".concat(t, "/").concat(a)
				}(d))), n.a.createElement("div", {
					className: b.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2ZTi5QrGM2DoaGzw3CUXpJ",
				firstLink: "_2hREU3H7dsilCSOwDyqNCt",
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
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/lib/classNames/index.ts"),
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
								}), this.props.sendEvent(e => Object.assign({
									source: "meta",
									action: "click",
									noun: "badge_gallery_paypal_purchase",
									correlationId: this.props.correlationId
								}, p.defaults(e), {
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
						className: Object(d.a)(this.props.className, b.a.container)
					}, n.a.createElement("div", {
						className: Object(d.a)(b.a.button, {
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
			t.a = Object(o.b)(Object(c.b)(void 0, (e, t) => {
				let {
					subreddit: a
				} = t;
				return {
					onError: t => Object(r.a)(e, t)
				}
			})(Object(i.b)(v)))
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
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				r = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/contexts/PageLayer/index.tsx"),
				o = a("./src/reddit/featureFlags/component.tsx"),
				l = a("./src/reddit/models/Badge/index.ts"),
				m = a("./src/reddit/models/Badge/managementPage.ts"),
				u = a("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = a("./src/reddit/selectors/economics.ts"),
				g = a("./src/lib/classNames/index.ts"),
				b = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				h = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				v = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Badge/index.m.less"),
				y = a.n(v);

			function B(e) {
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
				}, e.applied && n.a.createElement(b.a, {
					className: y.a.checkmark
				}), e.locked && n.a.createElement(h.a, {
					className: y.a.lock
				}), n.a.createElement("img", {
					className: y.a.image,
					src: a,
					srcSet: "".concat(t, ", ").concat(a, " 2x")
				}))
			}
			var f = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeGroup/index.m.less"),
				x = a.n(f);

			function E(e) {
				const {
					children: t,
					className: a,
					description: s,
					highlight: c,
					rowLength: d = 4,
					title: r
				} = e;
				if (!t.length) return null;
				const i = t.reduce((e, t) => {
					let a = e[e.length - 1];
					return a.length >= d && (a = [], e.push(a)), a.push(t), e
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
						color: c
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
				N = a("./src/config.ts"),
				_ = a("./src/reddit/endpoints/governance/requester.ts");
			async function S(e, t, a, s) {
				return Object(_.a)(e, {
					endpoint: "".concat(N.a.metaUrl, "/storage/").concat(t, "/me/").concat(a),
					method: "patch",
					data: {
						on: s
					}
				}).then(e => !!e.ok)
			}
			async function P(e, t, a, s) {
				return Object(_.a)(e, {
					endpoint: "".concat(N.a.metaUrl, "/storage/").concat(t, "/me/").concat(a),
					method: "get"
				}).then(e => e.ok ? Boolean(e.body && e.body.on) : s)
			}
			var M = a("./src/reddit/i18n/utils.ts"),
				k = a("./src/reddit/icons/svgs/Close/index.tsx"),
				I = a("./src/reddit/icons/svgs/Info/index.tsx"),
				L = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less"),
				T = a.n(L),
				A = Object(w.b)(class extends n.a.Component {
					constructor(e) {
						super(e), this.closeDescription = () => {
							this.setState(e => Object.assign({}, e, {
								descriptionOpen: !1
							})), ((e, t, a) => S(e, t, a, !0))(this.props.apiContext(), this.props.subredditId, this.props.sectionName)
						}, this.openDescription = () => this.setState(e => Object.assign({}, e, {
							descriptionOpen: !0
						})), this.state = {
							descriptionOpen: !1
						}
					}
					componentDidMount() {
						((e, t, a) => P(e, t, a, !1))(this.props.apiContext(), this.props.subredditId, this.props.sectionName).then(e => this.setState({
							descriptionOpen: !e
						}))
					}
					render() {
						return n.a.createElement("div", {
							className: this.props.className
						}, n.a.createElement("header", {
							className: T.a.title
						}, this.props.title, n.a.createElement(I.a, {
							className: T.a.info,
							onClick: this.openDescription
						})), this.state.descriptionOpen && n.a.createElement("div", {
							className: T.a.description
						}, n.a.createElement("div", {
							className: T.a.descriptionHeader
						}, n.a.createElement("div", {
							className: T.a.descriptionTitle
						}, Object(M.c)("about")), n.a.createElement(k.a, {
							className: T.a.close,
							onClick: this.closeDescription
						})), n.a.createElement("div", {
							className: T.a.descriptionText
						}, this.props.info)))
					}
				});

			function H(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M13.6926 12.277L17.7076 16.293C18.0986 16.684 18.0986 17.316 17.7076 17.707C17.5126 17.902 17.2566 18 17.0006 18C16.7446 18 16.4886 17.902 16.2936 17.707L2.29361 3.70701C1.90261 3.31601 1.90261 2.68401 2.29361 2.29301C2.68461 1.90201 3.31661 1.90201 3.70761 2.29301L7.24661 5.83201C9.79961 4.73701 12.8686 5.21001 14.9496 7.29101L17.7076 10.049C18.0976 10.439 18.0976 11.072 17.7076 11.463C17.5116 11.658 17.2556 11.756 16.9996 11.756C16.7446 11.756 16.4886 11.658 16.2926 11.463L13.5356 8.70501C13.4987 8.66806 13.4583 8.63769 13.4178 8.60724C13.3859 8.58329 13.354 8.5593 13.3236 8.53201C13.7496 9.16801 13.9996 9.93301 13.9996 10.756C13.9996 11.296 13.8886 11.809 13.6926 12.277ZM2.29301 10.0488C1.90201 10.4398 1.90201 11.0718 2.29301 11.4628C2.68401 11.8538 3.31601 11.8538 3.70701 11.4628L5.87801 9.29081L4.46401 7.87681L2.29301 10.0488ZM6.00011 10.7559C6.00011 12.9649 7.79111 14.7559 10.0001 14.7559C10.4041 14.7559 10.7861 14.6779 11.1531 14.5669L6.17511 9.58791C6.06211 9.95791 6.00011 10.3499 6.00011 10.7559Z"
				}))
			}
			var D = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/HideBadge/index.m.less"),
				R = a.n(D);
			const F = {
				id: "removeBadge",
				type: "removeBadge"
			};

			function G(e) {
				const {
					badgeType: t,
					className: a
				} = e, {
					description: s,
					title: c
				} = function(e) {
					switch (e) {
						case m.a.Achievement:
							return {
								description: Object(M.c)("Do not display an Achievement Badge"), title: Object(M.c)("Hide Achievement Badge")
							};
						case m.a.Cosmetic:
							return {
								description: Object(M.c)("Do not display a Style Badge"), title: Object(M.c)("Hide Style Badge")
							};
						case m.a.Loyalty:
							return {
								description: Object(M.c)("Do not display a Loyalty Badge"), title: Object(M.c)("Hide Loyalty Badge")
							}
					}
				}(t);
				return n.a.createElement("div", {
					className: Object(g.a)(a, R.a.container)
				}, n.a.createElement("div", {
					className: R.a.centerContent
				}, n.a.createElement("header", {
					className: R.a.title
				}, c), n.a.createElement("div", {
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
				}, e.applied && n.a.createElement(b.a, {
					className: R.a.checkmark
				}), n.a.createElement(H, {
					className: R.a.hideIcon
				})))))))
			}
			var V = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less"),
				U = a.n(V);
			const W = "Show off with an Achievement Badge! Unlock badges by completing goals.";
			const q = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.p)(e, a, m.a.Achievement)
				}
			});
			var Y = Object(c.b)(q)((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(U.a.container, e.className)
					}, n.a.createElement(C, null, n.a.createElement(A, {
						className: U.a.header,
						info: Object(M.c)(W),
						sectionName: "achievement_badge",
						subredditId: e.subredditId,
						title: Object(M.c)("Achievement Badges")
					}), n.a.createElement("div", {
						className: U.a.badges
					}, e.collections.map(t => n.a.createElement(E, {
						className: U.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: U.a.badge,
						key: t.id + a
					}, n.a.createElement(B, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => n.a.createElement("div", {
						className: U.a.badge,
						key: t.id
					}, n.a.createElement(B, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), n.a.createElement(G, {
						applied: !e.appliedBadge,
						className: U.a.badgeGroup,
						badgeType: m.a.Achievement,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				z = a("./node_modules/lodash/curry.js"),
				K = a.n(z),
				Q = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Z = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/Tab/index.m.less"),
				X = a.n(Z);

			function J(e) {
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
				}, n.a.createElement(h.a, {
					className: X.a.lock
				})))
			}
			var $ = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less"),
				ee = a.n($);
			const te = K()((e, t, a) => "".concat(N.a.assetPath, "/img/memberships/badges/management/tabs/").concat(e, "/").concat(t, "-").concat(a ? "on" : "off", "-v2.png")),
				ae = [{
					type: m.a.Loyalty,
					text: Object(M.c)("Loyalty")
				}, {
					type: m.a.Achievement,
					text: Object(M.c)("Achievement")
				}, {
					type: m.a.Cosmetic,
					text: Object(M.c)("Style")
				}];
			const se = Object(d.c)({
				currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasAchievementBadges: (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = Object(p.p)(e, a, m.a.Achievement);
					for (const n of s)
						if (n.locked.length || n.unlocked.length) return !0;
					return !1
				}
			});
			var ne = Object(c.b)(se, e => ({
					onChangeBadgeType: t => e(Object(Q.b)(t))
				}))((function(e) {
					const {
						hasAchievementBadges: t
					} = e, a = te(e.subredditId), s = ae.filter(e => e.type !== m.a.Achievement || t);
					return n.a.createElement("nav", {
						className: Object(g.a)(ee.a.container, e.className)
					}, s.map((t, s) => n.a.createElement(n.a.Fragment, {
						key: "".concat(t.type)
					}, n.a.createElement(J, {
						className: ee.a.tab,
						selected: e.currentBadgeType === t.type,
						onSelect: () => e.onChangeBadgeType(t.type)
					}, n.a.createElement("div", {
						className: ee.a.tabContent
					}, n.a.createElement("img", {
						className: ee.a.img,
						src: a(t.type, e.currentBadgeType === t.type)
					}), n.a.createElement("div", {
						className: ee.a.tabText
					}, t.text))))))
				})),
				ce = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less"),
				de = a.n(ce);
			const re = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.p)(e, a, m.a.Cosmetic, m.c.Gallery)
				}
			});
			var ie = Object(c.b)(re)((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(de.a.container, e.className)
					}, n.a.createElement(C, null, n.a.createElement("div", {
						className: de.a.badges
					}, e.collections.map(t => n.a.createElement(E, {
						className: de.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.locked.filter(e => Object(l.d)(e) || !!e.price).map(t => n.a.createElement("div", {
						className: de.a.badge,
						key: t.id
					}, n.a.createElement(B, {
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))))))))
				})),
				oe = (a("./node_modules/core-js/modules/es6.regexp.replace.js"), a("./src/lib/stripLineBreaks/index.ts")),
				le = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less"),
				me = a.n(le);
			const ue = e => Object(oe.a)("\n  The Loyalty Badge shows how long you've been a ".concat(Object(M.b)("memberAlt", e.memberAlt), " in the subreddit.\n  The longer you remain as a member, the more Loyalty Badges you unlock.\n")).replace(/\t/g, "").trim();
			const pe = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.p)(e, a, m.a.Loyalty)
				},
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.u)(e, a)
				}
			});
			var ge = Object(c.b)(pe)((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(me.a.container, e.className)
					}, n.a.createElement(C, null, n.a.createElement(A, {
						className: me.a.header,
						info: Object(M.c)(ue(e.meta)),
						sectionName: "loyalty_badge",
						subredditId: e.subredditId,
						title: Object(M.c)("Loyalty Badges")
					}), n.a.createElement("div", {
						className: me.a.badges
					}, e.collections.map(t => n.a.createElement(E, {
						className: me.a.badgeGroup,
						highlight: t.highlight,
						key: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: me.a.badge,
						key: t.id + a
					}, n.a.createElement(B, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => n.a.createElement("div", {
						className: me.a.badge,
						key: t.id
					}, n.a.createElement(B, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), n.a.createElement(G, {
						applied: !e.appliedBadge,
						className: me.a.badgeGroup,
						badgeType: m.a.Loyalty,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				be = a("./src/lib/constants/specialMembership.ts"),
				he = a("./src/reddit/featureFlags/index.ts"),
				ve = a("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				ye = a("./node_modules/uuid/v4.js"),
				Be = a.n(ye),
				fe = a("./src/reddit/actions/modal.ts"),
				xe = a("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = a("./src/reddit/controls/Button/index.tsx"),
				je = a("./src/reddit/helpers/economics/membershipPage.ts"),
				Oe = a("./src/reddit/selectors/telemetry.ts"),
				Ce = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less"),
				we = a.n(Ce);
			const Ne = Object(d.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.u)(e, a)
				},
				subreddit: (e, t) => {
					let {
						subredditId: a
					} = t;
					return e.subreddits.models[a]
				}
			});
			var _e = Object(xe.b)(Object(c.b)(Ne, (e, t) => {
					let {
						badge: a,
						subredditId: s
					} = t;
					return {
						onCloseModal: () => e(Object(fe.f)())
					}
				})((function(e) {
					const t = "".concat(N.a.assetPath, "/img/memberships/badges/management/myBadges/").concat(e.subredditId, "/noBadges.png"),
						a = Be()(),
						s = e.subreddit ? e.subreddit.name : "";
					return n.a.createElement("div", {
						className: Object(g.a)(we.a.container, e.className)
					}, n.a.createElement("img", {
						className: we.a.img,
						src: t
					}), n.a.createElement("div", {
						className: we.a.title
					}, Object(M.c)("You Don't Have Any Style Badges Yet")), n.a.createElement("div", {
						className: we.a.text
					}, Object(M.c)("\n          Get a ".concat(Object(M.b)("membershipAlt", e.meta.membershipAlt), " and\n          receive new style badges every month. You can also buy badges\n          individually from the Gallery.\n        "))), n.a.createElement(Ee.h, {
						className: we.a.learnMore,
						disabled: !e.subreddit,
						to: Object(je.a)(s, a),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: a,
								source: "meta",
								action: "click",
								noun: "subscription_myBadges_open_learn_more"
							}, Oe.defaults(e), {
								subreddit: Oe.subreddit(e)
							})), e.onCloseModal()
						}
					}, Object(M.c)("Learn More")))
				}))),
				Se = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less"),
				Pe = a.n(Se);
			const Me = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.p)(e, a, m.a.Cosmetic, m.c.MyBadges)
				},
				customBadgesEnabled: he.d.spCustomBadges
			});
			var ke = Object(c.b)(Me, e => ({
					onOpenUploadDialog: () => e(Object(Q.i)())
				}))((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(Pe.a.container, e.className)
					}, n.a.createElement(C, null, e.collections.length ? n.a.createElement("div", {
						className: Pe.a.badges
					}, e.collections.map(t => n.a.createElement(E, {
						className: Pe.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: Pe.a.badge,
						key: t.id + a
					}, n.a.createElement(B, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.id === be.a && e.customBadgesEnabled ? n.a.createElement("button", {
						className: Pe.a.addCustomWrapper,
						onClick: e.onOpenUploadDialog
					}, n.a.createElement(ve.a, {
						className: Pe.a.addCustom
					})) : []))), n.a.createElement(G, {
						applied: !e.appliedBadge,
						className: Pe.a.badgeGroup,
						badgeType: m.a.Cosmetic,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					})) : n.a.createElement(_e, {
						className: Pe.a.noBadges,
						subredditId: e.subredditId
					})))
				})),
				Ie = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less"),
				Le = a.n(Ie);
			const Te = Object(d.c)({
				isSelected: (e, t) => {
					let {
						viewType: a
					} = t;
					return e.economics.currentBadgeManagementScreen.view === a
				}
			});
			var Ae = Object(c.b)(Te, (e, t) => {
					let {
						viewType: a
					} = t;
					return {
						onSelect: () => e(Object(Q.d)(a))
					}
				})((function(e) {
					return n.a.createElement("button", {
						className: Object(g.a)(e.className, Le.a.container, {
							[Le.a.selected]: e.isSelected
						}),
						onClick: e.onSelect
					}, e.children)
				})),
				He = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less"),
				De = a.n(He);

			function Re(e) {
				return n.a.createElement("nav", {
					className: Object(g.a)(e.className, De.a.container)
				}, n.a.createElement(Ae, {
					className: De.a.tab,
					viewType: m.c.Gallery
				}, Object(M.c)("Gallery")), n.a.createElement(Ae, {
					className: De.a.tab,
					viewType: m.c.MyBadges
				}, Object(M.c)("My Badges")))
			}
			var Fe = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less"),
				Ge = a.n(Fe);
			const Ve = Object(d.c)({
				badgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.m)(e, a)
				},
				view: e => e.economics.currentBadgeManagementScreen.view
			});
			var Ue = Object(c.b)(Ve)((function(e) {
					const t = Object(g.a)(Ge.a.contentWrapper, {
						[Ge.a.withView]: e.badgeType === m.a.Cosmetic,
						[Ge.a.withoutView]: e.badgeType !== m.a.Cosmetic
					});
					return n.a.createElement("div", {
						className: Object(g.a)(e.className, Ge.a.container)
					}, n.a.createElement(ne, {
						className: Ge.a.nav,
						subredditId: e.subredditId
					}), e.badgeType === m.a.Cosmetic && e.hasGalleryBadges && n.a.createElement(Re, {
						className: Ge.a.viewSelector
					}), e.badgeType === m.a.Loyalty && n.a.createElement(ge, {
						appliedBadge: e.appliedBadges[m.a.Loyalty],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Loyalty],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Loyalty, t)
					}), e.badgeType === m.a.Achievement && n.a.createElement(Y, {
						appliedBadge: e.appliedBadges[m.a.Achievement],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Achievement],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Achievement, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.MyBadges && n.a.createElement(ke, {
						appliedBadge: e.appliedBadges[m.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Cosmetic, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.Gallery && n.a.createElement(ie, {
						appliedBadge: e.appliedBadges[m.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Cosmetic, t)
					}))
				})),
				We = a("./node_modules/react-motion/lib/react-motion.js"),
				qe = a("./src/reddit/helpers/economics/sortBadges.ts"),
				Ye = a("./src/reddit/icons/fonts/Downvote/index.tsx"),
				ze = a("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ke = a("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				Qe = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				Ze = a("./node_modules/lodash/last.js"),
				Xe = a.n(Ze),
				Je = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				$e = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				et = a("./src/lib/currency/centsToDollars/index.ts"),
				tt = a("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				at = a("./src/reddit/actions/toaster.ts"),
				st = a("./src/reddit/models/Toast/index.ts"),
				nt = a("./src/reddit/constants/disclaimers.ts"),
				ct = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less"),
				dt = a.n(ct);

			function rt(e) {
				return n.a.createElement("div", {
					className: Object(g.a)(e.className, dt.a.container)
				}, Object(M.c)("By purchasing, you agree to the"), n.a.createElement("a", {
					className: Object(g.a)(dt.a.link, dt.a.firstLink),
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, Object(M.c)("Reddit User Agreement")), Object(M.c)("and"), n.a.createElement("a", {
					className: dt.a.link,
					href: nt.a,
					target: "_blank"
				}, Object(M.c)("Reddit Beta Terms of Service")), Object(M.c)("."))
			}
			var it = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				ot = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less"),
				lt = a.n(ot);
			const mt = Object(d.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.u)(e, a)
				},
				ownedBadge: p.o,
				subreddit: (e, t) => {
					let {
						subredditId: a
					} = t;
					return e.subreddits.models[a]
				}
			});
			var ut = Object(xe.b)(Object(c.b)(mt, (e, t) => {
					let {
						badge: a,
						subredditId: s
					} = t;
					return {
						onApply: () => e(Object(tt.b)({
							badge: a,
							subredditId: s,
							placement: a.placement
						})),
						onCloseModal: () => e(Object(fe.f)()),
						onPurchased: () => {
							e(Object(at.e)({
								kind: st.b.SuccessCommunityGreen,
								text: Object(M.c)("Congratulations! You've bought a badge!")
							})), e(Object(tt.d)(s, a))
						}
					}
				})((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						a = Be()();
					return n.a.createElement("footer", {
						className: Object(g.a)(e.className, lt.a.container)
					}, n.a.createElement("div", {
						className: lt.a.wrapper
					}, n.a.createElement("div", {
						className: lt.a.description
					}, !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.d)(e.badge) && n.a.createElement("div", {
						className: lt.a.price
					}, Object(M.c)("Buy for $".concat(Object(M.b)("price", Object(et.a)(e.badge.price, !0))))), !Object(l.c)(e.badge) && !e.ownedBadge && Object(l.d)(e.badge) && n.a.createElement("div", {
						className: lt.a.price
					}, Object(M.c)("Get monthly reward badges by purchasing a ".concat(Object(M.b)("membershipAlt", e.meta.membershipAlt), "!")))), e.ownedBadge && n.a.createElement(Ee.f, {
						className: lt.a.button,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, e.alreadyApplied ? Object(M.c)("Applied") : Object(M.c)("Apply")), !Object(l.c)(e.badge) && !e.ownedBadge && Object(l.d)(e.badge) && n.a.createElement(Ee.h, {
						className: lt.a.button,
						disabled: !e.subreddit,
						to: Object(je.a)(t, a),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: a,
								source: "meta",
								action: "click",
								noun: "subscription_gallery_open_learn_more"
							}, Oe.defaults(e), {
								subreddit: Oe.subreddit(e)
							})), e.onCloseModal()
						}
					}, Object(M.c)("Learn More")), !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.d)(e.badge) && n.a.createElement(it.a, {
						className: lt.a.purchaseButton,
						correlationId: a,
						price: e.badge.price,
						productId: e.badge.id,
						subreddit: e.subreddit,
						onPaymentSuccessful: e.onPurchased
					})), !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && n.a.createElement(rt, {
						className: lt.a.legal
					}))
				}))),
				pt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less"),
				gt = a.n(pt);
			var bt = Object(c.b)(void 0, (e, t) => {
					let {
						badge: a,
						subredditId: s
					} = t;
					return {
						onApply: () => e(Object(tt.b)({
							badge: a,
							subredditId: s,
							placement: m.b[a.badgeType]
						}))
					}
				})((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(e.className, gt.a.container)
					}, e.alreadyApplied ? n.a.createElement("div", {
						className: gt.a.text
					}, function(e) {
						switch (e.badgeType) {
							case m.a.Achievement:
								return Object(M.c)("You do not currently have an Achievement Badge selected.");
							case m.a.Cosmetic:
								return Object(M.c)("You do not currently have a Style Badge selected.");
							case m.a.Loyalty:
								return Object(M.c)("You do not currently have a Loyalty Badge selected.")
						}
					}(e.badge)) : n.a.createElement(s.Fragment, null, n.a.createElement("div", {
						className: gt.a.text
					}, function(e) {
						switch (e.badgeType) {
							case m.a.Achievement:
								return Object(M.c)("Hide your Achievement Badge?");
							case m.a.Cosmetic:
								return Object(M.c)("Hide your Style Badge?");
							case m.a.Loyalty:
								return Object(M.c)("Hide your Loyalty Badge?")
						}
					}(e.badge)), n.a.createElement(Ee.f, {
						className: gt.a.hide,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, Object(M.c)("Hide"))))
				})),
				ht = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/index.m.less"),
				vt = a.n(ht);

			function yt(e) {
				return "removeBadge" === e.type
			}
			const Bt = Object(d.c)({
				alreadyApplied: (e, t) => {
					let {
						badge: a,
						subredditId: s,
						type: n
					} = t;
					const c = Object(p.f)(e, s)[n];
					return c ? c.id === a.id : "removeBadge" === a.type
				},
				lastUnlockedLoyaltyBadge: (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = Object(p.p)(e, a, m.a.Loyalty)[0];
					if (s) return Xe()(s.unlocked)
				}
			});
			var ft = Object(c.b)(Bt)((function(e) {
					return yt(e.badge) ? n.a.createElement("div", {
						className: Object(g.a)(e.className, vt.a.container)
					}, n.a.createElement(bt, {
						alreadyApplied: e.alreadyApplied,
						className: vt.a.hide,
						badge: e.badge,
						subredditId: e.subredditId
					})) : n.a.createElement("div", {
						className: Object(g.a)(e.className, vt.a.container)
					}, n.a.createElement($e.a, {
						badge: e.badge,
						className: vt.a.content,
						subredditId: e.subredditId,
						type: e.type
					}, n.a.createElement(Je.a, {
						className: vt.a.dismiss,
						onClick: e.onDeselect
					})), function(e) {
						return e.type === m.a.Cosmetic || (!(e.type !== m.a.Achievement || yt(e.badge) || !Object(l.c)(e.badge)) || !(e.type !== m.a.Loyalty || !e.lastUnlockedLoyaltyBadge || e.badge.id !== e.lastUnlockedLoyaltyBadge.id))
					}(e) && n.a.createElement(ut, {
						alreadyApplied: e.alreadyApplied,
						className: vt.a.footer,
						badge: e.badge,
						subredditId: e.subredditId
					}))
				})),
				xt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/index.m.less"),
				Et = a.n(xt);
			const jt = {
					stiffness: 210,
					damping: 20
				},
				Ot = () => ({
					bottom: -200
				}),
				Ct = () => ({
					bottom: Object(We.spring)(-200, jt)
				}),
				wt = [40, 68, 96];

			function Nt(e, t) {
				return wt.slice(0, e.length)[e.findIndex(e => e.id === t.id)]
			}

			function _t(e) {
				return "removeBadge" !== e.type
			}
			const St = Object(d.c)({
				subreddit: (e, t) => {
					let {
						subredditId: a
					} = t;
					return e.subreddits.models[a]
				}
			});
			var Pt = Object(c.b)(St, e => ({
					onClose: () => e(Object(fe.f)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "Community",
						a = Object(qe.a)(e.badges.filter(_t)),
						s = a.find(t => t.placement === m.b[e.previewedBadge.type]);
					return n.a.createElement("div", {
						className: Object(g.a)(e.className, Et.a.container)
					}, n.a.createElement("article", {
						className: Et.a.content
					}, n.a.createElement("header", {
						className: Et.a.header
					}, Object(M.c)("Edit ".concat(Object(M.b)("communityName", t), " Badges")), n.a.createElement(k.a, {
						className: Et.a.close,
						onClick: e.onClose
					})), n.a.createElement("div", {
						className: Et.a.contentBackground
					}), n.a.createElement("div", {
						className: Et.a.commentPreviewLabel
					}, Object(M.c)("comment preview")), n.a.createElement("div", {
						className: Object(g.a)(Et.a.commentPreviewContainer, {
							[Et.a.previewClosed]: !e.previewedBadge.badge,
							[Et.a.previewOpen]: !!e.previewedBadge.badge
						})
					}, n.a.createElement("div", {
						className: Et.a.commentPreview
					}, n.a.createElement("div", {
						className: Et.a.voteContainer
					}, n.a.createElement(ze.a, {
						className: Et.a.vote
					}), n.a.createElement(Ye.a, {
						className: Et.a.vote
					})), s && n.a.createElement(n.a.Fragment, null, n.a.createElement(Ke.a, {
						className: Et.a.radialHighlightOuter,
						style: {
							left: Nt(a, s)
						}
					}), n.a.createElement(Ke.a, {
						className: Et.a.radialHighlightInner,
						style: {
							left: Nt(a, s)
						}
					})), n.a.createElement(Qe.a, {
						showExplanation: !0,
						badges: a,
						subredditId: e.subredditId
					}))), n.a.createElement(We.TransitionMotion, {
						defaultStyles: [],
						styles: e.previewedBadge.badge ? [{
							data: e.previewedBadge.badge,
							key: e.previewedBadge.badge.id,
							style: {
								bottom: Object(We.spring)(16, jt)
							}
						}] : [],
						willEnter: Ot,
						willLeave: Ct
					}, t => n.a.createElement(n.a.Fragment, null, t.map(t => n.a.createElement("div", {
						className: Et.a.badgePreviewContainer,
						key: t.key,
						style: {
							bottom: t.style.bottom
						}
					}, n.a.createElement(ft, {
						badge: t.data,
						subredditId: e.subredditId,
						type: e.previewedBadge.type,
						onDeselect: e.onDeselect
					})))))))
				})),
				Mt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less"),
				kt = a.n(Mt);

			function It(e) {
				return !!e
			}
			class Lt extends n.a.Component {
				constructor(e) {
					super(e), this.handleBadgeSelection = (e, t) => {
						this.setState(a => {
							const s = a.selectedBadges[e];
							return {
								selectedBadges: Object.assign({}, a.selectedBadges, {
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
					}, n.a.createElement(Ue, {
						appliedBadges: this.props.appliedBadges,
						className: kt.a.leftRail,
						selectedBadges: this.state.selectedBadges,
						subredditId: t.id,
						userId: e.id,
						onSelectBadge: this.handleBadgeSelection
					}), n.a.createElement(Pt, {
						appliedBadge: this.props.appliedBadges[this.props.currentBadgeType],
						badges: [this.state.selectedBadges[m.a.Loyalty] || this.props.appliedBadges[m.a.Loyalty], this.state.selectedBadges[m.a.Achievement] || this.props.appliedBadges[m.a.Achievement], this.state.selectedBadges[m.a.Cosmetic] || this.props.appliedBadges[m.a.Cosmetic]].filter(It),
						className: kt.a.preview,
						previewedBadge: a,
						subredditId: t.id,
						onDeselect: () => {
							a.badge && this.handleBadgeSelection(a.type, a.badge)
						}
					})))
				}
			}
			const Tt = Object(d.c)({
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
							const t = Object(p.p)(e, s.id, m.a.Cosmetic, m.c.Gallery)[0];
							if (t) {
								const e = t.locked[0];
								e && (Object(l.d)(e) || e.price) && (n = t.locked[0])
							}
						}
						return n
					},
					subreddit: i.q
				}),
				At = Object(c.b)(Tt),
				Ht = Object(i.t)();
			t.default = Object(o.a)("spPremium", Object(r.a)(Ht(At(Lt))))
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
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
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
			t.b = Object(c.b)(() => Object(d.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, t) => {
					let {
						subredditId: a,
						userId: s
					} = t;
					return Object(u.t)(e, a, s)
				},
				customBadgesEnabled: m.d.spCustomBadges,
				premiumEnabled: e => m.d.spPremium(e)
			}), e => ({
				onShowTooltip: t => e(Object(o.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(o.i)()),
				onOpenUploadDialog: () => e(Object(i.i)())
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
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				o = a("./src/reddit/actions/tooltip.ts"),
				l = a("./src/reddit/helpers/economics/sortBadges.ts"),
				m = a("./src/reddit/i18n/utils.ts"),
				u = a("./src/reddit/models/Badge/managementPage.ts"),
				p = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				g = a("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				b = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				h = a.n(b);
			const v = Object(d.c)({
				account: e => e.user.account
			});
			t.a = Object(c.b)(v, (e, t) => {
				let {
					subredditId: a
				} = t;
				return {
					onShowTooltip: t => e(Object(o.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(o.i)()),
					onOpenModal: () => e(Object(i.c)({
						subredditId: a,
						initialView: u.c.MyBadges
					})),
					onOpenUploadDialog: () => e(Object(i.i)())
				}
			})((function(e) {
				if (!e.account) return null;
				const t = Object(l.a)(e.badges),
					a = t[t.length - 1],
					s = a && a.extra && a.extra.style && a.extra.style.backgroundColor,
					c = a && a.extra && a.extra.style && a.extra.style.color;
				return n.a.createElement("div", {
					className: Object(r.a)(e.className, h.a.container, {
						[h.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: s || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, n.a.createElement("div", {
					className: h.a.userContainer
				}, n.a.createElement(p.a, {
					accountId: e.account.id,
					badges: t,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: e.account.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), n.a.createElement(g.a, {
					badges: t,
					subredditId: e.subredditId,
					userId: e.account.id
				}, n.a.createElement("span", {
					className: h.a.user
				}, e.account.username || e.account.displayText || "username"))), e.showExplanation && n.a.createElement("div", {
					className: h.a.description
				}, s || c ? s ? Object(m.c)("Username and content is distinguished with a color matching the last badge.") : Object(m.c)("Username is distinguished with a color matching the last badge.") : Object(m.c)("This is how your username will appear.")))
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				r = a("./src/reddit/selectors/economics.ts");

			function i(e) {
				const {
					badges: t
				} = e, a = t[t.length - 1];
				return a && !e.ignore ? n.a.cloneElement(e.children, {
					style: a.extra && a.extra.style && a.extra.style.color ? Object.assign({}, e.children.props.style || {}, {
						color: a.extra.style.color,
						fontWeight: 700
					}) : e.children.props.style
				}) : e.children
			}
			t.b = Object(c.b)(() => Object(d.c)({
				badges: (e, t) => {
					let {
						subredditId: a,
						userId: s
					} = t;
					return Object(r.t)(e, a, s)
				}
			}))(i)
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, a) {
			"use strict";
			var s, n, c, d;

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
					return c
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
				}(c || (c = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(d || (d = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			})), a.d(t, "b", (function() {
				return r
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/lodash/flattenDeep.js"),
				n = a.n(s),
				c = a("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const d = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				r = new Set(n()(Object.keys(c.a).map(e => Object.keys(c.b).map(t => Object.keys(c.c).map(a => "".concat(a, "_").concat(e, "_").concat(t, "_badge"))))))
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, a) {
			"use strict";
			var s;
			a.d(t, "b", (function() {
					return s
				})), a.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(s || (s = {}));
			const n = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "c", (function() {
				return d
			})), a.d(t, "d", (function() {
				return r
			})), a.d(t, "e", (function() {
				return i
			})), a.d(t, "b", (function() {
				return o
			}));
			var s, n = a("./src/config.ts"),
				c = a("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case s.Ethereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function r(e, t, a) {
				return Object(c.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: a
					}
				})
			}
			async function i(e, t, a) {
				return await Object(c.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: a
				})
			}
			async function o(e, t, a) {
				return await Object(c.a)(e, {
					method: "delete",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(a)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(s || (s = {}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
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
				const s = Object(d.c)({
					featureEnabled: t => r.d[e](t)
				});
				return Object(c.b)(s)(e => {
					const {
						featureEnabled: s,
						dispatch: c
					} = e, d = i(e, ["featureEnabled", "dispatch"]);
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
				return d
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = a("./src/lib/currency/centsToDollars/index.ts"),
				n = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function d(e) {
				let {
					apiContext: t,
					config: a,
					elementId: d,
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
					}), Object(c.a)()]);
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
					}).render("#".concat(d))
				} catch (h) {
					b(h, "paypalError")
				}
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function c(e) {
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
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return l
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/helpers/chooseVariant/index.ts"),
				c = a("./src/reddit/selectors/platform.ts"),
				d = a("./src/reddit/selectors/user.ts");
			const r = new Set(["pollstest", "whatssnoo"]),
				i = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation"]),
				o = e => r.has(e.toLowerCase()) || i.has(e.toLowerCase()),
				l = e => r.has((Object(c.e)(e) || "").toLowerCase()) || i.has((Object(c.e)(e) || "").toLowerCase()) && Object(n.c)(e, {
					experimentEligibilitySelector: d.G,
					experimentName: s.Z
				}) === s.gb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return m
			})), a.d(t, "c", (function() {
				return u
			})), a.d(t, "d", (function() {
				return p
			})), a.d(t, "e", (function() {
				return g
			})), a.d(t, "g", (function() {
				return b
			})), a.d(t, "h", (function() {
				return h
			})), a.d(t, "i", (function() {
				return v
			})), a.d(t, "j", (function() {
				return y
			})), a.d(t, "o", (function() {
				return B
			})), a.d(t, "p", (function() {
				return f
			})), a.d(t, "n", (function() {
				return x
			})), a.d(t, "k", (function() {
				return E
			})), a.d(t, "l", (function() {
				return j
			})), a.d(t, "s", (function() {
				return O
			})), a.d(t, "a", (function() {
				return C
			})), a.d(t, "f", (function() {
				return w
			})), a.d(t, "q", (function() {
				return N
			})), a.d(t, "m", (function() {
				return _
			})), a.d(t, "r", (function() {
				return S
			}));
			var s = a("./src/reddit/contexts/PageLayer/index.tsx"),
				n = a("./src/reddit/endpoints/governance/crypto.ts"),
				c = a("./src/reddit/featureFlags/index.ts"),
				d = a("./src/reddit/selectors/experiments/pollsGA.ts"),
				r = a("./src/reddit/selectors/postCreations.ts");
			const i = [],
				o = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				m = (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = O(e, {
						subredditId: a
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const a = E(e, t);
					if (a) return a.mainHeader
				},
				p = (e, t) => {
					const a = E(e, t);
					return a && a.mainHeader ? a.mainHeader.price : "0"
				},
				g = (e, t) => {
					const a = E(e, t);
					return a && a.mainHeader ? {
						owner: a.mainHeader.owner,
						ownerId: a.mainHeader.ownerId
					} : o
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					if (Object(d.b)(e)) {
						const t = Object(r.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const a = c.d.spPolls(e) || c.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return a && !e
					}
					return a
				},
				v = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				y = (e, t) => {
					const a = Object(s.m)(e, t);
					return a && e.subreddits.gov.releaseNotes[a] || i
				},
				B = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				x = (e, t) => {
					const a = N(e, t);
					return a && a.decimals ? "1" + "0".repeat(a.decimals) : "1"
				},
				E = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				j = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const a = j(e, t);
					return a && a.walletProvider
				},
				C = (e, t) => {
					const a = O(e, t),
						s = j(e, t);
					return a && a.provider || s && s.provider
				},
				w = (e, t) => {
					const a = C(e, t);
					return a === n.a.Ethereum || a === n.a.Rinkeby
				},
				N = (e, t) => {
					const a = O(e, t),
						s = C(e, t);
					if (a && !a.inTransition && s === n.a.Stellar) return {
						address: a.extra && a.extra.issuerAddress || "",
						decimals: a.extra && a.extra.decimals || 7,
						symbol: a.extra && a.extra.token || "PHOTON"
					};
					const c = a && a.extra && a.extra.contracts,
						d = c && c.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				_ = (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = O(e, {
						subredditId: a
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				S = (e, t) => {
					const a = j(e, t);
					return !!a && !!a.walletProvider && !a.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=SubredditPremiumBadgeManagement.eb06edfc9b7a80042cfd.js.map