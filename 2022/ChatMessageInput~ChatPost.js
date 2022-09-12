// https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost.99343da9a83706b15bb4.js
// Retrieved at 9/12/2022, 11:30:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~ChatPost"], {
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, a) {
					n = s ? (s = !1, e) : t(n, e, r, a)
				})), n
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				a = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? s : o,
					d = arguments.length < 3;
				return c(e, a(t, 4), n, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				r = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/lodash/memoize.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = n("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				p = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = n.n(p);
			const x = l.a.div("Userpic", b.a);
			t.a = a()(e => {
				let {
					defaultImage: t,
					userId: n
				} = e;
				const r = Object(c.e)(h.s),
					{
						processingAvatarImageUrl: a
					} = s.a;
				if (r) return t ? i.a.createElement("img", {
					className: b.a.NewUserpic,
					src: t,
					alt: "user icon"
				}) : i.a.createElement(m.a, {
					className: b.a.NewUserpic,
					userId: n
				});
				const o = (e => e.replace(d.Lb.Account + "_", ""))(n),
					{
						avatar: l,
						color: p
					} = (e => {
						const t = u.length,
							n = parseInt(e, 36),
							s = n % 20 + 1,
							r = Math.floor(n / 20) % t;
						return {
							avatar: ("0" + s).slice(-2),
							color: u[r]
						}
					})(o),
					f = `${a}/avatar_default_${l}_${p}.png`;
				return i.a.createElement(x, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${f})`,
						backgroundColor: `#${p}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				roundedIcon: "qzfpAikXRAwHLMGlL6_5m",
				NewUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				newUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				d = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				u = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				h = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = n.n(h);
			const b = Object(o.c)({
					account: e => e.user.account
				}),
				x = Object(a.b)(b);
			t.a = i.a.wrapped(x(e => {
				let {
					account: t,
					className: n,
					height: s,
					icon: a,
					isLivestreaming: o,
					isNSFW: i,
					trash: h,
					userId: b,
					width: x
				} = e;
				const f = o ? 36 : 20,
					g = b || `${null==t?void 0:t.id}`,
					E = {
						height: s || f,
						width: x || f,
						minWidth: x || f
					};
				if (h) return r.a.createElement("div", {
					className: n,
					style: E
				}, r.a.createElement(m.a, {
					className: p.a.TrashIcon
				}));
				const C = t && t.id === b ? t.accountIcon : i ? l.a : null != a ? a : void 0;
				return Object(u.a)(C) ? r.a.createElement("div", {
					className: n,
					style: E
				}, r.a.createElement(d.a, {
					headshot: C
				})) : r.a.createElement("div", {
					className: n,
					style: E
				}, r.a.createElement(c.a, {
					userId: g,
					defaultImage: C
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less": function(e, t, n) {
			e.exports = {
				ChatIcon: "Y4elHycQm7QR_6fCrvjzq",
				chatIcon: "Y4elHycQm7QR_6fCrvjzq",
				TrashIcon: "_29fCuEaNwXf3oWvxop579Y",
				trashIcon: "_29fCuEaNwXf3oWvxop579Y",
				DeleteText: "_2Fg7fot2bTwH4aeQhehkz9",
				deleteText: "_2Fg7fot2bTwH4aeQhehkz9",
				isV2Enabled: "_2XcjXctAHWpWD1W3AQ80Ar",
				Livestreaming: "JQ7EdZSNNPa2c2kigYJJ3",
				livestreaming: "JQ7EdZSNNPa2c2kigYJJ3"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				d = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less"),
				l = n.n(d);
			const u = e => {
				let {
					className: t,
					isLivestreaming: n,
					isV2Enabled: r
				} = e;
				return a.a.createElement("div", {
					className: t
				}, r ? a.a.createElement(c.a, {
					className: l.a.TrashIcon
				}) : a.a.createElement(i.a, {
					className: l.a.ChatIcon,
					trash: !0
				}), a.a.createElement("span", {
					className: Object(o.a)(l.a.DeleteText, {
						[l.a.Livestreaming]: n,
						[l.a.isV2Enabled]: r
					})
				}, s.fbt._("deleted", null, {
					hk: "3NxJy9"
				})))
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2j45BC7mJt89dJHJgKedOn",
				isDeleted: "_3a9maZzcpVpY-ObbePJy1c",
				livestreaming: "_3v5YkbC6dJqCrkeW_EnGXt",
				userIcon: "flM3MSxMp9wK1LunC6g04",
				closeIcon: "p6gNeYY8JA6w2d-pJHmPf",
				author: "_2gJ_h34BkafTE6g1uvPgED",
				commentBody: "_3fPHqFYSkWC7g1-Sps2hXc",
				messageComposer: "bboHgGXDhe78fy-QMNllC"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/chat/helpers/dom.ts"),
				d = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/components/RichTextJson/elements.tsx"),
				m = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				h = n("./src/reddit/models/RichTextJson/index.ts");
			const p = e => a.a.createElement(u.f, null, e),
				b = e => {
					const t = [],
						n = e.c || [],
						s = n.length;
					for (let r = 0; r < s; r++) {
						const e = n[r];
						t.push(e.e === h.w ? e.t : Object(m.e)(e, {}, r))
					}
					return a.a.createElement(a.a.Fragment, null, t)
				},
				x = e => e.c && e.c.length ? a.a.createElement(a.a.Fragment, null, Object(m.i)(e.c, null, {})) : a.a.createElement("br", null);
			var f = n("./src/reddit/constants/elementClassNames.ts");
			const g = {
				[h.a]: "<animated image>",
				[h.b]: "<quote>",
				[h.c]: "<code block>",
				[h.h]: "<embed>",
				[h.m]: "<image>",
				[h.p]: "<list>",
				[h.z]: "<table>",
				[h.D]: "<video>"
			};
			var E = e => {
					let {
						className: t,
						content: n
					} = e;
					const s = n.document,
						r = [],
						o = Object(l.c)(s),
						c = Object(l.d)(s);
					if (-1 !== o)
						for (let a = o; a <= c; a++) {
							const e = s[a],
								t = e && g[e.e];
							switch (e.e) {
								case h.l:
									break;
								case h.b:
								case h.c:
								case h.p:
								case h.z:
								case h.m:
								case h.a:
								case h.D:
								case h.h:
									r.push(p(t));
									break;
								case h.k:
									r.push(b(e));
									break;
								case h.u:
									r.push(x(e))
							}
						}
					return a.a.createElement("div", {
						className: Object(i.a)(f.j, t)
					}, r)
				},
				C = n("./src/reddit/components/UserIcon/index.tsx"),
				_ = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				v = n("./src/reddit/icons/svgs/CloseV2/index.tsx"),
				j = n("./src/reddit/selectors/comments.ts"),
				O = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				w = n.n(y);
			const I = e => {
				let {
					commentId: t,
					className: n,
					isLivestreaming: r,
					isV2Enabled: l = !1,
					isMessageComposer: u = !1,
					onReplyClick: m
				} = e;
				const h = Object(o.e)(e => Object(O.b)(e, {
						commentId: t
					})),
					p = Object(o.e)(e => Object(j.m)(e, {
						commentId: t
					}));
				return h ? h.isDeleted ? a.a.createElement("div", {
					className: Object(i.a)(w.a.container, w.a.isDeleted, n, {
						[w.a.livestreaming]: r
					})
				}, a.a.createElement(d.a, {
					isV2Enabled: l
				})) : a.a.createElement("a", {
					className: Object(i.a)(w.a.container, n, {
						[w.a.messageComposer]: u,
						[w.a.livestreaming]: r
					}),
					href: p,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(c.a)(() => m(h.id))
				}, a.a.createElement(C.a, {
					className: Object(i.a)(w.a.userIcon),
					iconUrl: h.profileImage || h.authorIconImage,
					userName: h.author,
					isNSFW: Boolean(h.profileOver18 || h.authorIconIsNSFW)
				}), a.a.createElement("span", {
					className: w.a.author
				}, u ? s.fbt._("Replying to u/{username}:", [s.fbt._param("username", h.author)], {
					hk: "15ByZb"
				}) : h.author), a.a.createElement(E, {
					className: w.a.commentBody,
					content: Object(_.a)(h)
				}), u && a.a.createElement(v.a, {
					className: w.a.closeIcon
				})) : null
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					style: n = {},
					userId: r
				} = e;
				const {
					processingAvatarImageUrl: i
				} = s.a, d = `url(${i}/defaults/v2/avatar_default_${(e=>{let t=0;for(const n of e)t+=n.charCodeAt();return t%8})(r)}.png)`;
				return a.a.createElement("div", {
					className: Object(o.a)(c.a.avatar, t),
					style: {
						...n,
						backgroundImage: d
					}
				})
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/Media/index.m.less"),
				i = n.n(o);
			const c = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return a.a.createElement("div", {
						className: i.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: i.a.unblurButton
					}, c(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = n.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(a.b)(() => Object(o.c)({
					isNightmodeOn: m.db
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, p.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/components/Media/BlurredContent.tsx"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				E = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				C = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				w = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				I = n.n(w);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => e > 2 * C.e,
				L = e => a.a.createElement("img", {
					alt: e.altText || s.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[I.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				T = e => {
					const t = Object(d.a)(I.a.image, b.g, e.className, {
							[I.a.mShowCentered]: e.showCentered,
							[I.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${C.j}px`), e.isListing || e.isTall && k(e.height) || (n.maxHeight = `${C.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const o = Object(r.useRef)(null),
						[i, c] = Object(r.useState)(!1),
						l = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!i && t && c(!0)
							})
						}, [i]),
						u = Object(r.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(E.a)(o, l, u.current);
					const {
						width: m,
						height: h
					} = e;
					let p = 240;
					if (m / h > 1)
						if (m < 240) p = h;
						else {
							(p = h * (240 / m)) < 20 && (p = 20)
						}
					else p = Math.min(p, h);
					const x = Object(r.useRef)({
						height: p
					});
					return e.renderSmallMedia ? a.a.createElement("div", {
						ref: o,
						style: x.current
					}, i ? a.a.createElement(L, N({}, e, {
						className: t
					})) : a.a.createElement("noscript", null, a.a.createElement(L, N({}, e, {
						className: t
					})))) : a.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(C.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${C.j}px`, e.shouldBlur && (t.maxWidth = Object(C.L)(e.height, e.width) ? `${C.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), a.a.createElement("div", {
						className: Object(d.a)(I.a.container, e.className, {
							[I.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				M = Object(o.b)(() => Object(c.a)(_.F, j.jb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(_.b)(e, s) : null
				}, v.d, _.G, (e, t, n, s, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: r
				})));
			t.a = M(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? a.a.createElement("a", {
					"data-adclicklocation": y.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(f.a)(e.post, e.pageType)
					}
				}, D(e)) : e.isListing && e.postPermalink ? a.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, D(e)) : D(e)
			});
			const B = (e, t) => a.a.createElement(T, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[O.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				D = e => {
					let {
						onClick: t,
						...n
					} = e;
					const r = Object(C.L)(n.height, n.width),
						o = k(n.height) && r;
					return a.a.createElement(S, N({}, n, {
						className: `${r?`${O.a} `:""}${n.className||""}`
					}), n.isListing ? a.a.createElement("div", {
						className: n.contentImageClassName
					}, B(r, n)) : a.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: I.a.imageLink
					}, B(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && a.a.createElement(h.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > C.j && Object(C.L)(n.height, n.width) && a.a.createElement("div", {
						className: I.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && a.a.createElement(p.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
				i = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(a.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(a.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts"),
				E = n("./src/lib/hooks/usePrevious.ts");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function _(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: r,
					shouldLoad: i,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const h = Object(a.useRef)(),
					p = Object(a.useRef)(),
					b = Object(E.a)(c);

				function _(e) {
					if (e) {
						const e = null === (t = null == p ? void 0 : p.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == p ? void 0 : p.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(a.useEffect)(() => {
					if (_(!c && (t || s)), p.current && r) return h.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							a = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", a), e.addEventListener("playing", a);
						let o = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(i = c);
							if (e.paused || e.seeking || !n) return void(i = c);
							const r = o;
							4 === e.readyState ? o = !1 : !o && c >= i && c < i + f ? o = !0 : o && c >= i && c > i + f && (o = !1), i = c, r !== o && t(o)
						}, x);
						return () => {
							clearInterval(d), e.removeEventListener("playing", a), e.removeEventListener("play", a), e.removeEventListener("loadeddata", r)
						}
					}(p.current, r), () => {
						h.current && h.current()
					}
				}, []), Object(a.useEffect)(() => {
					b !== c && _(!c && (t || s))
				}, [b, c, t, s]), o.a.createElement("video", C({}, m, {
					ref: e => p.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(g.a)(u || "")
				}))
			}
			var v = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				j = n.n(v);
			const O = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function y(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: a,
					started: c
				} = Object(i.e)(t => O(t, e)), {
					postId: p,
					shouldLoad: b,
					source: x,
					height: f,
					isNotCardView: g,
					showFull: E,
					shouldPause: C,
					width: v,
					isListing: y,
					className: w,
					showCentered: I,
					originalSource: N,
					isPromoted: k
				} = e, L = t && !(k && Object(d.hasAcceptableAds)()), T = Object(i.d)();

				function S(e) {
					T(e ? Object(u.r)(p) : Object(u.E)(p))
				}

				function M() {
					return T(Object(u.z)({
						postId: p
					}))
				}
				const B = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && T(Object(u.s)(p))
				}, 200);

				function D(e) {
					e.persist(), B(e)
				}

				function R(e) {
					var t;
					(a || P(e), c) || (t = e.timeStamp, T(Object(u.A)(p, t)))
				}

				function H(e) {
					T(Object(u.q)(p, e.timeStamp))
				}

				function P(e) {
					! function(e) {
						T(Object(u.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function F(e) {
					s || R(e), a || P(e), T(Object(u.C)(p))
				}

				function A() {
					const e = {};
					return I && (e.margin = "0 auto"), y || (e.maxHeight = `${h.e}px`), o.a.createElement(_, {
						autoplay: L,
						className: Object(l.a)(m.a, j.a.styledVideo),
						height: f,
						isListing: y,
						isNotCardView: g,
						key: p,
						loop: !0,
						onBufferingChange: S,
						onLoadStart: H,
						onLoadedData: R,
						onLoadedMetadata: P,
						onPause: M,
						onPlaying: F,
						onTimeUpdate: D,
						shouldLoad: b,
						shouldPause: C,
						showCentered: I,
						showFull: E,
						source: x,
						style: e,
						width: v
					})
				}
				return y ? A() : o.a.createElement("div", {
					className: Object(l.a)(j.a.container, w, {
						[j.a.centered]: I
					})
				}, o.a.createElement("a", {
					href: N,
					target: "_blank",
					rel: "noopener noreferrer"
				}, A()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
				b = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				E = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return a.a.createElement(g, h({}, s, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				C = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class _ extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: n
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == n || n(e))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return a.a.createElement(E, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, a.a.createElement(x, null, a.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), a.a.createElement(C, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: p,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = _
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "w", (function() {
				return M
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", i.a), c.a.div("H2", i.a), c.a.div("H3", i.a), c.a.div("H4", i.a), c.a.div("H5", i.a), c.a.div("H6", i.a)],
				u = c.a.hr("Hr", i.a),
				m = c.a.code("M", i.a),
				h = c.a.pre("Pre", i.a),
				p = c.a.blockquote("Blockquote", i.a),
				b = c.a.p("P", i.a),
				x = c.a.li("Li", i.a),
				f = c.a.ul("Ul", i.a),
				g = c.a.ol("Ol", i.a),
				E = c.a.strong("B", i.a),
				C = c.a.em("I", i.a),
				_ = c.a.span("U", i.a),
				v = e => r.a.createElement("del", e),
				j = c.a.sub("Sub", i.a),
				O = c.a.sup("Sup", i.a),
				y = c.a.table("Table", i.a),
				w = c.a.tr("Tr", i.a),
				I = c.a.td("Tdl", i.a),
				N = c.a.td("Tdc", i.a),
				k = c.a.td("Tdr", i.a),
				L = c.a.th("Thl", i.a),
				T = c.a.th("Thc", i.a),
				S = (c.a.th("Thr", i.a), c.a.wrapped(e => r.a.createElement(a.b, e), "A", i.a)),
				M = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/components/RichTextJson/media.tsx"),
				b = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				f = n.n(x);
			const g = n("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				E = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return i.a.createElement(g, s)
				}),
				C = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				_ = e => a()(e, C),
				v = e => e.findIndex(C),
				j = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: a,
						isNsfwBlockingModalEligible: o,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: x,
						renderMediaAsLinks: C,
						rtJsonElementProps: j,
						useExplicitTextColor: O,
						shouldBlur: y,
						onClickRevealSpoilerText: w,
						mediaProps: I
					} = e, N = s.document, k = [], L = e.mediaMetadata || null, T = v(N), S = _(N);
					if (y && !r && !o) return i.a.createElement(g, {
						className: Object(c.a)(m.j, n)
					}, i.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!a, !!d))));
					if (-1 !== T)
						for (let i = T; i <= S; i++) {
							const e = N[i];
							switch (e.e) {
								case h.k:
									k.push(b.c(e, j, i));
									break;
								case h.l:
									k.push(b.d(i));
									break;
								case h.b:
									k.push(b.a(e, L, j, i));
									break;
								case h.c:
									k.push(b.b(e, i));
									break;
								case h.p:
									k.push(b.f(e, L, j, i, w));
									break;
								case h.z:
									k.push(b.h(e, L, j, i, w));
									break;
								case h.u:
									k.push(b.g(e, L, j, i, w));
									break;
								case h.h:
									k.push(Object(p.a)(e, i));
									break;
								case h.m:
								case h.a:
								case h.D:
									k.push(...Object(p.b)(e, i, j, L, C, x, t, I))
							}
						}
					return O ? i.a.createElement(g, {
						className: Object(c.a)(m.j, n)
					}, k) : i.a.createElement(E, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, k)
				};
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => s.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return j(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return M
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/RichTextJson/index.ts");
			var g = e => a.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, a.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), a.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), a.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), a.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), a.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), a.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				E = n("./src/reddit/components/RichTextJson/elements.tsx"),
				C = n("./src/reddit/components/RichTextJson/media.m.less"),
				_ = n.n(C),
				v = n("./src/lib/lessComponent.tsx"),
				j = n("./src/reddit/helpers/media/index.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				w = v.a.wrapped(E.a, "A", _.a),
				I = v.a.wrapped(l.a, "ImageBox", _.a),
				N = v.a.wrapped(e => a.a.createElement("p", e), "Caption", _.a),
				k = v.a.div("Placeholder", _.a),
				L = v.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: i,
						onReload: c,
						...d
					} = e;
					const l = n === f.D ? s.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : s.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						c && setTimeout(() => {
							m(!0)
						}, 1500)
					}), a.a.createElement(k, O({
						className: Object(o.a)(t, {
							[_.a.renderSmallMedia]: i,
							[_.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && a.a.createElement(h.t, {
						priority: h.c.Plain,
						className: _.a.ModalTopicsErrorButton,
						Icon: Object(x.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", _.a),
				T = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return a.a.createElement("div", {
						className: _.a.MediaWrapper
					}, a.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, a.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: r,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				S = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === f.s ? r = n.s.u : n.e === f.r ? r = n.s.gif : n.e === f.t && (r = (e => {
						const t = y.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? a.a.createElement(w, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				M = (e, t, n, s, r, i, d, l) => {
					const h = f.E(s, e.id);
					if (r) return [S(e, t, h)];
					const x = [];
					return !h || h.e === f.s && null === h.s.x && null === h.s.y ? x.push(((e, t, n, s) => a.a.createElement(L, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : h.e === f.s ? x.push(((e, t, n, s, r) => {
						let {
							id: i,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m
						} = r || {};
						let h = c;
						return m && (h = Object(j.i)(240, 20, c, d)), a.a.createElement("div", {
							className: Object(o.a)(_.a.MediaWrapper, {
								[_.a.mHasCaption]: n,
								[_.a.hasSmallMedia]: m
							})
						}, a.a.createElement(u.a, {
							height: h.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: h.x
						}, a.a.createElement(I, {
							altText: s,
							originalSource: h.u,
							postId: i,
							source: h.u,
							height: h.y,
							width: h.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m
						})))
					})(h, t, !!e.c, d, l)) : h.e === f.r ? x.push(((e, t, n, s) => {
						let {
							id: r,
							ext: i,
							s: c
						} = e;
						if (Object(b.g)(r)) {
							const e = s.renderingObjectInfo,
								d = !!e && Object(p.b)(e),
								l = i || Object(b.f)(r);
							return a.a.createElement("div", {
								className: Object(o.a)({
									[_.a.MediaWrapper]: !d,
									[_.a.CommentGifWrapper]: d,
									[_.a.mHasCaption]: n
								})
							}, a.a.createElement(w, {
								href: l,
								key: t,
								target: "_blank"
							}, c.mp4 ? a.a.createElement("video", {
								className: _.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, a.a.createElement("source", {
								src: c.mp4
							})) : l), a.a.createElement(g, {
								className: _.a.GiphyLogo
							}))
						}
						return a.a.createElement("div", {
							className: Object(o.a)(_.a.MediaWrapper, {
								[_.a.mHasCaption]: n
							})
						}, a.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, a.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: r,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(h, t, !!e.c, n)) : h.e === f.t && x.push(((e, t, n, s) => {
						let {
							hlsUrl: r,
							dashUrl: i,
							x: d,
							y: l,
							isGif: m
						} = e;
						return a.a.createElement("div", {
							className: Object(o.a)(_.a.MediaWrapper, {
								[_.a.mHasCaption]: n
							})
						}, a.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, a.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: i,
							postId: s,
							isGif: m
						})))
					})(h, t, !!e.c, i)), e.c && x.push(((e, t) => a.a.createElement(N, {
						key: t
					}, e))(e.c, `caption${t}`)), x
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return U
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var x = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(f);
			const E = 1e3,
				C = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, E)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, C)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.ib(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === h.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === h.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const a = this.state.tooltipOpen ? l()() : void 0;
					return r ? i.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: a,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: a,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var j = Object(u.c)(v),
				O = n("./src/reddit/components/RichTextJson/media.tsx"),
				y = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				w = n("./src/reddit/components/SubredditMention/index.tsx"),
				I = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				N = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/helpers/isPost.ts"),
				L = n("./src/reddit/helpers/richTextJson/index.ts"),
				T = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const S = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						a = [],
						o = s.length;
					for (let i = 0; i < o; i++) {
						const e = s[i];
						a.push(e.e === h.w ? e.t : U(e, t, i))
					}
					const d = c.x[r - 1];
					return i.a.createElement(d, {
						key: n
					}, a)
				},
				M = e => i.a.createElement(c.e, {
					key: e
				}),
				B = (e, t, n, s, r) => {
					const a = e.c;
					if (!a) return;
					const o = a.length,
						d = [];
					for (let i = 0; i < o; i++) d.push(H(a[i], t, n, i, r));
					return i.a.createElement(c.c, {
						key: s
					}, d)
				},
				D = (e, t) => {
					const n = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				R = (e, t, n, s, r) => {
					const a = e.c,
						o = [],
						d = a.length;
					for (let u = 0; u < d; u++) {
						const e = a[u].c;
						e && e.length && o.push(i.a.createElement(c.g, {
							key: u
						}, e.map((e, s) => H(e, t, n, s, r))))
					}
					const l = e.o ? c.i : c.v;
					return i.a.createElement(l, {
						key: s
					}, o)
				},
				H = (e, t, n, s, r) => {
					switch (e.e) {
						case h.b:
							return B(e, t, n, s, r);
						case h.c:
							return D(e, s);
						case h.k:
							return S(e, n, s);
						case h.l:
							return M(s);
						case h.p:
							return R(e, t, n, s, r);
						case h.u:
							return F(e, t, n, s, r);
						case h.z:
							return P(e, t, n, s, r)
					}
				},
				P = (e, t, n, s, r) => {
					const a = e.c,
						o = e.h,
						d = a.length,
						l = o.length,
						u = [],
						m = [],
						h = [];
					for (let c = 0; c < l; c++) {
						const e = o[c],
							{
								H: s,
								D: a
							} = Y(e.a),
							{
								c: d = []
							} = e;
						u.push(i.a.createElement(s, {
							key: c
						}, A(d, t, n, r))), h[c] = a
					}
					for (let p = 0; p < d; p++) {
						const e = a[p],
							s = e.length,
							o = [];
						for (let a = 0; a < s; a++) {
							const s = h[a],
								{
									c = []
								} = e[a];
							o.push(i.a.createElement(s, {
								key: a
							}, A(c, t, n, r)))
						}
						m.push(i.a.createElement(c.t, {
							key: p
						}, o))
					}
					return i.a.createElement(c.n, {
						key: s
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, u)), i.a.createElement("tbody", null, m))
				},
				F = (e, t, n, s, r) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(s);
					const a = e.c[0];
					return a.e !== h.m && a.e !== h.a || !Object(L.g)(a.id) ? i.a.createElement(c.j, {
						key: s
					}, A(e.c, t, n, r)) : Object(O.b)(a, s, n, t)
				},
				A = (e, t, n, s) => {
					const r = [],
						a = e.length;
					for (let o = 0; o < a; o++) {
						const a = e[o];
						if (a.e === h.A) r.push(V(a, o));
						else if (a.e === h.x) r.push(i.a.createElement(y.a, {
							key: o,
							onClickReveal: s
						}, A(a.c, t, n, s)));
						else if (a.e === h.n) r.push(i.a.createElement("br", {
							key: o
						}));
						else if (a.e === h.m || a.e === h.a) {
							if (a.id.startsWith("emote|")) {
								const e = h.E(t, a.id);
								e && r.push(i.a.createElement(j, {
									key: o,
									node: a,
									media: e
								}))
							}
						} else r.push(U(a, n, o))
					}
					return r
				},
				U = (e, t, n) => {
					switch (e.e) {
						case h.o:
							const s = V({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(I.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, a;
							const o = Object(T.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(k.b)(d) && (r = d.postId), d && Object(N.b)(d) && (a = d.id, r = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: r,
								commentId: a
							}, s);
						case h.y:
							return i.a.createElement(w.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case h.B:
						case h.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case h.g:
						case h.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				V = (e, t) => {
					const {
						f: n,
						t: r
					} = e, a = [];
					if (!n) return W(0, r, t);
					const o = Object(s.a)(r);
					let i = 0,
						c = 0;
					const d = n.length;
					for (; i < d; i++) {
						const [e, t, s] = n[i], d = t + s, l = o[t], u = o[d] - l;
						l > c && a.push(W(0, r.substr(c, l - c), `between${i}`)), a.push(W(e, r.substr(l, u), i)), c = l + u
					}
					return c < r.length && a.push(W(0, r.substr(c), `remaining${i}`)), a
				},
				J = {
					[h.j.monospace]: c.h,
					[h.j.bold]: c.b,
					[h.j.italic]: c.f,
					[h.j.underline]: c.u,
					[h.j.strikethrough]: c.d,
					[h.j.subscript]: c.l,
					[h.j.superscript]: c.m
				},
				W = (e, t, n) => {
					let s = t;
					return s = a()(J, (t, s, r) => e & parseInt(r, 10) ? i.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				Y = e => {
					switch (e) {
						case h.f:
							return {
								H: c.r, D: c.q
							};
						case h.d:
							return {
								H: c.r, D: c.o
							};
						case h.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = a.a.wrapped(o.b, "SubredditIcon", d.a),
				u = a.a.wrapped(e => r.a.createElement(i.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var h = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				x = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(p.c)(g),
				C = Object(o.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				_ = Object(a.b)(C),
				v = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: a,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return r.a.createElement(E, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (a) {
						case b.Nf.SmIcon:
							return r.a.createElement(h, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case b.Nf.SmIconHc:
							return r.a.createElement(h, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(E, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = _(v)
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(r),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(p);
			var x = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(h.a, {
						className: b.a.titleRow
					}, n), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(h.a, {
						className: b.a.buttonRow
					}, d.a.createElement(m.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = n("./src/reddit/controls/ErrorText/index.m.less"),
				g = n.n(f);
			class E extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: n,
						errorModalTitle: r = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(g.a.wrapper, t)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, a), i && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const C = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: a = []
					} = e, o = a.length ? a : r ? [r] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(E, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				_ = e => d.a.createElement(C, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(s)(e => {
					const {
						featureEnabled: s,
						...a
					} = e, o = a;
					return s ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
				})
			}
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
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(a.b)(t))) return Object(r.b)(t) ? o.SourceElement.Comment : Object(s.x)(n) ? o.SourceElement.PostDetail : Object(s.H)(n) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return v
			}));
			var s, r, a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.n(e),
					source: r.LINK,
					action: a.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				h = e => ({
					...u.n(e),
					source: r,
					screen: u.ab(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				p = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(i.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const r = Object(i.b)(n) ? "postId" : "commentId",
						a = {
							url: `/r/${s}/`,
							sourceElement: Object(c.a)(t),
							subredditName: s,
							[r]: n.id
						},
						d = Object(l.A)(e, {
							subredditName: s
						});
					return d ? {
						outbound: {
							...a,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...a
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(i.b)(n) && !Object(o.b)(n)) return {};
					const s = Object(i.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.J(e, n.id),
						subreddit: u.jb(e, s),
						...p(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...b(t, e)
				}),
				f = e => t => ({
					...h(t),
					source: "global",
					action: a.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.kb(t, e),
					screen: u.ab(t)
				}),
				g = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: a.c.VIEW,
					noun: s.ITEM_POST,
					post: u.J(n, t),
					subreddit: u.kb(n, e),
					screen: u.ab(n)
				}),
				E = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: s.ITEM_POST,
					post: u.J(n, t),
					subreddit: u.kb(n, e),
					screen: u.ab(n)
				}),
				C = e => t => ({
					...h(t),
					subreddit: u.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...h(t),
					subreddit: u.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				v = e => t => ({
					...h(t),
					subreddit: u.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/svgs/CloseV2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M11.065 1.46521L10.5346 0.934814L5.99977 5.46961L1.46497 0.934814L0.93457 1.46521L5.46937 6.00001L0.93457 10.5348L1.46497 11.0652L5.99977 6.53041L10.5346 11.0652L11.065 10.5348L6.53017 6.00001L11.065 1.46521Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash3/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M12.6004 4.84721L13.5996 4.91361L12.9908 14.0664C12.9841 14.5896 12.7788 15.0907 12.4165 15.4683C12.0543 15.8458 11.5621 16.0716 11.0396 16.1H4.95961C4.43817 16.0715 3.94695 15.8462 3.58511 15.4697C3.22327 15.0932 3.01774 14.5934 3.01001 14.0712L2.39961 4.91361L3.39801 4.84721L4.00681 14C4.00283 14.2684 4.09775 14.5288 4.27347 14.7317C4.44919 14.9345 4.69343 15.0657 4.95961 15.1H11.0396C11.3064 15.0651 11.551 14.9331 11.7267 14.7293C11.9025 14.5256 11.997 14.2642 11.9924 13.9952L12.6004 4.84721ZM14.3996 2.40001V3.40001H1.59961V2.40001H4.79961V2.10001C4.82803 1.51721 5.08582 0.969319 5.51672 0.575891C5.94762 0.182464 6.51664 -0.0245568 7.09961 7.87831e-06H8.89961C9.48258 -0.0245568 10.0516 0.182464 10.4825 0.575891C10.9134 0.969319 11.1712 1.51721 11.1996 2.10001V2.40001H14.3996ZM5.79961 2.40001H10.1996V2.10001C10.1705 1.78279 10.0179 1.48972 9.77473 1.28396C9.53155 1.0782 9.21727 0.976221 8.89961 1.00001H7.09961C6.78195 0.976221 6.46767 1.0782 6.22449 1.28396C5.98132 1.48972 5.82873 1.78279 5.79961 2.10001V2.40001Z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: s.Hf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.Nf.SmIcon || t === s.Nf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(o.Z)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost.99343da9a83706b15bb4.js.map