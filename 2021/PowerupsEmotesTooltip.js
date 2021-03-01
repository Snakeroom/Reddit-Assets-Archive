// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.606731945df816e37b38.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsEmotesTooltip"], {
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, o) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = o.n(r);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => i.a.createElement("span", {
				className: Object(n.a)(c.a.new, e)
			}, a._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				a = o("./src/reddit/icons/svgs/Close/index.tsx"),
				l = o("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				d = o.n(l);
			const m = ({
				title: e,
				onClickClose: t
			}) => i.a.createElement("div", {
				className: d.a.header
			}, e, i.a.createElement("div", {
				className: d.a.spacer
			}), i.a.createElement(a.a, {
				className: d.a.closeIcon,
				onClick: t
			}));
			var p = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				u = o.n(p);
			class b extends i.a.Component {
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
					const e = this.props.isSearching ? Object(c.a)() : this.emoteButtonEl && this.emoteButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: e.left + e.width / 2,
						top: e.top + 3
					})
				}
				render() {
					return i.a.createElement(r.b, {
						className: this.props.className,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: r.a.Below
					}, this.props.isVisible && i.a.createElement("div", {
						className: Object(n.a)(u.a.tooltip, this.props.bodyClassName)
					}, i.a.createElement(m, {
						title: this.props.title,
						onClickClose: this.closeTooltip
					}), this.props.children))
				}
			}
			t.a = b
		},
		"./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				c = o.n(r);
			const a = ({
				className: e,
				disabled: t,
				id: o,
				imagePath: s,
				onClick: r,
				onKeyDown: a,
				title: l
			}) => i.a.createElement("button", {
				className: Object(n.a)(c.a.emoteButton, e),
				disabled: t,
				id: o,
				title: l,
				onClick: r,
				onKeyDown: a,
				tabIndex: 1
			}, i.a.createElement("div", {
				className: c.a.emoteImage,
				style: {
					backgroundImage: `url(${s})`
				}
			}))
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				i = o("./node_modules/react/index.js"),
				n = o.n(i),
				r = o("./src/reddit/helpers/trackers/powerups.ts"),
				c = o("./src/reddit/hooks/useTracking.ts"),
				a = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				l = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				d = o("./node_modules/react-redux/es/index.js"),
				m = o("./src/lib/classNames/index.ts"),
				p = o("./src/reddit/actions/gold/powerups.ts"),
				u = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/selectors/gold/powerups.ts"),
				E = o("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				k = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				w = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				x = o.n(w);
			const T = ({
				onEmoteClicked: e,
				subredditId: t
			}) => {
				const o = Object(d.d)(),
					i = Object(c.a)(),
					a = Object(d.e)(e => !!t && Object(E.a)(e, {
						subredditId: t
					})),
					l = Object(d.e)(e => Object(h.n)(e, {
						subredditId: t
					})),
					w = Object(d.e)(e => Object(h.g)(e, {
						subredditId: t
					})),
					T = Object(d.e)(e => Object(h.h)(e, {
						subredditId: t
					})),
					_ = l ? s.fbt._("Your community has been powered up with emojis.", null, {
						hk: "1S9hhd"
					}) : s.fbt._("Power up this community to unlock emojis.", null, {
						hk: "3ol6Ts"
					}),
					f = a ? s.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					}) : _;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(m.a)({
						[x.a.disabled]: !l
					})
				}, n.a.createElement("article", null, n.a.createElement("header", {
					className: x.a.emotePackTitle
				}, n.a.createElement("span", null, a ? s.fbt._("Add up to 20 emojis", null, {
					hk: "4kR3Q8"
				}) : s.fbt._("Custom emojis", null, {
					hk: "3K8KMy"
				})), n.a.createElement(u.a, {
					className: x.a.newIcon
				})), n.a.createElement("header", {
					className: x.a.emotePackSubtitle
				}, f), n.a.createElement("div", {
					className: x.a.emotes
				}, w.map(t => n.a.createElement(k.a, {
					key: t.id,
					className: x.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t)
				})))), n.a.createElement("article", {
					className: x.a.freeEmotePack
				}, n.a.createElement("header", {
					className: x.a.emotePackTitle
				}, s.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), n.a.createElement("div", {
					className: x.a.emotes
				}, T.map(t => n.a.createElement(k.a, {
					key: t.id,
					className: x.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t),
					disabled: !l
				}))))), !l && n.a.createElement(b.q, {
					className: x.a.unlockButton,
					onClick: () => {
						i(Object(r.g)()), o(Object(p.b)())
					},
					priority: b.b.Primary
				}, s.fbt._("Unlock Emojis", null, {
					hk: "44jXM7"
				})))
			};
			var _ = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				f = o.n(_);
			t.default = ({
				editorState: e,
				onChange: t,
				onSetApi: o,
				subreddit: d
			}) => {
				const m = Object(c.a)(),
					[p, u] = Object(i.useState)(!1);
				Object(i.useEffect)(() => {
					p && m(Object(r.c)())
				}, [p, m]);
				return n.a.createElement(a.a, {
					className: f.a.toolbarTooltip,
					bodyClassName: f.a.tooltipBody,
					isVisible: p,
					setIsVisible: u,
					onSetApi: o,
					title: s.fbt._("r/{communityName} Emojis", [s.fbt._param("communityName", d.name)], {
						hk: "3OrFxB"
					})
				}, n.a.createElement("div", {
					className: f.a.body
				}, n.a.createElement(T, {
					subredditId: d.id,
					onEmoteClicked: o => {
						const s = Object(l.g)(o, e);
						t(s), u(!1)
					}
				})))
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less": function(e, t, o) {
			e.exports = {
				emoteButton: "_2s68zj-4Pb6nTX2IUDzLkz",
				emotePackTitle: "_2ukOHQG9KkBde1ztDLudOP",
				newIcon: "_3_QvdlHkxRkqBb9ZNRQZXx",
				emotePackSubtitle: "_1-OnXZrmw20X79pBvJWaEy",
				emotes: "DNWbRyf3z71g0nqfrzQ4T",
				freeEmotePack: "_13ylKQWUAkdhTJRIuHyJfq",
				disabled: "Ejq92_2ovDkhH3FjoerXW",
				unlockButton: "_3EI1On_HJixL24yeuq2w62"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less": function(e, t, o) {
			e.exports = {
				toolbarTooltip: "_1l8806duAP4T6f7-NQkUTp",
				tooltipBody: "_34smP-7wz5EAT210pLFcyd",
				body: "ddCL4db9_XoRoPj0SK6oK"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less": function(e, t, o) {
			e.exports = {
				tooltip: "_2LFEVtexHPCOv-lxi8OsR8"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less": function(e, t, o) {
			e.exports = {
				emoteButton: "_2-SqXmcI6RcjKEbTfkrLVe",
				emoteImage: "_1WpEszyqkHofX36kiLrJ8x"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less": function(e, t, o) {
			e.exports = {
				header: "_3TevD19z6_EfVwVFoSJkRo",
				spacer: "_1eD-y2tjKEx_8fbVucvhxI",
				closeIcon: "_1FQVuhZLRBnHYRhiL7giYi"
			}
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, o) {
			"use strict";
			o.d(t, "h", (function() {
				return r
			})), o.d(t, "f", (function() {
				return c
			})), o.d(t, "e", (function() {
				return a
			})), o.d(t, "d", (function() {
				return l
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "g", (function() {
				return p
			})), o.d(t, "c", (function() {
				return u
			}));
			var s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				i = o("./src/reddit/selectors/telemetry.ts");
			const n = (e, t, o) => ({
					...i.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: i.profile(e),
					subreddit: i.subreddit(e),
					powerups: {
						...i.subredditPowerups(e),
						freeCount: t,
						paidCount: o
					}
				}),
				r = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...n(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = (e, t) => o => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...n(o, e, t)
				}),
				m = (e, t) => o => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...n(o, e, t)
				}),
				p = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				u = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...n(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.606731945df816e37b38.js.map