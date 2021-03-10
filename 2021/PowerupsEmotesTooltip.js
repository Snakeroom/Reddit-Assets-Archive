// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.42f501fc0d0cf66c6bc2.js
// Retrieved at 3/10/2021, 4:50:07 PM by Reddit Dataminer v1.0.0
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
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = o.n(r);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => n.a.createElement("span", {
				className: Object(i.a)(c.a.new, e)
			}, a._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				a = o("./src/reddit/icons/svgs/Close/index.tsx"),
				l = o("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				d = o.n(l);
			const m = ({
				title: e,
				onClickClose: t
			}) => n.a.createElement("div", {
				className: d.a.header
			}, e, n.a.createElement("div", {
				className: d.a.spacer
			}), n.a.createElement(a.a, {
				className: d.a.closeIcon,
				onClick: t
			}));
			var u = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				p = o.n(u);
			class b extends n.a.Component {
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
					return n.a.createElement(r.b, {
						className: this.props.className,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: r.a.Below
					}, this.props.isVisible && n.a.createElement("div", {
						className: Object(i.a)(p.a.tooltip, this.props.bodyClassName)
					}, n.a.createElement(m, {
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
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
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
			}) => n.a.createElement("button", {
				className: Object(i.a)(c.a.emoteButton, e),
				disabled: t,
				id: o,
				title: l,
				onClick: r,
				onKeyDown: a,
				tabIndex: 1
			}, n.a.createElement("div", {
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
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./src/reddit/helpers/trackers/powerups.ts"),
				c = o("./src/reddit/hooks/useTracking.ts"),
				a = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				l = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				d = o("./node_modules/react-redux/es/index.js"),
				m = o("./src/lib/classNames/index.ts"),
				u = o("./src/reddit/actions/gold/powerups.ts"),
				p = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				E = o("./src/reddit/selectors/gold/powerups.ts"),
				x = o("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				f = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				w = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				k = o.n(w);
			const _ = ({
				onEmoteClicked: e,
				subredditId: t
			}) => {
				const o = Object(n.useRef)(null),
					a = Object(d.d)(),
					l = Object(c.a)(),
					w = Object(d.e)(e => !!t && Object(x.a)(e, {
						subredditId: t
					})),
					_ = Object(d.e)(e => Object(E.n)(e, {
						subredditId: t
					})),
					T = Object(d.e)(e => Object(E.g)(e, {
						subredditId: t
					})),
					j = Object(d.e)(e => Object(E.h)(e, {
						subredditId: t
					})),
					g = _ ? s.fbt._("Your community has been powered up with emojis.", null, {
						hk: "1S9hhd"
					}) : s.fbt._("Powerup this community to unlock emojis.", null, {
						hk: "17izsl"
					}),
					I = w ? s.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					}) : g;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", null, i.a.createElement("article", null, i.a.createElement("header", {
					className: k.a.emotePackTitle
				}, i.a.createElement("span", null, w ? s.fbt._("Add up to 20 emojis", null, {
					hk: "4kR3Q8"
				}) : s.fbt._("Custom emojis", null, {
					hk: "3K8KMy"
				})), i.a.createElement(p.a, {
					className: k.a.newIcon
				})), i.a.createElement("header", {
					className: k.a.emotePackSubtitle
				}, I), i.a.createElement("div", {
					className: Object(m.a)(k.a.emotes, {
						[k.a.disabled]: !_
					})
				}, w && i.a.createElement(i.a.Fragment, null, i.a.createElement("input", {
					ref: o,
					className: k.a.uploadInput,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), i.a.createElement("button", {
					className: Object(m.a)(k.a.emoteButton, k.a.addButton),
					onClick: () => {
						var e;
						null === (e = o.current) || void 0 === e || e.click()
					},
					title: s.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					})
				}, i.a.createElement(h.a, {
					className: k.a.addIcon
				}))), T.map(t => i.a.createElement(f.a, {
					key: t.id,
					className: k.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t)
				})))), i.a.createElement("article", {
					className: k.a.freeEmotePack
				}, i.a.createElement("header", {
					className: k.a.emotePackTitle
				}, s.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), i.a.createElement("div", {
					className: Object(m.a)(k.a.emotes, {
						[k.a.disabled]: !_
					})
				}, j.map(t => i.a.createElement(f.a, {
					key: t.id,
					className: k.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t),
					disabled: !_
				}))))), !_ && i.a.createElement(b.q, {
					className: k.a.unlockButton,
					onClick: () => {
						l(Object(r.g)()), a(Object(u.b)())
					},
					priority: b.b.Primary
				}, s.fbt._("Unlock Emojis", null, {
					hk: "44jXM7"
				})))
			};
			var T = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				j = o.n(T);
			t.default = ({
				editorState: e,
				onChange: t,
				onSetApi: o,
				subreddit: d
			}) => {
				const m = Object(c.a)(),
					[u, p] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					u && m(Object(r.c)())
				}, [u, m]);
				return i.a.createElement(a.a, {
					className: j.a.toolbarTooltip,
					bodyClassName: j.a.tooltipBody,
					isVisible: u,
					setIsVisible: p,
					onSetApi: o,
					title: s.fbt._("r/{communityName} Emojis", [s.fbt._param("communityName", d.name)], {
						hk: "3OrFxB"
					})
				}, i.a.createElement("div", {
					className: j.a.body
				}, i.a.createElement(_, {
					subredditId: d.id,
					onEmoteClicked: o => {
						const s = Object(l.g)(o, e);
						t(s), p(!1)
					}
				})))
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less": function(e, t, o) {
			e.exports = {
				addButton: "_131SsHx6UfUQsBbPHh8m1D",
				addIcon: "R3xFUrQvsMx3gn2gqGv0w",
				uploadInput: "_183AY4WVSatH9Qe_MAXDE-",
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
				return u
			})), o.d(t, "c", (function() {
				return p
			}));
			var s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				n = o("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, o) => ({
					...n.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: n.profile(e),
					subreddit: n.subreddit(e),
					powerups: {
						...n.subredditPowerups(e),
						freeCount: t,
						paidCount: o
					}
				}),
				r = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...i(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = (e, t) => o => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...i(o, e, t)
				}),
				m = (e, t) => o => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(o, e, t)
				}),
				u = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				})
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);

			function i(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.42f501fc0d0cf66c6bc2.js.map