// https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.ba5c22adb1c026f7ee43.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceReleaseNotesModal"], {
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(c);
			t.a = Object(r.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(d.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(i);

			function c(e) {
				return a.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className, {
						[d.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: d.a.title
				}, e.children), a.a.createElement(o.a, {
					className: d.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less": function(e, t, n) {
			e.exports = {
				date: "_1by4A-0PLBX13RXvipwRcH"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less": function(e, t, n) {
			e.exports = {
				media: "MIDgJ92fubZO3ngkh6ERh",
				text: "_3cbhcaToRzSvS3AZHJJvLi",
				title: "_1nM99kzHmBctirluJKfGFl"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_16aq4YoQYc6_O-E66cDxvD",
				container: "sBFMqVph7JM7fhtn8VIiv",
				prev: "_29Q_dDO_ANxqcMkzCOmsm-"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1eV0V57guaBVMeKljYRDZV",
				dot: "_1W94VLaridFHpaS6aIPX0M",
				dotSelected: "_8B-dKG9AXPQlHigF1i1sJ"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/index.m.less": function(e, t, n) {
			e.exports = {
				controls: "_1d3JALELQYjabIq8gl2EoW",
				controlBox: "_3yJ4xUsPnm94-kYEcZTx2F",
				title: "_1j-YFVTgvDYE6azr1ERUw9"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				l = n("./src/reddit/constants/keycodes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/selectors/gov.ts"),
				x = n("./node_modules/reselect/es/index.js"),
				h = n("./src/lib/classNames/index.ts"),
				v = n("./node_modules/shallowequal/index.js"),
				p = n.n(v),
				N = n("./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less"),
				f = n.n(N);

			function w(e) {
				return [e.getDate(), e.getMonth(), e.getFullYear()]
			}

			function b(e) {
				const t = (n = new Date(Date.now() + 60 * (new Date).getTimezoneOffset() * 1e3), a = new Date(e.date), p()(w(n), w(a)));
				var n, a;
				return r.a.createElement("div", {
					className: Object(h.a)(f.a.date, e.className)
				}, t ? s.fbt._("today", null, {
					hk: "4pfpUs"
				}) : function(e) {
					const [t, , n] = w(e);
					return `${e.toLocaleString("en-US",{month:"short"})} ${t}, ${n}`
				}(new Date(e.date)))
			}
			var g = n("./src/reddit/components/Media/index.tsx"),
				E = n("./src/reddit/components/RichTextJson/index.tsx"),
				_ = n("./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less"),
				M = n.n(_);
			const j = {};

			function S(e) {
				return r.a.createElement("div", {
					className: e.className
				}, r.a.createElement("div", {
					className: M.a.title
				}, e.releaseNote.title), e.releaseNote.media && "rtjson" === e.releaseNote.media.type ? r.a.createElement("div", {
					className: M.a.text
				}, r.a.createElement(E.a, {
					content: e.releaseNote.media.richtextContent,
					mediaMetadata: e.releaseNote.media.mediaMetadata,
					rtJsonElementProps: j
				})) : r.a.createElement("div", {
					className: M.a.media
				}, r.a.createElement(g.a, {
					isListing: !0,
					isNotCardView: !1,
					primaryContent: !0,
					shouldLoad: !0,
					showCentered: !0,
					showFull: !0,
					post: e.releaseNote
				})))
			}
			var C = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				O = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less"),
				I = n.n(O);

			function R(e) {
				return r.a.createElement("div", {
					className: Object(h.a)(I.a.container, e.className)
				}, !e.isFirst && r.a.createElement(C.o, {
					className: I.a.prev,
					onClick: e.onPrevSlide
				}, r.a.createElement(y.a, {
					className: I.a.arrow
				})), r.a.createElement(C.l, {
					onClick: e.isLast ? e.onClose : e.onNextSlide
				}, e.isLast ? s.fbt._("done", null, {
					hk: "2XjG3a"
				}) : s.fbt._("next", null, {
					hk: "2uULSy"
				})))
			}
			var D = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less"),
				G = n.n(D);

			function L(e) {
				return r.a.createElement("div", {
					className: Object(h.a)(G.a.container, e.className)
				}, Array.from({
					length: e.totalSlides
				}).map((t, n) => r.a.createElement("div", {
					className: Object(h.a)(G.a.dot, {
						[G.a.dotSelected]: n === e.currentSlide
					})
				})))
			}
			var V = n("./src/reddit/components/Governance/ReleaseNotesModal/index.m.less"),
				A = n.n(V);
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentlyViewingIndex: 0
					}, this.handleViewNextSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.min(e.currentlyViewingIndex + 1, this.props.releaseNotes.length - 1)
					})), this.handleViewPrevSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.max(e.currentlyViewingIndex - 1, 0)
					})), this.handleKeyDown = e => {
						switch (e.key) {
							case l.b.ArrowRight:
								return this.handleViewNextSlide();
							case l.b.ArrowLeft:
								return this.handleViewPrevSlide();
							case l.b.Escape:
								return this.props.onClose()
						}
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleKeyDown)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleKeyDown)
				}
				render() {
					if (!this.props.subreddit) return null;
					const e = this.props.releaseNotes[this.state.currentlyViewingIndex];
					return r.a.createElement("div", null, r.a.createElement(c.a, {
						className: A.a.title
					}, s.fbt._("What's New in {subredditName}?", [s.fbt._param("subredditName", this.props.subreddit.displayText)], {
						hk: "31ALcQ"
					})), r.a.createElement(S, {
						releaseNote: e
					}), r.a.createElement("div", {
						className: A.a.controls
					}, r.a.createElement(b, {
						className: A.a.controlBox,
						date: e.created
					}), r.a.createElement(L, {
						className: A.a.controlBox,
						currentSlide: this.state.currentlyViewingIndex,
						totalSlides: this.props.releaseNotes.length
					}), r.a.createElement(R, {
						className: A.a.controlBox,
						isFirst: 0 === this.state.currentlyViewingIndex,
						isLast: this.state.currentlyViewingIndex === this.props.releaseNotes.length - 1,
						onClose: this.props.onClose,
						onNextSlide: this.handleViewNextSlide,
						onPrevSlide: this.handleViewPrevSlide
					})))
				}
			}
			const k = Object(x.c)({
					releaseNotes: u.f,
					subreddit: m.r
				}),
				B = Object(o.b)(k, e => ({
					onClose: () => e(Object(d.f)())
				})),
				H = Object(m.u)();
			t.default = Object(i.a)(H(B(P)))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				r = {},
				o = (e, t) => {
					const n = x(e, t);
					if (n) return n.mainHeader
				},
				i = (e, t) => {
					const n = x(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				d = (e, t) => {
					const n = x(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : r
				},
				c = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = c(e, t),
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				m = (e, t) => {
					const n = c(e, t);
					return n && n.amount || "0"
				},
				u = (e, t) => {
					const n = Object(s.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || a
				},
				x = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.ba5c22adb1c026f7ee43.js.map