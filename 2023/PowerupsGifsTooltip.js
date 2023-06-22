// https://www.redditstatic.com/desktop2x/PowerupsGifsTooltip.61abf8c3e6c43ce057f4.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsGifsTooltip"], {
		"./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_38dbigXGGrbLqPyAm7KuuU"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/draft-js/lib/Draft.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/constants/keycodes.ts"),
				a = s("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				d = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less"),
				c = s.n(d);
			class l extends n.a.Component {
				constructor(e) {
					super(e), this.updateTooltipPosition = null, this.handleWindowClick = e => {
						this.props.isVisible && this.props.setIsVisible(!1)
					}, this.toggleTooltip = e => {
						e.currentTarget instanceof HTMLElement && (this.gifToolbarButtonEl = e.currentTarget), this.props.isVisible || this.props.sendEvent(), this.props.setIsVisible(!this.props.isVisible)
					}, this.onKeyPressedInTooltip = e => {
						e.keyCode === r.a.Escape && this.closeTooltip(!0)
					}, this.closeTooltip = e => {
						if (e) {
							const {
								editorState: e,
								onChange: t
							} = this.props;
							t(o.EditorState.forceSelection(e, e.getSelection()))
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
					return n.a.createElement(a.b, {
						className: c.a.tooltip,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: a.a.Below
					}, e && n.a.createElement("div", {
						onKeyDown: this.onKeyPressedInTooltip,
						onClick: this.onTooltipBodyClick
					}, this.props.children))
				}
			}
			t.a = l
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/throttle.js"),
				d = s.n(a),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				h = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/endpoints/giphy/index.ts"),
				b = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/economics.ts"),
				E = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				y = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let _;

			function C() {
				_ || (_ = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var w = s("./node_modules/lodash/debounce.js"),
				v = s.n(w),
				k = s("./src/config.ts"),
				j = s("./src/reddit/icons/svgs/Search/index.tsx"),
				I = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				G = s.n(R);
			const S = 400;
			class B extends l.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = v()(() => {
						this.props.onChange(this.state.query)
					}, S), this.focusOnInput = () => {
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
					return l.a.createElement("div", {
						className: Object(i.a)(G.a.searchBox, this.props.className)
					}, l.a.createElement("button", {
						className: G.a.searchIconButton,
						onClick: this.focusOnInput
					}, l.a.createElement(j.a, {
						className: G.a.searchIcon
					})), l.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: G.a.searchInput,
						placeholder: o.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && l.a.createElement("div", {
						className: G.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${k.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const O = Object(u.c)({
				isNightMode: I.fb
			});
			var N = Object(h.b)(O)(B),
				P = s("./src/lib/constants/icons.ts"),
				q = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/icons/fonts/index.tsx");
			var U = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				A = s.n(U);
			const L = 4,
				V = r()(g.b);
			class F extends l.a.Component {
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
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = d()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.onResultClick(this.props.hasGifProduct);
						const t = this.props.editorState,
							s = Object(y.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), E.a.before);
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
					V().then(e => {
						this.state.query || this.addGiphyResults(e)
					}).catch(() => {
						this.mounted && (this.setState({
							showReload: !0,
							loading: !1
						}), V.cache.clear())
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
							this.mounted && (this.props.showErrorToast(o.fbt._("There was an error loading your GIF results. Please try again later.", null, {
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
						const o = function(e) {
							var t, s;
							const o = (null === (t = e.images.fixed_width) || void 0 === t ? void 0 : t.height) ? parseInt(e.images.fixed_width.height) : null,
								i = !!(null === (s = e.images.downsized) || void 0 === s ? void 0 : s.url) && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
								n = i ? e.images.downsized : e.images.fixed_height;
							return n && n.url && n.width && n.height && o ? {
								id: e.id,
								url: n.url,
								hasDownsizedImage: i,
								width: parseInt(n.width),
								height: parseInt(n.height),
								fixedWidthHeight: o
							} : null
						}(e);
						if (o) {
							const e = s.reduce((e, t, o) => t < s[e] ? o : e, 0);
							t[e].push(o), s[e] += o.fixedWidthHeight + L
						}
					});
					const o = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: o < e.pagination.total_count ? o : null
					})
				}
				render() {
					var e;
					const {
						columns: t,
						loading: s,
						showReload: n
					} = this.state;
					let r = null;
					return r = n ? l.a.createElement("div", {
						className: A.a.textContentContainer
					}, l.a.createElement(q.t, {
						priority: q.c.Plain,
						size: q.d.XS,
						text: o.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						"aria-label": o.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						onClick: this.reloadGifs,
						Icon: Object(M.b)(P.a.refresh)
					})) : s ? l.a.createElement("div", {
						className: A.a.loadingSpinner
					}, l.a.createElement(f.a, {
						sizePx: 20,
						center: !0
					})) : 0 === (null === (e = t[0]) || void 0 === e ? void 0 : e.length) ? l.a.createElement("div", {
						className: Object(i.a)(A.a.textContentContainer, A.a.noResultsText)
					}, o.fbt._("No results", null, {
						hk: "2vJ2bd"
					})) : l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(i.a)(A.a.results, {
							[A.a.disabled]: this.props.disabled
						})
					}, t.map((e, t) => l.a.createElement("div", {
						className: A.a.column,
						key: t
					}, e.map(e => l.a.createElement("button", {
						className: A.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, l.a.createElement("img", {
						className: A.a.gifResultImage,
						src: e.url
					})))))), this.props.children), l.a.createElement("div", {
						className: A.a.tooltip
					}, l.a.createElement("div", {
						className: A.a.header
					}, l.a.createElement("div", {
						className: A.a.searchLine
					}, l.a.createElement(N, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: A.a.searchBox
					}), l.a.createElement(b.a, {
						className: A.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), l.a.createElement("div", {
						className: A.a.body,
						onScroll: this.onScroll
					}, r, l.a.createElement("div", {
						className: A.a.whiteScrim
					})))
				}
			}
			const H = Object(u.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(T.w)(e, s.id)
				}
			});
			t.a = Object(m.c)(Object(h.b)(H, e => ({
				showErrorToast: t => e(Object(p.f)({
					text: t,
					kind: x.b.Error,
					duration: 5e3
				}))
			}))(F))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				i = s.n(o),
				n = s("./src/reddit/helpers/trackers/features/gifTooltip.ts"),
				r = s("./src/reddit/helpers/trackers/powerups.ts"),
				a = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx"),
				c = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx");
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				const t = Object(a.a)(),
					[s, l] = Object(o.useState)(!1);
				return i.a.createElement(d.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onSetApi: e.onSetApi,
					subreddit: e.subreddit,
					userCanUseGifs: e.userCanUseGifs,
					sendEvent: () => {
						var s;
						return t(Object(r.d)(e.correlationId, null === (s = e.subreddit) || void 0 === s ? void 0 : s.id))
					},
					correlationId: e.correlationId,
					isVisible: s,
					setIsVisible: l
				}, i.a.createElement(c.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onClose: () => l(!1),
					onQueryChange: s => t(Object(n.a)(s, e.subreddit.id, e.correlationId)),
					onResultClick: s => t(Object(n.b)(s, e.subreddit.id, e.correlationId)),
					subreddit: e.subreddit,
					disabled: !e.userCanUseGifs
				}))
			}
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
		"./src/reddit/helpers/trackers/features/gifTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => i => ({
					source: "meta",
					action: "change",
					noun: "gif_tooltip_search",
					correlationId: s,
					subreddit: t ? o.mb(i, t) : void 0,
					post: o.k(i),
					search: {
						query: e
					},
					...o.o(i)
				}),
				n = (e, t, s) => i => {
					const n = o.o(i);
					return {
						...n,
						source: "meta",
						action: "select",
						noun: "gif_tooltip_result",
						correlationId: s,
						subreddit: t ? o.mb(i, t) : void 0,
						post: o.k(i),
						actionInfo: {
							...n.actionInfo,
							reason: e ? "has-gif-product" : "gif-train"
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t, s) => ({
					...i.o(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1),
					profile: i.T(e),
					subreddit: i.lb(e),
					powerups: {
						...i.qb(e),
						freeCount: t,
						paidCount: s
					}
				}),
				r = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...n(e)
				}),
				a = (e, t) => s => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...n(s),
					powerups: {
						...i.qb(s),
						emojiCount: e
					}
				}),
				d = (e, t) => s => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...n(s),
					powerups: {
						...i.qb(s),
						emojiCount: e
					}
				}),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return s => ({
						source: t,
						action: "delete",
						noun: "custom_emojis",
						...n(s),
						powerups: {
							...i.qb(s),
							emojiCount: e
						}
					})
				},
				l = (e, t) => s => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? i.mb(s, t) : void 0,
					...n(s),
					correlationId: e
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsGifsTooltip.61abf8c3e6c43ce057f4.js.map