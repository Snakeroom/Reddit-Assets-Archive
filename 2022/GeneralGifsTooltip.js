// https://www.redditstatic.com/desktop2x/GeneralGifsTooltip.d494a1e19465ca17f1d6.js
// Retrieved at 5/9/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
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
				c = s.n(l);
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
						className: c.a.tooltip,
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
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				const t = Object(a.a)(),
					[s, c] = Object(i.useState)(!1);
				return o.a.createElement(r.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onSetApi: e.onSetApi,
					subreddit: e.subreddit,
					userCanUseGifs: e.userCanUseGifs,
					sendEvent: () => t(Object(n.k)()),
					correlationId: e.correlationId,
					isVisible: s,
					setIsVisible: c
				}, o.a.createElement(l.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onClose: () => c(!1),
					onQueryChange: e => t(Object(n.i)(e)),
					onResultClick: () => t(Object(n.h)()),
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
				reloadContainer: "_2H-he6L_WAGyJssK6xfelB",
				reloadButton: "SxlCrByp5by6J_IRxVRh",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				disabled: "_1q61sXN5YBwD15WuBXBYk5",
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
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				h = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/config.ts"),
				b = s("./src/lib/addQueryParams/index.ts");
			const x = "pg";

			function y(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error(`${e.meta.status} ${e.meta.msg}`);
					return e
				})
			}
			var T = s("./src/reddit/icons/svgs/Close/index.tsx"),
				E = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/economics.ts"),
				_ = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				w = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let G;

			function R() {
				G || (G = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var k = s("./node_modules/lodash/debounce.js"),
				S = s.n(k),
				j = s("./src/reddit/icons/svgs/Search/index.tsx"),
				B = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				I = s.n(O);
			const v = 400;
			class N extends d.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = S()(() => {
						this.props.onChange(this.state.query)
					}, v), this.focusOnInput = () => {
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
						className: Object(o.a)(I.a.searchBox, this.props.className)
					}, d.a.createElement("button", {
						className: I.a.searchIconButton,
						onClick: this.focusOnInput
					}, d.a.createElement(j.a, {
						className: I.a.searchIcon
					})), d.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: I.a.searchInput,
						placeholder: i.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && d.a.createElement("div", {
						className: I.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${f.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const P = Object(p.c)({
				isNightMode: B.cb
			});
			var A = Object(h.b)(P)(N),
				M = s("./src/lib/constants/icons.ts"),
				U = s("./src/reddit/controls/Button/index.tsx"),
				L = s("./src/reddit/icons/fonts/index.tsx"),
				q = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				V = s.n(q);
			const H = 4,
				D = a()((function() {
					const e = Object(b.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: f.a.giphyApiKey,
						rating: x
					});
					return fetch(e).then(y)
				}));
			class F extends d.a.Component {
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
							s = Object(w.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), _.a.after);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), R()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					D().then(e => {
						this.state.query || this.addGiphyResults(e)
					}).catch(() => {
						this.mounted && (this.setState({
							showReload: !0,
							loading: !1
						}), D.cache.clear())
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
							return R(), G.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(s) || (this.setState({
							loading: !0
						}), function(e) {
							const t = Object(b.a)("https://api.giphy.com/v1/gifs/search", {
								api_key: f.a.giphyApiKey,
								q: e.query,
								offset: e.offset || 0,
								rating: e.rating || x
							});
							return fetch(t).then(y)
						}({
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
						const i = this.getSimplifiedResult(e),
							o = s.reduce((e, t, i) => t < s[e] ? i : e, 0);
						t[o].push(i), s[o] += i.fixedWidthHeight + H
					});
					const i = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: i < e.pagination.total_count ? i : null
					})
				}
				getSimplifiedResult(e) {
					const t = parseInt(e.images.fixed_width.height),
						s = e.images.downsized && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
						i = s ? e.images.downsized : e.images.fixed_height;
					return {
						id: e.id,
						url: i.url,
						hasDownsizedImage: s,
						width: parseInt(i.width),
						height: parseInt(i.height),
						fixedWidthHeight: t
					}
				}
				render() {
					const {
						columns: e,
						loading: t,
						showReload: s
					} = this.state;
					return d.a.createElement("div", {
						className: V.a.tooltip
					}, d.a.createElement("div", {
						className: V.a.header
					}, d.a.createElement("div", {
						className: V.a.searchLine
					}, d.a.createElement(A, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: V.a.searchBox
					}), d.a.createElement(T.a, {
						className: V.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), d.a.createElement("div", {
						className: V.a.body,
						onScroll: this.onScroll
					}, s ? d.a.createElement("div", {
						className: V.a.reloadContainer
					}, d.a.createElement(U.t, {
						priority: U.c.Plain,
						size: U.d.XS,
						text: i.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						"aria-label": i.fbt._("Reload", null, {
							hk: "4jkmsI"
						}),
						onClick: this.reloadGifs,
						Icon: Object(L.b)(M.a.refresh)
					})) : d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: Object(o.a)(V.a.results, {
							[V.a.disabled]: this.props.disabled
						})
					}, e.map((e, t) => d.a.createElement("div", {
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
					})))))), t && d.a.createElement("div", {
						className: V.a.loadingSpinner
					}, d.a.createElement(g.a, {
						sizePx: 20,
						center: !0
					})), this.props.children), d.a.createElement("div", {
						className: V.a.whiteScrim
					})))
				}
			}
			const W = Object(p.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(C.w)(e, s.id)
				}
			});
			t.a = Object(m.c)(Object(h.b)(W, e => ({
				showErrorToast: t => e(Object(u.f)({
					text: t,
					kind: E.b.Error,
					duration: 5e3
				}))
			}))(F))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GeneralGifsTooltip.d494a1e19465ca17f1d6.js.map