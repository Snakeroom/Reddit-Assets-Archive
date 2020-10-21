// https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.10c55fa15531a2c3719b.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceReleaseNotesModal"], {
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const a = new Map,
				r = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!r.get(t)) {
						r.set(t, n);
						const s = a.get(t);
						if (s) {
							s(e, n && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const o = (e, t) => {
					try {
						a.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				i = e => {
					try {
						a.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
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
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = n.n(l);
			t.a = Object(r.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), n && n()
					}
				}
			})((function(e) {
				return a.a.createElement(c.a, {
					className: Object(o.a)(d.a.closeIcon, e.className),
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
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

			function l(e) {
				return a.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: c.a.title
				}, e.children), a.a.createElement(o.a, {
					className: c.a.closeIcon
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
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				d = n("./src/reddit/constants/keycodes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/selectors/gov.ts"),
				x = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				h = n("./node_modules/shallowequal/index.js"),
				g = n.n(h),
				v = n("./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less"),
				b = n.n(v);

			function N(e) {
				return [e.getDate(), e.getMonth(), e.getFullYear()]
			}

			function f(e) {
				const t = (n = new Date(Date.now() + 60 * (new Date).getTimezoneOffset() * 1e3), a = new Date(e.date), g()(N(n), N(a)));
				var n, a;
				return r.a.createElement("div", {
					className: Object(p.a)(b.a.date, e.className)
				}, t ? s.fbt._("today", null, {
					hk: "4pfpUs"
				}) : function(e) {
					const [t, , n] = N(e);
					return "".concat(e.toLocaleString("en-US", {
						month: "short"
					}), " ").concat(t, ", ").concat(n)
				}(new Date(e.date)))
			}
			var w = n("./src/reddit/components/Media/index.tsx"),
				y = n("./src/reddit/components/RichTextJson/index.tsx"),
				j = n("./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less"),
				_ = n.n(j);
			const O = {};

			function E(e) {
				return r.a.createElement("div", {
					className: e.className
				}, r.a.createElement("div", {
					className: _.a.title
				}, e.releaseNote.title), e.releaseNote.media && "rtjson" === e.releaseNote.media.type ? r.a.createElement("div", {
					className: _.a.text
				}, r.a.createElement(y.a, {
					content: e.releaseNote.media.richtextContent,
					mediaMetadata: e.releaseNote.media.mediaMetadata,
					rtJsonElementProps: O
				})) : r.a.createElement("div", {
					className: _.a.media
				}, r.a.createElement(w.a, {
					isListing: !0,
					isNotCardView: !1,
					primaryContent: !0,
					shouldLoad: !0,
					showCentered: !0,
					showFull: !0,
					post: e.releaseNote
				})))
			}
			var M = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less"),
				S = n.n(L);

			function R(e) {
				return r.a.createElement("div", {
					className: Object(p.a)(S.a.container, e.className)
				}, !e.isFirst && r.a.createElement(M.l, {
					className: S.a.prev,
					onClick: e.onPrevSlide
				}, r.a.createElement(C.a, {
					className: S.a.arrow
				})), r.a.createElement(M.i, {
					onClick: e.isLast ? e.onClose : e.onNextSlide
				}, e.isLast ? s.fbt._("done", null, {
					hk: "2XjG3a"
				}) : s.fbt._("next", null, {
					hk: "2uULSy"
				})))
			}
			var D = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less"),
				I = n.n(D);

			function T(e) {
				return r.a.createElement("div", {
					className: Object(p.a)(I.a.container, e.className)
				}, Array.from({
					length: e.totalSlides
				}).map((t, n) => r.a.createElement("div", {
					className: Object(p.a)(I.a.dot, {
						[I.a.dotSelected]: n === e.currentSlide
					})
				})))
			}
			var G = n("./src/reddit/components/Governance/ReleaseNotesModal/index.m.less"),
				V = n.n(G);
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentlyViewingIndex: 0
					}, this.handleViewNextSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.min(e.currentlyViewingIndex + 1, this.props.releaseNotes.length - 1)
					})), this.handleViewPrevSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.max(e.currentlyViewingIndex - 1, 0)
					})), this.handleKeyDown = e => {
						switch (e.key) {
							case d.b.ArrowRight:
								return this.handleViewNextSlide();
							case d.b.ArrowLeft:
								return this.handleViewPrevSlide();
							case d.b.Escape:
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
					return r.a.createElement("div", null, r.a.createElement(l.a, {
						className: V.a.title
					}, s.fbt._("What's New in {subredditName}?", [s.fbt._param("subredditName", this.props.subreddit.displayText)], {
						hk: "31ALcQ"
					})), r.a.createElement(E, {
						releaseNote: e
					}), r.a.createElement("div", {
						className: V.a.controls
					}, r.a.createElement(f, {
						className: V.a.controlBox,
						date: e.created
					}), r.a.createElement(T, {
						className: V.a.controlBox,
						currentSlide: this.state.currentlyViewingIndex,
						totalSlides: this.props.releaseNotes.length
					}), r.a.createElement(R, {
						className: V.a.controlBox,
						isFirst: 0 === this.state.currentlyViewingIndex,
						isLast: this.state.currentlyViewingIndex === this.props.releaseNotes.length - 1,
						onClose: this.props.onClose,
						onNextSlide: this.handleViewNextSlide,
						onPrevSlide: this.handleViewPrevSlide
					})))
				}
			}
			const A = Object(x.c)({
					releaseNotes: u.j,
					subreddit: m.q
				}),
				B = Object(o.b)(A, e => ({
					onClose: () => e(Object(c.f)())
				})),
				P = Object(m.t)();
			t.default = Object(i.a)(P(B(k)))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/page.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				u = n.n(m);
			const x = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(l.G)(t))
				})),
				p = c.a.wrapped(e => r.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(d.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(d.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", u.a);
			t.a = x(Object(i.a)(p))
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(a);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/parseUrl.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n) => Object.assign({
					gallery: r.gallery(e, t, n),
					post: r.post(e, t)
				}, r.defaults(e)),
				i = (e, t) => n => Object.assign(Object.assign({}, o(n, e, t)), {
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: r.media(n, e)
				}),
				c = (e, t, n) => i => {
					const c = Object(a.a)(t);
					return Object.assign(Object.assign({}, o(i, e, n)), {
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, r.media(i, e)), {
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						})
					})
				},
				l = (e, t) => m(e, !0, t),
				d = (e, t) => m(e, !1, t),
				m = (e, t, n) => a => Object.assign(Object.assign({}, o(a, e, n)), {
					action: s.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.10c55fa15531a2c3719b.js.map