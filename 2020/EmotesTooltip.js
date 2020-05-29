// https://www.redditstatic.com/desktop2x/EmotesTooltip.549696e519ea06342be1.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
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
				i = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				a = o.n(n),
				c = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				r = o("./node_modules/uuid/v4.js"),
				d = o.n(r),
				m = o("./src/lib/classNames/index.ts"),
				p = o("./src/lib/domUtils/index.ts"),
				h = o("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = o("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				E = o("./src/reddit/components/TrackingHelper/index.tsx"),
				b = o("./src/reddit/constants/keycodes.ts"),
				g = o("./src/reddit/controls/Button/index.tsx"),
				f = o("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				T = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				y = o("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = o("./src/reddit/selectors/economics.ts"),
				v = o("./src/reddit/selectors/telemetry.ts"),
				S = o("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				w = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				x = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				j = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				k = o("./src/reddit/components/RichTextEditor/emotes/tooltip.m.less"),
				O = o.n(k);
			const A = e => "tooltip-emote-".concat(e),
				C = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => "https://meta.redditmedia.com/img/fortnitebr/emotes/".concat(e, "-2x.gif"));
			class B extends a.a.Component {
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
							const t = v.defaults(e);
							return Object.assign({
								source: "meta",
								action: "open",
								noun: "emote_picker"
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									reason: this.state.emoteBeingTyped ? "type" : "click"
								}),
								subreddit: v.subreddit(e)
							})
						})
					}, this.handleEscapeKeyInEditor = () => {
						this.closeTooltip()
					}, this.handleTabInEditor = () => !!this.state.isTooltipVisible && (this.focusOnTooltip(), !0), this.handleUpArrowInEditor = () => {
						return !(!document.activeElement || !this.state.isTooltipVisible) && (this.focusOnTooltip(), !0)
					}, this.onEmoteClick = e => {
						let t = this.props.editorState;
						const o = Object(j.f)(t);
						if (o && this.state.emoteBeingTyped) {
							const e = t.getSelection();
							t = s.EditorState.forceSelection(t, e.merge({
								anchorOffset: e.getFocusOffset() - o.length - 1
							}))
						}
						t = Object(j.g)(e, t), this.props.onChange(t), this.closeTooltip()
					}, this.onKeyPressedInTooltip = e => {
						e.keyCode === b.a.ArrowDown ? this.handleDownArrow(e) : e.keyCode === b.a.ArrowLeft ? this.handleLeftArrow() : e.keyCode === b.a.ArrowRight ? this.handleRightArrow() : e.keyCode === b.a.ArrowUp ? this.handleUpArrow(e) : e.keyCode === b.a.Escape && (this.returnFocusToEditor(), this.closeTooltip())
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
						for (; o.nextElementSibling && (!(o = o.nextElementSibling).classList.contains(O.a.emoteButton) || (s = o).offsetLeft !== t.offsetLeft););
						s === t ? this.returnFocusToEditor() : s.focus()
					}, this.handleLeftArrow = () => {
						const e = document.activeElement && document.activeElement.previousElementSibling;
						this.state.isTooltipVisible && e && e.classList.contains(O.a.emoteButton) && e.focus()
					}, this.handleRightArrow = () => {
						const e = document.activeElement && document.activeElement.nextElementSibling;
						this.state.isTooltipVisible && e && e.classList.contains(O.a.emoteButton) && e.focus()
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
					if (t !== S.d && t !== S.a) return;
					const o = Object(j.f)(e);
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
						n = Object(j.g)(o[0], n), this.props.onChange(n)
					}
					this.setState({
						isTooltipVisible: !1,
						emoteBeingTyped: null
					})
				}
				updatePosition() {
					if (!this.updateTooltipPosition || !this.state.isTooltipVisible) return;
					const e = this.state.emoteBeingTyped ? Object(x.a)() : this.emoteButtonEl && this.emoteButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: e.left + e.width / 2,
						top: e.top + 3
					})
				}
				focusOnTooltip() {
					const e = this.getMatchingEmotes(this.state.emoteBeingTyped),
						t = e[0] && e[0].emotes[0];
					t && Object(p.a)(A(t.id))
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
						subreddit: t,
						shouldHideAddEmote: o
					} = this.props, {
						emoteBeingTyped: s,
						isTooltipVisible: n
					} = this.state, c = this.getMatchingEmotes(s), l = d()(), r = t.name, p = Object(h.a)("/web/special-membership/".concat(r, "?corr=").concat(l));
					return a.a.createElement(w.b, {
						className: s ? void 0 : O.a.toolbarTooltip,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: w.a.Below
					}, n && a.a.createElement("div", {
						className: O.a.tooltip
					}, a.a.createElement("div", {
						className: O.a.header
					}, s ? i.fbt._('Emotes matching "{emote}"', [i.fbt._param("emote", s)], {
						hk: "tVQ7S"
					}) : i.fbt._("Add r/{communityName} Emote", [i.fbt._param("communityName", t.name)], {
						hk: "21G6fU"
					}), a.a.createElement("div", {
						className: O.a.spacer
					}), a.a.createElement(y.a, {
						className: O.a.closeIcon,
						onClick: this.closeTooltip
					})), a.a.createElement("div", {
						className: O.a.body,
						ref: e => this.bodyEl = e
					}, c.map((e, t) => a.a.createElement("article", {
						className: O.a.emotePack,
						key: t
					}, e.title && a.a.createElement("header", {
						className: O.a.emotePackTitle
					}, e.title), a.a.createElement("div", {
						className: O.a.emotes
					}, e.emotes.map(e => a.a.createElement("button", {
						key: e.id,
						className: O.a.emoteButton,
						id: A(e.id),
						title: e.id,
						onClick: () => this.onEmoteClick(e),
						onKeyDown: this.onKeyPressedInTooltip,
						tabIndex: 1
					}, a.a.createElement("div", {
						className: O.a.emoteImage,
						style: {
							backgroundImage: "url(".concat(e.emoji.path, ")")
						}
					})))))), !s && e && a.a.createElement("div", {
						className: O.a.upsell
					}, a.a.createElement("div", {
						className: Object(m.a)(O.a.upsellMoreEmotes, O.a.emotes)
					}, C.map((e, t) => a.a.createElement("img", {
						className: O.a.upsellMoreEmotesImg,
						src: e,
						key: "".concat(e, "_").concat(t)
					}))), a.a.createElement(g.h, {
						className: O.a.upsellMoreEmotesButton,
						to: p,
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => Object.assign({
								correlationId: l,
								source: "meta",
								action: "click",
								noun: "emoji_tooltip_open_learn_more"
							}, v.defaults(e), {
								subreddit: v.subreddit(e)
							}))
						}
					}, i.fbt._("Get More Emotes", null, {
						hk: "3GJcvl"
					}))), !s && !o && a.a.createElement("article", {
						className: O.a.emotePack
					}, a.a.createElement("header", {
						className: O.a.emotePackTitle
					}, i.fbt._("Add Emote", null, {
						hk: "2Z29Tz"
					})), a.a.createElement("button", {
						className: O.a.emoteButton,
						onClick: this.props.onOpenUploadDialog
					}, a.a.createElement(T.a, {
						className: O.a.addEmoteIcon
					}))), a.a.createElement("div", {
						className: O.a.whiteScrim
					}))))
				}
			}
			t.default = Object(c.b)(() => Object(l.c)({
				emotePacks: (e, t) => Object(_.c)(e, t.subreddit.id) || [],
				showUpsell: (e, t) => {
					let {
						subreddit: o
					} = t;
					if (o.id) {
						return Object(_.E)(e, o.id) === _.b.NotSubscribed
					}
					return !1
				}
			}), e => ({
				onOpenUploadDialog: () => e(Object(u.i)({
					uploadAssetType: f.b.Emote
				}))
			}))(Object(E.c)(B))
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
				return l
			})), o.d(t, "d", (function() {
				return r
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

			function l(e, t, o) {
				const i = new FormData;
				return i.append("assetType", o.assetType), i.append("assetName", o.assetName), i.append("upfile", o.imageFile), o.assetType === s.Badge && (i.append("badgeColor", o.badgeColor || ""), i.append("badgeDescription", o.badgeDescription || "")), Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/modtools/").concat(t, "/assets"),
					method: "post",
					type: null,
					data: i
				})
			}

			function r(e, t, o, s, i) {
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
//# sourceMappingURL=EmotesTooltip.549696e519ea06342be1.js.map