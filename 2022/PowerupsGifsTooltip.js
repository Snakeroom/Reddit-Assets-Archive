// https://www.redditstatic.com/desktop2x/PowerupsGifsTooltip.452bf74ab08d0dd938b1.js
// Retrieved at 2/22/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsGifsTooltip"], {
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
					super(e), this.updateTooltipPosition = null, this.toggleTooltip = e => {
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
					}
				}
				componentDidMount() {
					this.props.onSetApi && this.props.onSetApi({
						closeTooltip: this.closeTooltip,
						toggleTooltip: this.toggleTooltip
					})
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate() {
					this.props.isVisible && this.updatePosition()
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
						onKeyDown: this.onKeyPressedInTooltip
					}, this.props.children))
				}
			}
			t.a = d
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				headerWithTitleLine: "_2d5Y14DbQhaeFQexgn_8Nr",
				titleLine: "_3POjQe5s4pakf6mUEhOGNP",
				searchLine: "_1aZZB23bAFb9VFM7USCLpW",
				title: "_1IzUvkOygcCyb3m9fdOEc2",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
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
				p = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/config.ts"),
				b = s("./src/lib/addQueryParams/index.ts");
			const x = "pg";

			function E(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error(`${e.meta.status} ${e.meta.msg}`);
					return e
				})
			}
			var T = s("./src/reddit/icons/svgs/Close/index.tsx"),
				y = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/economics.ts"),
				w = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				G = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let k;

			function v() {
				k || (k = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var j = s("./node_modules/lodash/debounce.js"),
				I = s.n(j),
				O = s("./src/reddit/icons/svgs/Search/index.tsx"),
				S = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				N = s.n(B);
			const R = 400;
			class L extends d.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = I()(() => {
						this.props.onChange(this.state.query)
					}, R), this.focusOnInput = () => {
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
						className: Object(o.a)(N.a.searchBox, this.props.className)
					}, d.a.createElement("button", {
						className: N.a.searchIconButton,
						onClick: this.focusOnInput
					}, d.a.createElement(O.a, {
						className: N.a.searchIcon
					})), d.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: N.a.searchInput,
						placeholder: i.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && d.a.createElement("div", {
						className: N.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${f.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const P = Object(h.c)({
				isNightMode: S.bb
			});
			var M = Object(p.b)(P)(L),
				U = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				F = s.n(U);
			const A = 4,
				z = a()((function() {
					const e = Object(b.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: f.a.giphyApiKey,
						rating: x
					});
					return fetch(e).then(E)
				}));
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
						query: ""
					}, this.mounted = !1, this.onQueryChange = e => {
						this.props.sendEvent(t => ({
							source: "meta",
							action: "change",
							noun: "gif_tooltip_search",
							correlationId: this.props.correlationId,
							subreddit: this.props.subreddit.id ? w.kb(t, this.props.subreddit.id) : void 0,
							post: w.k(t),
							search: {
								query: e
							},
							...w.o(t)
						})), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => this.loadMoreResults())
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = l()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.sendEvent(e => {
							const t = w.o(e);
							return {
								...t,
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? w.kb(e, this.props.subreddit.id) : void 0,
								post: w.k(e),
								actionInfo: {
									...t.actionInfo,
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								}
							}
						});
						const t = this.props.editorState,
							s = Object(G.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), C.a.after);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), v()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					z().then(e => {
						this.state.query || this.addGiphyResults(e)
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
							return v(), k.then(t => {
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
							return fetch(t).then(E)
						}({
							query: s,
							offset: t
						}).then(e => {
							this.addGiphyResults(e)
						}).catch(() => {
							this.mounted && (this.props.showErrorToast(i.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1
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
						t[o].push(i), s[o] += i.fixedWidthHeight + A
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
						loading: t
					} = this.state;
					return d.a.createElement("div", {
						className: F.a.tooltip
					}, d.a.createElement("div", {
						className: Object(o.a)(F.a.header, {
							[F.a.headerWithTitleLine]: !!this.props.title
						})
					}, this.props.title && d.a.createElement("div", {
						className: F.a.titleLine
					}, d.a.createElement("span", {
						className: F.a.title
					}, this.props.title), d.a.createElement(T.a, {
						className: F.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					})), d.a.createElement("div", {
						className: F.a.searchLine
					}, d.a.createElement(M, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: F.a.searchBox
					}), !this.props.title && d.a.createElement(T.a, {
						className: F.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), d.a.createElement("div", {
						className: F.a.body,
						onScroll: this.onScroll
					}, d.a.createElement("div", {
						className: Object(o.a)(F.a.results, {
							[F.a.disabled]: this.props.disabled
						})
					}, e.map((e, t) => d.a.createElement("div", {
						className: F.a.column,
						key: t
					}, e.map(e => d.a.createElement("button", {
						className: F.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, d.a.createElement("img", {
						className: F.a.gifResultImage,
						src: e.url
					})))))), t && d.a.createElement("div", {
						className: F.a.loadingSpinner
					}, d.a.createElement(g.a, {
						sizePx: 20,
						center: !0
					})), this.props.children, d.a.createElement("div", {
						className: F.a.whiteScrim
					})))
				}
			}
			const q = Object(h.c)({
				hasGifProduct: (e, {
					subreddit: t
				}) => Object(_.w)(e, t.id)
			});
			t.a = Object(m.c)(Object(p.b)(q, e => ({
				showErrorToast: t => e(Object(u.f)({
					text: t,
					kind: y.b.Error,
					duration: 5e3
				}))
			}))(H))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.m.less": function(e, t, s) {
			e.exports = {
				unlockButton: "UTU5gUzuO10iTU5yRXnT7"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/gold/powerups.ts"),
				r = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/powerups.ts"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = s("./src/reddit/components/RichTextEditor/media/GifTooltip/BaseTooltip.tsx"),
				h = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				u = s("./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.m.less"),
				m = s.n(u);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				const t = Object(c.a)(),
					s = Object(n.d)(),
					[u, f] = Object(i.useState)(!1),
					b = () => {
						t(Object(l.F)()), s(Object(a.g)("gif_picker"))
					};
				return o.a.createElement(p.a, {
					editorState: e.editorState,
					onChange: e.onChange,
					onSetApi: e.onSetApi,
					subreddit: e.subreddit,
					userCanUseGifs: e.userCanUseGifs,
					sendEvent: () => {
						var s;
						return t(Object(l.l)(e.correlationId, null === (s = e.subreddit) || void 0 === s ? void 0 : s.id))
					},
					correlationId: e.correlationId,
					isVisible: u,
					setIsVisible: f
				}, o.a.createElement(h.a, {
					correlationId: e.correlationId,
					editorState: e.editorState,
					onChange: e.onChange,
					onClose: () => f(!1),
					subreddit: e.subreddit,
					title: o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement(d.a, null), e.userCanUseGifs ? g._("Unlocked with Powerups", null, {
						hk: "T07a5"
					}) : g._("Unlock with Powerups", null, {
						hk: "1sgFk2"
					})), null),
					disabled: !e.userCanUseGifs
				}, !e.userCanUseGifs && o.a.createElement(() => o.a.createElement(r.t, {
					className: m.a.unlockButton,
					onClick: b,
					priority: r.c.Primary
				}, g._("Unlock GIFs", null, {
					hk: "4tqic4"
				})), null)))
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
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), o.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), o.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), o.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsGifsTooltip.452bf74ab08d0dd938b1.js.map