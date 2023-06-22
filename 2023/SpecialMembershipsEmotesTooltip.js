// https://www.redditstatic.com/desktop2x/SpecialMembershipsEmotesTooltip.3cacf641b7b30b47e17e.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SpecialMembershipsEmotesTooltip"], {
		"./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				r = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				c = o("./src/reddit/icons/svgs/Close/index.tsx"),
				l = o("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				d = o.n(l);
			const m = e => {
				let {
					title: t,
					onClickClose: o
				} = e;
				return i.a.createElement("div", {
					className: d.a.header
				}, t, i.a.createElement("div", {
					className: d.a.spacer
				}), i.a.createElement(c.a, {
					className: d.a.closeIcon,
					onClick: o
				}))
			};
			var p = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				h = o.n(p);
			class u extends i.a.Component {
				constructor() {
					super(...arguments), this.updateTooltipPosition = null, this.handleWindowClick = e => {
						this.props.isVisible && this.props.setIsVisible(!1)
					}, this.closeTooltip = () => {
						this.props.setIsVisible(!1)
					}, this.toggleTooltip = e => {
						e.currentTarget instanceof HTMLElement && (this.emoteButtonEl = e.currentTarget), this.props.setIsVisible(!this.props.isVisible)
					}, this.handleEscapeKeyInEditor = () => {
						this.closeTooltip()
					}, this.handleTabInEditor = () => {
						const {
							isVisible: e,
							focusOnTooltip: t
						} = this.props;
						return !!e && (t && t(), !0)
					}, this.handleUpArrowInEditor = () => {
						const {
							isVisible: e,
							focusOnTooltip: t
						} = this.props;
						return !(!document.activeElement || !e) && (t && t(), !0)
					}, this.onTooltipBodyClick = e => {
						e.stopPropagation()
					}
				}
				componentDidMount() {
					this.props.onSetApi && this.props.onSetApi({
						closeTooltip: this.closeTooltip,
						handleEscapeKeyInEditor: this.handleEscapeKeyInEditor,
						handleTabInEditor: this.handleTabInEditor,
						handleUpArrowInEditor: this.handleUpArrowInEditor,
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
					const e = this.props.isSearching ? Object(r.a)() : this.emoteButtonEl && this.emoteButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: Math.round(e.left + e.width / 2),
						top: Math.round(e.top) + 3
					})
				}
				render() {
					return i.a.createElement(a.b, {
						className: this.props.className,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: a.a.Below
					}, this.props.isVisible && i.a.createElement("div", {
						className: Object(n.a)(h.a.tooltip, this.props.bodyClassName),
						onClick: this.onTooltipBodyClick
					}, i.a.createElement(m, {
						title: this.props.title,
						onClickClose: this.closeTooltip
					}), this.props.children))
				}
			}
			t.a = u
		},
		"./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			var s, i = o("./node_modules/react/index.js"),
				n = o.n(i),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				l = o.n(c);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(s || (s = {}));
			const d = 750,
				m = e => {
					let {
						className: t,
						containerClassName: o,
						imageClassName: c,
						disabled: m,
						id: p,
						imagePath: h,
						onClick: u,
						onKeyDown: E,
						title: b,
						onClickDelete: f,
						mouseEnterBufferTime: g = d
					} = e;
					const T = Object(i.useRef)(s.Outside),
						[x, v] = Object(i.useState)(!1);
					return n.a.createElement("div", {
						className: Object(a.a)(l.a.container, o),
						onMouseEnter: f ? () => {
							T.current = s.Inside, setTimeout(() => {
								T.current === s.Inside && v(!0)
							}, g)
						} : void 0,
						onMouseLeave: f ? () => {
							T.current = s.Outside, v(!1)
						} : void 0
					}, x && n.a.createElement("button", {
						className: l.a.deleteButton,
						onClick: f
					}, n.a.createElement(r.b, {
						className: l.a.deleteIcon
					})), n.a.createElement("button", {
						className: Object(a.a)(l.a.emoteButton, t),
						disabled: m,
						id: p,
						title: b,
						onClick: u,
						onKeyDown: E,
						tabIndex: 1
					}, n.a.createElement("div", {
						className: Object(a.a)(l.a.emoteImage, c),
						style: {
							backgroundImage: `url(${h})`
						}
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.m.less": function(e, t, o) {
			e.exports = {
				addEmoteIcon: "Vl4Izh3aGRVf1oXrUN4AS",
				tooltip: "RJ1eaUw3sbfRmzYm7bjEC",
				body: "_2-Xb2r4I0ssdF_j4xGRFqI",
				emoteButton: "_25LCo-Aey94-j2JCZhF8WJ",
				emotePack: "_1cWYTK2mwNrcrLzht22hwB",
				emotePackTitle: "_2I9LZBePHUrdABmUEqU1SY",
				emotes: "_3IYGHQE8rUEhUZ3LMyLhwE",
				toolbarTooltip: "fKuM3sQBYj0izKjjOcuND",
				upsell: "_19GdZUzwR7t_vS1FE7Ztd5",
				upsellMoreEmotes: "s3upgehwiSeM8Bq-q-i-F",
				upsellMoreEmotesButton: "_157w9dzNGdq8JytIFsRiQM",
				upsellMoreEmotesImg: "_1MULhyCJvoUxrbLpI3kFLi",
				whiteScrim: "_1-7xQHARTZsJqIsYzznPo8"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/draft-js/lib/Draft.js"),
				i = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				a = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				l = o("./node_modules/uuid/dist/esm-browser/v4.js"),
				d = o("./src/lib/classNames/index.ts"),
				m = o("./src/lib/domUtils/index.ts"),
				p = o("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = o("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				E = o("./src/reddit/constants/keycodes.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				f = o("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				g = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				T = o("./src/reddit/selectors/economics.ts"),
				x = o("./src/reddit/selectors/telemetry.ts"),
				v = o("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				y = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				k = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				w = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				C = o("./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.m.less"),
				S = o.n(C);
			const _ = e => `tooltip-emote-${e}`,
				j = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`);
			class I extends a.a.Component {
				constructor() {
					super(...arguments), this.bodyEl = null, this.state = {
						isTooltipVisible: !1,
						emoteBeingTyped: null
					}, this.focusOnTooltip = () => {
						const e = this.getMatchingEmotes(this.state.emoteBeingTyped),
							t = e[0] && e[0].emotes[0];
						t && Object(m.a)(_(t.id))
					}, this.closeTooltip = () => {
						this.setState({
							isTooltipVisible: !1
						})
					}, this.setIsVisisble = e => {
						const t = this.state.isTooltipVisible;
						this.setState({
							isTooltipVisible: e
						}, () => {
							e && e !== t && (this.sendEvent(), this.focusOnTooltip())
						})
					}, this.sendEvent = () => {
						this.props.sendEvent(e => {
							const t = x.o(e);
							return {
								source: "meta",
								action: "open",
								noun: "emote_picker",
								...t,
								actionInfo: {
									...t.actionInfo,
									reason: this.state.emoteBeingTyped ? "type" : "click"
								},
								subreddit: x.lb(e)
							}
						})
					}, this.onEmoteClick = e => {
						let t = this.props.editorState;
						const o = Object(w.f)(t);
						if (o && this.state.emoteBeingTyped) {
							const e = t.getSelection();
							t = s.EditorState.forceSelection(t, e.merge({
								anchorOffset: e.getFocusOffset() - o.length - 1
							}))
						}
						t = Object(w.g)(e, t), this.props.onChange(t), this.closeTooltip()
					}, this.onKeyPressedInTooltip = e => {
						e.keyCode === E.a.ArrowDown ? this.handleDownArrow(e) : e.keyCode === E.a.ArrowLeft ? this.handleLeftArrow() : e.keyCode === E.a.ArrowRight ? this.handleRightArrow() : e.keyCode === E.a.ArrowUp ? this.handleUpArrow(e) : e.keyCode === E.a.Escape && (this.returnFocusToEditor(), this.closeTooltip())
					}, this.handleUpArrow = e => {
						const t = document.activeElement;
						if (!t) return;
						e.preventDefault();
						let o = t;
						for (; o = o.previousElementSibling;)
							if (o.offsetLeft === t.offsetLeft) return void o.focus()
					}, this.handleDownArrow = e => {
						const t = document.activeElement;
						if (!t) return;
						e.preventDefault();
						let o = t,
							s = t;
						for (; o.nextElementSibling && (!(o = o.nextElementSibling).classList.contains(S.a.emoteButton) || (s = o).offsetLeft !== t.offsetLeft););
						s === t ? this.returnFocusToEditor() : s.focus()
					}, this.handleLeftArrow = () => {
						const e = document.activeElement && document.activeElement.previousElementSibling;
						this.state.isTooltipVisible && e && e.classList.contains(S.a.emoteButton) && e.focus()
					}, this.handleRightArrow = () => {
						const e = document.activeElement && document.activeElement.nextElementSibling;
						this.state.isTooltipVisible && e && e.classList.contains(S.a.emoteButton) && e.focus()
					}
				}
				componentDidUpdate(e, t) {
					e.editorState !== this.props.editorState && this.handleUserTypingInEmote()
				}
				getMatchingEmotes(e) {
					const t = [];
					if (e) {
						const o = {
							emotes: [],
							title: void 0
						};
						this.props.emotePacks.forEach(t => {
							Object.keys(t.emotes).filter(t => -1 !== t.toLowerCase().indexOf(e)).forEach(e => {
								o.emotes.push(t.emotes[e])
							})
						}), o.emotes.sort((e, t) => e.id.localeCompare(t.id)), t.push(o)
					} else this.props.emotePacks.forEach(e => {
						t.push({
							emotes: Object.keys(e.emotes).map(t => e.emotes[t]).sort((e, t) => e.id.localeCompare(t.id)),
							title: e.title
						})
					});
					return t
				}
				handleUserTypingInEmote() {
					const {
						editorState: e
					} = this.props, t = e.getLastChangeType();
					if (t !== v.d && t !== v.a) return;
					const o = Object(w.f)(e);
					if (!o) return void(this.state.emoteBeingTyped && this.setState({
						isTooltipVisible: !1,
						emoteBeingTyped: null
					}));
					if (this.state.emoteBeingTyped && !this.state.isTooltipVisible) return;
					if (":" === o[o.length - 1]) return void this.handleFinishTypingEmote(o);
					const s = this.getMatchingEmotes(o),
						i = !!s.length && !!s[0].emotes.length,
						n = this.state.isTooltipVisible;
					this.setState({
						isTooltipVisible: i,
						emoteBeingTyped: i ? o : null
					}, () => {
						this.state.isTooltipVisible && this.state.isTooltipVisible !== n && this.sendEvent()
					})
				}
				handleFinishTypingEmote(e) {
					const t = e.substring(0, e.length - 1);
					let o = this.getMatchingEmotes(t).reduce((e, t) => e.concat(t.emotes), []);
					if (o.length > 1 && (o = o.filter(e => e.id === t)), o.length) {
						const {
							editorState: e
						} = this.props, i = e.getSelection();
						let n = s.EditorState.forceSelection(e, i.merge({
							anchorOffset: i.getFocusOffset() - t.length - 2
						}));
						n = Object(w.g)(o[0], n), this.props.onChange(n)
					}
					this.setState({
						isTooltipVisible: !1,
						emoteBeingTyped: null
					})
				}
				returnFocusToEditor() {
					const {
						editorState: e,
						onChange: t
					} = this.props;
					t(s.EditorState.forceSelection(e, this.previousSelectionState || e.getSelection()))
				}
				render() {
					const {
						showUpsell: e,
						subreddit: t
					} = this.props, {
						emoteBeingTyped: o,
						isTooltipVisible: s
					} = this.state, n = this.getMatchingEmotes(o), r = Object(l.a)(), c = t.name, m = Object(p.a)(`/web/special-membership/${c}?corr=${r}`);
					return a.a.createElement(y.a, {
						focusOnTooltip: this.focusOnTooltip,
						isVisible: s,
						setIsVisible: this.setIsVisisble,
						onSetApi: this.props.onSetApi,
						className: o ? void 0 : S.a.toolbarTooltip,
						title: o ? i.fbt._('Emotes matching "{emote}"', [i.fbt._param("emote", o)], {
							hk: "tVQ7S"
						}) : i.fbt._("Add r/{communityName} Emote", [i.fbt._param("communityName", t.name)], {
							hk: "21G6fU"
						}),
						isSearching: !!o
					}, a.a.createElement("div", {
						className: S.a.body,
						ref: e => this.bodyEl = e
					}, n.map((e, t) => a.a.createElement("article", {
						className: S.a.emotePack,
						key: t
					}, e.title && a.a.createElement("header", {
						className: S.a.emotePackTitle
					}, e.title), a.a.createElement("div", {
						className: S.a.emotes
					}, e.emotes.map(e => a.a.createElement(k.a, {
						key: e.id,
						className: S.a.emoteButton,
						id: _(e.id),
						imagePath: e.emoji.path,
						title: e.id,
						onClick: () => this.onEmoteClick(e),
						onKeyDown: this.onKeyPressedInTooltip
					}))))), !o && e && a.a.createElement("div", {
						className: S.a.upsell
					}, a.a.createElement("div", {
						className: Object(d.a)(S.a.upsellMoreEmotes, S.a.emotes)
					}, j.map((e, t) => a.a.createElement("img", {
						className: S.a.upsellMoreEmotesImg,
						src: e,
						key: `${e}_${t}`
					}))), a.a.createElement(b.n, {
						className: S.a.upsellMoreEmotesButton,
						to: m,
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "emoji_tooltip_open_learn_more",
								...x.o(e),
								subreddit: x.lb(e)
							}))
						}
					}, i.fbt._("Get More Emotes", null, {
						hk: "3GJcvl"
					}))), !o && a.a.createElement("article", {
						className: S.a.emotePack
					}, a.a.createElement("header", {
						className: S.a.emotePackTitle
					}, i.fbt._("Add Emote", null, {
						hk: "2Z29Tz"
					})), a.a.createElement("button", {
						className: S.a.emoteButton,
						onClick: this.props.onOpenUploadDialog
					}, a.a.createElement(g.a, {
						className: S.a.addEmoteIcon
					}))), a.a.createElement("div", {
						className: S.a.whiteScrim
					})))
				}
			}
			t.default = Object(r.b)(() => Object(c.c)({
				emotePacks: (e, t) => Object(T.b)(e, {
					subredditId: t.subreddit.id
				}) || [],
				showUpsell: (e, t) => {
					let {
						subreddit: o
					} = t;
					if (o.id) {
						return Object(T.x)(e, o.id) === T.a.NotSubscribed
					}
					return !1
				}
			}), e => ({
				onOpenUploadDialog: () => e(Object(h.j)(f.b.Emote))
			}))(Object(u.c)(I))
		},
		"./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less": function(e, t, o) {
			e.exports = {
				tooltip: "_2LFEVtexHPCOv-lxi8OsR8"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less": function(e, t, o) {
			e.exports = {
				container: "_1xDkiINVQUjf0tjZcbF3a7",
				emoteButton: "_2-SqXmcI6RcjKEbTfkrLVe",
				emoteImage: "_1WpEszyqkHofX36kiLrJ8x",
				deleteButton: "_2mgKNuqCKnjSfh2dBW7iqI",
				deleteIcon: "_1BJNzscR61JS-t7pR4p3Ik"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less": function(e, t, o) {
			e.exports = {
				header: "_3TevD19z6_EfVwVFoSJkRo",
				spacer: "_1eD-y2tjKEx_8fbVucvhxI",
				closeIcon: "_1FQVuhZLRBnHYRhiL7giYi"
			}
		},
		"./src/reddit/endpoints/economics/uploadedAssets.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return s
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "e", (function() {
				return c
			})), o.d(t, "d", (function() {
				return l
			}));
			var s, i, n = o("./src/config.ts"),
				a = o("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t, o, s) {
				const i = `assetType=${o}&assetStatus=${s}`;
				return Object(a.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/modtools/${t}/assets?${i}`
				})
			}

			function c(e, t, o) {
				const i = new FormData;
				return i.append("assetType", o.assetType), i.append("assetName", o.assetName), i.append("upfile", o.imageFile), o.assetType === s.Badge && (i.append("badgeColor", o.badgeColor || ""), i.append("badgeDescription", o.badgeDescription || "")), Object(a.a)(e, {
					endpoint: `${n.a.metaUrl}/modtools/${t}/assets`,
					method: "post",
					type: null,
					data: i
				})
			}

			function l(e, t, o, s, i) {
				return Object(a.a)(e, {
					endpoint: `${n.a.metaUrl}/modtools/${t}/assets/${o}s/${s}`,
					method: "patch",
					data: i
				})
			}! function(e) {
				e.Badge = "badge", e.Emote = "emote"
			}(s || (s = {})),
			function(e) {
				e.Uploaded = "uploaded", e.Approved = "approved", e.Rejected = "rejected"
			}(i || (i = {}))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s);

			function n(e) {
				return i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), i.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SpecialMembershipsEmotesTooltip.3cacf641b7b30b47e17e.js.map