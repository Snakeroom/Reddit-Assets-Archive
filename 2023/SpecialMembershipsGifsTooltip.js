// https://www.redditstatic.com/desktop2x/SpecialMembershipsGifsTooltip.b2bb4b6f01045374aabb.js
// Retrieved at 6/20/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SpecialMembershipsGifsTooltip"], {
		"./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_38dbigXGGrbLqPyAm7KuuU"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/draft-js/lib/Draft.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/constants/keycodes.ts"),
				r = s("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				c = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less"),
				l = s.n(c);
			class d extends n.a.Component {
				constructor(e) {
					super(e), this.updateTooltipPosition = null, this.handleWindowClick = e => {
						this.props.isVisible && this.props.setIsVisible(!1)
					}, this.toggleTooltip = e => {
						e.currentTarget instanceof HTMLElement && (this.gifToolbarButtonEl = e.currentTarget), this.props.isVisible || this.props.sendEvent(), this.props.setIsVisible(!this.props.isVisible)
					}, this.onKeyPressedInTooltip = e => {
						e.keyCode === a.a.Escape && this.closeTooltip(!0)
					}, this.closeTooltip = e => {
						if (e) {
							const {
								editorState: e,
								onChange: t
							} = this.props;
							t(i.EditorState.forceSelection(e, e.getSelection()))
						}
						this.props.setIsVisible(!1)
					}, this.onTooltipBodyClick = e => {
						e.stopPropagation()
					}
				}
				componentDidMount() {
					this.props.onSetApi && this.props.onSetApi({
						closeTooltip: this.closeTooltip,
						toggleTooltip: this.toggleTooltip
					})
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null), window.removeEventListener("click", this.handleWindowClick)
				}
				componentDidUpdate() {
					this.props.isVisible ? (this.updatePosition(), window.addEventListener("click", this.handleWindowClick)) : window.removeEventListener("click", this.handleWindowClick)
				}
				updatePosition() {
					if (!this.updateTooltipPosition || !this.props.isVisible) return;
					const e = this.gifToolbarButtonEl && this.gifToolbarButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: e.left + e.width / 2,
						top: e.top + 3
					})
				}
				render() {
					const {
						isVisible: e
					} = this.props;
					return n.a.createElement(r.b, {
						className: l.a.tooltip,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: r.a.Below
					}, e && n.a.createElement("div", {
						onKeyDown: this.onKeyPressedInTooltip,
						onClick: this.onTooltipBodyClick
					}, this.props.children))
				}
			}
			t.a = d
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				titleLine: "_3POjQe5s4pakf6mUEhOGNP",
				searchLine: "_1aZZB23bAFb9VFM7USCLpW",
				title: "_1IzUvkOygcCyb3m9fdOEc2",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
				textContentContainer: "_1zuJvm1vjxI3wdBQ_0G8Ix",
				reloadButton: "SxlCrByp5by6J_IRxVRh",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				disabled: "_1q61sXN5YBwD15WuBXBYk5",
				noResultsText: "_3Eng5EPqWhaHeqg_gRxoe_",
				gifResult: "_26ADnJjpUFVQyc9EaxOU1n",
				gifResultImage: "FdCn2CuFBj91lgTaeY2bA",
				loadingSpinner: "_2t2HXTe1t9BdNxOjV-5WUX",
				whiteScrim: "_2pFa7VPAwUqzCAZMKMhkl9"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/throttle.js"),
				c = s.n(r),
				l = s("./node_modules/react/index.js"),
				d = s.n(l),
				h = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/endpoints/giphy/index.ts"),
				b = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/economics.ts"),
				T = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				y = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let _;

			function C() {
				_ || (_ = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var v = s("./node_modules/lodash/debounce.js"),
				I = s.n(v),
				k = s("./src/config.ts"),
				w = s("./src/reddit/icons/svgs/Search/index.tsx"),
				G = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				O = s.n(R);
			const j = 400;
			class N extends d.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = I()(() => {
						this.props.onChange(this.state.query)
					}, j), this.focusOnInput = () => {
						this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
					}
				}
				componentDidMount() {
					this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
				}
				render() {
					const {
						isNightMode: e
					} = this.props, {
						query: t
					} = this.state, s = `powered-by-giphy-${e?"dark":"light"}.png`;
					return d.a.createElement("div", {
						className: Object(o.a)(O.a.searchBox, this.props.className)
					}, d.a.createElement("button", {
						className: O.a.searchIconButton,
						onClick: this.focusOnInput
					}, d.a.createElement(w.a, {
						className: O.a.searchIcon
					})), d.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: O.a.searchInput,
						placeholder: i.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && d.a.createElement("div", {
						className: O.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${k.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const S = Object(u.c)({
				isNightMode: G.fb
			});
			var B = Object(h.b)(S)(N),
				M = s("./src/lib/constants/icons.ts"),
				L = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/icons/fonts/index.tsx");
			var U = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				V = s.n(U);
			const F = 4,
				A = a()(g.b);
			class H extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						columns: [
							[],
							[]
						],
						columnHeights: [0, 0],
						loading: !0,
						nextOffset: null,
						query: "",
						showReload: !1
					}, this.mounted = !1, this.reloadGifs = () => {
						this.setState({
							showReload: !1
						}), this.state.query ? this.loadMoreResults() : this.loadTrendingGifs()
					}, this.onQueryChange = e => {
						this.props.onQueryChange(e), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => {
							e ? this.loadMoreResults() : this.loadTrendingGifs()
						})
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = c()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.onResultClick(this.props.hasGifProduct);
						const t = this.props.editorState,
							s = Object(y.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), T.a.before);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), C()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					A().then(e => {
						this.state.query || this.addGiphyResults(e)
					}).catch(() => {
						this.mounted && (this.setState({
							showReload: !0,
							loading: !1
						}), A.cache.clear())
					})
				}
				async loadMoreResults() {
					const {
						loading: e,
						nextOffset: t,
						query: s
					} = this.state;
					!e && s && null !== t && (await
						function(e) {
							return C(), _.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(s) || (this.setState({
							loading: !0
						}), Object(g.c)({
							query: s,
							offset: t
						}).then(e => {
							this.addGiphyResults(e)
						}).catch(() => {
							this.mounted && (this.props.showErrorToast(i.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1,
								showReload: !0
							}))
						})))
				}
				addGiphyResults(e) {
					if (!this.mounted) return;
					const t = [...this.state.columns],
						s = [...this.state.columnHeights];
					e.data.forEach(e => {
						if ("gif" !== e.type || "r" === e.rating || "pg-13" === e.rating) return;
						const i = function(e) {
							var t, s;
							const i = (null === (t = e.images.fixed_width) || void 0 === t ? void 0 : t.height) ? parseInt(e.images.fixed_width.height) : null,
								o = !!(null === (s = e.images.downsized) || void 0 === s ? void 0 : s.url) && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
								n = o ? e.images.downsized : e.images.fixed_height;
							return n && n.url && n.width && n.height && i ? {
								id: e.id,
								url: n.url,
								hasDownsizedImage: o,
								width: parseInt(n.width),
								height: parseInt(n.height),
								fixedWidthHeight: i
							} : null
						}(e);
						if (i) {
							const e = s.reduce((e, t, i) => t < s[e] ? i : e, 0);
							t[e].push(i), s[e] += i.fixedWidthHeight + F
						}
					});
					const i = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: i < e.pagination.total_count ? i : null
					})
				}
				render() {
					var e;
					const {
						columns: t,
						loading: s,
						showReload: n
					} = this.state;
					let a = null;
					return a = n ? d.a.createElement("div", {
						className: V.a.textContentContainer
					}, d.a.createElement(L.t, {
						priority: L.c.Plain,
						size: L.d.XS,
						text: i.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						"aria-label": i.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						onClick: this.reloadGifs,
						Icon: Object(P.b)(M.a.refresh)
					})) : s ? d.a.createElement("div", {
						className: V.a.loadingSpinner
					}, d.a.createElement(f.a, {
						sizePx: 20,
						center: !0
					})) : 0 === (null === (e = t[0]) || void 0 === e ? void 0 : e.length) ? d.a.createElement("div", {
						className: Object(o.a)(V.a.textContentContainer, V.a.noResultsText)
					}, i.fbt._("No results", null, {
						hk: "2vJ2bd"
					})) : d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: Object(o.a)(V.a.results, {
							[V.a.disabled]: this.props.disabled
						})
					}, t.map((e, t) => d.a.createElement("div", {
						className: V.a.column,
						key: t
					}, e.map(e => d.a.createElement("button", {
						className: V.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, d.a.createElement("img", {
						className: V.a.gifResultImage,
						src: e.url
					})))))), this.props.children), d.a.createElement("div", {
						className: V.a.tooltip
					}, d.a.createElement("div", {
						className: V.a.header
					}, d.a.createElement("div", {
						className: V.a.searchLine
					}, d.a.createElement(B, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: V.a.searchBox
					}), d.a.createElement(b.a, {
						className: V.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), d.a.createElement("div", {
						className: V.a.body,
						onScroll: this.onScroll
					}, a, d.a.createElement("div", {
						className: V.a.whiteScrim
					})))
				}
			}
			const q = Object(u.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(E.w)(e, s.id)
				}
			});
			t.a = Object(m.c)(Object(h.b)(q, e => ({
				showErrorToast: t => e(Object(p.f)({
					text: t,
					kind: x.b.Error,
					duration: 5e3
				}))
			}))(H))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less": function(e, t, s) {
			e.exports = {
				searchBox: "_-2nyH4l01LGXG6tNoKG8G",
				searchIconButton: "yQXSQNUp_yRjNBBUQPSFc",
				searchIcon: "_2gnFB-wGJHoP0-cUWBWnU5",
				searchInput: "_3MrGxIAeUWB6Fc14Qw0jb2",
				poweredByGiphy: "_3zbeeNQTcpxZMmdsMopEux"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/GifUpsell.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_2_Uw7dsIKTFKE_NCj6EleY",
				closeIcon: "_1brvWyJVaOAXkOXqIHpH3j",
				header: "kcYeL00LNhZ3PMQHSQpQv",
				description: "_1RMwvfYmtFIOtxsnawzdBv",
				divider: "_2RMMTIo3RSbHDSN8tkrOh4",
				unlockButton: "_1kOwvLyqtdcWmtE0-cya_c",
				unlockIcon: "_1wLJ603y3v9_FDIEvkOyGn"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./src/reddit/helpers/trackers/crypto.ts"),
				a = s("./src/reddit/helpers/trackers/features/gifTooltip.ts"),
				r = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx"),
				l = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/economics/membershipPage.ts"),
				u = s("./src/reddit/icons/svgs/Close/index.tsx"),
				p = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				m = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/GifUpsell.m.less"),
				f = s.n(m);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function b(e) {
				return o.a.createElement("div", {
					className: f.a.tooltip
				}, o.a.createElement(u.a, {
					className: f.a.closeIcon,
					onClick: e.onClose
				}), o.a.createElement("p", {
					className: f.a.header
				}, g._("Join a GIF Train", null, {
					hk: "4oQ9RF"
				})), o.a.createElement("p", {
					className: f.a.description
				}, g._("Anyone can add a GIF to their comment when replying to another comment with a GIF.", null, {
					hk: "2fVCMx"
				})), o.a.createElement("div", {
					className: f.a.divider
				}), o.a.createElement("p", {
					className: f.a.header
				}, g._("GIF Anywhere", null, {
					hk: "DSBTZ"
				})), o.a.createElement("p", {
					className: f.a.description
				}, g._("Get a Special Membership to use GIFs in all of your comments {subredditName} .", [g._param("subredditName", `r/${e.subredditName}`)], {
					hk: "dQagV"
				})), o.a.createElement(d.s, {
					className: f.a.unlockButton,
					to: Object(h.a)(e.subredditName, e.correlationId)
				}, o.a.createElement(p.a, {
					className: f.a.unlockIcon
				}), g._("Unlock GIFs in Comments", null, {
					hk: "1sbCTr"
				})))
			}
			t.default = e => {
				const t = Object(r.a)(),
					[s, d] = Object(i.useState)(!1),
					h = () => d(!1);
				return o.a.createElement(c.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onSetApi: e.onSetApi,
					subreddit: e.subreddit,
					userCanUseGifs: e.userCanUseGifs,
					sendEvent: () => {
						var s, i;
						return e.userCanUseGifs ? t(Object(n.a)(e.correlationId, null === (s = e.subreddit) || void 0 === s ? void 0 : s.id)) : t(Object(n.b)(e.correlationId, null === (i = e.subreddit) || void 0 === i ? void 0 : i.id))
					},
					correlationId: e.correlationId,
					isVisible: s,
					setIsVisible: d
				}, e.userCanUseGifs ? o.a.createElement(l.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onClose: h,
					onQueryChange: s => t(Object(a.a)(s, e.subreddit.id, e.correlationId)),
					onResultClick: s => t(Object(a.b)(s, e.subreddit.id, e.correlationId)),
					subreddit: e.subreddit
				}) : o.a.createElement(b, {
					correlationId: e.correlationId,
					onClose: h,
					subredditName: e.subreddit.name
				}))
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function o(e, t) {
				return Object(i.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/trackers/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			}));
			var i = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s, o, n) => a => {
					const r = {
						...Object(i.p)(a),
						source: "meta",
						action: e,
						noun: "transaction",
						subreddit: Object(i.nb)(a, s),
						actionInfo: {
							settingValue: t,
							reason: n
						}
					};
					return o && (r.payment = {
						amountInSmallestDenom: parseInt(o)
					}), r
				},
				n = (e, t, s) => o("submit", e, t, s),
				a = (e, t, s, i) => o("fail", e, t, s, i),
				r = (e, t) => s => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? Object(i.nb)(s, t) : void 0,
					correlationId: e,
					...Object(i.p)(s)
				}),
				c = (e, t) => s => ({
					source: "meta",
					action: "open",
					noun: "gif_upsell",
					subreddit: t ? Object(i.nb)(s, t) : void 0,
					correlationId: e,
					...Object(i.p)(s)
				})
		},
		"./src/reddit/helpers/trackers/features/gifTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			}));
			var i = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s) => o => ({
					source: "meta",
					action: "change",
					noun: "gif_tooltip_search",
					correlationId: s,
					subreddit: t ? i.nb(o, t) : void 0,
					post: i.l(o),
					search: {
						query: e
					},
					...i.p(o)
				}),
				n = (e, t, s) => o => {
					const n = i.p(o);
					return {
						...n,
						source: "meta",
						action: "select",
						noun: "gif_tooltip_result",
						correlationId: s,
						subreddit: t ? i.nb(o, t) : void 0,
						post: i.l(o),
						actionInfo: {
							...n.actionInfo,
							reason: e ? "has-gif-product" : "gif-train"
						}
					}
				}
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SpecialMembershipsGifsTooltip.b2bb4b6f01045374aabb.js.map