// https://www.redditstatic.com/desktop2x/SpecialMembershipsEmotesTooltip.f41f54af1b47c9f77fe0.js
// Retrieved at 10/28/2021, 5:10:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SpecialMembershipsEmotesTooltip"], {
		"./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				i = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				r = s("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				c = s("./src/reddit/icons/svgs/Close/index.tsx"),
				l = s("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				d = s.n(l);
			const m = ({
				title: e,
				onClickClose: t
			}) => i.a.createElement("div", {
				className: d.a.header
			}, e, i.a.createElement("div", {
				className: d.a.spacer
			}), i.a.createElement(c.a, {
				className: d.a.closeIcon,
				onClick: t
			}));
			var p = s("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				h = s.n(p);
			class u extends i.a.Component {
				constructor() {
					super(...arguments), this.updateTooltipPosition = null, this.closeTooltip = () => {
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
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate() {
					this.props.isVisible && this.updatePosition()
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
						className: Object(n.a)(h.a.tooltip, this.props.bodyClassName)
					}, i.a.createElement(m, {
						title: this.props.title,
						onClickClose: this.closeTooltip
					}), this.props.children))
				}
			}
			t.a = u
		},
		"./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o, i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				l = s.n(c);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(o || (o = {}));
			const d = ({
				className: e,
				containerClassName: t,
				imageClassName: s,
				disabled: c,
				id: d,
				imagePath: m,
				onClick: p,
				onKeyDown: h,
				title: u,
				onClickDelete: b,
				mouseEnterBufferTime: E = 750
			}) => {
				const f = Object(i.useRef)(o.Outside),
					[g, T] = Object(i.useState)(!1);
				return n.a.createElement("div", {
					className: Object(a.a)(l.a.container, t),
					onMouseEnter: b ? () => {
						f.current = o.Inside, setTimeout(() => {
							f.current === o.Inside && T(!0)
						}, E)
					} : void 0,
					onMouseLeave: b ? () => {
						f.current = o.Outside, T(!1)
					} : void 0
				}, g && n.a.createElement("button", {
					className: l.a.deleteButton,
					onClick: b
				}, n.a.createElement(r.b, {
					className: l.a.deleteIcon
				})), n.a.createElement("button", {
					className: Object(a.a)(l.a.emoteButton, e),
					disabled: c,
					id: d,
					title: u,
					onClick: p,
					onKeyDown: h,
					tabIndex: 1
				}, n.a.createElement("div", {
					className: Object(a.a)(l.a.emoteImage, s),
					style: {
						backgroundImage: `url(${m})`
					}
				})))
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.m.less": function(e, t, s) {
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
		"./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/draft-js/lib/Draft.js"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./node_modules/uuid/v4.js"),
				d = s.n(l),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/domUtils/index.ts"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/constants/keycodes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				T = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				x = s("./src/reddit/selectors/economics.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				S = s("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				_ = s("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				v = s("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				j = s("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				I = s("./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.m.less"),
				k = s.n(I);
			const O = e => `tooltip-emote-${e}`,
				B = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`);
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.bodyEl = null, this.state = {
						isTooltipVisible: !1,
						emoteBeingTyped: null
					}, this.focusOnTooltip = () => {
						const e = this.getMatchingEmotes(this.state.emoteBeingTyped),
							t = e[0] && e[0].emotes[0];
						t && Object(p.a)(O(t.id))
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
							const t = y.defaults(e);
							return {
								source: "meta",
								action: "open",
								noun: "emote_picker",
								...t,
								actionInfo: {
									...t.actionInfo,
									reason: this.state.emoteBeingTyped ? "type" : "click"
								},
								subreddit: y.subreddit(e)
							}
						})
					}, this.onEmoteClick = e => {
						let t = this.props.editorState;
						const s = Object(j.f)(t);
						if (s && this.state.emoteBeingTyped) {
							const e = t.getSelection();
							t = o.EditorState.forceSelection(t, e.merge({
								anchorOffset: e.getFocusOffset() - s.length - 1
							}))
						}
						t = Object(j.g)(e, t), this.props.onChange(t), this.closeTooltip()
					}, this.onKeyPressedInTooltip = e => {
						e.keyCode === E.a.ArrowDown ? this.handleDownArrow(e) : e.keyCode === E.a.ArrowLeft ? this.handleLeftArrow() : e.keyCode === E.a.ArrowRight ? this.handleRightArrow() : e.keyCode === E.a.ArrowUp ? this.handleUpArrow(e) : e.keyCode === E.a.Escape && (this.returnFocusToEditor(), this.closeTooltip())
					}, this.handleUpArrow = e => {
						const t = document.activeElement;
						if (!t) return;
						e.preventDefault();
						let s = t;
						for (; s = s.previousElementSibling;)
							if (s.offsetLeft === t.offsetLeft) return void s.focus()
					}, this.handleDownArrow = e => {
						const t = document.activeElement;
						if (!t) return;
						e.preventDefault();
						let s = t,
							o = t;
						for (; s.nextElementSibling && (!(s = s.nextElementSibling).classList.contains(k.a.emoteButton) || (o = s).offsetLeft !== t.offsetLeft););
						o === t ? this.returnFocusToEditor() : o.focus()
					}, this.handleLeftArrow = () => {
						const e = document.activeElement && document.activeElement.previousElementSibling;
						this.state.isTooltipVisible && e && e.classList.contains(k.a.emoteButton) && e.focus()
					}, this.handleRightArrow = () => {
						const e = document.activeElement && document.activeElement.nextElementSibling;
						this.state.isTooltipVisible && e && e.classList.contains(k.a.emoteButton) && e.focus()
					}
				}
				componentDidUpdate(e, t) {
					e.editorState !== this.props.editorState && this.handleUserTypingInEmote()
				}
				getMatchingEmotes(e) {
					const t = [];
					if (e) {
						const s = {
							emotes: [],
							title: void 0
						};
						this.props.emotePacks.forEach(t => {
							Object.keys(t.emotes).filter(t => -1 !== t.toLowerCase().indexOf(e)).forEach(e => {
								s.emotes.push(t.emotes[e])
							})
						}), s.emotes.sort((e, t) => e.id.localeCompare(t.id)), t.push(s)
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
					if (t !== S.d && t !== S.a) return;
					const s = Object(j.f)(e);
					if (!s) return void(this.state.emoteBeingTyped && this.setState({
						isTooltipVisible: !1,
						emoteBeingTyped: null
					}));
					if (this.state.emoteBeingTyped && !this.state.isTooltipVisible) return;
					if (":" === s[s.length - 1]) return void this.handleFinishTypingEmote(s);
					const o = this.getMatchingEmotes(s),
						i = !!o.length && !!o[0].emotes.length,
						n = this.state.isTooltipVisible;
					this.setState({
						isTooltipVisible: i,
						emoteBeingTyped: i ? s : null
					}, () => {
						this.state.isTooltipVisible && this.state.isTooltipVisible !== n && this.sendEvent()
					})
				}
				handleFinishTypingEmote(e) {
					const t = e.substring(0, e.length - 1);
					let s = this.getMatchingEmotes(t).reduce((e, t) => e.concat(t.emotes), []);
					if (s.length > 1 && (s = s.filter(e => e.id === t)), s.length) {
						const {
							editorState: e
						} = this.props, i = e.getSelection();
						let n = o.EditorState.forceSelection(e, i.merge({
							anchorOffset: i.getFocusOffset() - t.length - 2
						}));
						n = Object(j.g)(s[0], n), this.props.onChange(n)
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
					t(o.EditorState.forceSelection(e, this.previousSelectionState || e.getSelection()))
				}
				render() {
					const {
						showUpsell: e,
						subreddit: t
					} = this.props, {
						emoteBeingTyped: s,
						isTooltipVisible: o
					} = this.state, n = this.getMatchingEmotes(s), r = d()(), c = t.name, l = Object(h.a)(`/web/special-membership/${c}?corr=${r}`);
					return a.a.createElement(_.a, {
						focusOnTooltip: this.focusOnTooltip,
						isVisible: o,
						setIsVisible: this.setIsVisisble,
						onSetApi: this.props.onSetApi,
						className: s ? void 0 : k.a.toolbarTooltip,
						title: s ? i.fbt._('Emotes matching "{emote}"', [i.fbt._param("emote", s)], {
							hk: "tVQ7S"
						}) : i.fbt._("Add r/{communityName} Emote", [i.fbt._param("communityName", t.name)], {
							hk: "21G6fU"
						}),
						isSearching: !!s
					}, a.a.createElement("div", {
						className: k.a.body,
						ref: e => this.bodyEl = e
					}, n.map((e, t) => a.a.createElement("article", {
						className: k.a.emotePack,
						key: t
					}, e.title && a.a.createElement("header", {
						className: k.a.emotePackTitle
					}, e.title), a.a.createElement("div", {
						className: k.a.emotes
					}, e.emotes.map(e => a.a.createElement(v.a, {
						key: e.id,
						className: k.a.emoteButton,
						id: O(e.id),
						imagePath: e.emoji.path,
						title: e.id,
						onClick: () => this.onEmoteClick(e),
						onKeyDown: this.onKeyPressedInTooltip
					}))))), !s && e && a.a.createElement("div", {
						className: k.a.upsell
					}, a.a.createElement("div", {
						className: Object(m.a)(k.a.upsellMoreEmotes, k.a.emotes)
					}, B.map((e, t) => a.a.createElement("img", {
						className: k.a.upsellMoreEmotesImg,
						src: e,
						key: `${e}_${t}`
					}))), a.a.createElement(f.m, {
						className: k.a.upsellMoreEmotesButton,
						to: l,
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "emoji_tooltip_open_learn_more",
								...y.defaults(e),
								subreddit: y.subreddit(e)
							}))
						}
					}, i.fbt._("Get More Emotes", null, {
						hk: "3GJcvl"
					}))), !s && a.a.createElement("article", {
						className: k.a.emotePack
					}, a.a.createElement("header", {
						className: k.a.emotePackTitle
					}, i.fbt._("Add Emote", null, {
						hk: "2Z29Tz"
					})), a.a.createElement("button", {
						className: k.a.emoteButton,
						onClick: this.props.onOpenUploadDialog
					}, a.a.createElement(T.a, {
						className: k.a.addEmoteIcon
					}))), a.a.createElement("div", {
						className: k.a.whiteScrim
					})))
				}
			}
			t.default = Object(r.b)(() => Object(c.c)({
				emotePacks: (e, t) => Object(x.b)(e, {
					subredditId: t.subreddit.id
				}) || [],
				showUpsell: (e, {
					subreddit: t
				}) => {
					if (t.id) {
						return Object(x.x)(e, t.id) === x.a.NotSubscribed
					}
					return !1
				}
			}), e => ({
				onOpenUploadDialog: () => e(Object(u.j)(g.b.Emote))
			}))(Object(b.c)(C))
		},
		"./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_2LFEVtexHPCOv-lxi8OsR8"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less": function(e, t, s) {
			e.exports = {
				container: "_1xDkiINVQUjf0tjZcbF3a7",
				emoteButton: "_2-SqXmcI6RcjKEbTfkrLVe",
				emoteImage: "_1WpEszyqkHofX36kiLrJ8x",
				deleteButton: "_2mgKNuqCKnjSfh2dBW7iqI",
				deleteIcon: "_1BJNzscR61JS-t7pR4p3Ik"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less": function(e, t, s) {
			e.exports = {
				header: "_3TevD19z6_EfVwVFoSJkRo",
				spacer: "_1eD-y2tjKEx_8fbVucvhxI",
				closeIcon: "_1FQVuhZLRBnHYRhiL7giYi"
			}
		},
		"./src/reddit/endpoints/economics/uploadedAssets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			}));
			var o, i, n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t, s, o) {
				const i = `assetType=${s}&assetStatus=${o}`;
				return Object(a.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/modtools/${t}/assets?${i}`
				})
			}

			function c(e, t, s) {
				const i = new FormData;
				return i.append("assetType", s.assetType), i.append("assetName", s.assetName), i.append("upfile", s.imageFile), s.assetType === o.Badge && (i.append("badgeColor", s.badgeColor || ""), i.append("badgeDescription", s.badgeDescription || "")), Object(a.a)(e, {
					endpoint: `${n.a.metaUrl}/modtools/${t}/assets`,
					method: "post",
					type: null,
					data: i
				})
			}

			function l(e, t, s, o, i) {
				return Object(a.a)(e, {
					endpoint: `${n.a.metaUrl}/modtools/${t}/assets/${s}s/${o}`,
					method: "patch",
					data: i
				})
			}! function(e) {
				e.Badge = "badge", e.Emote = "emote"
			}(o || (o = {})),
			function(e) {
				e.Uploaded = "uploaded", e.Approved = "approved", e.Rejected = "rejected"
			}(i || (i = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SpecialMembershipsEmotesTooltip.f41f54af1b47c9f77fe0.js.map