// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea.98dd0b2177f55f9e576c.js
// Retrieved at 7/14/2020, 3:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"], {
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				c = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts");
			const m = Object(o.a)(e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: c.Ab
				});
				return Object(c.vc)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: c.Bb
				});
				return Object(c.vc)(t) ? void 0 : t
			}, (e, t) => e === c.Cb.Enabled && t === c.Cb.Enabled);
			var h = s("./src/config.ts");
			var p = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const g = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				x = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var f;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(f || (f = {}));
			const E = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(x).join("")
			})(f.SHA1, e);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			const w = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				O = Object({
					SENTRY_RELEASE_VERSION: "c7a4c20-production"
				}),
				I = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(O.SENTRY_RELEASE_VERSION, " ").concat(h.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: d,
					disableCookies: c,
					envKey: u,
					localStorageSaltKey: h,
					localStorageViewerUserIdKey: x,
					playerName: f,
					playerVersion: O,
					respectDoNotTrack: C,
					saltLength: S,
					saltTimeToLive: j,
					viewerUserIdLength: M
				} = Object.assign({}, I, t);
				class L extends i.Component {
					constructor() {
						super(...arguments), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(i.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}
					}
					get experimentName() {
						return ""
					}
					get video() {
						return this.videoRef.current
					}
					componentDidMount() {
						this.doMuxThings()
					}
					componentDidUpdate(e) {
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings()
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							i = y(t, ["forwardedRef"]);
						return a.a.createElement(e, v({}, i, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.videoRef
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await l();
							if (this.isMonitoring) {
								const t = this.getVideoData();
								e.emit(this.video, "videochange", t)
							} else {
								const t = await this.getMuxData();
								e.monitor(this.video, t), this.isMonitoring = !0
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || L.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = b(),
							i = "".concat(s).concat(e).concat(t);
						return (await E(i)).substr(0, L.VIEWER_USER_ID_LENGTH)
					}
					getDashInstanceData() {
						const {
							dashInstance: e
						} = this;
						return e ? {
							dashjs: e
						} : null
					}
					getHlsInstanceData() {
						const {
							hlsInstance: e
						} = this;
						return e ? {
							hlsjs: e,
							Hls: e.constructor
						} : null
					}
					async getMuxData() {
						const e = await this.encryptViewerUserId(),
							t = this.getVideoData(),
							s = this.getThirdPartyLibData();
						return Object.assign({
							debug: L.DEBUG,
							disableCookies: L.DISABLE_COOKIES,
							respectDoNotTrack: L.RESPECT_DO_NOT_TRACK
						}, s, {
							data: Object.assign({
								env_key: L.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: L.PLAYER_NAME,
								player_version: L.PLAYER_VERSION
							}, t, {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = L.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = g(L.SALT_LENGTH), Object(r.b)(e, t, L.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign({}, this.getDashInstanceData(), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: i
						} = this.props;
						return {
							video_duration: s ? L.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? L.STREAM_TYPE_LIVE : L.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				L.displayName = w(e), L.ANONYMOUS_USER_ID = s, L.DEBUG = d, L.DISABLE_COOKIES = c, L.DURATION_LIVE = 1 / 0, L.ENV_KEY = u, L.LOCAL_STORAGE_SALT_KEY = h, L.LOCAL_STORAGE_VIEWER_USER_ID_KEY = x, L.PLAYER_NAME = f, L.PLAYER_VERSION = O, L.RESPECT_DO_NOT_TRACK = C, L.SALT_LENGTH = S, L.SALT_TIME_TO_LIVE = j, L.STREAM_TYPE_LIVE = "live", L.STREAM_TYPE_ON_DEMAND = "on-demand", L.VIEWER_USER_ID_LENGTH = M;
				const N = Object(i.forwardRef)((e, t) => a.a.createElement(L, v({}, e, {
						forwardedRef: t
					}))),
					T = Object(o.c)({
						redditUserId: p.g,
						isMuxEnabled: m
					});
				return Object(n.b)(T, null, null, {
					forwardRef: !0
				})(N)
			}
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Proposal").then(s.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
		},
		"./src/reddit/components/Media/GalleryBox/index.m.less": function(e, t, s) {
			e.exports = {
				outerContainer: "kcerW9lbT-se3SXd-wp2i",
				nextButton: "_38uXo2TofvhEuLKeH-rRcV",
				icon: "_32kofHIEwuARK_15MrzAuT",
				seeMore: "_3b8u2OJXaSDdBWoRB7zUoK",
				iconImage: "_3PkAZ5W4aDQ7cujQ426UiB",
				prevIcon: "CxV9u12DiN4nfOLEzaWGg",
				nextIcon: "Qfn6RihWXp6riuP88alpI",
				imageLink: "iUP9nbvcaxfwKrQTgt0sw",
				tallImage: "_1ti9kvv_PMZEF2phzAjsGW",
				commonImage: "_3BxRNDoASi9FbGX01ewiLg",
				navigationUnderlay: "_1fSFPkxZ9pToLETLQT2dmc",
				hasMoreSlides: "_3-JCOd-nY76g29C7ZVX_kl",
				slideshowContainer: "KVyBaj7FjzElWsqJDmw7v",
				slideImage: "_1dwExqTGJH2jnA-MYGkEL-",
				slide: "_28TEYBuEdOuE3kN6UyoKMa",
				imagesWrapper: "_2Ev7WJU0f45KxlmClce9t8",
				slideWrapper: "_1apobczT0TzIKMWpza0OhL",
				figure: "_3o5Vzct5tn9PE7e-emdDmf",
				imageMetaData: "_26daP6nhhW7BT-CMzL0ijs",
				imageUrl: "_1JvpVe-IA894KlEuAn5i9c",
				outboundUrlWrapper: "_2ZUcZqGYDSM0BMbiracglV",
				linkIcon: "_2pA6COv2OLOcG3Ma_ZAzLs",
				urlText: "G960looU9eqiZ1POYed8r",
				imageCaption: "_15nNdGlBIgryHV04IfAfpA",
				slideIndicator: "_61i6grM3um1yuw4GrN97P",
				blurredContent: "kYRcqD1CH-tXu0xGsAOLH",
				unblurButtonContainer: "XU8P4L1nSifowaG9_gEQu",
				unblurButton: "_2xd9ygloNjk8lC1O8LrxPo"
			}
		},
		"./src/reddit/components/Media/GalleryBox/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/lib/classNames/index.ts");
			var o = (e, t, s) => {
					const a = Object(i.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(i.useEffect)(() => {
						if (t) return t.addEventListener("keydown", a), () => {
							t && t.removeEventListener("keydown", a)
						}
					}, [t, a])
				},
				r = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				d = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				l = s("./src/reddit/constants/keycodes.ts"),
				c = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/components/Media/blurredContent.ts"),
				h = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				p = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				const {
					displayImage: t,
					style: s
				} = e;
				return a.a.createElement("img", {
					src: "u" in t ? t.u : t.gif,
					className: p.a.slideImage,
					style: s
				})
			}, x = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					optimalImage: i,
					originalImage: o,
					isListing: r
				} = e, d = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, l = r ? u.j : u.e, c = o.y > l && Object(u.H)(o.y, o.x), m = c ? {} : {
					maxHeight: "100%"
				}, h = c ? o : i;
				return a.a.createElement("li", {
					style: d,
					className: p.a.slide
				}, a.a.createElement("figure", {
					className: Object(n.a)({
						[p.a.tallImage]: c,
						[p.a.commonImage]: !c
					}, p.a.figure)
				}, r ? a.a.createElement(b, {
					displayImage: h,
					style: m
				}) : a.a.createElement("a", {
					href: "u" in o ? o.u : o.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(n.a)({
						[p.a.tallImage]: c,
						[p.a.commonImage]: !c
					}, p.a.imageLink)
				}, a.a.createElement(b, {
					displayImage: h,
					style: m
				}))), c && a.a.createElement("div", {
					className: p.a.seeMore
				}, g._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, f = e => a.a.createElement("a", {
				className: Object(n.a)(e.className, p.a.navigationUnderlay, {
					[p.a.hasMoreSlides]: e.hasMoreSlides
				}),
				onClick: e.onClick,
				onMouseDown: t => {
					e.setFocusTo.current && e.setFocusTo.current.focus(), t.preventDefault()
				},
				title: e.title
			}, e.hasMoreSlides && a.a.createElement("i", {
				className: Object(n.a)(e.iconClassName, p.a.icon)
			}, a.a.createElement(r.a, {
				className: p.a.iconImage
			}))), E = e => a.a.createElement("div", {
				className: p.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && a.a.createElement("span", {
				className: p.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && a.a.createElement("span", {
				className: p.a.imageUrl
			}, a.a.createElement("a", {
				className: p.a.outboundUrlWrapper,
				href: e.outboundUrl,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, a.a.createElement("span", {
				className: p.a.urlText
			}, Object(c.d)(e.outboundUrl)), a.a.createElement(d.a, {
				className: p.a.linkIcon
			})))), v = e => a.a.createElement("div", {
				className: p.a.slideIndicator
			}, e.currentSlide, "/", e.totalSlides);
			t.a = e => {
				const {
					captionHeight: t,
					galleryItems: s,
					imageHeight: r,
					mediaMetadata: d = {}
				} = e, [u, h] = Object(i.useState)(0), g = u > 0, b = u < s.length - 1, y = Object(i.useCallback)(() => {
					b && h(u + 1)
				}, [b, u, h]), w = Object(i.useCallback)(() => {
					g && h(u - 1)
				}, [g, u, h]), O = Object(i.useRef)(null), I = Object(i.useRef)(null);
				o(l.a.ArrowLeft, O.current, w), o(l.a.ArrowRight, O.current, y);
				const C = s[u] && s[u].caption,
					S = s[u] && s[u].outboundUrl;
				return a.a.createElement("div", {
					className: Object(n.a)(p.a.outerContainer),
					ref: O,
					tabIndex: 0
				}, a.a.createElement("div", {
					className: p.a.slideshowContainer,
					tabIndex: -1,
					ref: I,
					onClick: e.onClickRevealBlurred,
					style: {
						height: r
					}
				}, a.a.createElement("div", {
					className: p.a.imagesWrapper
				}, a.a.createElement("ul", {
					className: Object(n.a)(p.a.slideWrapper, {
						[p.a.blurredContent]: e.shouldBlur
					})
				}, s.map((t, s) => {
					const i = t.mediaId,
						n = d && d[i];
					if (!n || !n.s) return null;
					const o = Object(c.c)(r, n);
					return o ? a.a.createElement(x, {
						slideIndex: s,
						currentIndex: u,
						optimalImage: o,
						originalImage: n.s,
						isListing: e.isListing,
						key: i
					}) : null
				})), e.shouldBlur && !e.isListing && a.a.createElement("div", {
					className: p.a.unblurButtonContainer
				}, a.a.createElement("button", {
					className: p.a.unblurButton
				}, Object(m.a)(!!e.isNSFW, !!e.isSpoiler))), !e.shouldBlur && a.a.createElement(a.a.Fragment, null, a.a.createElement(f, {
					onClick: w,
					setFocusTo: I,
					hasMoreSlides: g,
					title: "Previous",
					iconClassName: p.a.prevIcon,
					className: p.a.prevButton
				}), a.a.createElement(f, {
					onClick: y,
					setFocusTo: I,
					hasMoreSlides: b,
					title: "Next",
					iconClassName: p.a.nextIcon,
					className: p.a.nextButton
				}))), s.length > 1 ? a.a.createElement(v, {
					currentSlide: u + 1,
					totalSlides: s.length
				}) : ""), (C || S) && a.a.createElement(E, {
					caption: C,
					outboundUrl: S,
					captionHeight: t
				}))
			}
		},
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, s) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
			}
		},
		"./src/reddit/components/Media/RichTextContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/componentSizes.ts"),
				r = s("./src/reddit/models/Media/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				m = s.n(u);
			class h extends a.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(c.a)({
						isLoading: !0
					});
					return a.a.createElement("div", {
						className: m.a.placeholder
					}, [1, 2, 3].map(t => a.a.createElement("div", {
						key: t,
						className: m.a.placeholderParagraph
					}, a.a.createElement("div", {
						className: e
					}), a.a.createElement("div", {
						className: e
					}), a.a.createElement("div", {
						className: e
					}))))
				}
			}
			var p = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(l.B)(t))
			}))(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			t.a = e => {
				var {
					canLoadContent: t,
					children: s,
					className: i,
					isCommentsPage: d,
					isMediumHeight: l,
					isRichTextTruncated: c,
					isExpando: u,
					isTitleOnly: h,
					postId: x,
					showFull: f
				} = e, E = b(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
				const v = {
						[m.a.richTextContainerFull]: f,
						[m.a.richTextContainerTitleOnly]: h && !f,
						[m.a.richTextContainer]: !f && !h
					},
					y = {};
				f || (y.maxHeight = "".concat(h ? r.m : l ? r.l : r.k, "px")), d && (y.maxWidth = "".concat(o.d, "px"));
				const w = c && f;
				return a.a.createElement("div", g({
					className: Object(n.a)(v, i),
					style: y
				}, E), s, w && a.a.createElement(p, {
					canLoadContent: !!t,
					isExpando: u,
					postId: x
				}))
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
				tweetEmbedBox: "_3pYTJO5FjsoQWRUsIFQASN",
				isInvisible: "_3xICr9rbunMOudN40P1GgI",
				tweetDeleted: "sIgL7k1Lz6YLL146KNk8k",
				seeMore: "_2f5uYHvlfzs2DngQsiCdvB"
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/intersectionObserver/index.ts"),
				d = s("./src/reddit/components/Media/constants.ts"),
				l = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				c = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				p = s.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = 350,
				x = 100,
				f = 300;
			class E extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isFullyLoaded: !1
					}, this.iframe = null, this.onWindowMessage = e => {
						!this.state.isFullyLoaded && this.iframe && this.iframe.contentWindow === e.source && "tweet-measured" === e.data.action && this.setState({
							isFullyLoaded: !0
						})
					}, this.embedBoxChildRef = e => {
						this.iframe = e, e && r.a(e, (t, s) => {
							e && e.contentWindow && !this.props.media.height && s && e.contentWindow.postMessage("twitter-measure-requested", d.a)
						}), this.props.embedBoxChildRef(e)
					}
				}
				componentDidMount() {
					window.addEventListener("message", this.onWindowMessage)
				}
				componentWillUnmount() {
					this.iframe && r.b(this.iframe), window.removeEventListener("message", this.onWindowMessage)
				}
				render() {
					const {
						canLoadContent: e,
						media: t,
						mediaContainerProps: s,
						onIframeLoaded: a,
						source: r,
						title: d
					} = this.props, {
						isFullyLoaded: h
					} = this.state, E = s.height || (t.isDeleted ? x : f);
					return n.a.createElement(c.a, g({}, s, {
						alwaysWrapMedia: !0,
						height: E,
						showFull: !s.isListing,
						width: b
					}), e && n.a.createElement(n.a.Fragment, null, (!s.height || !h) && (t.isDeleted ? n.a.createElement("p", {
						className: p.a.tweetDeleted
					}, i.fbt._("This Tweet has been deleted.", null, {
						hk: "1LhcOw"
					})) : n.a.createElement("div", {
						className: Object(o.a)(Object(u.a)({
							isLoading: !0
						}), p.a.tweetPlaceholder)
					})), n.a.createElement(l.a, {
						childRef: this.embedBoxChildRef,
						className: Object(o.a)(p.a.tweetEmbedBox, {
							[p.a.isInvisible]: !s.height || !h
						}),
						height: E,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? m.j : null,
						onLoad: a,
						showCentered: s.showCentered,
						showFull: !0,
						source: r,
						title: d,
						width: b
					}), s.isListing && E > m.j && n.a.createElement("div", {
						className: p.a.seeMore
					}, i.fbt._("See full tweet", null, {
						hk: "1bxtrd"
					}))))
				}
			}
		},
		"./src/reddit/components/Media/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = "https://www.redditmedia.com"
		},
		"./src/reddit/components/Media/getResolution.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/models/Media/index.ts");
			const a = (e, t, s, i) => {
					const a = e / t,
						n = s / i;
					return Math.abs(a - n) < .03
				},
				n = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				o = (e, t, s) => {
					for (let n = 0; n < s.length; n++) {
						const o = s[n];
						if (o.width >= i.e / 2 && a(e, t, o.height, o.width)) return o
					}
				},
				r = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= i.e || s.width >= i.f) return s
					}
				}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(i),
				n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				c = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/higherOrderComponents/withMux/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./src/lib/env/index.ts"),
				b = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				f = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				E = s("./src/lib/sentry/index.ts"),
				v = s("./src/lib/truncateText/index.ts"),
				y = s("./src/reddit/components/AdViewability/index.tsx"),
				w = s("./src/reddit/components/Governance/Proposal/async.ts"),
				O = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				I = s("./src/reddit/components/Media/constants.ts"),
				C = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				S = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				j = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				M = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				L = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				N = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				T = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				_ = s("./src/reddit/components/PlayButton/index.tsx"),
				D = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				R = s("./src/reddit/components/RichTextJson/index.tsx"),
				P = s("./src/reddit/constants/componentSizes.ts"),
				A = s("./src/reddit/constants/screenWidths.ts"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				W = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				k = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				F = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				U = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				G = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/selectors/experiments/postSeo.ts"),
				K = s("./src/reddit/selectors/postCreations.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/selectors/seo/index.ts"),
				q = s("./src/reddit/components/Media/getResolution.ts"),
				Q = s("./src/server/helpers/seoMetadata.tsx"),
				X = s("./src/reddit/components/Media/index.m.less"),
				Z = s.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = Object(n.a)({
					resolved: {},
					chunkName: () => "LiveVideoPlayer",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer~PublicAccessNetwork"), s.e("LiveVideoPlayer")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx"
					}
				}, {
					ssr: !1
				}),
				te = Object(m.a)(O.b, {
					playerName: "Reddit Player"
				}),
				se = 1200,
				ie = 75,
				ae = "player.js",
				ne = P.r + P.q,
				oe = e => e.isVisible ? e.children : l.a.createElement("div", {
					className: Z.a.displayNone
				}, e.children),
				re = new Set([G.o.EMBED, G.o.GIFVIDEO, G.o.LIVEVIDEO, G.o.VIDEO]),
				de = e => !!e.media && re.has(e.media.type),
				le = new Set([G.o.EMBED, G.o.GALLERY, G.o.GIFVIDEO, G.o.IMAGE, G.o.LIVEVIDEO, G.o.VIDEO]),
				ce = e => {
					let {
						post: t
					} = e;
					return !!t.media && le.has(t.media.type)
				},
				ue = Object(V.t)(),
				me = Object(u.c)({
					isImageGalleriesEnabled: K.D,
					isInImgAltTextVariant: (e, t) => Object(Y.e)(e, t),
					subredditOrProfileDisplayText: (e, t) => Object(Y.k)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(J.bb)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(K.C)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(z.b)(e, t),
					topCommentText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(Q.b)(e, s)
					}
				}),
				he = Object(c.b)(me),
				pe = Object(x.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ge extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && G.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === G.o.EMBED ? e.provider : null;
								this.pauseEmbed(this.iframe, t)
							}
							this.setState(e => e.shouldStop ? null : {
								shouldStop: !0
							})
						}
					}, this.handleVisibilityChange = e => {
						const {
							shouldPause: t
						} = this.state, {
							autoplayPref: s
						} = this.props;
						this.iframe && (t || !s && e.documentInFocus || this.toggleEmbedAutoplay(this.iframe, !e.documentInFocus)), this.setState({
							forcePause: !e.documentInFocus
						})
					}, this.focusContent = () => {
						this.shouldFocusContentDebouncer(!0)
					}, this.loadContent = () => {
						this.setState(e => e.canLoadContent ? null : {
							canLoadContent: !0
						})
					}, this.unmountContent = () => {}, this.contentIsHeavyToMount = () => {
						const {
							media: e
						} = this.props.post;
						return !!e && G.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && G.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === G.o.EMBED ? t.provider : null;
								i && !G.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
							}
							e ? this.setState(e => e.shouldPause || !e.canLoadContent ? {
								canLoadContent: !0,
								shouldPause: !1,
								shouldStop: !1
							} : null) : this.setState(e => e.shouldPause ? null : {
								shouldPause: !0
							})
						}
					}, 250, {
						leading: !0
					}), this.toggleEmbedAutoplay = (e, t) => {
						if (e.contentWindow) {
							const s = t ? G.g.Pause : G.g.Play;
							e.contentWindow.postMessage({
								context: ae,
								method: s
							}, I.a), e.contentWindow.postMessage({
								context: ae,
								method: G.g.Mute
							}, I.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === G.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: G.A.Pause
						}), I.a) : e.contentWindow.postMessage({
							context: ae,
							method: G.g.Pause
						}, I.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === G.o.EMBED ? e.provider : null;
						if (this.iframe && s && !G.s.has(s)) {
							const {
								shouldPause: e
							} = this.state;
							(t || e) && this.toggleEmbedAutoplay(this.iframe, e)
						}
					}, this.onClickRevealBlurred = e => {
						this.props.isListing || !this.shouldBlur() || this.state.isRevealed || (this.setState({
							isRevealed: !0
						}), e.preventDefault(), e.stopPropagation())
					}, this.storeChildRef = e => {
						this.iframe = e
					}, this.updateDimensions = () => {
						this.setState({
							viewportHeight: window.innerHeight,
							viewportWidth: window.innerWidth
						})
					}, this.isSpoiler = () => this.props.post.isSpoiler || !(!this.props.crosspost || !this.props.crosspost.isSpoiler), this.isNSFW = () => this.props.post.isNSFW || !(!this.props.crosspost || !this.props.crosspost.isNSFW), this.state = {
						canLoadContent: e.shouldLoad || !1,
						forcePause: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: G.e,
						viewportWidth: G.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					de(this.props.post) && (this.visibilityChangeSubscriptionId = f.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && ce(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && f.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && ce(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getAltText() {
					const {
						isInImgAltTextVariant: e,
						post: t,
						subredditOrProfileDisplayText: s,
						shouldShowAltText: i,
						topCommentText: a
					} = this.props;
					if (!i) return;
					let n = "";
					return s && (n += s), t.title && (n += "".concat(Y.b).concat(t.title)), e && a && n.length <= Y.c && (n += "".concat(Y.b).concat(a)), e && n.length > Y.a ? Object(v.a)(n, Y.a, h.cb) : n
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(G.j, this.state.viewportHeight),
						s = Math.min(se, 16 * t / 9);
					s === se && (t = 9 * se / 16), e = this.state.viewportWidth >= A.c ? this.state.viewportWidth < P.l ? this.state.viewportWidth - ne - 2 * ie : this.state.viewportWidth - ne - P.e - 2 * ie : this.state.viewportWidth - 2 * ie;
					const i = this.state.viewportHeight - 2 * ie;
					if (s > e) {
						t *= e / s, s = e
					} else if (t > i) {
						const e = i / t;
						t = i, s *= e
					}
					return {
						maxVideoHeight: t,
						maxVideoWidth: s
					}
				}
				getVideoMaxDimensions(e, t) {
					let s = G.j,
						i = G.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = G.t, i = G.u), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
					const {
						availableWidth: s,
						isListing: i,
						post: a
					} = e;
					if (Object(G.F)(a.media)) return {
						source: a.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * ie,
						height: this.state.viewportHeight - 2 * ie
					};
					const n = a.media && a.media.obfuscated || "";
					let o = !a.media || Object(G.J)(a.media) || Object(G.D)(a.media) ? "" : a.media.content,
						[r, d] = !a.media || Object(G.G)(a.media) || Object(G.I)(a.media) || Object(G.D)(a.media) ? [0, 0] : [a.media.height, a.media.width];
					if (s && a.media && Object(G.D)(a.media)) {
						r = Object(H.b)(a.media.mediaMetadata || {}, i ? G.j : G.e, G.p, s) + G.i, d = s
					}
					if (s && a.media && (a.media.type === G.o.IMAGE || a.media.type === G.o.GIFVIDEO)) {
						const e = q.b(s, a.media.resolutions);
						e && (o = e.url, d = e.width, r = e.height)
					} else if (a && a.media && (!e.isListing || e.isExpando) && (a.media.type === G.o.IMAGE || a.media.type === G.o.GIFVIDEO)) {
						let e;
						(e = Object(G.H)(a.media.height, a.media.width) && Object(j.b)(a.media.height) ? q.c(a.media.height, a.media.width, a.media.resolutions) : q.a(a.media.resolutions)) && (o = e.url, d = e.width, r = e.height)
					}
					if (e.isExpando)
						if (d > t.viewportWidth) {
							r *= t.viewportWidth / d, d = t.viewportWidth
						} else if (r > t.viewportHeight) {
						const e = t.viewportHeight / r;
						r = t.viewportHeight, d *= e
					}
					const {
						maxVideoHeight: l,
						maxVideoWidth: c
					} = this.getVideoMaxDimensions(e, t);
					if (a.media && a.media.type === G.o.VIDEO) {
						const t = r / d;
						e.isExpando ? (r = l, d = c) : t > G.c ? (r = l, d = Math.min(Math.max(l / t, G.r), c)) : (r = Math.min(Math.max(c * t, G.q), l), d = c)
					}
					a.media && a.media.type === G.o.EMBED && e.isExpando && a.media.provider !== G.v.Twitter && (r = l, d = c);
					let u = !1;
					if (e.isMiniCard) {
						const e = r / d;
						u = Math.abs(e - G.c) > .01
					}
					return {
						source: o,
						obfuscated: n,
						width: d,
						height: r,
						needsBackgroundBlur: u
					}
				}
				shouldBlur() {
					const {
						isExpando: e,
						isOverlay: t,
						theme: s
					} = this.props, i = this.isNSFW(), a = this.isSpoiler();
					return !(e || this.state.isRevealed || t) && (i && !s.subredditContext.shouldShowNSFWContent || a)
				}
				render() {
					const {
						className: e,
						crosspost: t,
						flairStyleTemplate: s,
						forceAspectRatio: i,
						isCommentsPage: a,
						isExpando: n,
						isListing: o,
						isMediumHeight: r,
						isNotCardView: d,
						isImageGalleriesEnabled: c,
						isTitleOnly: u,
						post: m,
						showCentered: h,
						showFull: p = !1
					} = this.props, {
						canLoadContent: x,
						forcePause: f,
						shouldPause: v,
						shouldStop: O,
						viewportWidth: I
					} = this.state;
					if (!m.media) return null;
					const P = f || v,
						A = O,
						{
							source: V,
							obfuscated: Y,
							height: K,
							width: J,
							needsBackgroundBlur: z
						} = this.getMediaInfo(this.props, this.state),
						q = {
							showCentered: h,
							isListing: o,
							showFull: p,
							height: K,
							width: J
						},
						Q = Object.assign({}, q, {
							className: e,
							forceAspectRatio: i,
							viewportWidth: I
						}),
						X = this.shouldBlur(),
						se = !(!m.isSponsored || !m.source);
					if (Y && X) return l.a.createElement(M.a, $({}, Q, {
						blurSrc: Y
					}), l.a.createElement(oe, {
						isVisible: x
					}, l.a.createElement(j.a, $({}, q, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: o,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!m.media && m.media.type === G.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: m.id,
						shouldBlur: X,
						source: Y,
						outboundUrl: se && m.source.outboundUrl || void 0,
						originalSource: V
					}))));
					if (!m.media) return null;
					switch (m.media.type) {
						case G.o.RTJSON:
							const i = Object(W.a)(m, null);
							if (null === i) return;
							return p || Object(B.a)(m) ? l.a.createElement(l.a.Fragment, null, l.a.createElement(L.a, {
								canLoadContent: x,
								className: e,
								"data-click-id": "text",
								isCommentsPage: a,
								isExpando: n,
								isMediumHeight: r,
								isRichTextTruncated: m.media.isRichtextPreview,
								isTitleOnly: u,
								postId: m.id,
								showFull: p
							}, l.a.createElement(R.a, {
								altText: this.getAltText(),
								flairStyleTemplate: s,
								content: m.isMeta ? Object(U.a)(i, m.id) : i,
								mediaMetadata: m.media.mediaMetadata,
								postId: m.id,
								rtJsonElementProps: pe(this.props),
								renderMediaAsLinks: o
							})), l.a.createElement(w.a, {
								postId: m.id,
								isCommentsPage: !!a
							})) : null;
						case G.o.TEXT:
							if (Object(k.a)(m)) {
								const t = "Text post should not include body content";
								return E.c.withScope(e => {
									e.setExtra("info", {
										post: m,
										isListing: o,
										isCommentsPage: a
									}), E.c.captureMessage(t)
								}), Object(g.a)() && console.log("".concat(m.id, ": ").concat(t)), l.a.createElement(L.a, {
									postId: m.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: a,
									showFull: p
								}, l.a.createElement(D.a, {
									flairStyleTemplate: s,
									html: m.isMeta ? Object(F.a)(m.media.content, m.id, Z.a.hiddenLink) : m.media.content
								}))
							}
							return null;
						case G.o.EMBED:
							return this.props.isMiniCard && m.preview && m.preview.url ? l.a.createElement(M.a, $({}, Q, {
								alwaysWrapMedia: !0
							}), l.a.createElement(oe, {
								isVisible: x
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(j.a, $({}, q, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: o,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: X,
								source: m.preview.url,
								originalSource: m.preview.url
							})), l.a.createElement(_.a, null)))) : G.h.has(m.media.provider) ? m.media.provider === G.v.Twitter ? l.a.createElement(N.a, {
								canLoadContent: x,
								embedBoxChildRef: this.storeChildRef,
								media: m.media,
								mediaContainerProps: Q,
								onIframeLoaded: this.onIframeLoaded,
								source: V,
								title: m.title
							}) : l.a.createElement(M.a, $({}, Q, {
								alwaysWrapMedia: !0,
								height: n ? K : G.j,
								width: n ? J : G.j * (16 / 9)
							}), x && l.a.createElement(C.a, {
								childRef: this.storeChildRef,
								height: n ? K : G.j,
								width: n ? J : void 0,
								isListing: o,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: h,
								showFull: p,
								source: V,
								title: m.title
							})) : l.a.createElement(M.a, $({}, Q, {
								alwaysWrapMedia: !0
							}), x && l.a.createElement(C.a, $({}, q, {
								isResponsive: n || m.media.provider === G.v.IFrameEmbed,
								title: m.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: V,
								fullWidth: m.media.provider === G.v.IFrameEmbed
							})));
						case G.o.GIFVIDEO: {
							let e = K,
								t = J;
							return e > G.j && (t = J / K * (e = G.j)), l.a.createElement(M.a, $({}, Q, {
								blurSrc: z ? m.media.gifBackgroundImage : void 0
							}), l.a.createElement(oe, {
								isVisible: x
							}, l.a.createElement(T.a, $({}, q, {
								isNotCardView: d,
								height: n ? void 0 : e,
								width: n ? void 0 : t,
								postId: m.id,
								shouldLoad: !0,
								shouldPause: P,
								source: V,
								originalSource: m.media.content
							}))))
						}
						case G.o.VIDEO: {
							const e = m.media.posterUrl || m.preview && m.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(M.a, $({}, Q, {
								alwaysWrapMedia: !0
							}), l.a.createElement(oe, {
								isVisible: x
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(j.a, $({}, q, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: o,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: X,
								source: e,
								originalSource: e
							})), l.a.createElement(_.a, null))));
							const s = l.a.createElement(M.a, $({}, Q, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), x && l.a.createElement(te, {
								autoPlay: "boolean" == typeof v ? !v : void 0,
								isExpando: n,
								shouldLoad: !0,
								shouldPause: P,
								shouldStop: A,
								hlsSource: m.media.hlsUrl,
								mpegDashSource: m.media.dashUrl,
								isGif: m.media.isGif,
								scrubberThumbSource: m.media.scrubberThumbSource,
								postId: m.id,
								callToActionSource: m.source || void 0,
								callToActionText: m.callToAction,
								isListing: o,
								posterUrl: m.media.posterUrl,
								muxVideoDuration: void 0,
								muxVideoId: m.id,
								muxVideoIsLive: !1,
								muxVideoTitle: m.title
							}));
							return m.isSponsored ? l.a.createElement(y.a, {
								post: m,
								trackVideo: !0
							}, s) : s
						}
						case G.o.LIVEVIDEO:
							return l.a.createElement(oe, {
								isVisible: x
							}, l.a.createElement(ee, {
								canLoad: x,
								postId: m.id,
								postTitle: m.title,
								shouldPause: P || A,
								url: m.media.hlsUrl
							}));
						case G.o.IMAGE:
							const f = this.state.viewportHeight - 2 * ie,
								O = this.state.viewportWidth - 2 * ie;
							let I = V;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (m.thumbnail && Object(b.a)(m.thumbnail.url) ? I = m.thumbnail.url : m.preview && Object(b.a)(m.preview.url) && (I = m.preview.url)), l.a.createElement(M.a, $({}, Q, {
								blurSrc: z ? I : void 0,
								isExpando: !!n
							}), l.a.createElement(oe, {
								isVisible: x
							}, l.a.createElement(j.a, $({}, q, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: o,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: n ? f : void 0,
								maxWidth: n ? O : void 0,
								postId: m.id,
								shouldBlur: X,
								source: I,
								outboundUrl: se && m.source.outboundUrl || void 0,
								originalSource: m.media.content
							}))));
						case G.o.GALLERY:
							if (!c) return null;
							const Y = Object(H.b)(m.media.mediaMetadata || {}, o ? G.j : G.e, G.p, J),
								ae = Object(H.a)(m.media.gallery);
							return l.a.createElement(M.a, $({}, Q, {
								blurSrc: z ? V : void 0,
								isExpando: !!n,
								maxGalleryHeight: Y + ae
							}), l.a.createElement(oe, {
								isVisible: x
							}, l.a.createElement(S.a, {
								galleryItems: m.media.gallery ? m.media.gallery.items : [],
								mediaMetadata: m.media.mediaMetadata || {},
								imageHeight: Y,
								captionHeight: ae,
								className: this.props.imageBoxClassName,
								isListing: o,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								shouldBlur: X,
								onClickRevealBlurred: this.onClickRevealBlurred
							})));
						default:
							return null
					}
				}
			}
			t.a = ue(he(Object(p.a)(ge)))
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			t.a = Object(n.a)(e => {
				var {
					flairStyleTemplate: t
				} = e, s = c(e, ["flairStyleTemplate"]);
				return a.a.createElement(d.a, l({
					style: {
						color: Object(r.a)(Object(o.a)(Object.assign({
							flairStyleTemplate: t
						}, s)))
					}
				}, s))
			})
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = e => (Object(i.a)(e) || !!e.pollData) && !e.isSpoiler && !e.isNSFW
		},
		"./src/reddit/helpers/mediaGallery/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var i = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(i),
				n = s("./src/reddit/models/Media/index.ts");

			function o(e, t) {
				const s = [...t && t.s ? [t.s] : [], ...t && t.p ? t.p : []].sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const a = s.pop();
				return a || null
			}

			function r(e, t, s, i) {
				const a = d(e);
				if (a.some(e => e.y > t && Object(n.H)(e.y, e.x))) return t;
				const o = l(a);
				let r = o.y;
				return !r || r < s ? s : (i > 0 && (r = i * r / o.x), r > t ? t : r)
			}
			const d = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
				l = e => e.reduce((e, t) => c(e, t), e && e[0] || []),
				c = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				};

			function u(e) {
				return e && e.items && e.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? n.i : 0
			}
			const m = e => {
				const t = a.a.parse(e),
					s = t.path || "",
					i = s.length > 7 ? s.substring(0, 7) + "..." : s;
				return (t.hostname ? t.hostname.replace("www.", "") : "") + i.substring(i.lastIndexOf("/") + 1)
			}
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/models/Media/index.ts"),
				a = s("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === i.o.TEXT && !!t.content || t.type === i.o.RTJSON && !Object(a.G)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRTJ.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var i = s("./src/lib/redditId/index.ts");

			function a(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let a = [];
					try {
						for (const n of t)
							if ("link" === n.e && n.u && n.u.includes("https://www.reddit.com/poll/".concat(s))) i = !0;
							else if (n.c && "string" != typeof n.c) {
							const t = e(n.c, s);
							t.found ? (i = !0, ("par" !== n.e || t.updated.length) && a.push(Object.assign({}, n, {
								c: t.updated
							}))) : a.push(n)
						} else a.push(n)
					} catch (n) {
						i = !1, a = []
					}
					return {
						found: i,
						updated: i ? a : t
					}
				}(e.document, Object(i.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var i = s("./src/lib/redditId/index.ts");

			function a(e, t, s) {
				return e.replace('href="https://www.reddit.com/poll/'.concat(Object(i.c)(t)), 'class="'.concat(s, '" href="https://www.reddit.com/poll/').concat(Object(i.c)(t)))
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea.98dd0b2177f55f9e576c.js.map