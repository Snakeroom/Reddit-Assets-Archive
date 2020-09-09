// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.414474af46ab28976fce.js
// Retrieved at 9/9/2020, 4:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeManagement"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseFlatten.js"),
				s = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? n(e, s) : []
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./src/lib/currency/cleanNumber/index.ts");

			function s(e, t) {
				const a = Object(n.a)(e),
					s = parseInt(a) / 100;
				return Math.floor(s) !== s || t ? s.toFixed(2) : String(s)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			a("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e) {
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
				return N
			})), a.d(t, "a", (function() {
				return S
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				c = a("./src/config.ts"),
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
				b = a("./src/reddit/featureFlags/index.ts"),
				g = a("./src/reddit/helpers/economics/sortBadges.ts"),
				h = a("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = a("./src/reddit/models/Badge/index.ts");
			var v = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => a.e("CustomBadgeHovercardTooltip").then(a.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				y = a("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				B = a.n(y);
			const E = "add-custom-badge-tooltip",
				x = 100,
				_ = 2 * x;
			class j extends s.a.Component {
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
					if (this.props.usePlaceholder && !this.props.badges.length) return s.a.createElement("img", {
						className: Object(i.a)(B.a.image, this.props.className),
						src: "".concat(c.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(E, "-").concat(this.props.uniqueIdentifier);
					return s.a.createElement(n.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: B.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: B.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(h.a, {
						className: B.a.addCustom
					})), s.a.createElement(v, {
						className: B.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(g.a)(this.props.badges).map(e => {
						const t = Object(f.b)(24, 24, e),
							a = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return s.a.createElement(n.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, s.a.createElement("div", {
							className: Object(i.a)(B.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(a),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: B.a.image,
							id: a,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? s.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: B.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: a,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : s.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: a,
							text: e.title
						})))
					}))
				}
			}
			const O = Object(d.c)({
					badges: (e, t) => {
						let {
							subredditId: a,
							userId: n
						} = t;
						return ((e.users.appliedBadges[n] || {})[a] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spSpecialMemberships
				}),
				C = Object(d.c)({
					badges: (e, t) => {
						let {
							subredditId: a
						} = t;
						const n = e.user.account;
						if (n) {
							return ((e.users.appliedBadges[n.id] || {})[a] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: b.d.spSpecialMemberships
				}),
				w = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(o.j)())
				}),
				N = Object(r.b)(O, w)(j),
				S = Object(r.b)(C, w)(j)
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
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				o = a("./src/reddit/models/Badge/index.ts"),
				l = a("./src/reddit/models/Badge/managementPage.ts"),
				m = a("./src/reddit/selectors/economics.ts"),
				u = a("./src/reddit/selectors/gov.ts"),
				p = a("./node_modules/reselect/es/index.js"),
				b = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = a.n(b);
			const h = Object(p.c)({
				collection: (e, t) => {
					let {
						badge: a,
						subredditId: n
					} = t;
					if (a.collections) {
						const t = Object.keys(a.collections);
						if (t.length) {
							const a = t[0];
							return Object(m.h)(e, {
								collectionId: a,
								subredditId: n
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: a,
						subredditId: n,
						type: s
					} = t;
					const r = e.user.account;
					if (r && !Object(o.c)(a) && s === l.a.Achievement && i.a[a.id]) {
						const t = Object(u.j)(e, {
							subredditId: n,
							userId: r.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: i.a[a.id]
						}
					}
				}
			});
			t.a = Object(d.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? n.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? n.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : n.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					a = e.collection ? e.collection.title : t,
					{
						url: s,
						url2x: d
					} = Object(o.b)(60, 60, e.badge),
					i = e.progress;
				return r.a.createElement("article", {
					className: Object(c.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, r.a.createElement("div", {
					className: g.a.wrapper
				}, r.a.createElement("img", {
					className: g.a.image,
					src: d,
					srcSet: "".concat(s, ", ").concat(d, " 2x")
				}), r.a.createElement("div", {
					className: g.a.info
				}, r.a.createElement("div", {
					className: g.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: a
				}, a), r.a.createElement("header", {
					className: g.a.title
				}, e.badge.title), i && i.complete < i.total && r.a.createElement("div", {
					className: g.a.progressContainer
				}, r.a.createElement("div", {
					className: g.a.progressBar
				}, r.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: "".concat(i.complete / i.total * 100, "%")
					}
				})), r.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					const t = "".concat(Math.floor(e.complete / 1e3), "k"),
						a = "".concat(Math.floor(e.total / 1e3), "k");
					return "".concat(t, "/").concat(a)
				}(i))), r.a.createElement("div", {
					className: g.a.description
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
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/actions/governance/errorToast.ts"),
				i = a("./src/reddit/components/TrackingHelper/index.tsx"),
				o = a("./src/reddit/contexts/ApiContext.tsx"),
				l = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = a("./src/reddit/endpoints/governance/products/badges.ts"),
				u = a("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = a("./src/reddit/selectors/telemetry.ts"),
				b = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				g = a.n(b);
			const h = "subreddit-premium-purchase-braintree";
			class f extends s.a.Component {
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
					return s.a.createElement("div", {
						className: Object(d.a)(this.props.className, g.a.container)
					}, s.a.createElement("div", {
						className: Object(d.a)(g.a.button, {
							[g.a.loading]: this.state.loading,
							[g.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && s.a.createElement(l.a, {
						className: g.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(o.b)(Object(r.b)(void 0, (e, t) => {
				let {
					subreddit: a
				} = t;
				return {
					onError: t => Object(c.a)(e, t)
				}
			})(Object(i.c)(f)))
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
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/contexts/PageLayer/index.tsx"),
				o = a("./src/reddit/featureFlags/component.tsx"),
				l = a("./src/reddit/models/Badge/index.ts"),
				m = a("./src/reddit/models/Badge/managementPage.ts"),
				u = a("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = a("./src/reddit/selectors/economics.ts"),
				b = a("./src/lib/classNames/index.ts"),
				g = a("./node_modules/fbt/lib/FbtPublic.js"),
				h = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				f = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				v = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Badge/index.m.less"),
				y = a.n(v);

			function B(e) {
				const {
					url: t,
					url2x: a
				} = Object(l.b)(40, 40, e.model);
				return s.a.createElement("div", {
					className: Object(b.a)(e.className, y.a.container, {
						[y.a.applied]: !!e.applied,
						[y.a.selected]: !!e.selected,
						[y.a.selectable]: !!e.onSelect
					}),
					onClick: e.onSelect
				}, e.applied && s.a.createElement(h.a, {
					className: y.a.checkmark
				}), e.locked && s.a.createElement(f.a, {
					className: y.a.lock
				}), s.a.createElement("img", {
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
					description: n,
					highlight: r,
					rowLength: d = 4,
					title: c
				} = e;
				if (!t.length) return null;
				const i = t.reduce((e, t) => {
					let a = e[e.length - 1];
					return a.length >= d && (a = [], e.push(a)), a.push(t), e
				}, [
					[]
				]);
				return s.a.createElement("div", {
					className: Object(b.a)(a, x.a.container)
				}, s.a.createElement("div", {
					className: x.a.centerContent
				}, c && s.a.createElement("header", {
					className: x.a.title,
					style: {
						color: r
					}
				}, c), n && s.a.createElement("div", {
					className: x.a.description
				}, n), s.a.createElement("article", {
					className: x.a.grid
				}, i.map((e, t) => s.a.createElement("div", {
					className: Object(b.a)(x.a.row),
					key: "".concat(c, "-").concat(t)
				}, e.map((e, a) => s.a.createElement("div", {
					className: Object(b.a)(x.a.item, x.a.itemBottom),
					key: "".concat(c, "-").concat(t, "-").concat(a)
				}, e)))))))
			}
			var j = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ScrollableArea/index.m.less"),
				O = a.n(j);

			function C(e) {
				return s.a.createElement("div", {
					className: Object(b.a)(e.className, O.a.container)
				}, s.a.createElement("div", {
					className: O.a.scrollableContent
				}, e.children), s.a.createElement("div", {
					className: O.a.topGradient
				}), s.a.createElement("div", {
					className: O.a.bottomGradient
				}))
			}
			var w = a("./src/reddit/contexts/ApiContext.tsx"),
				N = a("./src/config.ts"),
				S = a("./src/reddit/endpoints/governance/requester.ts");
			async function k(e, t, a, n) {
				return Object(S.a)(e, {
					endpoint: "".concat(N.a.metaUrl, "/storage/").concat(t, "/me/").concat(a),
					method: "patch",
					data: {
						on: n
					}
				}).then(e => !!e.ok)
			}
			async function P(e, t, a, n) {
				return Object(S.a)(e, {
					endpoint: "".concat(N.a.metaUrl, "/storage/").concat(t, "/me/").concat(a),
					method: "get"
				}).then(e => e.ok ? Boolean(e.body && e.body.on) : n)
			}
			var M = a("./src/reddit/icons/svgs/Close/index.tsx"),
				I = a("./src/reddit/icons/svgs/Info/index.tsx"),
				T = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less"),
				L = a.n(T),
				A = Object(w.b)(class extends s.a.Component {
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
						((e, t, a) => P(e, t, a, !1))(this.props.apiContext(), this.props.subredditId, this.props.sectionName).then(e => this.setState({
							descriptionOpen: !e
						}))
					}
					render() {
						return s.a.createElement("div", {
							className: this.props.className
						}, s.a.createElement("header", {
							className: L.a.title
						}, this.props.title, s.a.createElement(I.a, {
							className: L.a.info,
							onClick: this.openDescription
						})), this.state.descriptionOpen && s.a.createElement("div", {
							className: L.a.description
						}, s.a.createElement("div", {
							className: L.a.descriptionHeader
						}, s.a.createElement("div", {
							className: L.a.descriptionTitle
						}, g.fbt._("about", null, {
							hk: "1XpxW5"
						})), s.a.createElement(M.a, {
							className: L.a.close,
							onClick: this.closeDescription
						})), s.a.createElement("div", {
							className: L.a.descriptionText
						}, this.props.info)))
					}
				});

			function H(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("path", {
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
					description: n,
					title: r
				} = function(e) {
					switch (e) {
						case m.a.Achievement:
							return {
								description: g.fbt._("Do not display an Achievement Badge", null, {
									hk: "XaQt5"
								}), title: g.fbt._("Hide Achievement Badge", null, {
									hk: "1J1U2J"
								})
							};
						case m.a.Cosmetic:
							return {
								description: g.fbt._("Do not display a Style Badge", null, {
									hk: "2ASTcV"
								}), title: g.fbt._("Hide Style Badge", null, {
									hk: "3fpbDK"
								})
							};
						case m.a.Loyalty:
							return {
								description: g.fbt._("Do not display a Loyalty Badge", null, {
									hk: "1e0IJN"
								}), title: g.fbt._("Hide Loyalty Badge", null, {
									hk: "29NfeM"
								})
							}
					}
				}(t);
				return s.a.createElement("div", {
					className: Object(b.a)(a, R.a.container)
				}, s.a.createElement("div", {
					className: R.a.centerContent
				}, s.a.createElement("header", {
					className: R.a.title
				}, r), s.a.createElement("div", {
					className: R.a.description
				}, n), s.a.createElement("article", {
					className: R.a.grid
				}, s.a.createElement("div", {
					className: R.a.row
				}, s.a.createElement("div", {
					className: R.a.item
				}, s.a.createElement("div", {
					className: Object(b.a)(R.a.hide, {
						[R.a.applied]: !!e.applied,
						[R.a.selected]: !!e.selected
					}),
					onClick: () => e.onSelect(Object.assign({
						badgeType: t
					}, F))
				}, e.applied && s.a.createElement(h.a, {
					className: R.a.checkmark
				}), s.a.createElement(H, {
					className: R.a.hideIcon
				})))))))
			}
			var U = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less"),
				V = a.n(U);
			const W = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.o)(e, a, m.a.Achievement)
				}
			});
			var q = Object(r.b)(W)((function(e) {
					return s.a.createElement("div", {
						className: Object(b.a)(V.a.container, e.className)
					}, s.a.createElement(C, null, s.a.createElement(A, {
						className: V.a.header,
						info: g.fbt._("Show off with an Achievement Badge! Unlock badges by completing goals.", null, {
							hk: "h44Q4"
						}),
						sectionName: "achievement_badge",
						subredditId: e.subredditId,
						title: g.fbt._("Achievement Badges", null, {
							hk: "4m7kLd"
						})
					}), s.a.createElement("div", {
						className: V.a.badges
					}, e.collections.map(t => s.a.createElement(_, {
						className: V.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, a) => s.a.createElement("div", {
						className: V.a.badge,
						key: t.id + a
					}, s.a.createElement(B, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => s.a.createElement("div", {
						className: V.a.badge,
						key: t.id
					}, s.a.createElement(B, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), s.a.createElement(G, {
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

			function J(e) {
				const t = s.a.Children.only(e.children);
				return s.a.createElement("button", {
					className: Object(b.a)(X.a.container, e.className, {
						[X.a.disabled]: !!e.locked,
						[X.a.containerSelected]: !!e.selected
					}),
					onClick: e.locked ? void 0 : e.onSelect
				}, s.a.cloneElement(t, {
					className: Object(b.a)(t.props.className, X.a.inner, {
						[X.a.selected]: !!e.selected,
						[X.a.unselected]: !e.selected
					})
				}), e.locked && s.a.createElement("div", {
					className: X.a.lockContainer
				}, s.a.createElement(f.a, {
					className: X.a.lock
				})))
			}
			var Z = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less"),
				$ = a.n(Z);
			const ee = z()((e, t, a) => "".concat(N.a.assetPath, "/img/memberships/badges/management/tabs/").concat(e, "/").concat(t, "-").concat(a ? "on" : "off", "-v2.png")),
				te = [{
					type: m.a.Loyalty,
					text: () => g.fbt._("Loyalty", null, {
						hk: "wG8nE"
					})
				}, {
					type: m.a.Achievement,
					text: () => g.fbt._("Achievement", null, {
						hk: "2y4Del"
					})
				}, {
					type: m.a.Cosmetic,
					text: () => g.fbt._("Style", null, {
						hk: "25q9XS"
					})
				}];
			const ae = Object(d.c)({
				currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasAchievementBadges: (e, t) => {
					let {
						subredditId: a
					} = t;
					const n = Object(p.o)(e, a, m.a.Achievement);
					for (const s of n)
						if (s.locked.length || s.unlocked.length) return !0;
					return !1
				}
			});
			var ne = Object(r.b)(ae, e => ({
					onChangeBadgeType: t => e(Object(K.b)(t))
				}))((function(e) {
					const {
						hasAchievementBadges: t
					} = e, a = ee(e.subredditId), n = te.filter(e => e.type !== m.a.Achievement || t);
					return s.a.createElement("nav", {
						className: Object(b.a)($.a.container, e.className)
					}, n.map((t, n) => s.a.createElement(s.a.Fragment, {
						key: "".concat(t.type)
					}, s.a.createElement(J, {
						className: $.a.tab,
						selected: e.currentBadgeType === t.type,
						onSelect: () => e.onChangeBadgeType(t.type)
					}, s.a.createElement("div", {
						className: $.a.tabContent
					}, s.a.createElement("img", {
						className: $.a.img,
						src: a(t.type, e.currentBadgeType === t.type)
					}), s.a.createElement("div", {
						className: $.a.tabText
					}, t.text()))))))
				})),
				se = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less"),
				re = a.n(se);
			const de = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.o)(e, a, m.a.Cosmetic, m.c.Gallery)
				}
			});
			var ce = Object(r.b)(de)((function(e) {
					return s.a.createElement("div", {
						className: Object(b.a)(re.a.container, e.className)
					}, s.a.createElement(C, null, s.a.createElement("div", {
						className: re.a.badges
					}, e.collections.map(t => s.a.createElement(_, {
						className: re.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.locked.filter(e => Object(l.d)(e) || !!e.price).map(t => s.a.createElement("div", {
						className: re.a.badge,
						key: t.id
					}, s.a.createElement(B, {
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))))))))
				})),
				ie = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less"),
				oe = a.n(ie);
			const le = Object(d.c)({
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
			var me = Object(r.b)(le)((function(e) {
					return s.a.createElement("div", {
						className: Object(b.a)(oe.a.container, e.className)
					}, s.a.createElement(C, null, s.a.createElement(A, {
						className: oe.a.header,
						info: g.fbt._("The Loyalty Badge shows how long you've been a {memberAlt} in the subreddit. The longer you remain a member, the more Loyalty Badges you unlock", [g.fbt._param("memberAlt", e.meta.memberAlt)], {
							hk: "2jAQmP"
						}),
						sectionName: "loyalty_badge",
						subredditId: e.subredditId,
						title: g.fbt._("Loyalty Badges", null, {
							hk: "L1pPB"
						})
					}), s.a.createElement("div", {
						className: oe.a.badges
					}, e.collections.map(t => s.a.createElement(_, {
						className: oe.a.badgeGroup,
						highlight: t.highlight,
						key: t.title
					}, t.unlocked.map((t, a) => s.a.createElement("div", {
						className: oe.a.badge,
						key: t.id + a
					}, s.a.createElement(B, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => s.a.createElement("div", {
						className: oe.a.badge,
						key: t.id
					}, s.a.createElement(B, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), s.a.createElement(G, {
						applied: !e.appliedBadge,
						className: oe.a.badgeGroup,
						badgeType: m.a.Loyalty,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				ue = a("./src/lib/constants/specialMembership.ts"),
				pe = a("./src/reddit/featureFlags/index.ts"),
				be = a("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				ge = a("./src/reddit/actions/modal.ts"),
				he = a("./src/reddit/components/TrackingHelper/index.tsx"),
				fe = a("./src/reddit/controls/Button/index.tsx"),
				ve = a("./src/reddit/helpers/economics/membershipPage.ts"),
				ye = a("./src/reddit/selectors/telemetry.ts"),
				Be = a("./node_modules/uuid/v4.js"),
				Ee = a.n(Be),
				xe = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less"),
				_e = a.n(xe);
			const je = Object(d.c)({
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
			var Oe = Object(he.c)(Object(r.b)(je, (e, t) => {
					let {
						badge: a,
						subredditId: n
					} = t;
					return {
						onCloseModal: () => e(Object(ge.f)())
					}
				})((function(e) {
					const t = "".concat(N.a.assetPath, "/img/memberships/badges/management/myBadges/").concat(e.subredditId, "/noBadges.png"),
						a = Ee()(),
						n = e.subreddit ? e.subreddit.name : "";
					return s.a.createElement("div", {
						className: Object(b.a)(_e.a.container, e.className)
					}, s.a.createElement("img", {
						className: _e.a.img,
						src: t
					}), s.a.createElement("div", {
						className: _e.a.title
					}, g.fbt._("You Don't Have Any Style Badges Yet", null, {
						hk: "13yxIM"
					})), s.a.createElement("div", {
						className: _e.a.text
					}, g.fbt._("Get a {membershipAlt} and receive new style badges every month. You can also buy badges individually from the Gallery.", [g.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "1JWnXS"
					})), s.a.createElement(fe.h, {
						className: _e.a.learnMore,
						disabled: !e.subreddit,
						to: Object(ve.a)(n, a),
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
					}, g.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})))
				}))),
				Ce = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less"),
				we = a.n(Ce);
			const Ne = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.o)(e, a, m.a.Cosmetic, m.c.MyBadges)
				},
				customBadgesEnabled: pe.d.spCustomBadgesAndEmotes
			});
			var Se = Object(r.b)(Ne, e => ({
					onOpenUploadDialog: () => e(Object(K.j)())
				}))((function(e) {
					return s.a.createElement("div", {
						className: Object(b.a)(we.a.container, e.className)
					}, s.a.createElement(C, null, e.collections.length ? s.a.createElement("div", {
						className: we.a.badges
					}, e.collections.map(t => s.a.createElement(_, {
						className: we.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, a) => s.a.createElement("div", {
						className: we.a.badge,
						key: t.id + a
					}, s.a.createElement(B, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.id === ue.a && e.customBadgesEnabled ? s.a.createElement("button", {
						className: we.a.addCustomWrapper,
						onClick: e.onOpenUploadDialog
					}, s.a.createElement(be.a, {
						className: we.a.addCustom
					})) : []))), s.a.createElement(G, {
						applied: !e.appliedBadge,
						className: we.a.badgeGroup,
						badgeType: m.a.Cosmetic,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					})) : s.a.createElement(Oe, {
						className: we.a.noBadges,
						subredditId: e.subredditId
					})))
				})),
				ke = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less"),
				Pe = a.n(ke);
			const Me = Object(d.c)({
				isSelected: (e, t) => {
					let {
						viewType: a
					} = t;
					return e.economics.currentBadgeManagementScreen.view === a
				}
			});
			var Ie = Object(r.b)(Me, (e, t) => {
					let {
						viewType: a
					} = t;
					return {
						onSelect: () => e(Object(K.d)(a))
					}
				})((function(e) {
					return s.a.createElement("button", {
						className: Object(b.a)(e.className, Pe.a.container, {
							[Pe.a.selected]: e.isSelected
						}),
						onClick: e.onSelect
					}, e.children)
				})),
				Te = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less"),
				Le = a.n(Te);

			function Ae(e) {
				return s.a.createElement("nav", {
					className: Object(b.a)(e.className, Le.a.container)
				}, s.a.createElement(Ie, {
					className: Le.a.tab,
					viewType: m.c.Gallery
				}, g.fbt._("Gallery", null, {
					hk: "40A6Dd"
				})), s.a.createElement(Ie, {
					className: Le.a.tab,
					viewType: m.c.MyBadges
				}, g.fbt._("My Badges", null, {
					hk: "2OwjDY"
				})))
			}
			var He = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less"),
				De = a.n(He);
			const Re = Object(d.c)({
				badgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(p.i)(e, a)
				},
				view: e => e.economics.currentBadgeManagementScreen.view
			});
			var Fe = Object(r.b)(Re)((function(e) {
					const t = Object(b.a)(De.a.contentWrapper, {
						[De.a.withView]: e.badgeType === m.a.Cosmetic,
						[De.a.withoutView]: e.badgeType !== m.a.Cosmetic
					});
					return s.a.createElement("div", {
						className: Object(b.a)(e.className, De.a.container)
					}, s.a.createElement(ne, {
						className: De.a.nav,
						subredditId: e.subredditId
					}), e.badgeType === m.a.Cosmetic && e.hasGalleryBadges && s.a.createElement(Ae, {
						className: De.a.viewSelector
					}), e.badgeType === m.a.Loyalty && s.a.createElement(me, {
						appliedBadge: e.appliedBadges[m.a.Loyalty],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Loyalty],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Loyalty, t)
					}), e.badgeType === m.a.Achievement && s.a.createElement(q, {
						appliedBadge: e.appliedBadges[m.a.Achievement],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Achievement],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Achievement, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.MyBadges && s.a.createElement(Se, {
						appliedBadge: e.appliedBadges[m.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Cosmetic, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.Gallery && s.a.createElement(ce, {
						appliedBadge: e.appliedBadges[m.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Cosmetic, t)
					}))
				})),
				Ge = a("./node_modules/react-motion/lib/react-motion.js"),
				Ue = a("./src/reddit/helpers/economics/sortBadges.ts"),
				Ve = a("./src/reddit/icons/fonts/Downvote/index.tsx"),
				We = a("./src/reddit/icons/fonts/Upvote/index.tsx"),
				qe = a("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				Ye = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				ze = a("./node_modules/lodash/last.js"),
				Ke = a.n(ze),
				Qe = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Xe = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				Je = a("./src/lib/currency/centsToDollars/index.ts"),
				Ze = a("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				$e = a("./src/reddit/actions/toaster.ts"),
				et = a("./src/reddit/models/Toast/index.ts"),
				tt = a("./src/reddit/constants/disclaimers.ts"),
				at = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less"),
				nt = a.n(at);

			function st(e) {
				return s.a.createElement("div", {
					className: Object(b.a)(e.className, nt.a.container)
				}, g.fbt._("By purchasing, you agree to the", null, {
					hk: "39gegA"
				}), s.a.createElement("a", {
					className: Object(b.a)(nt.a.link, nt.a.firstLink),
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, g.fbt._("Reddit User Agreement", null, {
					hk: "1F3eUP"
				})), g.fbt._("and", null, {
					hk: "3daFuU"
				}), s.a.createElement("a", {
					className: nt.a.link,
					href: tt.a,
					target: "_blank"
				}, g.fbt._("Reddit Beta Terms of Service", null, {
					hk: "1asVGG"
				})), g.fbt._(".", null, {
					hk: "294bnM"
				}))
			}
			var rt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				dt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less"),
				ct = a.n(dt);
			const it = Object(d.c)({
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
			var ot = Object(he.c)(Object(r.b)(it, (e, t) => {
					let {
						badge: a,
						subredditId: n
					} = t;
					return {
						onApply: () => e(Object(Ze.b)({
							badge: a,
							subredditId: n,
							placement: a.placement
						})),
						onCloseModal: () => e(Object(ge.f)()),
						onPurchased: () => {
							e(Object($e.e)({
								kind: et.b.SuccessCommunityGreen,
								text: g.fbt._("Congratulations! You've bought a badge!", null, {
									hk: "3smVrt"
								})
							})), e(Object(Ze.d)(n, a))
						}
					}
				})((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						a = Ee()();
					return s.a.createElement("footer", {
						className: Object(b.a)(e.className, ct.a.container)
					}, s.a.createElement("div", {
						className: ct.a.wrapper
					}, s.a.createElement("div", {
						className: ct.a.description
					}, !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.d)(e.badge) && s.a.createElement("div", {
						className: ct.a.price
					}, g.fbt._("Buy for ${price}", [g.fbt._param("price", Object(Je.a)(e.badge.price, !0))], {
						hk: "JLs1D"
					})), !Object(l.c)(e.badge) && !e.ownedBadge && Object(l.d)(e.badge) && s.a.createElement("div", {
						className: ct.a.price
					}, g.fbt._("Get monthly reward badges by purchasing a {membershipAlt}!", [g.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "19iqHa"
					}))), e.ownedBadge && s.a.createElement(fe.f, {
						className: ct.a.button,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, e.alreadyApplied ? g.fbt._("Applied", null, {
						hk: "3zELtm"
					}) : g.fbt._("Apply", null, {
						hk: "19U1iU"
					})), !Object(l.c)(e.badge) && !e.ownedBadge && Object(l.d)(e.badge) && s.a.createElement(fe.h, {
						className: ct.a.button,
						disabled: !e.subreddit,
						to: Object(ve.a)(t, a),
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
					}, g.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})), !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.d)(e.badge) && s.a.createElement(rt.a, {
						className: ct.a.purchaseButton,
						correlationId: a,
						price: e.badge.price,
						productId: e.badge.id,
						subreddit: e.subreddit,
						onPaymentSuccessful: e.onPurchased
					})), !Object(l.c)(e.badge) && !e.ownedBadge && e.badge.price && s.a.createElement(st, {
						className: ct.a.legal
					}))
				}))),
				lt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less"),
				mt = a.n(lt);
			var ut = Object(r.b)(void 0, (e, t) => {
					let {
						badge: a,
						subredditId: n
					} = t;
					return {
						onApply: () => e(Object(Ze.b)({
							badge: a,
							subredditId: n,
							placement: m.b[a.badgeType]
						}))
					}
				})((function(e) {
					return s.a.createElement("div", {
						className: Object(b.a)(e.className, mt.a.container)
					}, e.alreadyApplied ? s.a.createElement("div", {
						className: mt.a.text
					}, function(e) {
						switch (e.badgeType) {
							case m.a.Achievement:
								return g.fbt._("You do not currently have an Achievement Badge selected.", null, {
									hk: "2MhvgS"
								});
							case m.a.Cosmetic:
								return g.fbt._("You do not currently have a Style Badge selected.", null, {
									hk: "4uRiIX"
								});
							case m.a.Loyalty:
								return g.fbt._("You do not currently have a Loyalty Badge selected.", null, {
									hk: "34Q4VK"
								})
						}
					}(e.badge)) : s.a.createElement(n.Fragment, null, s.a.createElement("div", {
						className: mt.a.text
					}, function(e) {
						switch (e.badgeType) {
							case m.a.Achievement:
								return g.fbt._("Hide your Achievement Badge?", null, {
									hk: "4cRkIB"
								});
							case m.a.Cosmetic:
								return g.fbt._("Hide your Style Badge?", null, {
									hk: "2Ljc6w"
								});
							case m.a.Loyalty:
								return g.fbt._("Hide your Loyalty Badge?", null, {
									hk: "3H5CTM"
								})
						}
					}(e.badge)), s.a.createElement(fe.f, {
						className: mt.a.hide,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, g.fbt._("Hide", null, {
						hk: "2r7mgg"
					}))))
				})),
				pt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/index.m.less"),
				bt = a.n(pt);

			function gt(e) {
				return "removeBadge" === e.type
			}
			const ht = Object(d.c)({
				alreadyApplied: (e, t) => {
					let {
						badge: a,
						subredditId: n,
						type: s
					} = t;
					const r = Object(p.f)(e, n)[s];
					return r ? r.id === a.id : "removeBadge" === a.type
				},
				lastUnlockedLoyaltyBadge: (e, t) => {
					let {
						subredditId: a
					} = t;
					const n = Object(p.o)(e, a, m.a.Loyalty)[0];
					if (n) return Ke()(n.unlocked)
				}
			});
			var ft = Object(r.b)(ht)((function(e) {
					return gt(e.badge) ? s.a.createElement("div", {
						className: Object(b.a)(e.className, bt.a.container)
					}, s.a.createElement(ut, {
						alreadyApplied: e.alreadyApplied,
						className: bt.a.hide,
						badge: e.badge,
						subredditId: e.subredditId
					})) : s.a.createElement("div", {
						className: Object(b.a)(e.className, bt.a.container)
					}, s.a.createElement(Xe.a, {
						badge: e.badge,
						className: bt.a.content,
						subredditId: e.subredditId,
						type: e.type
					}, s.a.createElement(Qe.a, {
						className: bt.a.dismiss,
						onClick: e.onDeselect
					})), function(e) {
						return e.type === m.a.Cosmetic || (!(e.type !== m.a.Achievement || gt(e.badge) || !Object(l.c)(e.badge)) || !(e.type !== m.a.Loyalty || !e.lastUnlockedLoyaltyBadge || e.badge.id !== e.lastUnlockedLoyaltyBadge.id))
					}(e) && s.a.createElement(ot, {
						alreadyApplied: e.alreadyApplied,
						className: bt.a.footer,
						badge: e.badge,
						subredditId: e.subredditId
					}))
				})),
				vt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/index.m.less"),
				yt = a.n(vt);
			const Bt = {
					stiffness: 210,
					damping: 20
				},
				Et = () => ({
					bottom: -200
				}),
				xt = () => ({
					bottom: Object(Ge.spring)(-200, Bt)
				}),
				_t = [40, 68, 96];

			function jt(e, t) {
				return _t.slice(0, e.length)[e.findIndex(e => e.id === t.id)]
			}

			function Ot(e) {
				return "removeBadge" !== e.type
			}
			const Ct = Object(d.c)({
				subreddit: (e, t) => {
					let {
						subredditId: a
					} = t;
					return e.subreddits.models[a]
				}
			});
			var wt = Object(r.b)(Ct, e => ({
					onClose: () => e(Object(ge.f)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "Community",
						a = Object(Ue.a)(e.badges.filter(Ot)),
						n = a.find(t => t.placement === m.b[e.previewedBadge.type]);
					return s.a.createElement("div", {
						className: Object(b.a)(e.className, yt.a.container)
					}, s.a.createElement("article", {
						className: yt.a.content
					}, s.a.createElement("header", {
						className: yt.a.header
					}, g.fbt._("Edit {communityName} Badges", [g.fbt._param("communityName", t)], {
						hk: "3R1TMF"
					}), s.a.createElement(M.a, {
						className: yt.a.close,
						onClick: e.onClose
					})), s.a.createElement("div", {
						className: yt.a.contentBackground
					}), s.a.createElement("div", {
						className: yt.a.commentPreviewLabel
					}, g.fbt._("comment preview", null, {
						hk: "Lhdaw"
					})), s.a.createElement("div", {
						className: Object(b.a)(yt.a.commentPreviewContainer, {
							[yt.a.previewClosed]: !e.previewedBadge.badge,
							[yt.a.previewOpen]: !!e.previewedBadge.badge
						})
					}, s.a.createElement("div", {
						className: yt.a.commentPreview
					}, s.a.createElement("div", {
						className: yt.a.voteContainer
					}, s.a.createElement(We.b, {
						className: yt.a.vote
					}), s.a.createElement(Ve.b, {
						className: yt.a.vote
					})), n && s.a.createElement(s.a.Fragment, null, s.a.createElement(qe.a, {
						className: yt.a.radialHighlightOuter,
						style: {
							left: jt(a, n)
						}
					}), s.a.createElement(qe.a, {
						className: yt.a.radialHighlightInner,
						style: {
							left: jt(a, n)
						}
					})), s.a.createElement(Ye.a, {
						showExplanation: !0,
						badges: a,
						subredditId: e.subredditId
					}))), s.a.createElement(Ge.TransitionMotion, {
						defaultStyles: [],
						styles: e.previewedBadge.badge ? [{
							data: e.previewedBadge.badge,
							key: e.previewedBadge.badge.id,
							style: {
								bottom: Object(Ge.spring)(16, Bt)
							}
						}] : [],
						willEnter: Et,
						willLeave: xt
					}, t => s.a.createElement(s.a.Fragment, null, t.map(t => s.a.createElement("div", {
						className: yt.a.badgePreviewContainer,
						key: t.key,
						style: {
							bottom: t.style.bottom
						}
					}, s.a.createElement(ft, {
						badge: t.data,
						subredditId: e.subredditId,
						type: e.previewedBadge.type,
						onDeselect: e.onDeselect
					})))))))
				})),
				Nt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less"),
				St = a.n(Nt);

			function kt(e) {
				return !!e
			}
			class Pt extends s.a.Component {
				constructor(e) {
					super(e), this.handleBadgeSelection = (e, t) => {
						this.setState(a => {
							const n = a.selectedBadges[e];
							return {
								selectedBadges: Object.assign(Object.assign({}, a.selectedBadges), {
									[e]: n && n.id === t.id ? void 0 : t
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
					return s.a.createElement("div", {
						className: St.a.container
					}, s.a.createElement("article", {
						className: St.a.content
					}, s.a.createElement(Fe, {
						appliedBadges: this.props.appliedBadges,
						className: St.a.leftRail,
						selectedBadges: this.state.selectedBadges,
						subredditId: t.id,
						userId: e.id,
						onSelectBadge: this.handleBadgeSelection
					}), s.a.createElement(wt, {
						appliedBadge: this.props.appliedBadges[this.props.currentBadgeType],
						badges: [this.state.selectedBadges[m.a.Loyalty] || this.props.appliedBadges[m.a.Loyalty], this.state.selectedBadges[m.a.Achievement] || this.props.appliedBadges[m.a.Achievement], this.state.selectedBadges[m.a.Cosmetic] || this.props.appliedBadges[m.a.Cosmetic]].filter(kt),
						className: St.a.preview,
						previewedBadge: a,
						subredditId: t.id,
						onDeselect: () => {
							a.badge && this.handleBadgeSelection(a.type, a.badge)
						}
					})))
				}
			}
			const Mt = Object(d.c)({
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
							n = Object(i.q)(e, t);
						let s;
						if (n && e.economics.currentModalArgs && e.economics.currentModalArgs.badge) {
							const t = e.economics.currentModalArgs.badge.type,
								a = e.economics.subredditPremium[n.id];
							if (a && a.status === u.a.Fetched) {
								(s = a.data.userOwnedBadges.find(e => e.type === t)) || (s = a.raw.products[t])
							}
						}
						if (n && !s && a === m.c.Gallery) {
							const t = Object(p.o)(e, n.id, m.a.Cosmetic, m.c.Gallery)[0];
							if (t) {
								const e = t.locked[0];
								e && (Object(l.d)(e) || e.price) && (s = t.locked[0])
							}
						}
						return s
					},
					subreddit: i.q
				}),
				It = Object(r.b)(Mt),
				Tt = Object(i.t)();
			t.default = Object(o.a)("spSpecialMemberships", Object(c.a)(Tt(It(Pt))))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, a) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				o = a("./src/reddit/actions/tooltip.ts"),
				l = a("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				m = a("./src/reddit/featureFlags/index.ts"),
				u = a("./src/reddit/selectors/economics.ts"),
				p = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				b = a.n(p);

			function g(e) {
				const {
					badges: t
				} = e;
				return t.length ? s.a.createElement(l.b, {
					useHovercard: !0,
					badges: t,
					className: Object(c.a)(e.className, b.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && t.length < 2 && e.accountId === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			t.b = Object(r.b)(() => Object(d.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, t) => {
					let {
						subredditId: a,
						userId: n
					} = t;
					return Object(u.r)(e, a, n)
				},
				customBadgesEnabled: m.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => m.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(o.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(o.i)()),
				onOpenUploadDialog: () => e(Object(i.j)())
			}))(g)
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
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				i = a("./src/reddit/actions/tooltip.ts"),
				o = a("./src/reddit/helpers/economics/sortBadges.ts"),
				l = a("./src/reddit/models/Badge/managementPage.ts"),
				m = a("./node_modules/reselect/es/index.js"),
				u = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				p = a("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				b = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				g = a.n(b);
			const {
				fbt: h
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const f = Object(m.c)({
				account: e => e.user.account
			});
			t.a = Object(r.b)(f, (e, t) => {
				let {
					subredditId: a
				} = t;
				return {
					onShowTooltip: t => e(Object(i.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(i.i)()),
					onOpenModal: () => e(Object(c.c)({
						subredditId: a,
						initialView: l.c.MyBadges
					})),
					onOpenUploadDialog: () => e(Object(c.j)())
				}
			})((function(e) {
				if (!e.account) return null;
				const t = Object(o.a)(e.badges),
					a = t[t.length - 1],
					n = a && a.extra && a.extra.style && a.extra.style.backgroundColor,
					r = a && a.extra && a.extra.style && a.extra.style.color;
				return s.a.createElement("div", {
					className: Object(d.a)(e.className, g.a.container, {
						[g.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: n || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, s.a.createElement("div", {
					className: g.a.userContainer
				}, s.a.createElement(u.a, {
					accountId: e.account.id,
					badges: t,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: e.account.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), s.a.createElement(p.a, {
					badges: t,
					subredditId: e.subredditId,
					userId: e.account.id
				}, s.a.createElement("span", {
					className: g.a.user
				}, e.account.username || e.account.displayText || "username"))), e.showExplanation && s.a.createElement("div", {
					className: g.a.description
				}, n || r ? n ? h._("Username and content is distinguished with a color matching the last badge.", null, {
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
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				c = a("./src/reddit/selectors/economics.ts");

			function i(e) {
				const {
					badges: t
				} = e, a = t[t.length - 1];
				return a && !e.ignore ? s.a.cloneElement(e.children, {
					style: a.extra && a.extra.style && a.extra.style.color ? Object.assign(Object.assign({}, e.children.props.style || {}), {
						color: a.extra.style.color,
						fontWeight: 700
					}) : e.children.props.style
				}) : e.children
			}
			t.b = Object(r.b)(() => Object(d.c)({
				badges: (e, t) => {
					let {
						subredditId: a,
						userId: n
					} = t;
					return Object(c.r)(e, a, n)
				}
			}))(i)
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, a) {
			"use strict";
			var n, s, r, d;

			function c(e) {
				const {
					platform: t,
					playerType: a,
					region: n,
					style: s
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(s, "/").concat(n, "_").concat(t, "_").concat(a, "_").concat(s, ".svg")
			}
			a.d(t, "a", (function() {
					return n
				})), a.d(t, "b", (function() {
					return s
				})), a.d(t, "c", (function() {
					return r
				})), a.d(t, "d", (function() {
					return c
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(s || (s = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(r || (r = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(d || (d = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			})), a.d(t, "b", (function() {
				return c
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/lodash/flattenDeep.js"),
				s = a.n(n),
				r = a("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const d = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				c = new Set(s()(Object.keys(r.a).map(e => Object.keys(r.b).map(t => Object.keys(r.c).map(a => "".concat(a, "_").concat(e, "_").concat(t, "_badge"))))))
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, a) {
			"use strict";
			var n;
			a.d(t, "b", (function() {
					return n
				})), a.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(n || (n = {}));
			const s = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "h", (function() {
				return d
			})), a.d(t, "g", (function() {
				return c
			})), a.d(t, "f", (function() {
				return i
			})), a.d(t, "i", (function() {
				return o
			})), a.d(t, "j", (function() {
				return l
			})), a.d(t, "e", (function() {
				return m
			})), a.d(t, "b", (function() {
				return u
			})), a.d(t, "c", (function() {
				return p
			})), a.d(t, "d", (function() {
				return b
			})), a.d(t, "k", (function() {
				return g
			}));
			var n, s = a("./src/config.ts"),
				r = a("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function o(e, t, a) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: a
					}
				})
			}
			async function l(e, t, a) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: a
				})
			}
			async function m(e, t, a) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(a)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const u = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				}),
				b = (e, t, a, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: a,
					amount: n
				});
			async function g(e, t) {
				return await Object(r.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				c = a("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var a = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (a[n[s]] = e[n[s]])
					}
					return a
				};

			function o(e, t, a) {
				const n = Object(d.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n
					} = e, r = i(e, ["featureEnabled"]);
					return n ? s.a.createElement(t, r) : void 0 !== a ? s.a.createElement(a, r) : null
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./src/lib/permalinkToOverlayLocation/index.ts");

			function s(e, t) {
				return Object(n.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./src/lib/currency/centsToDollars/index.ts"),
				s = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				r = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function d(e) {
				let {
					apiContext: t,
					config: a,
					elementId: d,
					price: c,
					purchaseFn: i,
					username: o,
					onCancel: l,
					onClientLoad: m,
					onError: u,
					onSubmitting: p,
					onSuccess: b
				} = e;
				const g = (e, t) => {
					if (!u) return;
					let a = e.toString ? e.toString() : "";
					a.toLowerCase().includes("object object") && (a = JSON.stringify(e)), u(e, a, t)
				};
				try {
					const [e] = await Promise.all([Object(s.b)(t, {
						username: o
					}), Object(r.b)()]);
					if (!e.ok) return void g(e.error, "/ps/me/braintree-client-tokens");
					const u = await braintree.client.create({
							authorization: e.body.clientToken
						}),
						h = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: u
							}, (a, n) => a ? t(a) : e(n))
						});
					m && m(), await paypal.Buttons({
						createBillingAgreement: "subscription" === a.type ? () => (p && p(), h.createPayment({
							amount: Object(n.a)(c(), !0),
							billingAgreementDescription: a.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === a.type ? () => (p && p(), h.createPayment({
							amount: Object(n.a)(c(), !0),
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
								e.ok ? b && b() : g(e.error, "/orders")
							})
						},
						onCancel: () => l && l(),
						onError: e => g(e, "paypalError")
					}).render("#".concat(d))
				} catch (h) {
					g(h, "paypalError")
				}
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), s.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			const n = e => !0
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
				return b
			})), a.d(t, "g", (function() {
				return g
			})), a.d(t, "t", (function() {
				return h
			})), a.d(t, "h", (function() {
				return f
			})), a.d(t, "i", (function() {
				return v
			})), a.d(t, "j", (function() {
				return y
			})), a.d(t, "k", (function() {
				return B
			})), a.d(t, "q", (function() {
				return E
			})), a.d(t, "r", (function() {
				return x
			})), a.d(t, "p", (function() {
				return _
			})), a.d(t, "m", (function() {
				return j
			})), a.d(t, "n", (function() {
				return O
			})), a.d(t, "u", (function() {
				return C
			})), a.d(t, "a", (function() {
				return w
			})), a.d(t, "f", (function() {
				return N
			})), a.d(t, "s", (function() {
				return S
			})), a.d(t, "o", (function() {
				return k
			})), a.d(t, "l", (function() {
				return P
			}));
			var n = a("./src/reddit/contexts/PageLayer/index.tsx"),
				s = a("./src/reddit/endpoints/governance/crypto.ts"),
				r = a("./src/reddit/featureFlags/index.ts"),
				d = a("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = a("./src/reddit/selectors/postCreations.ts");
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
					const n = C(e, {
						subredditId: a
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const a = j(e, t);
					if (a) return a.mainHeader
				},
				p = (e, t) => {
					const a = j(e, t);
					return a && a.mainHeader ? a.mainHeader.price : "0"
				},
				b = (e, t) => {
					const a = j(e, t);
					return a && a.mainHeader ? {
						owner: a.mainHeader.owner,
						ownerId: a.mainHeader.ownerId
					} : o
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					const a = g(e, t),
						n = a && a.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				f = (e, t) => {
					const a = g(e, t);
					return a && a.amount || "0"
				},
				v = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(c.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const a = r.d.spPolls(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return a && !e
					}
					return a
				},
				y = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				B = (e, t) => {
					const a = Object(n.m)(e, t);
					return a && e.subreddits.gov.releaseNotes[a] || i
				},
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				_ = (e, t) => {
					const a = S(e, t);
					return a && a.decimals ? "1" + "0".repeat(a.decimals) : "1"
				},
				j = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				O = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				C = (e, t) => {
					const a = O(e, t);
					return a && a.walletProvider
				},
				w = (e, t) => {
					const a = C(e, t),
						n = O(e, t);
					return a && a.provider || n && n.provider
				},
				N = (e, t) => {
					const a = w(e, t);
					return a === s.a.Ethereum || a === s.a.Rinkeby || a === s.a.EthTraderEthereum || a === s.a.EthTraderRinkeby
				},
				S = (e, t) => {
					const a = C(e, t),
						n = w(e, t);
					if (a && !a.inTransition && n === s.a.Stellar) return {
						address: a.extra && a.extra.issuerAddress || "",
						decimals: a.extra && a.extra.decimals || 7,
						symbol: a.extra && a.extra.token || "PHOTON"
					};
					const r = a && a.extra && a.extra.contracts,
						d = r && r.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				k = (e, t) => {
					let {
						subredditId: a
					} = t;
					const n = C(e, {
						subredditId: a
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const a = O(e, t);
					return !!a && !!a.walletProvider && !a.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.414474af46ab28976fce.js.map