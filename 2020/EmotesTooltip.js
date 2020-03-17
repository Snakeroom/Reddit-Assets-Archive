// https://www.redditstatic.com/desktop2x/EmotesTooltip.03d8ffbb1b6184005a84.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmotesTooltip"], {
		"./src/reddit/components/RichTextEditor/emotes/tooltip.m.less": function(e, t, o) {
			e.exports = {
				addEmoteIcon: "_3RSrGAfcPSzw18Dr1Ypv15",
				tooltip: "ZBYA7g7tEn1os4zgeibEK",
				header: "_15rE1zhptNz-2ZcJFuJMzI",
				spacer: "_2dJmb6DEsLu39NdC1p7EAi",
				closeIcon: "_3FSbPFBKfBOODDDHX7Ff89",
				body: "_3rfJGX29ny3Ssym_z9JEMp",
				emoteButton: "_y8LSTj4xEsHl3geXP5QK",
				emoteImage: "fisK5JJuiP6DsrjGtgQ0M",
				emotePack: "_3WmyBWXdP3J9ekQ5UNwsLP",
				emotePackTitle: "_2jAsyvD2xbGbR2ypq0Z8JZ",
				emotes: "_2cWXehTSK_s-IMtlp9GRB",
				toolbarTooltip: "_2mOM9blYbic2F4AwZZcSss",
				upsell: "_2bUWRR_ELGxg_MlzGeX8hG",
				upsellMoreEmotes: "_3d8VDsbQjEXJsA8KlbsKZz",
				upsellMoreEmotesButton: "_2iFTnqYszfeCHiy2uPpTN_",
				upsellMoreEmotesImg: "_21X_mnqkQMcmPa7_9B4elB",
				whiteScrim: "_2Jqwtd2J3xIRch_8TULbTW"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/tooltip.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/es6.array.sort.js"), o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/draft-js/lib/Draft.js"),
				i = o("./node_modules/react/index.js"),
				n = o.n(i),
				a = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				r = o("./node_modules/uuid/v4.js"),
				l = o.n(r),
				d = o("./src/lib/classNames/index.ts"),
				m = o("./src/lib/domUtils/index.ts"),
				p = o("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = o("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				E = o("./src/reddit/constants/keycodes.ts"),
				g = o("./src/reddit/controls/Button/index.tsx"),
				b = o("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				f = o("./src/reddit/i18n/utils.ts"),
				T = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				y = o("./src/reddit/icons/svgs/Close/index.tsx"),
				v = o("./src/reddit/selectors/economics.ts"),
				S = o("./src/reddit/selectors/telemetry.ts"),
				_ = o("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				j = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				O = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				w = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				x = o("./src/reddit/components/RichTextEditor/emotes/tooltip.m.less"),
				A = o.n(x);
			const B = e => "tooltip-emote-".concat(e),
				C = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => "https://meta.redditmedia.com/img/fortnitebr/emotes/".concat(e, "-2x.gif"));
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.bodyEl = null, this.updateTooltipPosition = null, this.state = {
						isTooltipVisible: !1,
						emoteBeingTyped: null
					}, this.closeTooltip = () => {
						this.setState({
							isTooltipVisible: !1
						})
					}, this.toggleTooltip = e => {
						e.currentTarget instanceof HTMLElement && (this.emoteButtonEl = e.currentTarget);
						const t = this.state.isTooltipVisible;
						this.setState({
							isTooltipVisible: !t
						}, () => {
							this.updatePosition(), this.state.isTooltipVisible && this.state.isTooltipVisible !== t && (this.sendEvent(), this.focusOnTooltip())
						})
					}, this.sendEvent = () => {
						this.props.sendEvent(e => {
							const t = S.defaults(e);
							return Object.assign({
								source: "meta",
								action: "open",
								noun: "emote_picker"
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									reason: this.state.emoteBeingTyped ? "type" : "click"
								}),
								subreddit: S.subreddit(e)
							})
						})
					}, this.handleEscapeKeyInEditor = () => {
						this.closeTooltip()
					}, this.handleTabInEditor = () => !!this.state.isTooltipVisible && (this.focusOnTooltip(), !0), this.handleUpArrowInEditor = () => {
						return !(!document.activeElement || !this.state.isTooltipVisible) && (this.focusOnTooltip(), !0)
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
						for (; o.nextElementSibling && (!(o = o.nextElementSibling).classList.contains(A.a.emoteButton) || (s = o).offsetLeft !== t.offsetLeft););
						s === t ? this.returnFocusToEditor() : s.focus()
					}, this.handleLeftArrow = () => {
						const e = document.activeElement && document.activeElement.previousElementSibling;
						this.state.isTooltipVisible && e && e.classList.contains(A.a.emoteButton) && e.focus()
					}, this.handleRightArrow = () => {
						const e = document.activeElement && document.activeElement.nextElementSibling;
						this.state.isTooltipVisible && e && e.classList.contains(A.a.emoteButton) && e.focus()
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
					if (t !== _.d && t !== _.a) return;
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
						this.updatePosition(), this.state.isTooltipVisible && this.state.isTooltipVisible !== n && this.sendEvent()
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
				updatePosition() {
					if (!this.updateTooltipPosition || !this.state.isTooltipVisible) return;
					const e = this.state.emoteBeingTyped ? Object(O.a)() : this.emoteButtonEl && this.emoteButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: e.left + e.width / 2,
						top: e.top + 3
					})
				}
				focusOnTooltip() {
					const e = this.getMatchingEmotes(this.state.emoteBeingTyped),
						t = e[0] && e[0].emotes[0];
					t && Object(m.a)(B(t.id))
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
					} = this.state, i = this.getMatchingEmotes(o), a = l()(), c = t.name, r = Object(p.a)("/web/special-membership/".concat(c, "?corr=").concat(a));
					return n.a.createElement(j.b, {
						className: o ? void 0 : A.a.toolbarTooltip,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: j.a.Below
					}, s && n.a.createElement("div", {
						className: A.a.tooltip
					}, n.a.createElement("div", {
						className: A.a.header
					}, o ? Object(f.c)('Emotes matching "'.concat(o, '"')) : Object(f.c)("Add r/".concat(Object(f.b)("communityName", t.name), " Emote")), n.a.createElement("div", {
						className: A.a.spacer
					}), n.a.createElement(y.a, {
						className: A.a.closeIcon,
						onClick: this.closeTooltip
					})), n.a.createElement("div", {
						className: A.a.body,
						ref: e => this.bodyEl = e
					}, i.map((e, t) => n.a.createElement("article", {
						className: A.a.emotePack,
						key: t
					}, e.title && n.a.createElement("header", {
						className: A.a.emotePackTitle
					}, e.title), n.a.createElement("div", {
						className: A.a.emotes
					}, e.emotes.map(e => n.a.createElement("button", {
						key: e.id,
						className: A.a.emoteButton,
						id: B(e.id),
						title: e.id,
						onClick: () => this.onEmoteClick(e),
						onKeyDown: this.onKeyPressedInTooltip,
						tabIndex: 1
					}, n.a.createElement("div", {
						className: A.a.emoteImage,
						style: {
							backgroundImage: "url(".concat(e.emoji.path, ")")
						}
					})))))), !o && e && n.a.createElement("div", {
						className: A.a.upsell
					}, n.a.createElement("div", {
						className: Object(d.a)(A.a.upsellMoreEmotes, A.a.emotes)
					}, C.map(e => n.a.createElement("img", {
						className: A.a.upsellMoreEmotesImg,
						src: e
					}))), n.a.createElement(g.h, {
						className: A.a.upsellMoreEmotesButton,
						to: r,
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => Object.assign({
								correlationId: a,
								source: "meta",
								action: "click",
								noun: "emoji_tooltip_open_learn_more"
							}, S.defaults(e), {
								subreddit: S.subreddit(e)
							}))
						}
					}, Object(f.c)("Get More Emotes"))), !o && n.a.createElement("article", {
						className: A.a.emotePack
					}, n.a.createElement("header", {
						className: A.a.emotePackTitle
					}, Object(f.c)("Add Emote")), n.a.createElement("button", {
						className: A.a.emoteButton,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(T.a, {
						className: A.a.addEmoteIcon
					}))), n.a.createElement("div", {
						className: A.a.whiteScrim
					}))))
				}
			}
			t.default = Object(a.b)(() => Object(c.c)({
				emotePacks: (e, t) => Object(v.c)(e, t.subreddit.id) || [],
				showUpsell: (e, t) => {
					let {
						subreddit: o
					} = t;
					if (o.id) {
						return Object(v.B)(e, o.id) === v.b.NotSubscribed
					}
					return !1
				}
			}), e => ({
				onOpenUploadDialog: () => e(Object(h.i)({
					uploadAssetType: b.b.Emote
				}))
			}))(Object(u.c)(k))
		},
		"./src/reddit/endpoints/economics/uploadedAssets.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return s
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "c", (function() {
				return c
			})), o.d(t, "e", (function() {
				return r
			})), o.d(t, "d", (function() {
				return l
			}));
			var s, i, n = o("./src/config.ts"),
				a = o("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t, o, s) {
				const i = "assetType=".concat(o, "&assetStatus=").concat(s);
				return Object(a.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/modtools/").concat(t, "/assets?").concat(i)
				})
			}

			function r(e, t, o) {
				const i = new FormData;
				return i.append("assetType", o.assetType), i.append("assetName", o.assetName), i.append("upfile", o.imageFile), o.assetType === s.Badge && (i.append("badgeColor", o.badgeColor || ""), i.append("badgeDescription", o.badgeDescription || "")), Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/modtools/").concat(t, "/assets"),
					method: "post",
					type: null,
					data: i
				})
			}

			function l(e, t, o, s, i) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/modtools/").concat(t, "/assets/").concat(o, "s/").concat(s),
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
//# sourceMappingURL=EmotesTooltip.03d8ffbb1b6184005a84.js.map