// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea.2d3c135fd091eb9721ce.js
// Retrieved at 8/13/2020, 4:40:08 PM by Reddit Dataminer v1.0.0
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
				d = s("./src/lib/combineRefs/index.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				c = () => Object(l.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const h = Object(o.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Fb
				});
				return Object(u.Ec)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Gb
				});
				return Object(u.Ec)(t) ? void 0 : t
			}, (e, t) => e === u.Hb.Enabled && t === u.Hb.Enabled);
			var p = s("./src/config.ts");
			var g = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const b = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				f = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var E;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(E || (E = {}));
			const y = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(f).join("")
			})(E.SHA1, e);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			const w = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				I = Object({
					SENTRY_RELEASE_VERSION: "7de0261-production"
				}),
				j = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: p.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(I.SENTRY_RELEASE_VERSION, " ").concat(p.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: l,
					disableCookies: u,
					envKey: m,
					localStorageSaltKey: p,
					localStorageViewerUserIdKey: f,
					playerName: E,
					playerVersion: I,
					respectDoNotTrack: C,
					saltLength: S,
					saltTimeToLive: L,
					viewerUserIdLength: T
				} = Object.assign(Object.assign({}, j), t);
				class M extends i.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(i.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}, this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
					}
					combineExternalVideoRef(e) {
						return e ? Object(d.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							i = O(t, ["forwardedRef"]);
						return a.a.createElement(e, v({}, i, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await c();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await c();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await c();
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
						const e = this.props.redditUserId || M.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = x(),
							i = "".concat(s).concat(e).concat(t);
						return (await y(i)).substr(0, M.VIEWER_USER_ID_LENGTH)
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
						return Object.assign(Object.assign({
							debug: M.DEBUG,
							disableCookies: M.DISABLE_COOKIES,
							respectDoNotTrack: M.RESPECT_DO_NOT_TRACK
						}, s), {
							data: Object.assign(Object.assign({
								env_key: M.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: M.PLAYER_NAME,
								player_version: M.PLAYER_VERSION
							}, t), {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = M.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = b(M.SALT_LENGTH), Object(r.b)(e, t, M.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign(Object.assign({}, this.getDashInstanceData()), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: i
						} = this.props;
						return {
							video_duration: s ? M.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? M.STREAM_TYPE_LIVE : M.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				M.displayName = w(e), M.ANONYMOUS_USER_ID = s, M.DEBUG = l, M.DISABLE_COOKIES = u, M.DURATION_LIVE = 1 / 0, M.ENV_KEY = m, M.LOCAL_STORAGE_SALT_KEY = p, M.LOCAL_STORAGE_VIEWER_USER_ID_KEY = f, M.PLAYER_NAME = E, M.PLAYER_VERSION = I, M.RESPECT_DO_NOT_TRACK = C, M.SALT_LENGTH = S, M.SALT_TIME_TO_LIVE = L, M.STREAM_TYPE_LIVE = "live", M.STREAM_TYPE_ON_DEMAND = "on-demand", M.VIEWER_USER_ID_LENGTH = T;
				const N = Object(i.forwardRef)((e, t) => a.a.createElement(M, v({}, e, {
						forwardedRef: t
					}))),
					_ = Object(o.c)({
						redditUserId: g.g,
						isMuxEnabled: h
					});
				return Object(n.b)(_, null, null, {
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
				slideImageMainDiv: "_35oEP5zLnhKEbj5BlkTBUA",
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
				emptyCaptionBlock: "cKdLDCF6ney9RBLRzJt8j",
				imageCaption: "_15nNdGlBIgryHV04IfAfpA",
				slideIndicator: "_61i6grM3um1yuw4GrN97P",
				unblurButtonContainer: "XU8P4L1nSifowaG9_gEQu",
				unblurButton: "_2xd9ygloNjk8lC1O8LrxPo",
				tilesWrapper: "bVildkms0x9XcY2qrG0Mr",
				tileImage: "_1ynfiEQPXyJqwL8az8sG71",
				blurredContent: "kYRcqD1CH-tXu0xGsAOLH",
				tilePlaceholder: "Qazqk11mIzZph1VMsNMtk",
				tileIcon: "_3VAoQueUjpnNBtHAZRjo_0"
			}
		},
		"./src/reddit/components/Media/GalleryBox/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/trackers/gallery.ts");
			var d = (e, t, s) => {
					const a = Object(i.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(i.useEffect)(() => {
						if (t) return t.addEventListener("keydown", a), () => {
							t && t.removeEventListener("keydown", a)
						}
					}, [t, a])
				},
				l = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				u = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/Tile/index.tsx"),
				h = s("./src/reddit/actions/media.ts"),
				p = s("./src/reddit/constants/keycodes.ts"),
				g = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/media.ts"),
				f = s("./src/reddit/components/Media/blurredContent.ts"),
				E = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				y = s.n(E);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)({
						[y.a.slideImageMainDiv]: !i
					})
				}, a.a.createElement("img", {
					src: "u" in t ? t.u : t.gif,
					className: y.a.slideImage,
					style: s
				}), i && a.a.createElement("div", {
					className: y.a.seeMore
				}, v._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, w = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: n,
					originalImage: r,
					isListing: d
				} = e, l = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, c = Object(g.c)(d), u = r.y > c && Object(b.J)(r.y, r.x), m = u ? {} : {
					maxHeight: "100%"
				};
				let h;
				return h = i || (u ? r : n), a.a.createElement("li", {
					style: l,
					className: y.a.slide
				}, a.a.createElement("figure", {
					className: Object(o.a)({
						[y.a.tallImage]: u,
						[y.a.commonImage]: !u
					}, y.a.figure)
				}, d ? a.a.createElement(O, {
					displayImage: h,
					style: m,
					showSeeMore: u
				}) : a.a.createElement("a", {
					href: "u" in r ? r.u : r.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(o.a)({
						[y.a.tallImage]: u,
						[y.a.commonImage]: !u
					}, y.a.imageLink)
				}, a.a.createElement(O, {
					displayImage: h,
					style: m,
					showSeeMore: u
				}))))
			}, I = e => a.a.createElement("a", {
				className: Object(o.a)(e.className, y.a.navigationUnderlay, {
					[y.a.hasMoreSlides]: e.hasMoreSlides
				}),
				onClick: t => {
					e.onClick(), t.stopPropagation()
				},
				onMouseDown: t => {
					e.setFocusTo.current && e.setFocusTo.current.focus({
						preventScroll: !0
					}), t.preventDefault()
				},
				title: e.hasMoreSlides ? e.title : void 0
			}, e.hasMoreSlides && a.a.createElement("i", {
				className: Object(o.a)(e.iconClassName, y.a.icon)
			}, a.a.createElement(c.a, {
				className: y.a.iconImage
			}))), j = e => a.a.createElement("div", {
				className: y.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && a.a.createElement("span", {
				className: y.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && a.a.createElement("span", {
				className: y.a.imageUrl
			}, a.a.createElement("a", {
				className: y.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, a.a.createElement("span", {
				className: y.a.urlText
			}, Object(g.e)(e.outboundUrl)), a.a.createElement(u.a, {
				className: y.a.linkIcon
			})))), C = e => a.a.createElement("div", {
				className: y.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && a.a.createElement(m.a, {
				className: y.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides);
			t.a = e => {
				const t = Object(n.c)(),
					{
						captionHeight: s,
						galleryItems: c,
						imageHeight: u,
						isListing: m,
						isTileLayout: E,
						mediaMetadata: v = {},
						postId: O,
						shouldShowTileLayoutOption: S,
						isSponsored: L
					} = e,
					T = Object(n.d)(e => Object(x.a)(e, O)),
					M = T > 0,
					N = T < c.length - 1,
					_ = Object(l.a)(),
					R = Object(i.useCallback)(e => {
						t(Object(h.f)({
							postId: O,
							index: e
						}))
					}, [t, O]),
					D = Object(i.useCallback)(() => {
						t(Object(h.i)({
							postId: O,
							isTileLayout: !E
						}))
					}, [t, O, E]),
					P = Object(i.useCallback)(() => {
						if (!N) return;
						const e = T + 1;
						R(e), _(r.b(O, e)), _(r.d(O, e + 1))
					}, [N, T, R, _, O]),
					A = Object(i.useCallback)(() => {
						if (!M) return;
						const e = T + 1;
						R(T - 1), _(r.a(O, e)), _(r.d(O, e - 1))
					}, [M, T, R, _, O]),
					V = Object(i.useCallback)(() => {
						const e = c[T] && c[T].outboundUrl,
							t = T + 1;
						e && _(r.c(O, e, t))
					}, [_, O, T, c]),
					k = Object(i.useRef)(null),
					B = Object(i.useRef)(null);
				d(p.a.ArrowLeft, k.current, A), d(p.a.ArrowRight, k.current, P);
				const W = c[T] && c[T].caption,
					F = c[T] && c[T].outboundUrl,
					H = ((e, t, s) => {
						const i = Object(g.f)(e),
							a = Object(g.g)(i),
							n = a.x / a.y < 1,
							o = Object(g.h)(e),
							r = Object(g.i)(e || {}, Object(g.c)(s), b.p);
						if (s || r || o || n) return {
							height: t
						};
						const d = Object(b.C)(a.y, a.x);
						return {
							paddingBottom: "".concat(d, "%")
						}
					})(v, u, m);
				return a.a.createElement("div", {
					className: Object(o.a)(y.a.outerContainer),
					ref: k,
					tabIndex: 0
				}, E ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Object(o.a)(y.a.tilesWrapper, {
						[y.a.blurredContent]: e.shouldBlur
					}),
					onClick: e.onClickRevealBlurred
				}, c.map((t, s) => {
					const i = t.mediaId,
						n = v && v[i];
					if (!n || !n.s) return null;
					const o = [...n && n.s ? [n.s] : [], ...n && n.p ? n.p : []],
						r = Object(g.d)(b.z, o);
					if (!r) return null;
					const d = n.s;
					return a.a.createElement("div", {
						style: {
							backgroundImage: "url(".concat("gif" in d ? d.gif : "u" in r && r.u, ")")
						},
						className: y.a.tileImage,
						onClick: e.shouldBlur ? void 0 : e => {
							e.preventDefault(), e.stopPropagation(), D(), R(s)
						},
						key: i
					})
				}), [1, 2, 3].map(e => a.a.createElement("div", {
					key: e,
					className: y.a.tilePlaceholder
				}))), e.shouldBlur && a.a.createElement("div", {
					className: y.a.unblurButtonContainer
				}, a.a.createElement("button", {
					className: y.a.unblurButton
				}, Object(f.a)(!!e.isNSFW, !!e.isSpoiler)))) : a.a.createElement("div", {
					className: y.a.slideshowContainer,
					tabIndex: -1,
					ref: B,
					onClick: e.onClickRevealBlurred,
					style: H
				}, a.a.createElement("div", {
					className: y.a.imagesWrapper
				}, a.a.createElement("ul", {
					className: y.a.slideWrapper
				}, c.map((t, s) => {
					const i = t.mediaId,
						n = v && v[i];
					if (!n || !n.s) return null;
					const o = [...n && n.s ? [n.s] : [], ...n && n.p ? n.p : []],
						r = Object(g.d)(u, o);
					if (!r) return null;
					const d = e.shouldBlur && Object(g.d)(u, n.o || []) || void 0;
					return a.a.createElement(w, {
						slideIndex: s,
						currentIndex: T,
						obfuscatedImage: d,
						optimalImage: r,
						originalImage: n.s,
						isListing: e.isListing,
						key: i
					})
				})), e.shouldBlur && !e.isListing && a.a.createElement("div", {
					className: y.a.unblurButtonContainer
				}, a.a.createElement("button", {
					className: y.a.unblurButton
				}, Object(f.a)(!!e.isNSFW, !!e.isSpoiler))), !e.shouldBlur && a.a.createElement(a.a.Fragment, null, a.a.createElement(I, {
					onClick: A,
					setFocusTo: B,
					hasMoreSlides: M,
					title: "Previous",
					iconClassName: y.a.prevIcon,
					className: y.a.prevButton
				}), a.a.createElement(I, {
					onClick: P,
					setFocusTo: B,
					hasMoreSlides: N,
					title: "Next",
					iconClassName: y.a.nextIcon,
					className: y.a.nextButton
				}))), c.length > 1 ? a.a.createElement(C, {
					currentSlide: T + 1,
					totalSlides: c.length,
					toggleTileLayout: S && D || void 0
				}) : ""), !W && !F || E || L ? !!s && !E && !L && a.a.createElement("div", {
					className: y.a.emptyCaptionBlock,
					style: {
						height: s
					}
				}) : a.a.createElement(j, {
					caption: W,
					onClickEvent: V,
					outboundUrl: F,
					captionHeight: s
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
				onLoadRichTextContentIfNeeded: t => e(Object(l.z)(t))
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
				const y = {
						[m.a.richTextContainerFull]: f,
						[m.a.richTextContainerTitleOnly]: h && !f,
						[m.a.richTextContainer]: !f && !h
					},
					v = {};
				f || (v.maxHeight = "".concat(h ? r.m : l ? r.l : r.k, "px")), d && (v.maxWidth = "".concat(o.d, "px"));
				const O = c && f;
				return a.a.createElement("div", g({
					className: Object(n.a)(y, i),
					style: v
				}, E), s, O && a.a.createElement(p, {
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
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ"
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
				y = s("./src/lib/truncateText/index.ts"),
				v = s("./src/reddit/components/AdViewability/index.tsx"),
				O = s("./src/reddit/components/Governance/Proposal/async.ts"),
				w = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				I = s("./src/reddit/components/Media/constants.ts"),
				j = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				C = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				S = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				L = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				T = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				M = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				N = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				_ = s("./src/reddit/components/PlayButton/index.tsx"),
				R = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				D = s("./src/reddit/components/RichTextJson/index.tsx"),
				P = s("./src/reddit/constants/componentSizes.ts"),
				A = s("./src/reddit/constants/screenWidths.ts"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				B = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				W = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				F = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				H = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				U = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				G = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/selectors/experiments/postSeo.ts"),
				K = s("./src/reddit/selectors/media.ts"),
				z = s("./src/reddit/selectors/postCreations.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				q = s("./src/reddit/selectors/seo/index.ts"),
				Q = s("./src/reddit/components/Media/getResolution.ts"),
				X = s("./src/server/helpers/seoMetadata.tsx"),
				Z = s("./src/reddit/components/Media/index.m.less"),
				$ = s.n(Z);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const te = Object(n.a)({
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
				se = Object(m.a)(w.b, {
					playerName: "Reddit Player"
				}),
				ie = 1200,
				ae = 75,
				ne = "player.js",
				oe = P.r + P.q,
				re = e => e.isVisible ? e.children : l.a.createElement("div", {
					className: $.a.displayNone
				}, e.children),
				de = new Set([G.o.EMBED, G.o.GIFVIDEO, G.o.LIVEVIDEO, G.o.VIDEO]),
				le = e => !!e.media && de.has(e.media.type),
				ce = new Set([G.o.EMBED, G.o.GALLERY, G.o.GIFVIDEO, G.o.IMAGE, G.o.LIVEVIDEO, G.o.VIDEO]),
				ue = e => {
					let {
						post: t
					} = e;
					return !!t.media && ce.has(t.media.type)
				},
				me = Object(V.t)(),
				he = Object(u.c)({
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
						return Object(z.C)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(q.b)(e, t),
					topCommentText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(X.b)(e, s)
					},
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: a
						} = t;
						if (!s) return !1;
						const n = Object(K.b)(e, i.id);
						return !(void 0 !== n || !a) || !!n
					}
				}),
				pe = Object(c.b)(he),
				ge = Object(x.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class be extends l.a.Component {
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
								context: ne,
								method: s
							}, I.a), e.contentWindow.postMessage({
								context: ne,
								method: G.g.Mute
							}, I.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === G.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: G.B.Pause
						}), I.a) : e.contentWindow.postMessage({
							context: ne,
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
						this.props.isListing && !this.props.isGalleryTileLayout || !this.shouldBlur() || this.state.isRevealed || (this.setState({
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
					le(this.props.post) && (this.visibilityChangeSubscriptionId = f.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && ue(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && f.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && ue(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
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
					return s && (n += s), t.title && (n += "".concat(Y.b).concat(t.title)), e && a && n.length <= Y.c && (n += "".concat(Y.b).concat(a)), e && n.length > Y.a ? Object(y.a)(n, Y.a, h.cb) : n
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(G.j, this.state.viewportHeight),
						s = Math.min(ie, 16 * t / 9);
					s === ie && (t = 9 * ie / 16), e = this.state.viewportWidth >= A.c ? this.state.viewportWidth < P.l ? this.state.viewportWidth - oe - 2 * ae : this.state.viewportWidth - oe - P.e - 2 * ae : this.state.viewportWidth - 2 * ae;
					const i = this.state.viewportHeight - 2 * ae;
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
					if (Object(G.H)(a.media)) return {
						source: a.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * ae,
						height: this.state.viewportHeight - 2 * ae
					};
					const n = a.media && a.media.obfuscated || "";
					let o = !a.media || Object(G.L)(a.media) || Object(G.F)(a.media) ? "" : a.media.content,
						[r, d] = !a.media || Object(G.I)(a.media) || Object(G.K)(a.media) || Object(G.F)(a.media) ? [0, 0] : [a.media.height, a.media.width];
					if (s && a.media && Object(G.F)(a.media)) {
						r = Object(W.b)(a.media.mediaMetadata || {}, Object(W.c)(i), G.p, s) + G.i, d = s
					}
					if (s && a.media && (a.media.type === G.o.IMAGE || a.media.type === G.o.GIFVIDEO)) {
						const e = Q.b(s, a.media.resolutions);
						e && (o = e.url, d = e.width, r = e.height)
					} else if (a && a.media && (!e.isListing || e.isExpando) && (a.media.type === G.o.IMAGE || a.media.type === G.o.GIFVIDEO)) {
						let e;
						(e = Object(G.J)(a.media.height, a.media.width) && Object(S.b)(a.media.height) ? Q.c(a.media.height, a.media.width, a.media.resolutions) : Q.a(a.media.resolutions)) && (o = e.url, d = e.width, r = e.height)
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
						isGalleryTileLayout: o,
						isListing: r,
						isMediumHeight: d,
						isNotCardView: c,
						isTitleOnly: u,
						post: m,
						showCentered: h,
						showFull: p = !1
					} = this.props, {
						canLoadContent: x,
						forcePause: f,
						shouldPause: y,
						shouldStop: w,
						viewportWidth: I
					} = this.state;
					if (!m.media) return null;
					const P = f || y,
						A = w,
						{
							source: V,
							obfuscated: Y,
							height: K,
							width: z,
							needsBackgroundBlur: J
						} = this.getMediaInfo(this.props, this.state),
						q = {
							showCentered: h,
							isListing: r,
							showFull: p,
							height: K,
							width: z
						},
						Q = Object.assign(Object.assign({}, q), {
							className: e,
							forceAspectRatio: i,
							viewportWidth: I
						}),
						X = this.shouldBlur(),
						Z = !(!m.isSponsored || !m.source);
					if (Y && X) return l.a.createElement(L.a, ee({}, Q, {
						blurSrc: Y
					}), l.a.createElement(re, {
						isVisible: x
					}, l.a.createElement(S.a, ee({}, q, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: r,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!m.media && m.media.type === G.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: m.id,
						shouldBlur: X,
						source: Y,
						outboundUrl: Z && m.source.outboundUrl || void 0,
						originalSource: V
					}))));
					if (!m.media) return null;
					switch (m.media.type) {
						case G.o.RTJSON:
							const i = Object(B.a)(m, null);
							if (null === i) return;
							return p || Object(k.a)(m) ? l.a.createElement(l.a.Fragment, null, l.a.createElement(T.a, {
								canLoadContent: x,
								className: e,
								"data-click-id": "text",
								isCommentsPage: a,
								isExpando: n,
								isMediumHeight: d,
								isRichTextTruncated: m.media.isRichtextPreview,
								isTitleOnly: u,
								postId: m.id,
								showFull: p
							}, l.a.createElement(D.a, {
								altText: this.getAltText(),
								flairStyleTemplate: s,
								content: m.isMeta ? Object(U.a)(i, m.id) : i,
								mediaMetadata: m.media.mediaMetadata,
								postId: m.id,
								rtJsonElementProps: ge(this.props),
								renderMediaAsLinks: r
							})), l.a.createElement(O.a, {
								postId: m.id,
								isCommentsPage: !!a
							})) : null;
						case G.o.TEXT:
							if (Object(F.a)(m)) {
								const t = "Text post should not include body content";
								return E.c.withScope(e => {
									e.setExtra("info", {
										post: m,
										isListing: r,
										isCommentsPage: a
									}), E.c.captureMessage(t)
								}), Object(g.a)() && console.log("".concat(m.id, ": ").concat(t)), l.a.createElement(T.a, {
									postId: m.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: a,
									showFull: p
								}, l.a.createElement(R.a, {
									flairStyleTemplate: s,
									html: m.isMeta ? Object(H.a)(m.media.content, m.id, $.a.hiddenLink) : m.media.content
								}))
							}
							return null;
						case G.o.EMBED:
							return this.props.isMiniCard && m.preview && m.preview.url ? l.a.createElement(L.a, ee({}, Q, {
								alwaysWrapMedia: !0
							}), l.a.createElement(re, {
								isVisible: x
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(S.a, ee({}, q, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: X,
								source: m.preview.url,
								originalSource: m.preview.url
							})), l.a.createElement(_.a, null)))) : G.h.has(m.media.provider) ? m.media.provider === G.v.Twitter ? l.a.createElement(M.a, {
								canLoadContent: x,
								embedBoxChildRef: this.storeChildRef,
								media: m.media,
								mediaContainerProps: Q,
								onIframeLoaded: this.onIframeLoaded,
								source: V,
								title: m.title
							}) : l.a.createElement(L.a, ee({}, Q, {
								alwaysWrapMedia: !0,
								height: n ? K : G.j,
								width: n ? z : G.j * (16 / 9)
							}), x && l.a.createElement(j.a, {
								childRef: this.storeChildRef,
								height: n ? K : G.j,
								width: n ? z : void 0,
								isListing: r,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: h,
								showFull: p,
								source: V,
								title: m.title
							})) : l.a.createElement(L.a, ee({}, Q, {
								alwaysWrapMedia: !0
							}), x && l.a.createElement(j.a, ee({}, q, {
								isResponsive: n || m.media.provider === G.v.IFrameEmbed,
								title: m.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: V,
								fullWidth: m.media.provider === G.v.IFrameEmbed
							})));
						case G.o.GIFVIDEO: {
							let e = K,
								t = z;
							return e > G.j && (t = z / K * (e = G.j)), l.a.createElement(L.a, ee({}, Q, {
								blurSrc: J ? m.media.gifBackgroundImage : void 0
							}), l.a.createElement(re, {
								isVisible: x
							}, l.a.createElement(N.a, ee({}, q, {
								isNotCardView: c,
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
							if (this.props.isMiniCard && e) return l.a.createElement(L.a, ee({}, Q, {
								alwaysWrapMedia: !0
							}), l.a.createElement(re, {
								isVisible: x
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(S.a, ee({}, q, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: X,
								source: e,
								originalSource: e
							})), l.a.createElement(_.a, null))));
							const s = l.a.createElement(L.a, ee({}, Q, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), x && l.a.createElement(se, {
								autoPlay: "boolean" == typeof y ? !y : void 0,
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
								isListing: r,
								posterUrl: m.media.posterUrl,
								muxVideoDuration: void 0,
								muxVideoId: m.id,
								muxVideoIsLive: !1,
								muxVideoTitle: m.title
							}));
							return m.isSponsored ? l.a.createElement(v.a, {
								post: m,
								trackVideo: !0
							}, s) : s
						}
						case G.o.LIVEVIDEO:
							return l.a.createElement(re, {
								isVisible: x
							}, l.a.createElement(te, {
								canLoad: x,
								postId: m.id,
								postTitle: m.title,
								shouldPause: P || A,
								url: m.media.hlsUrl
							}));
						case G.o.IMAGE:
							const f = this.state.viewportHeight - 2 * ae,
								w = this.state.viewportWidth - 2 * ae;
							let I = V;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (m.thumbnail && Object(b.a)(m.thumbnail.url) ? I = m.thumbnail.url : m.preview && Object(b.a)(m.preview.url) && (I = m.preview.url)), l.a.createElement(L.a, ee({}, Q, {
								blurSrc: J ? I : void 0,
								isExpando: !!n
							}), l.a.createElement(re, {
								isVisible: x
							}, l.a.createElement(S.a, ee({}, q, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: r,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: n ? f : void 0,
								maxWidth: n ? w : void 0,
								postId: m.id,
								shouldBlur: X,
								source: I,
								outboundUrl: Z && m.source.outboundUrl || void 0,
								isSponsored: m.isSponsored,
								originalSource: m.media.content
							}))));
						case G.o.GALLERY:
							const Y = Object(W.b)(m.media.mediaMetadata || {}, Object(W.c)(r), G.p, z),
								ie = Object(W.a)(m.media.gallery, m.isSponsored);
							return l.a.createElement(L.a, ee({}, Q, {
								blurSrc: J ? V : void 0,
								isExpando: !!n,
								maxGalleryHeight: Y + ie,
								className: $.a.galleryMediaContainer,
								isGalleryTileLayout: o
							}), l.a.createElement(re, {
								isVisible: x
							}, l.a.createElement(C.a, {
								postId: m.id,
								galleryItems: m.media.gallery ? m.media.gallery.items : [],
								mediaMetadata: m.media.mediaMetadata || {},
								imageHeight: Y,
								captionHeight: ie,
								isSponsored: m.isSponsored,
								className: this.props.imageBoxClassName,
								isListing: r,
								isNSFW: this.isNSFW(),
								isSpoiler: this.isSpoiler(),
								shouldBlur: X,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!o,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption
							})));
						default:
							return null
					}
				}
			}
			t.a = me(pe(Object(p.a)(be)))
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
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "h", (function() {
				return r
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "e", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var i = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(i),
				n = s("./src/reddit/models/Media/index.ts");

			function o(e, t) {
				const s = t.sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const a = s.pop();
				return a || null
			}

			function r(e) {
				const t = u(e),
					s = t.every(e => e.y > e.x),
					i = t.every(e => e.x > e.y);
				return !s && !i
			}

			function d(e, t, s) {
				const i = u(e);
				if (p(i, t)) return !0;
				const a = m(i).y;
				return !a || a < s
			}
			const l = e => e ? n.j : n.e;

			function c(e, t, s, i) {
				const a = u(e);
				if (p(a, t)) return t;
				const n = m(a);
				let o = n.y;
				return !o || o < s ? s : (i > 0 && (o = i * o / n.x), o > t ? t : o)
			}
			const u = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
				m = e => e.reduce((e, t) => h(e, t), e && e[0] || []),
				h = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				p = (e, t) => e.some(e => e.y > t && Object(n.J)(e.y, e.x));

			function g(e, t) {
				return e && e.items && !t && e.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? n.i : 0
			}
			const b = e => {
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
							t.found ? (i = !0, ("par" !== n.e || t.updated.length) && a.push(Object.assign(Object.assign({}, n), {
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
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), a.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), a.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), a.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), a.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea.2d3c135fd091eb9721ce.js.map