// https://www.redditstatic.com/desktop2x/GeneralGifsTooltip.804d77c7fcd66c8e9d6e.js
// Retrieved at 5/23/2023, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GeneralGifsTooltip"], {
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
				l = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.m.less"),
				d = s.n(l);
			class c extends n.a.Component {
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
						className: d.a.tooltip,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: r.a.Below
					}, e && n.a.createElement("div", {
						onKeyDown: this.onKeyPressedInTooltip,
						onClick: this.onTooltipBodyClick
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/General/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./src/reddit/helpers/trackers/commentsPage.ts"),
				a = s("./src/reddit/hooks/useTracking.ts"),
				r = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx"),
				l = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx");
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				const t = Object(a.a)(),
					[s, d] = Object(i.useState)(!1);
				return o.a.createElement(r.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onSetApi: e.onSetApi,
					subreddit: e.subreddit,
					userCanUseGifs: e.userCanUseGifs,
					sendEvent: () => t(Object(n.k)()),
					correlationId: e.correlationId,
					isVisible: s,
					setIsVisible: d
				}, o.a.createElement(l.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onClose: () => d(!1),
					onQueryChange: e => t(Object(n.j)(e)),
					onResultClick: () => t(Object(n.i)()),
					subreddit: e.subreddit,
					disabled: !e.userCanUseGifs
				}))
			}
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
				l = s.n(r),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				h = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/endpoints/giphy/index.ts"),
				b = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/economics.ts"),
				E = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				y = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let C;

			function _() {
				C || (C = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var w = s("./node_modules/lodash/debounce.js"),
				R = s.n(w),
				G = s("./src/config.ts"),
				v = s("./src/reddit/icons/svgs/Search/index.tsx"),
				k = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				S = s.n(j);
			const B = 400;
			class I extends c.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = R()(() => {
						this.props.onChange(this.state.query)
					}, B), this.focusOnInput = () => {
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
					return c.a.createElement("div", {
						className: Object(o.a)(S.a.searchBox, this.props.className)
					}, c.a.createElement("button", {
						className: S.a.searchIconButton,
						onClick: this.focusOnInput
					}, c.a.createElement(v.a, {
						className: S.a.searchIcon
					})), c.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: S.a.searchInput,
						placeholder: i.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && c.a.createElement("div", {
						className: S.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${G.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const O = Object(p.c)({
				isNightMode: k.fb
			});
			var N = Object(h.b)(O)(I),
				P = s("./src/lib/constants/icons.ts"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				U = s("./src/reddit/icons/fonts/index.tsx");
			var A = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				L = s.n(A);
			const q = 4,
				V = a()(f.b);
			class H extends c.a.Component {
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
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = l()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.onResultClick(this.props.hasGifProduct);
						const t = this.props.editorState,
							s = Object(y.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), E.a.before);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), _()
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
							return _(), C.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(s) || (this.setState({
							loading: !0
						}), Object(f.c)({
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
							t[e].push(i), s[e] += i.fixedWidthHeight + q
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
					return a = n ? c.a.createElement("div", {
						className: L.a.textContentContainer
					}, c.a.createElement(M.t, {
						priority: M.c.Plain,
						size: M.d.XS,
						text: i.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						"aria-label": i.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						onClick: this.reloadGifs,
						Icon: Object(U.b)(P.a.refresh)
					})) : s ? c.a.createElement("div", {
						className: L.a.loadingSpinner
					}, c.a.createElement(g.a, {
						sizePx: 20,
						center: !0
					})) : 0 === (null === (e = t[0]) || void 0 === e ? void 0 : e.length) ? c.a.createElement("div", {
						className: Object(o.a)(L.a.textContentContainer, L.a.noResultsText)
					}, i.fbt._("No results", null, {
						hk: "2vJ2bd"
					})) : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						className: Object(o.a)(L.a.results, {
							[L.a.disabled]: this.props.disabled
						})
					}, t.map((e, t) => c.a.createElement("div", {
						className: L.a.column,
						key: t
					}, e.map(e => c.a.createElement("button", {
						className: L.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, c.a.createElement("img", {
						className: L.a.gifResultImage,
						src: e.url
					})))))), this.props.children), c.a.createElement("div", {
						className: L.a.tooltip
					}, c.a.createElement("div", {
						className: L.a.header
					}, c.a.createElement("div", {
						className: L.a.searchLine
					}, c.a.createElement(N, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: L.a.searchBox
					}), c.a.createElement(b.a, {
						className: L.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), c.a.createElement("div", {
						className: L.a.body,
						onScroll: this.onScroll
					}, a, c.a.createElement("div", {
						className: L.a.whiteScrim
					})))
				}
			}
			const D = Object(p.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(T.w)(e, s.id)
				}
			});
			t.a = Object(m.c)(Object(h.b)(D, e => ({
				showErrorToast: t => e(Object(u.f)({
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GeneralGifsTooltip.804d77c7fcd66c8e9d6e.js.map