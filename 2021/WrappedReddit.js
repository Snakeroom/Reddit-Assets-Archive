// https://www.redditstatic.com/desktop2x/WrappedReddit.4511a8bfffe3d980c282.js
// Retrieved at 10/28/2021, 5:10:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["WrappedReddit"], {
		"./src/reddit/pages/WrappedReddit/Carousel/index.m.less": function(e, t, a) {
			e.exports = {
				carousel: "sLLDRdg6QdhlK0LqJvfi7",
				buttonsWrapper: "KpMLEPYvCluY4sZ6rhE7",
				ctaButton: "_2FYxW2MvghHNY6Up6fywCR",
				pager: "_3awt0Ajh4khxxmGRRupQ6t",
				progressDot: "_3gi75d2lmY2lSAkpTt6aJO",
				active: "_1VXJhfgd81c7po-cIzGKjc",
				nextDot: "_2R2s6ELkzFG2L3Erje7d6y",
				modalBody: "_3Z2yos5EcXQMtLJ29WVV4t",
				modalOverlay: "_1Sg7mIPbvCVOZVw2DmwKny",
				container: "_2NjjEJt8dF-WYqrabLQpLm",
				title: "xV-drmuT4oDZARw1tY4Yl",
				titleWrapper: "_3d_lm25ClXkx5lsKEEQDQY",
				insideShareIconsWrapper: "_2v53Btn9Xcl21hng4i0laT",
				closeButton: "_2CSNsKDrDtETp4_fG5_L4d",
				outsideShareIconsWrapper: "_1fQUz65KsSxnOUCYTRaI7Z",
				closeIcon: "_3dzfgPtV7SUJeseMVmK_7",
				insideShareButton: "Nf-4TwYJpRnohoJ0kMSpu",
				insideShareIcon: "rQKftyqwxND8EFiz0CzYQ",
				iconWrapper: "_1asObEzjpwdReuE9Bjn4PH",
				iconText: "_3cs2BRYR0xBmODNjHSk3t0"
			}
		},
		"./src/reddit/pages/WrappedReddit/DefaultCard/index.m.less": function(e, t, a) {
			e.exports = {
				contentWrapper: "gm49hjCsGC6TOzPjtcfYV",
				headingWrapper: "_24k045l9p3KDMtBndy9dkk",
				bodyText: "_1ZRSK0zgfFgVvPEsZRbMf1",
				background: "QnCzKJLG1MWOCYWwtuOU5",
				headingSection: "_1n_GYClKIpttTtUqRjv92h",
				headingContent: "_26MB6z-VeAwAgbXt0eF6on",
				headingArt: "_1ECardPXUxRlWYp0VivcX1",
				headingText: "_2ydh6nBoq25NGKNMAAhTya",
				defaultCardImageContainer: "_2lk5C4uMS5pAG0ftffHUEV",
				defaultCardImage: "_1_8GCb-5igqF6v23KlAl10",
				fallbackStaticImage: "_1xfITRPkfuSck3RvKtii5d",
				heading: "_3vPnb6jU8EtwEbphwxPzSz",
				isNightmodeOn: "_1HTQBMvNscUU0XSCK-_T7m",
				wrappedRedditLogo: "_3uiZPbceT-LlaowHj54EQi",
				wrappedRedditPic: "_1hMf4A6Yo2XYF0MnjS5uEM",
				subheading: "_1TDpZwjr5-YTxsiPMiHXBC",
				description: "qOk0ywerqWadQwFvIHmed"
			}
		},
		"./src/reddit/pages/WrappedReddit/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/react/index.js"),
				i = a.n(r),
				d = a("./src/lib/classNames/index.ts"),
				n = a("./src/reddit/controls/Button/index.tsx"),
				u = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/config.ts")),
				l = a("./node_modules/lodash/upperFirst.js"),
				o = a.n(l),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				p = a("./src/reddit/icons/svgs/Close/index.tsx"),
				s = a("./src/reddit/icons/svgs/Download/index.tsx"),
				f = a("./src/reddit/icons/svgs/PostImage/index.tsx"),
				m = a("./src/reddit/pages/WrappedReddit/Carousel/index.m.less"),
				g = a.n(m);
			const {
				fbt: w
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var _;
			! function(e) {
				e.facebook = "facebook", e.twitter = "twitter", e.whatsapp = "whatsapp", e.instagram = "instagram", e.discord = "discord"
			}(_ || (_ = {}));
			var h = Object(c.a)(({
					closeModal: e
				}) => i.a.createElement("div", {
					className: g.a.container,
					"data-testid": "wrapped-reddit-share-modal"
				}, i.a.createElement("h1", {
					className: g.a.title
				}, w._("Share", null, {
					hk: "Je0uL"
				})), i.a.createElement("button", {
					className: g.a.closeButton,
					onClick: e
				}, i.a.createElement(p.a, {
					className: g.a.closeIcon
				})), i.a.createElement("div", {
					className: g.a.insideShareIconsWrapper
				}, i.a.createElement("div", {
					className: g.a.iconWrapper
				}, i.a.createElement("button", {
					className: g.a.insideShareButton
				}, i.a.createElement(f.a, {
					className: g.a.insideShareIcon
				})), i.a.createElement("h2", {
					className: g.a.iconText
				}, w._("Post", null, {
					hk: "3eAGdj"
				}))), i.a.createElement("div", {
					className: g.a.iconWrapper
				}, i.a.createElement("button", {
					className: g.a.insideShareButton
				}, i.a.createElement(s.a, {
					className: g.a.insideShareIcon
				})), i.a.createElement("h2", {
					className: g.a.iconText
				}, w._("Download", null, {
					hk: "2Og0hf"
				})))), i.a.createElement("div", {
					className: g.a.outsideShareIconsWrapper
				}, Object.values(_).map(e => i.a.createElement("div", {
					key: e,
					className: g.a.iconWrapper
				}, i.a.createElement("button", {
					className: g.a.outsideShareButton
				}, i.a.createElement("img", {
					className: g.a.outsideShareIcon,
					alt: e,
					src: `${u.a.assetPath}/img/social-networks/${e}.png`
				})), i.a.createElement("h2", {
					className: g.a.iconText
				}, o()(e))))))),
				b = a("./src/reddit/icons/svgs/Snoo/index.tsx"),
				k = a("./src/reddit/pages/WrappedReddit/DefaultCard/index.m.less"),
				y = a.n(k);
			const {
				fbt: Y
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var x, R = ({
				card: {
					title: e,
					subtitle: t,
					id: a,
					backGroundUrl: r,
					pictureUrl: n
				}
			}) => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				id: a,
				className: y.a.headingSection
			}, i.a.createElement("div", {
				className: Object(d.a)(y.a.background, y.a.contentWrapper),
				style: {
					background: `url(${u.a.assetPath}${r}) no-repeat center center fixed`,
					backgroundSize: "cover"
				}
			}), i.a.createElement("div", {
				className: Object(d.a)(y.a.headingWrapper, y.a.headingContent)
			}, i.a.createElement("div", {
				className: y.a.headingText
			}, i.a.createElement("h1", {
				className: Object(d.a)(y.a.heading)
			}, i.a.createElement(b.a, {
				className: y.a.wrappedRedditLogo
			})), i.a.createElement("h1", {
				className: Object(d.a)(y.a.heading)
			}, e), i.a.createElement("h2", {
				className: y.a.subheading
			}, t)), i.a.createElement("div", {
				className: y.a.headingArt
			}, i.a.createElement("div", {
				className: y.a.defaultCardImageContainer
			}, i.a.createElement("picture", {
				className: y.a.defaultCardImage
			}, i.a.createElement("source", {
				srcSet: `${u.a.assetPath}${n}`,
				type: "image/png"
			}), i.a.createElement("img", {
				alt: "card pictire",
				className: y.a.fallbackStaticImage,
				src: `${u.a.assetPath}${n}`
			})))))));
			! function(e) {
				e.default = "default"
			}(x || (x = {}));
			const {
				fbt: I
			} = a("./node_modules/fbt/lib/FbtPublic.js"), v = 6;
			var U = function(e) {
				var t;
				const {
					cards: a
				} = e, [u, l] = Object(r.useState)(0), [o, c] = Object(r.useState)(!1), [p, s] = Object(r.useState)(1), f = p * v >= a.length, m = e => () => {
					l(e)
				}, w = i.a.useCallback(() => c(!0), []), _ = i.a.useCallback(() => c(!1), []), b = e => () => {
					s(e ? p - 1 : f ? 1 : p + 1), l(e ? v - 1 : 0)
				}, k = a.length > v, y = a.length > v && p > 1, Y = (p - 1) * v, U = Y + v, H = Y + u;
				return i.a.createElement(i.a.Fragment, null, (e => {
					switch (e.type) {
						case x.default:
						default:
							return i.a.createElement(R, {
								card: e
							})
					}
				})(a[H]), i.a.createElement("div", {
					className: g.a.carousel
				}, i.a.createElement("div", {
					className: g.a.buttonsWrapper
				}, i.a.createElement(n.j, {
					className: g.a.ctaButton,
					priority: n.b.Primary,
					onClick: w
				}, I._("Share", null, {
					hk: "2JaG4S"
				})), k && i.a.createElement(n.j, {
					className: g.a.ctaButton,
					priority: n.b.Primary,
					onClick: () => {
						const e = u + 1 === v;
						e && s(f ? 1 : p + 1), l(e ? 0 : u + 1)
					}
				}, I._("Next", null, {
					hk: "2tKyCG"
				}))), i.a.createElement("div", {
					className: g.a.pager
				}, y && i.a.createElement("button", {
					onClick: b(!0)
				}, i.a.createElement("div", {
					className: Object(d.a)(g.a.nextDot)
				})), a.slice(Y, U).map((e, t) => i.a.createElement("button", {
					key: t,
					onClick: m(t)
				}, i.a.createElement("div", {
					className: Object(d.a)(g.a.progressDot, {
						[g.a.active]: t === u
					})
				}))), k && i.a.createElement("button", {
					onClick: b()
				}, i.a.createElement("div", {
					className: Object(d.a)(g.a.nextDot)
				})), o && i.a.createElement(h, {
					id: null === (t = a[H]) || void 0 === t ? void 0 : t.id,
					withOverlay: !0,
					closeModal: _,
					onOverlayClick: _,
					className: g.a.modalBody,
					overlayClassName: g.a.modalOverlay
				}))))
			};
			const H = [{
					id: "1",
					type: x.default,
					title: "How was your Yir?",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "2",
					type: x.default,
					title: "How was your Yir? 2",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "3",
					type: x.default,
					title: "How was your Yir? 3",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "4",
					type: x.default,
					title: "How was your Yir?4",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "5",
					type: x.default,
					title: "How was your Yir?5",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "6",
					type: x.default,
					title: "How was your Yir?6",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "7",
					type: x.default,
					title: "How was your Yir?7",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "8",
					type: x.default,
					title: "How was your Yir?8",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "9",
					type: x.default,
					title: "How was your Yir?9",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "10",
					type: x.default,
					title: "How was your Yir?10",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "11",
					type: x.default,
					title: "How was your Yir?11",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "12",
					type: x.default,
					title: "How was your Yir? 12",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "13",
					type: x.default,
					title: "How was your Yir? 13",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "14",
					type: x.default,
					title: "How was your Yir?14",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "15",
					type: x.default,
					title: "How was your Yir?15",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "16",
					type: x.default,
					title: "How was your Yir?16",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "17",
					type: x.default,
					title: "How was your Yir?17",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "18",
					type: x.default,
					title: "How was your Yir?18",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "19",
					type: x.default,
					title: "How was your Yir?19",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "20",
					type: x.default,
					title: "How was your Yir?20",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "21",
					type: x.default,
					title: "How was your Yir?21",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "22",
					type: x.default,
					title: "How was your Yir? 22",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "23",
					type: x.default,
					title: "How was your Yir? 23",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "24",
					type: x.default,
					title: "How was your Yir?24",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "25",
					type: x.default,
					title: "How was your Yir?25",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "26",
					type: x.default,
					title: "How was your Yir?26",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "27",
					type: x.default,
					title: "How was your Yir?27",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "28",
					type: x.default,
					title: "How was your Yir?28",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "29",
					type: x.default,
					title: "How was your Yir?29",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "30",
					type: x.default,
					title: "How was your Yir?30",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 3",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "31",
					type: x.default,
					title: "How was your Yir?31",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017.",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}, {
					id: "32",
					type: x.default,
					title: "How was your Yir?32",
					subtitle: "Hello u/furtivepuffin! Thank you for redditing with us since June 19th, 2017. 2",
					backGroundUrl: "/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png",
					pictureUrl: "/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png"
				}],
				{
					fbt: E
				} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => i.a.createElement(U, {
				cards: H
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/WrappedReddit.4511a8bfffe3d980c282.js.map